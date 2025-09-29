import React, { useState } from 'react'
import MatchHistoryService, { SummonerInfo, MatchInfo, Participant } from '../services/matchHistoryService'
import './MatchHistory.css'

interface MatchDisplayInfo {
  match: MatchInfo
  playerData: Participant
}

const MatchHistory: React.FC = () => {
  const service = MatchHistoryService.getInstance()
  const [summonerName, setSummonerName] = useState('')
  const [region, setRegion] = useState('eun1')
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo | null>(null)
  const [matches, setMatches] = useState<MatchDisplayInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchPerformed, setSearchPerformed] = useState(false)

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
    if (!summonerName.trim()) {
      setError('Wprowadź nick gracza')
      return
    }

    setLoading(true)
    setError(null)
    setSearchPerformed(true)

    try {
      // Get summoner info
      const trimmedName = summonerName.trim()
      if (!trimmedName) {
        setError('Wprowadź nazwę gracza')
        return
      }
      
      const summoner = await service.getSummonerByName(trimmedName, region)
      setSummonerInfo(summoner)

      // Get match history
      const matchIds = await service.getMatchHistory(summoner.puuid, 10)
      
      // Get match details
      const matchPromises = matchIds.map(matchId => 
                service.getMatchDetails(matchId)
      )
      
      const matchDetails = await Promise.all(matchPromises)
      
      // Find player data in each match
      const matchesWithPlayerData: MatchDisplayInfo[] = matchDetails.map(match => {
        const playerData = match.info.participants.find(p => 
          p.puuid === summoner.puuid || 
          (p.summonerName && summoner.name && p.summonerName.toLowerCase() === summoner.name.toLowerCase())
        ) || match.info.participants[0] // Fallback to first participant for demo
        
        return {
          match,
          playerData
        }
      })

      setMatches(matchesWithPlayerData)
    } catch (err) {
      console.error('Error fetching match history:', err)
      setError(err instanceof Error ? err.message : 'Błąd podczas pobierania danych gracza')
    } finally {
      setLoading(false)
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
    if (matches.length === 0) return '0%'
    const wins = matches.filter(m => m.playerData.win).length
    return `${Math.round((wins / matches.length) * 100)}%`
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
            <input
              type="text"
              value={summonerName}
              onChange={(e) => setSummonerName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Wprowadź nick gracza (np. Jankos#EUN1 lub Jankos)"
              className="summoner-input"
            />
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
              <h2>{summonerInfo.name}</h2>
              <p>Poziom: {summonerInfo.summonerLevel}</p>
              <p>Region: {region.toUpperCase()}</p>
              {matches.length > 0 && (
                <p>Winrate: <span className="winrate">{getWinRate()}</span></p>
              )}
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Pobieranie historii gier...</p>
          <p>Analizowanie ostatnich meczów gracza {summonerName}</p>
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
        </div>
      )}

      {searchPerformed && matches.length === 0 && !loading && !error && (
        <div className="no-matches">
          <h3>🤷‍♂️ Brak danych</h3>
          <p>Nie znaleziono historii gier dla gracza {summonerName}</p>
          <p>Spróbuj ponownie lub sprawdź czy nick jest poprawny.</p>
        </div>
      )}

      {!searchPerformed && !loading && (
        <div className="welcome-message">
          <h3>👋 Witaj w sekcji Ostatnie Gierki!</h3>
          <p>🔍 Wprowadź nick gracza i wybierz region żeby zobaczyć jego ostatnie mecze</p>
          <p>📊 Sprawdzisz statystyki, itemy, KDA i więcej szczegółów z każdej gry</p>
          <p>🎮 Wspierane regiony: EUNE, EUW, NA, KR, JP i inne</p>
          
          <div className="demo-info">
            <h4>🛠️ Funkcje:</h4>
            <ul>
              <li>✅ Historia ostatnich 10 gier</li>
              <li>✅ Szczegółowe statystyki KDA</li>
              <li>✅ Informacje o championach i pozycjach</li>
              <li>✅ Itemy z każdego meczu</li>
              <li>✅ Czas trwania gry i tryb</li>
              <li>✅ Damage do championów i Vision Score</li>
              <li>✅ Winrate gracza</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatchHistory