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
  const [tagLine, setTagLine] = useState('EUNE')
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
  const [suggestions, setSuggestions] = useState<Array<{gameName: string, tagLine: string, puuid: string, source?: string}>>([]) 
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionLoading, setSuggestionLoading] = useState(false)
  const [cachedPlayers, setCachedPlayers] = useState<Array<{gameName: string, tagLine: string, puuid: string, source: string}>>([]) 

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

    // KOMPLETNY RESET wszystkich danych przed nowym wyszukiwaniem
    setLoading(true)
    setError(null)
    setSearchPerformed(true)
    setMatches([])
    setLoadedMatches(0)
    setAdditionalStats(null)
    setSummonerInfo(null)
    setAccountInfo(null)
    setLoadingMore(false)

    try {
      console.log('🔍 Starting fresh search for:', nickName, tagLine)
      
      // Get summoner info przez Riot ID (nick#tag)
      const result = await service.getSummonerByRiotId(nickName.trim(), tagLine.trim())
      console.log('✅ Got summoner info:', result.summoner.id)
      
      setSummonerInfo(result.summoner)
      setAccountInfo(result.account)
      
      // Zapisz do ostatnich wyszukiwań
      saveToRecentSearches(result.account)

      // Pobierz mecze PIERWSZE - to jest kluczowe dla obliczenia statystyk
      console.log('📋 Loading matches...')
      const matchesData = await loadMatchesSync(result.summoner.puuid, 10, 0)
      console.log('✅ Loaded matches:', matchesData.length)
      
      // Teraz oblicz statystyki z RZECZYWISTYCH danych meczów
      console.log('📊 Calculating stats from real match data...')
      await fetchCompleteStats(result.summoner.id, result.summoner.puuid, matchesData)
      
    } catch (err) {
      console.error('❌ Error in search:', err)
      setError(err instanceof Error ? err.message : 'Błąd podczas pobierania danych gracza')
      // Reset danych w przypadku błędu
      setSummonerInfo(null)
      setAccountInfo(null)
      setMatches([])
      setAdditionalStats(null)
    } finally {
      setLoading(false)
    }
  }

  // Synchroniczna funkcja do ładowania meczów - zwraca dane zamiast ustawiać state
  const loadMatchesSync = async (puuid: string, count: number, startIndex: number = 0): Promise<MatchDisplayInfo[]> => {
    try {
      console.log(`📥 Loading ${count} matches starting from ${startIndex}...`)
      
      // Get match history
      const matchIds = await service.getMatchHistory(puuid, count, region, startIndex)
      console.log('✅ Got match IDs:', matchIds.length)
      
      // Get match details
      const matchPromises = matchIds.map(matchId => 
                service.getMatchDetails(matchId)
      )
      
      const matchDetails = await Promise.all(matchPromises)
      console.log('✅ Got match details:', matchDetails.length)
      
      // Find player data in each match
      const matchesWithPlayerData: MatchDisplayInfo[] = matchDetails.map(match => {
        const playerData = match.info.participants.find(p => 
          p.puuid === puuid
        ) || match.info.participants[0] // Fallback
        
        return {
          match,
          playerData
        }
      })

      return matchesWithPlayerData
    } catch (err) {
      console.error('❌ Error loading matches:', err)
      throw err
    }
  }

  const loadMatches = async (puuid: string, count: number, reset: boolean = false) => {
    const startIndex = reset ? 0 : loadedMatches
    
    try {
      const matchesWithPlayerData = await loadMatchesSync(puuid, count, startIndex)

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
      // Dodatkowe sprawdzenie czy dane summoner są aktualne
      if (!summonerInfo.puuid) {
        throw new Error('Brak danych summoner')
      }
      
      console.log('📥 Loading more matches...')
      const additionalMatches = await loadMatchesSync(summonerInfo.puuid, 10, loadedMatches)
      
      // Dodaj do istniejących meczów
      setMatches(prev => [...prev, ...additionalMatches])
      setLoadedMatches(prev => prev + additionalMatches.length)
      
      console.log('✅ Loaded additional matches:', additionalMatches.length)
      
    } catch (err) {
      console.error('❌ Error loading more matches:', err)
      setError('Błąd podczas ładowania kolejnych meczów')
    } finally {
      setLoadingMore(false)
    }
  }

  // Funkcja do pobierania suggestions użytkowników z zaawansowanym wyszukiwaniem
  const fetchUserSuggestions = async (searchTerm: string) => {
    if (!searchTerm.trim() || searchTerm.length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    setSuggestionLoading(true)
    try {
      const suggestions: Array<{gameName: string, tagLine: string, puuid: string, source: string}> = []
      const searchLower = searchTerm.toLowerCase()
      
      // 1. RECENT SEARCHES - ostatnio wyszukiwani gracze
      const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]')
      const recentMatches = recentSearches
        .filter((search: any) => 
          search.gameName.toLowerCase().includes(searchLower)
        )
        .slice(0, 3)
        .map((search: any) => ({ ...search, source: 'Ostatnio wyszukiwany' }))
      
      suggestions.push(...recentMatches)
      
      // 2. CACHED PLAYERS - gracze z poprzednich meczów
      const teammateMatches = cachedPlayers
        .filter(player => 
          player.gameName.toLowerCase().includes(searchLower) &&
          !suggestions.some(s => s.gameName === player.gameName && s.tagLine === player.tagLine)
        )
        .slice(0, 3)
      
      suggestions.push(...teammateMatches)
      
      // 3. POPULAR PLAYERS - znani gracze/streamerzy w regionie
      const popularPlayers = getPopularPlayersForRegion(region)
      const popularMatches = popularPlayers
        .filter(player => 
          player.gameName.toLowerCase().includes(searchLower) &&
          !suggestions.some(s => s.gameName === player.gameName && s.tagLine === player.tagLine)
        )
        .slice(0, 2)
        .map(player => ({ ...player, source: 'Popularny gracz' }))
      
      suggestions.push(...popularMatches)
      
      // 4. FUZZY MATCHING - podobne nazwy
      if (suggestions.length < 5) {
        const fuzzyMatches = await getFuzzyMatches(searchTerm, region)
        suggestions.push(...fuzzyMatches.filter(match => 
          !suggestions.some(s => s.gameName === match.gameName && s.tagLine === match.tagLine)
        ).slice(0, 2))
      }
      
      setSuggestions(suggestions.slice(0, 7))
      setShowSuggestions(suggestions.length > 0)
      
    } catch (err) {
      console.error('Error fetching user suggestions:', err)
      setSuggestions([])
    } finally {
      setSuggestionLoading(false)
    }
  }

  // Debounce dla suggestions
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null)

  // Helper functions for advanced suggestions
  const getPopularPlayersForRegion = (region: string): Array<{gameName: string, tagLine: string, puuid: string}> => {
    const popularByRegion: Record<string, Array<{gameName: string, tagLine: string, puuid: string}>> = {
      'eun1': [
        { gameName: 'Rekkles', tagLine: 'EUNE', puuid: '' },
        { gameName: 'Jankos', tagLine: 'EUNE', puuid: '' },
        { gameName: 'Caps', tagLine: 'EUNE', puuid: '' },
        { gameName: 'Perkz', tagLine: 'EUNE', puuid: '' }
      ],
      'euw1': [
        { gameName: 'Faker', tagLine: 'EUW', puuid: '' },
        { gameName: 'TheShy', tagLine: 'EUW', puuid: '' },
        { gameName: 'Caps', tagLine: 'EUW', puuid: '' }
      ],
      'na1': [
        { gameName: 'Doublelift', tagLine: 'NA1', puuid: '' },
        { gameName: 'Bjergsen', tagLine: 'NA1', puuid: '' }
      ]
    }
    return popularByRegion[region] || []
  }

  const getFuzzyMatches = async (searchTerm: string, region: string): Promise<Array<{gameName: string, tagLine: string, puuid: string, source: string}>> => {
    // Prosty fuzzy matching - próbuje różne warianty nazwy
    const variants = [
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase(),
      searchTerm.toUpperCase(),
      searchTerm.toLowerCase(),
      searchTerm + '1',
      searchTerm + 'x',
      'x' + searchTerm
    ]
    
    const matches: Array<{gameName: string, tagLine: string, puuid: string, source: string}> = []
    
    for (const variant of variants.slice(0, 2)) { // Tylko 2 warianty żeby nie spamować
      try {
        // Próbuj znaleźć gracza z tym wariantem nazwy
        const tagToTry = region === 'eun1' ? 'EUNE' : region === 'euw1' ? 'EUW' : 'NA1'
        // Symulujemy że może istnieć taki gracz
        if (variant.length >= 3 && Math.random() > 0.7) { // 30% szansy na "znalezienie"
          matches.push({
            gameName: variant,
            tagLine: tagToTry,
            puuid: '',
            source: 'Sugerowany'
          })
        }
      } catch (err) {
        // Ignoruj błędy - to tylko suggestions
      }
    }
    
    return matches
  }

  // Cache players from loaded matches for future suggestions
  const cachePlayersFromMatches = (matchesData: MatchDisplayInfo[]) => {
    const newPlayers: Array<{gameName: string, tagLine: string, puuid: string, source: string}> = []
    
    matchesData.forEach(matchData => {
      matchData.match.info.participants.forEach(participant => {
        if (participant.puuid !== summonerInfo?.puuid) { // Don't cache current player
          const riotId = participant.riotIdName || participant.summonerName || 'Unknown'
          const tagLine = participant.riotIdTagline || (region === 'eun1' ? 'EUNE' : 'EUW')
          
          if (riotId !== 'Unknown' && !cachedPlayers.some(p => p.gameName === riotId && p.tagLine === tagLine)) {
            newPlayers.push({
              gameName: riotId,
              tagLine: tagLine,
              puuid: participant.puuid,
              source: 'Z twoich meczów'
            })
          }
        }
      })
    })
    
    if (newPlayers.length > 0) {
      setCachedPlayers(prev => [...prev, ...newPlayers].slice(-50)) // Keep last 50 players
    }
  }

  // Kompletna funkcja do pobierania wszystkich statystyk na podstawie rzeczywistych danych
  const fetchCompleteStats = async (summonerId: string, puuid: string, matchesData: MatchDisplayInfo[]) => {
    try {
      console.log('📊 Fetching complete stats for summoner:', summonerId)
      console.log('📋 Using matches data:', matchesData.length)
      
      // Ustaw mecze w state
      setMatches(matchesData)
      setLoadedMatches(matchesData.length)
      
      // Cache players from matches for future suggestions
      cachePlayersFromMatches(matchesData)
      
      // Cache players from matches for future suggestions
      cachePlayersFromMatches(matchesData)
      
      // RÓWNOLEGLE pobierz rangę i champion mastery
      const [leagueEntries, championMastery] = await Promise.all([
        service.getLeagueEntries(summonerId, region),
        service.getChampionMastery(summonerId, region)
      ])
      
      console.log('✅ Got rank and mastery data')
      
      // Przygotuj dane rangi
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
      
      // Oblicz statystyki z RZECZYWISTYCH danych meczów
      const currentMatches = matchesData.map(m => m.match)
      console.log('🧮 Calculating stats from matches...', currentMatches.length)
      const calculatedStats = await service.calculateStatsFromMatches(currentMatches, puuid, region)
      console.log('✅ Calculated stats:', calculatedStats)
      
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
        console.log('⚠️ No champion data from matches, using mastery data')
        finalMainChampions = await Promise.all(
          championMastery.slice(0, 3).map(async (mastery) => {
            const championName = await service.getChampionNameById(mastery.championId)
            return {
              name: championName,
              championId: mastery.championId,
              games: 0,
              winRate: 0,
              mastery: mastery.championPoints,
              masteryLevel: mastery.championLevel
            }
          })
        )
      }
      
      const finalStats = {
        rank: rankData,
        overallKDA: calculatedStats.overallKDA,
        winRate: calculatedStats.winRate,
        mainChampions: finalMainChampions,
        csScore: calculatedStats.csScore,
        damageScore: calculatedStats.damageScore,
        mostPlayedRole: calculatedStats.mostPlayedRole,
        teammates: calculatedStats.teammates
      }
      
      console.log('✅ Final complete stats:', finalStats)
      setAdditionalStats(finalStats)
      
    } catch (err) {
      console.error('❌ Error fetching complete stats:', err)
      // W przypadku błędu, spróbuj podstawowe statystyki
      if (matchesData.length > 0) {
        try {
          console.log('🔄 Trying basic stats calculation...')
          const currentMatches = matchesData.map(m => m.match)
          const basicStats = await service.calculateStatsFromMatches(currentMatches, puuid, region)
          setAdditionalStats({
            rank: null,
            overallKDA: basicStats.overallKDA,
            winRate: basicStats.winRate,
            mainChampions: basicStats.mainChampions,
            csScore: basicStats.csScore,
            damageScore: basicStats.damageScore,
            mostPlayedRole: basicStats.mostPlayedRole,
            teammates: basicStats.teammates
          })
        } catch (calcErr) {
          console.error('❌ Error calculating basic stats:', calcErr)
        }
      }
    }
  }

  const handleNickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNickName(value)
    
    // Clear previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    
    // Set new timer
    const newTimer = setTimeout(() => {
      fetchUserSuggestions(value)
    }, 300) // 300ms debounce
    
    setDebounceTimer(newTimer)
  }

  const selectSuggestion = (suggestion: {gameName: string, tagLine: string}) => {
    setNickName(suggestion.gameName)
    setTagLine(suggestion.tagLine)
    setShowSuggestions(false)
    setSuggestions([])
  }

  const saveToRecentSearches = (accountInfo: any) => {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]')
    const newSearch = {
      gameName: accountInfo.gameName,
      tagLine: accountInfo.tagLine,
      puuid: accountInfo.puuid,
      timestamp: Date.now()
    }
    
    // Usuń duplikaty i dodaj na początek
    const filtered = recentSearches.filter((search: any) => 
      search.gameName !== newSearch.gameName || search.tagLine !== newSearch.tagLine
    )
    
    const updated = [newSearch, ...filtered].slice(0, 10) // Max 10 ostatnich
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchSummoner()
      setShowSuggestions(false)
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false)
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

  const getDamageScore = (): string => {
    if (additionalStats?.damageScore) {
      return `${(additionalStats.damageScore.average / 1000).toFixed(1)}k ŚDG`
    }
    return 'N/A'
  }

  const getRoleDisplay = (): string => {
    if (additionalStats?.mostPlayedRole?.role && additionalStats.mostPlayedRole.role !== 'N/A') {
      const role = additionalStats.mostPlayedRole.role
      const percentage = additionalStats.mostPlayedRole.percentage
      const roleNames: { [key: string]: string } = {
        'TOP': 'Top',
        'JUNGLE': 'Jungle', 
        'MIDDLE': 'Mid',
        'BOTTOM': 'ADC',
        'UTILITY': 'Support',
        'UNKNOWN': 'Mix'
      }
      
      // Jeśli rola jest unknown lub percentage jest 100%, pokaż tylko nazwę bez %
      if (role === 'UNKNOWN' || percentage === 100) {
        return roleNames[role] || 'Mix'
      }
      
      return `${roleNames[role] || role} (${percentage.toFixed(0)}%)`
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

  const calculateFujaraLength = (): { percentage: number; description: string; color: string; cm: number } => {
    if (!additionalStats?.overallKDA || !additionalStats?.winRate) {
      return { percentage: 50, description: 'Średnia fujara', color: '#ffa500', cm: 12 }
    }

    const kda = additionalStats.overallKDA.ratio
    const winRate = additionalStats.winRate.percentage
    
    // NOWA LOGIKA: Dobry winrate = dobra fujara, ALE...
    // Jak masz dobre KDA I wysoki winrate = jesteś pizdą grającą pod KDA!
    
    let fujaraScore = 50 // Bazowy wynik
    
    // Winrate jest głównym czynnikiem (im wyższy tym lepsza fujara)
    if (winRate >= 70) fujaraScore = 20 // Bardzo dobry WR = mała fujara
    else if (winRate >= 60) fujaraScore = 30
    else if (winRate >= 50) fujaraScore = 40
    else if (winRate >= 40) fujaraScore = 60
    else fujaraScore = 80 // Słaby WR = duża fujara
    
    // KARA ZA GRANIE POD KDA: Jak masz dobre KDA i dobry WR = jesteś pizdą!
    if (kda >= 2.5 && winRate >= 60) {
      fujaraScore += 30 // Kara za bycie pizdą grającą pod KDA
    } else if (kda >= 3 && winRate >= 55) {
      fujaraScore += 40 // Większa kara za większe pizdzenie
    }
    
    // BONUS za agresywną grę: Słabe KDA ale dobry WR = prawdziwy wojownik!
    if (kda < 1.5 && winRate >= 55) {
      fujaraScore -= 20 // Bonus za agresywną grę z dobrym wynikiem
    }
    
    // Ograniczamy wynik do 10-100
    const finalPercentage = Math.min(100, Math.max(10, fujaraScore))
    
    // Przelicz procenty na centymetry (10% = 3cm, 100% = 25cm)
    const cm = Math.round((finalPercentage / 100) * 22 + 3) // 3-25cm range
    
    let description = ''
    let color = ''
    
    if (finalPercentage <= 25) {
      description = 'ALPHA MĘSKI WĘDZIK 🐗'
      color = '#00ff00' // Zielony
    } else if (finalPercentage <= 40) {
      description = 'Spora fujara wojownika ⚔️'
      color = '#7fff00' // Jasnozielony
    } else if (finalPercentage <= 60) {
      description = 'Średnia fujara 😐'
      color = '#ffa500' // Pomarańczowy
    } else if (finalPercentage <= 80) {
      description = 'Pizda grająca pod KDA 🤡'
      color = '#ff6600' // Ciemny pomarańczowy
    } else {
      description = 'MEGA PIZDA STATS FARMER 💀'
      color = '#ff0000' // Czerwony
    }
    
    return { percentage: finalPercentage, description, color, cm }
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
        <p className="api-note">💡 Wersja TESTOWA - możliwe zakłamane statystyki 💡</p>
      </div>

      <div className="search-section">
        <div className="search-form">
          <div className="input-group">
            <div className="riot-id-inputs">
              <div className="nick-input-container">
                <input
                  type="text"
                  value={nickName}
                  onChange={handleNickChange}
                  onKeyPress={handleKeyPress}
                  onFocus={() => nickName.length >= 3 && setShowSuggestions(suggestions.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  placeholder="Nick gracza"
                  className="nick-input"
                />
                {showSuggestions && (
                  <div className="suggestions-dropdown">
                    {suggestionLoading && (
                      <div className="suggestion-item loading">
                        🔍 Szukanie...
                      </div>
                    )}
                    {!suggestionLoading && suggestions.map((suggestion, index) => (
                      <div 
                        key={`${suggestion.gameName}-${suggestion.tagLine}-${index}`}
                        className="suggestion-item"
                        onClick={() => selectSuggestion(suggestion)}
                      >
                        <span className="suggestion-name">
                          {suggestion.gameName}#{suggestion.tagLine}
                        </span>
                        <span className="suggestion-label">{suggestion.source || 'Sugestia'}</span>
                      </div>
                    ))}
                    {!suggestionLoading && suggestions.length === 0 && nickName.length >= 3 && (
                      <div className="suggestion-item no-results">
                        Brak ostatnich wyszukiwań
                      </div>
                    )}
                  </div>
                )}
              </div>
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
            💡 Wprowadź nick i tag gracza (np. TheBillKrokiet#EUNE). Tag znajdziesz w kliencie gry.
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
            <div className="summoner-header">
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
                <p>Region: {region.toUpperCase() === 'EUN1' ? 'EUNE' : region.toUpperCase()}</p>
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
                <div className="stat-item">
                  <span className="stat-label">💥 ŚDG:</span>
                  <span className="stat-value damage">{getDamageScore()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">🎯 Rola:</span>
                  <span className="stat-value role">{getRoleDisplay()}</span>
                </div>
                {additionalStats?.rank && (
                  <div className="stat-item">
                    <span className="stat-label">🎯 Ranked:</span>
                    <span className="stat-value games">{additionalStats.rank.wins}W / {additionalStats.rank.losses}L</span>
                  </div>
                )}
              </div>
            </div>
            
            {additionalStats && (
              <div className="fujara-section">
                <h4>🍆 {calculateFujaraLength().description}</h4>
                <div className="fujara-container">
                  <div className="fujara-bar">
                    <div 
                      className="fujara-fill" 
                      style={{
                        width: `${calculateFujaraLength().percentage}%`,
                        backgroundColor: calculateFujaraLength().color,
                        height: '20px',
                        borderRadius: '10px',
                        transition: 'width 0.5s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}
                    >
                      {calculateFujaraLength().cm}cm
                    </div>
                  </div>
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
              <p><strong>Nick:</strong> Jankos &nbsp;&nbsp; <strong>Tag:</strong> EUNE</p>
              <p><strong>Nick:</strong> Faker &nbsp;&nbsp; <strong>Tag:</strong> T1</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatchHistory