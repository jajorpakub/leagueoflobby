import React, { useState } from 'react'
import MatchHistoryService, { SummonerInfo, MatchInfo, Participant } from '../services/matchHistoryService'
import './MatchHistory.css'

interface MatchDisplayInfo {
  match: MatchInfo
  playerData: Participant
}

const MatchHistory: React.FC = () => {
  const service = MatchHistoryService.getInstance()
  const [nickName, setNickName] = useState('')
  const [tagLine, setTagLine] = useState('EUN1')
  const [region, setRegion] = useState('eun1')
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo | null>(null)
  const [accountInfo, setAccountInfo] = useState<any>(null)
  const [matches, setMatches] = useState<MatchDisplayInfo[]>([])
  const [loadedMatches, setLoadedMatches] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [additionalStats, setAdditionalStats] = useState<any>(null)

  const regions = [
    { value: 'eun1', label: 'EUNE (Europe Nordic & East)' },
    { value: 'euw1', label: 'EUW (Europe West)' },
    { value: 'na1', label: 'NA (North America)' },
    { value: 'kr', label: 'KR (Korea)' },
    { value: 'jp1', label: 'JP (Japan)' },
    { value: 'br1', label: 'BR (Brazil)' },
    { value: 'la1', label: 'LAN (Latin America North)' },
    { value: 'la2', label: 'LAS (Latin America South)' },
    { value: 'oc1', label: 'OCE (Oceania)' },
    { value: 'tr1', label: 'TR (Turkey)' },
    { value: 'ru', label: 'RU (Russia)' }
  ]

  const searchSummoner = async () => {
    if (!nickName.trim()) {
      setError('Wprowadź nick gracza')
      return
    }

    setLoading(true)
    setError(null)
    setSearchPerformed(true)
    setMatches([])
    setLoadedMatches(0)
    setAdditionalStats(null)

    try {
      // Get summoner info przez Riot ID (nick#tag)
      const result = await service.getSummonerByRiotId(nickName.trim(), tagLine.trim())
      setSummonerInfo(result.summoner)
      setAccountInfo(result.account)

      // Pobierz pierwsze 10 meczów
      await loadMatches(result.summoner.puuid, 10, true)
      
      // Pobierz dodatkowe statystyki (ranga, etc.) AFTER loading matches
      await fetchAdditionalStats(result.summoner.id)
      
    } catch (err) {
      console.error('Error fetching match history:', err)
      setError(err instanceof Error ? err.message : 'Błąd podczas pobierania danych gracza')
    } finally {
      setLoading(false)
    }
  }

  const loadMatches = async (puuid: string, count: number, reset: boolean = false) => {
    const startIndex = reset ? 0 : loadedMatches
    
    try {
      // Get match history
      const matchIds = await service.getMatchHistory(puuid, count, region, startIndex)
      
      // Get match details
      const matchPromises = matchIds.map(matchId => 
                service.getMatchDetails(matchId)
      )
      
      const matchDetails = await Promise.all(matchPromises)
      
      // Find player data in each match
      const matchesWithPlayerData: MatchDisplayInfo[] = matchDetails.map(match => {
        const playerData = match.info.participants.find(p => 
          p.puuid === puuid || 
          (accountInfo && p.riotIdName && p.riotIdName.toLowerCase() === accountInfo.gameName.toLowerCase())
        ) || match.info.participants[0] // Fallback to first participant for demo
        
        return {
          match,
          playerData
        }
      })

      if (reset) {
        setMatches(matchesWithPlayerData)
        setLoadedMatches(count)
      } else {
        setMatches(prev => [...prev, ...matchesWithPlayerData])
        setLoadedMatches(prev => prev + count)
      }
    } catch (err) {
      console.error('Error loading matches:', err)
      throw err
    }
  }

  const loadMoreMatches = async () => {
    if (!summonerInfo || loadingMore) return
    
    setLoadingMore(true)
    try {
      await loadMatches(summonerInfo.puuid, 10, false)
    } catch (err) {
      setError('Błąd podczas ładowania kolejnych meczów')
    } finally {
      setLoadingMore(false)
    }
  }

  const fetchAdditionalStats = async (summonerId: string) => {
    try {
      console.log('Fetching additional stats for summoner:', summonerId)
      
      // Pobierz rangę gracza z League API
      const leagueEntries = await service.getLeagueEntries(summonerId, region)
      const rankedSolo = leagueEntries.find(entry => entry.queueType === 'RANKED_SOLO_5x5')
      
      let rankData = null
      if (rankedSolo) {
        rankData = {
          tier: rankedSolo.tier,
          division: rankedSolo.rank,
          lp: rankedSolo.leaguePoints,
          wins: rankedSolo.wins,
          losses: rankedSolo.losses
        }
      }

      // Pobierz champion mastery
      const championMastery = await service.getChampionMastery(summonerId, region)
      
      // Oblicz statystyki z pobranych meczów
      const currentMatches = matches.map(m => m.match)
      const calculatedStats = await service.calculateStatsFromMatches(currentMatches, summonerInfo?.puuid || '')
      
      // Połącz dane z champion mastery z obliczonymi statystykami
      const enhancedMainChampions = await Promise.all(
        calculatedStats.mainChampions.map(async (champ) => {
          const mastery = championMastery.find(m => m.championId === champ.championId)
          const championName = await service.getChampionNameById(champ.championId)
          
          return {
            ...champ,
            name: championName,
            mastery: mastery?.championPoints || 0,
            masteryLevel: mastery?.championLevel || 0
          }
        })
      )
      
      // Jeśli nie ma danych z meczów, użyj champion mastery
      let finalMainChampions = enhancedMainChampions
      if (enhancedMainChampions.length === 0 && championMastery.length > 0) {
        finalMainChampions = await Promise.all(
          championMastery.slice(0, 3).map(async (mastery) => {
            const championName = await service.getChampionNameById(mastery.championId)
            return {
              name: championName,
              championId: mastery.championId,
              games: 0, // Nie mamy danych o liczbie gier
              winRate: 0, // Nie mamy danych o winrate
              mastery: mastery.championPoints,
              masteryLevel: mastery.championLevel
            }
          })
        )
      }
      
      const stats = {
        rank: rankData,
        overallKDA: calculatedStats.overallKDA,
        winRate: calculatedStats.winRate,
        mainChampions: finalMainChampions,
        csScore: calculatedStats.csScore,
        teammates: calculatedStats.teammates
      }
      
      console.log('Fetched real stats:', stats)
      setAdditionalStats(stats)
    } catch (err) {
      console.error('Error fetching additional stats:', err)
      // W przypadku błędu, ustaw podstawowe statystyki z meczów
      if (matches.length > 0) {
        const currentMatches = matches.map(m => m.match)
        try {
          const basicStats = await service.calculateStatsFromMatches(currentMatches, summonerInfo?.puuid || '')
          setAdditionalStats({
            rank: null,
            overallKDA: basicStats.overallKDA,
            winRate: basicStats.winRate,
            mainChampions: basicStats.mainChampions,
            csScore: basicStats.csScore,
            teammates: basicStats.teammates
          })
        } catch (calcErr) {
          console.error('Error calculating basic stats:', calcErr)
        }
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchSummoner()
    }
  }

  const getKDA = (participant: Participant): string => {
    const kda = participant.deaths > 0 
      ? ((participant.kills + participant.assists) / participant.deaths).toFixed(2)
      : 'Perfect'
    return kda
  }

  const getWinRate = (): string => {
    if (additionalStats?.winRate) {
      return `${additionalStats.winRate.percentage.toFixed(1)}%`
    }
    if (matches.length === 0) return '0%'
    const wins = matches.filter(m => m.playerData.win).length
    return `${Math.round((wins / matches.length) * 100)}%`
  }

  const getOverallKDA = (): string => {
    if (additionalStats?.overallKDA) {
      return additionalStats.overallKDA.ratio.toFixed(2)
    }
    return 'N/A'
  }

  const getCSScore = (): string => {
    if (additionalStats?.csScore) {
      return `${additionalStats.csScore.average.toFixed(1)} (${additionalStats.csScore.perMinute.toFixed(1)}/min)`
    }
    return 'N/A'
  }

  const getRankDisplay = (): string => {
    if (additionalStats?.rank) {
      const rank = additionalStats.rank
      return `${rank.tier} ${rank.division} (${rank.lp} LP)`
    }
    return 'Unranked'
  }

  const getGameModeIcon = (gameMode: string): string => {
    switch (gameMode) {
      case 'CLASSIC': return '⚔️'
      case 'ARAM': return '🌉'
      case 'URF': return '🚀'
      case 'ARENA': return '🏟️'
      default: return '🎮'
    }
  }

  const getPositionIcon = (position: string): string => {
    switch (position) {
      case 'TOP': return '🔝'
      case 'JUNGLE': return '🌲'
      case 'MIDDLE': return '⭐'
      case 'BOTTOM': return '🏹'
      case 'UTILITY': return '🛡️'
      default: return '❓'
    }
  }

  return (
    <div className="match-history">
      <div className="match-history-header">
        <h1>📊 Ostatnie Gierki</h1>
        <p className="subtitle">
          Sprawdź historie gier dowolnego gracza z League of Legends
        </p>
        {!service.isUsingRealAPI() && (
          <div style={{
            background: '#ff6b6b',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            ⚠️ Używam danych testowych - API key nie załadowany
          </div>
        )}
        {service.isUsingRealAPI() && (
          <div style={{
            background: '#51cf66',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            ✅ Połączono z Riot Games API
          </div>
        )}
        <p className="api-note">💡 Demo wersja z przykładowymi danymi - w pełnej wersji integracja z Riot Games API</p>
      </div>

      <div className="search-section">
        <div className="search-form">
          <div className="input-group">
            <div className="riot-id-inputs">
              <input
                type="text"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nick gracza (np. Jankos)"
                className="nick-input"
              />
              <span className="separator">#</span>
              <input
                type="text"
                value={tagLine}
                onChange={(e) => setTagLine(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                placeholder="TAG"
                className="tag-input"
                maxLength={5}
              />
            </div>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="region-select"
            >
              {regions.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            <button
              onClick={searchSummoner}
              disabled={loading}
              className="search-button"
            >
              {loading ? '🔍 Szukam...' : '🔍 Szukaj'}
            </button>
          </div>
          <div className="input-help">
            💡 Wprowadź nick i tag gracza (np. Jankos#EUN1). Tag znajdziesz w kliencie gry.
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <h3>❌ Błąd</h3>
          <p>{error}</p>
          <p>Spróbuj ponownie z innym nickiem lub sprawdź czy gracz istnieje w wybranym regionie.</p>
        </div>
      )}

      {summonerInfo && (
        <div className="summoner-info">
          <div className="summoner-card">
            <div className="summoner-icon">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/15.19.1/img/profileicon/${summonerInfo.profileIconId}.png`}
                alt="Profile Icon"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://ddragon.leagueoflegends.com/cdn/15.19.1/img/profileicon/1.png';
                }}
              />
              <span className="summoner-level">{summonerInfo.summonerLevel}</span>
            </div>
            <div className="summoner-details">
              <h2>{accountInfo ? `${accountInfo.gameName}#${accountInfo.tagLine}` : summonerInfo.name}</h2>
              <p>Poziom: {summonerInfo.summonerLevel}</p>
              <p>Region: {region.toUpperCase()}</p>
            </div>
            <div className="summoner-stats">
              <div className="stat-item">
                <span className="stat-label">🏆 Ranga:</span>
                <span className="stat-value rank">{getRankDisplay()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">⚔️ KDA:</span>
                <span className="stat-value kda">{getOverallKDA()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">📊 Winrate:</span>
                <span className="stat-value winrate">{getWinRate()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🌾 CS Score:</span>
                <span className="stat-value cs">{getCSScore()}</span>
              </div>
              {additionalStats?.rank && (
                <div className="stat-item">
                  <span className="stat-label">🎯 Ranked:</span>
                  <span className="stat-value games">{additionalStats.rank.wins}W / {additionalStats.rank.losses}L</span>
                </div>
              )}
            </div>
            {additionalStats?.mainChampions && (
              <div className="main-champions">
                <h4>🌟 Ulubieni Championsi:</h4>
                <div className="champions-list">
                  {additionalStats.mainChampions.map((champ: any, index: number) => (
                    <div key={index} className="champion-stat">
                      <span className="champ-name">{champ.name}</span>
                      <span className="champ-games">{champ.games} gier</span>
                      <span className="champ-winrate">{champ.winRate.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {additionalStats?.teammates && additionalStats.teammates.length > 0 && (
              <div className="teammates-section">
                <h4>👥 Często współgracze:</h4>
                <div className="teammates-list">
                  {additionalStats.teammates.map((teammate: any, index: number) => (
                    <div key={index} className="teammate-stat">
                      <span className="teammate-name">{teammate.name}</span>
                      <span className="teammate-games">{teammate.games} gier</span>
                      <span className={`teammate-winrate ${teammate.winRate >= 60 ? 'good' : teammate.winRate >= 40 ? 'average' : 'bad'}`}>
                        {teammate.winRate.toFixed(1)}% WR
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Pobieranie historii gier...</p>
          <p>Analizowanie ostatnich meczów gracza {nickName}#{tagLine}</p>
        </div>
      )}

      {matches.length > 0 && (
        <div className="matches-list">
          <h2>📋 Historia Gier ({matches.length})</h2>
          <div className="matches-grid">
            {matches.map((matchData, index) => {
              const { match, playerData } = matchData
              const isWin = playerData.win
              const kda = getKDA(playerData)
              
              return (
                <div key={match.metadata.matchId} className={`match-card ${isWin ? 'win' : 'loss'}`}>
                  <div className="match-header">
                    <div className="match-result">
                      <span className={`result-text ${isWin ? 'win' : 'loss'}`}>
                        {isWin ? '✅ WYGRANA' : '❌ PRZEGRANA'}
                      </span>
                      <span className="match-time">
                        {service.getTimeAgo(match.info.gameEndTimestamp)}
                      </span>
                    </div>
                    <div className="match-info">
                      <span className="game-mode">
                        {getGameModeIcon(match.info.gameMode)} {service.getQueueName(match.info.queueId)}
                      </span>
                      <span className="game-duration">
                        ⏱️ {service.formatGameDuration(match.info.gameDuration)}
                      </span>
                    </div>
                  </div>

                  <div className="match-stats">
                    <div className="champion-info">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/${playerData.championName}.png`}
                        alt={playerData.championName}
                        className="champion-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/Aatrox.png';
                        }}
                      />
                      <div className="champion-details">
                        <h4>{playerData.championName}</h4>
                        <span className="position">
                          {getPositionIcon(playerData.teamPosition)} {playerData.teamPosition}
                        </span>
                        <span className="level">Poziom {playerData.champLevel}</span>
                      </div>
                    </div>

                    <div className="kda-stats">
                      <div className="kda-numbers">
                        <span className="kills">{playerData.kills}</span>
                        <span className="separator">/</span>
                        <span className="deaths">{playerData.deaths}</span>
                        <span className="separator">/</span>
                        <span className="assists">{playerData.assists}</span>
                      </div>
                      <div className="kda-ratio">
                        KDA: {kda}
                      </div>
                      <div className="additional-stats">
                        <span>CS: {playerData.totalMinionsKilled + playerData.neutralMinionsKilled}</span>
                        <span>Gold: {(playerData.goldEarned / 1000).toFixed(1)}k</span>
                      </div>
                    </div>

                    <div className="items-section">
                      <h5>Itemy:</h5>
                      <div className="items-grid">
                        {[playerData.item0, playerData.item1, playerData.item2, playerData.item3, playerData.item4, playerData.item5, playerData.item6].map((itemId, idx) => (
                          <div key={idx} className="item-slot">
                            {itemId > 0 ? (
                              <div className="item-container">
                                <img
                                  src={`https://ddragon.leagueoflegends.com/cdn/15.19.1/img/item/${itemId}.png`}
                                  alt={`Item ${itemId}`}
                                  className="item-image"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    const parent = target.parentElement as HTMLElement;
                                    target.style.display = 'none';
                                    parent.innerHTML = `<span class="item-fallback">${itemId}</span>`;
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="empty-item"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="match-details">
                    <div className="damage-stats">
                      <span>DMG do championów: {(playerData.totalDamageDealtToChampions / 1000).toFixed(1)}k</span>
                      <span>Vision Score: {playerData.visionScore}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="load-more-section">
            <button 
              onClick={loadMoreMatches}
              disabled={loadingMore}
              className="load-more-button"
            >
              {loadingMore ? '⏳ Ładowanie...' : '📥 Załaduj kolejne 10 meczów'}
            </button>
            <p className="matches-info">Załadowano {loadedMatches} meczów</p>
          </div>
        </div>
      )}

      {searchPerformed && matches.length === 0 && !loading && !error && (
        <div className="no-matches">
          <h3>🤷‍♂️ Brak danych</h3>
          <p>Nie znaleziono historii gier dla gracza {nickName}#{tagLine}</p>
          <p>Spróbuj ponownie lub sprawdź czy nick#tag jest poprawny.</p>
        </div>
      )}

      {!searchPerformed && !loading && (
        <div className="welcome-message">
          <h3>👋 Witaj w sekcji Ostatnie Gierki!</h3>
          <p>🔍 Wprowadź nick#tag gracza i wybierz region żeby zobaczyć jego ostatnie mecze</p>
          <p>📊 Sprawdzisz statystyki, rangę, KDA, winrate i więcej szczegółów z każdej gry</p>
          <p>🎮 Wspierane regiony: EUNE, EUW, NA, KR, JP i inne</p>
          
          <div className="demo-info">
            <h4>🛠️ Funkcje:</h4>
            <ul>
              <li>✅ Wyszukiwanie przez nick#tag (nowy system Riot)</li>
              <li>✅ Historia meczów z możliwością doładowania kolejnych</li>
              <li>✅ Szczegółowe statystyki: ranga, KDA, winrate, CS score</li>
              <li>✅ Analiza współgraczy - z kim grasz i jaki masz z nimi WR</li>
              <li>✅ Informacje o championach i pozycjach</li>
              <li>✅ Itemy z każdego meczu</li>
              <li>✅ Ulubieni championsi gracza z mastery points</li>
              <li>✅ Damage do championów i Vision Score</li>
              <li>✅ Przygotowanie pod rozbudowę jak op.gg</li>
            </ul>
            <div className="input-example">
              <h5>💡 Przykład wyszukiwania:</h5>
              <p><strong>Nick:</strong> Jankos &nbsp;&nbsp; <strong>Tag:</strong> EUN1</p>
              <p><strong>Nick:</strong> Faker &nbsp;&nbsp; <strong>Tag:</strong> T1</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatchHistory