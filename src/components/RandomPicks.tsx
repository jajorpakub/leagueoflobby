import React, { useState, useEffect } from 'react'
import ChampionService, { Champion } from '../services/championService'
import './RandomPicks.css'

interface PickedChampion {
  champion: Champion
  excluded: boolean
}

interface HistoryEntry {
  id: string
  timestamp: Date
  picks: PickedChampion[]
  numberOfPicks: number
}

const RandomPicks: React.FC = () => {
  const [numberOfPicks, setNumberOfPicks] = useState(1)
  const [excludePlayed, setExcludePlayed] = useState(false)
  const [allChampions, setAllChampions] = useState<Champion[]>([])
  const [excludedChampions, setExcludedChampions] = useState<Set<string>>(new Set())
  const [pickedChampions, setPickedChampions] = useState<PickedChampion[]>([])
  const [pickHistory, setPickHistory] = useState<HistoryEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [championService] = useState(() => ChampionService.getInstance())
  const [championsListExpanded, setChampionsListExpanded] = useState(false)

  // Load champions from API
  useEffect(() => {
    const loadChampions = async () => {
      try {
        setLoading(true)
        const champions = await championService.getAllChampions()
        setAllChampions(champions)
        
        // Load excluded champions from localStorage
        const savedExcluded = localStorage.getItem('excludedChampions')
        if (savedExcluded) {
          setExcludedChampions(new Set(JSON.parse(savedExcluded)))
        }

        // Load pick history from localStorage
        const savedHistory = localStorage.getItem('pickHistory')
        if (savedHistory) {
          const history = JSON.parse(savedHistory).map((entry: any) => ({
            ...entry,
            timestamp: new Date(entry.timestamp)
          }))
          setPickHistory(history)
        }
        
        setError(null)
      } catch (err) {
        setError('Błąd podczas ładowania championów. Sprawdź połączenie z internetem.')
        console.error('Error loading champions:', err)
      } finally {
        setLoading(false)
      }
    }

    loadChampions()
  }, [championService])

  // Save excluded champions to localStorage
  useEffect(() => {
    localStorage.setItem('excludedChampions', JSON.stringify(Array.from(excludedChampions)))
  }, [excludedChampions])

  // Save pick history to localStorage
  useEffect(() => {
    localStorage.setItem('pickHistory', JSON.stringify(pickHistory))
  }, [pickHistory])

  const getDifficultyLevel = (difficulty: number): string => {
    if (difficulty <= 3) return 'Easy'
    if (difficulty <= 6) return 'Medium'
    return 'Hard'
  }

  const getDifficultyColor = (difficulty: number): string => {
    const level = getDifficultyLevel(difficulty)
    switch (level) {
      case 'Easy': return '#4CAF50'
      case 'Medium': return '#FF9800'
      case 'Hard': return '#F44336'
      default: return '#9E9E9E'
    }
  }

  const getRoleColor = (tags: string[]): string => {
    const primaryRole = tags[0] || 'Unknown'
    switch (primaryRole) {
      case 'Assassin': return '#E91E63'
      case 'Fighter': return '#FF5722'
      case 'Mage': return '#3F51B5'
      case 'Marksman': return '#FF9800'
      case 'Support': return '#4CAF50'
      case 'Tank': return '#607D8B'
      default: return '#9E9E9E'
    }
  }

  const toggleChampionExclusion = (championId: string) => {
    const newExcluded = new Set(excludedChampions)
    if (excludedChampions.has(championId)) {
      newExcluded.delete(championId)
    } else {
      newExcluded.add(championId)
    }
    setExcludedChampions(newExcluded)
  }

  const clearAllExcluded = () => {
    setExcludedChampions(new Set())
  }

  const randomizePicks = () => {
    let availableChampions = [...allChampions]
    
    if (excludePlayed) {
      availableChampions = availableChampions.filter(champion => !excludedChampions.has(champion.id))
    }
    
    if (availableChampions.length === 0) {
      alert('Brak dostępnych championów do losowania!')
      return
    }
    
    const picks: PickedChampion[] = []
    const usedChampions = new Set<string>()
    
    for (let i = 0; i < numberOfPicks && i < availableChampions.length; i++) {
      let randomChampion: Champion
      do {
        const randomIndex = Math.floor(Math.random() * availableChampions.length)
        randomChampion = availableChampions[randomIndex]
      } while (usedChampions.has(randomChampion.id))
      
      usedChampions.add(randomChampion.id)
      picks.push({
        champion: randomChampion,
        excluded: excludedChampions.has(randomChampion.id)
      })
    }
    
    setPickedChampions(picks)

    // Add to history
    const historyEntry: HistoryEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      picks,
      numberOfPicks
    }
    setPickHistory(prev => [historyEntry, ...prev.slice(0, 19)]) // Keep last 20 entries
  }

  const clearHistory = () => {
    setPickHistory([])
  }

  const loadFromHistory = (entry: HistoryEntry) => {
    setPickedChampions(entry.picks)
    setNumberOfPicks(entry.numberOfPicks)
  }



  if (loading) {
    return (
      <div className="random-picks">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Ładowanie championów z Riot Games Data Dragon API...</p>
          <p>Pobieranie najnowszych danych...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="random-picks">
        <div className="error-container">
          <h3>❌ Błąd ładowania</h3>
          <p>{error}</p>
          <p>Spróbuj odświeżyć stronę lub sprawdź połączenie z internetem.</p>
          <button onClick={() => window.location.reload()}>🔄 Spróbuj ponownie</button>
        </div>
      </div>
    )
  }

  return (
    <div className="random-picks">
      <div className="picks-header">
        <h1>🎲 Losuj Championów</h1>
        <p>Aktualnie dostępnych: <strong>{allChampions.length}</strong> championów z oficjalnego Riot Games API</p>
        <p className="api-info">📡 Dane pobrane na żywo z Data Dragon API</p>
      </div>

      <div className="picks-controls">
        <div className="control-group">
          <label htmlFor="numberOfPicks">Liczba championów do wylosowania:</label>
          <input
            type="range"
            id="numberOfPicks"
            min="1"
            max="5"
            value={numberOfPicks}
            onChange={(e) => setNumberOfPicks(parseInt(e.target.value))}
          />
          <span className="range-value">{numberOfPicks}</span>
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={excludePlayed}
              onChange={(e) => setExcludePlayed(e.target.checked)}
            />
            Wyklucz rozegrane champions ({excludedChampions.size} wykluczonych)
          </label>
        </div>

        <div className="button-group">
          <button className="pick-button" onClick={randomizePicks}>
            🎲 LOSUJ!
          </button>
          {excludedChampions.size > 0 && (
            <button className="clear-button" onClick={clearAllExcluded}>
              🗑️ Wyczyść wykluczonych
            </button>
          )}
        </div>
      </div>

      {pickedChampions.length > 0 && (
        <div className="picked-champions">
          <h2>🎯 Wylosowane Champions:</h2>
          <div className="picked-list">
            {pickedChampions.map((pick, index) => (
              <div
                key={pick.champion.id}
                className={`pick-card ${pick.excluded ? 'excluded' : ''}`}
                style={{
                  borderColor: getRoleColor(pick.champion.tags),
                  boxShadow: `0 0 10px ${getRoleColor(pick.champion.tags)}33`
                }}
              >
                <div className="pick-number">#{index + 1}</div>
                <img
                  src={championService.getChampionImageUrl(pick.champion)}
                  alt={pick.champion.name}
                  className="champion-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/Aatrox.png';
                  }}
                />
                <div className="champion-info">
                  <h3>{pick.champion.name}</h3>
                  <p className="champion-title">{pick.champion.title}</p>
                  <div className="champion-tags">
                    {pick.champion.tags.map(tag => (
                      <span
                        key={tag}
                        className="role-tag"
                        style={{ backgroundColor: getRoleColor([tag]) }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(pick.champion.info.difficulty) }}
                  >
                    {getDifficultyLevel(pick.champion.info.difficulty)} ({pick.champion.info.difficulty}/10)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {pickHistory.length > 0 && (
        <div className="pick-history">
          <div className="history-header">
            <h2>� Historia Losowania</h2>
            <button className="clear-button" onClick={clearHistory}>
              🗑️ Wyczyść historię
            </button>
          </div>
          <div className="history-list">
            {pickHistory.map((entry) => (
              <div key={entry.id} className="history-entry">
                <div className="history-info">
                  <span className="history-date">
                    {entry.timestamp.toLocaleString('pl-PL')}
                  </span>
                  <span className="history-count">
                    {entry.picks.length} champion{entry.picks.length > 1 ? 'ów' : ''}
                  </span>
                </div>
                <div className="history-champions">
                  {entry.picks.map((pick) => (
                    <img
                      key={pick.champion.id}
                      src={championService.getChampionImageUrl(pick.champion)}
                      alt={pick.champion.name}
                      className="history-champion-img"
                      title={pick.champion.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/Aatrox.png';
                      }}
                    />
                  ))}
                </div>
                <button
                  className="load-history-button"
                  onClick={() => loadFromHistory(entry)}
                >
                  📥 Załaduj
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="champions-list">
        <div className="champions-header" onClick={() => setChampionsListExpanded(!championsListExpanded)}>
          <h2>📋 Wszyscy Champions ({allChampions.length})</h2>
          <button className="expand-button">
            {championsListExpanded ? '🔼 Zwiń listę' : '🔽 Rozwiń listę'}
          </button>
        </div>
        {championsListExpanded && (
          <>
            <p className="champions-info">Kliknij na championa żeby go wykluczyć/włączyć</p>
            <div className="champions-grid">
              {allChampions.map(champion => (
                <div
                  key={champion.id}
                  className={`champion-item ${excludedChampions.has(champion.id) ? 'excluded' : ''}`}
                  onClick={() => toggleChampionExclusion(champion.id)}
                  style={{
                    borderColor: getRoleColor(champion.tags)
                  }}
                >
                  <img
                    src={championService.getChampionImageUrl(champion)}
                    alt={champion.name}
                    className="champion-avatar"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/Aatrox.png';
                    }}
                  />
                  <div className="champion-name">{champion.name}</div>
                  <div
                    className="difficulty-dot"
                    style={{ backgroundColor: getDifficultyColor(champion.info.difficulty) }}
                    title={`Difficulty: ${getDifficultyLevel(champion.info.difficulty)} (${champion.info.difficulty}/10)`}
                  />
                  {excludedChampions.has(champion.id) && (
                    <div className="excluded-overlay">❌</div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default RandomPicks