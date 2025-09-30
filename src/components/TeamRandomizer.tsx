import React, { useState, useEffect } from 'react'
import './TeamRandomizer.css'

interface Player {
  id: string
  name: string
}

interface Team {
  id: string
  players: Player[]
  color: string
  name: string
}

interface TeamSetup {
  mode: 'arena' | 'clash' | 'custom'
  playersPerTeam: number
  description: string
}

const TeamRandomizer: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [teams, setTeams] = useState<Team[]>([])
  const [teamSetup, setTeamSetup] = useState<TeamSetup>({
    mode: 'arena',
    playersPerTeam: 2,
    description: 'Arena - 2vs2vs2vs2'
  })
  const [isRandomizing, setIsRandomizing] = useState(false)
  const [history, setHistory] = useState<Team[][]>([])

  const teamModes: Record<string, TeamSetup[]> = {
    arena: [
      { mode: 'arena', playersPerTeam: 2, description: 'Arena 2vs2 - Klasyczny' },
      { mode: 'arena', playersPerTeam: 2, description: 'Arena 2vs2vs2vs2 - Multi' }
    ],
    clash: [
      { mode: 'clash', playersPerTeam: 5, description: 'Clash 5vs5 - Główny turniej' },
      { mode: 'clash', playersPerTeam: 3, description: 'Clash 3vs3 - Mini turniej' }
    ],
    custom: [
      { mode: 'custom', playersPerTeam: 1, description: '1vs1 - Duele' },
      { mode: 'custom', playersPerTeam: 3, description: '3vs3 - Twisted Treeline style' },
      { mode: 'custom', playersPerTeam: 4, description: '4vs4 - Custom match' },
      { mode: 'custom', playersPerTeam: 5, description: '5vs5 - Standardowy' }
    ]
  }

  const teamColors = [
    { color: '#3b82f6', name: 'Niebieska' },
    { color: '#ef4444', name: 'Czerwona' },
    { color: '#10b981', name: 'Zielona' },
    { color: '#f59e0b', name: 'Żółta' },
    { color: '#8b5cf6', name: 'Fioletowa' },
    { color: '#ec4899', name: 'Różowa' },
    { color: '#06b6d4', name: 'Cyjan' },
    { color: '#f97316', name: 'Pomarańczowa' }
  ]

  const addPlayer = () => {
    if (newPlayerName.trim() && !players.some(p => p.name.toLowerCase() === newPlayerName.toLowerCase())) {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: newPlayerName.trim()
      }
      setPlayers([...players, newPlayer])
      setNewPlayerName('')
    }
  }

  const removePlayer = (playerId: string) => {
    setPlayers(players.filter(p => p.id !== playerId))
  }

  const randomizeTeams = () => {
    if (players.length < teamSetup.playersPerTeam * 2) {
      alert(`Potrzebujesz co najmniej ${teamSetup.playersPerTeam * 2} graczy dla tego trybu!`)
      return
    }

    setIsRandomizing(true)

    // Animacja losowania
    setTimeout(() => {
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
      const numberOfTeams = Math.floor(shuffledPlayers.length / teamSetup.playersPerTeam)
      const newTeams: Team[] = []

      for (let i = 0; i < numberOfTeams; i++) {
        const teamPlayers = shuffledPlayers.slice(
          i * teamSetup.playersPerTeam, 
          (i + 1) * teamSetup.playersPerTeam
        )
        
        newTeams.push({
          id: `team-${i}`,
          players: teamPlayers,
          color: teamColors[i % teamColors.length].color,
          name: teamColors[i % teamColors.length].name
        })
      }

      setTeams(newTeams)
      setHistory([...history, newTeams])
      setIsRandomizing(false)
    }, 1500)
  }

  const rerollTeam = (teamId: string) => {
    if (teams.length < 2) return

    const teamIndex = teams.findIndex(t => t.id === teamId)
    const otherTeams = teams.filter(t => t.id !== teamId)
    const allOtherPlayers = otherTeams.flatMap(t => t.players)
    
    if (allOtherPlayers.length < teamSetup.playersPerTeam) return

    // Wymieszaj graczy z innych drużyn
    const shuffledOthers = allOtherPlayers.sort(() => Math.random() - 0.5)
    const newTeamPlayers = shuffledOthers.slice(0, teamSetup.playersPerTeam)
    const remainingPlayers = shuffledOthers.slice(teamSetup.playersPerTeam)

    // Dodaj graczy z przelosowanej drużyny do puli
    const currentTeamPlayers = teams[teamIndex].players
    const allRemainingPlayers = [...remainingPlayers, ...currentTeamPlayers]
    
    // Przekształć pozostałe drużyny
    const updatedTeams = [...teams]
    updatedTeams[teamIndex] = {
      ...updatedTeams[teamIndex],
      players: newTeamPlayers
    }

    // Rozdaj pozostałych graczy
    let playerIndex = 0
    for (let i = 0; i < updatedTeams.length; i++) {
      if (i === teamIndex) continue
      
      const neededPlayers = teamSetup.playersPerTeam - updatedTeams[i].players.length
      for (let j = 0; j < neededPlayers && playerIndex < allRemainingPlayers.length; j++) {
        updatedTeams[i].players.push(allRemainingPlayers[playerIndex])
        playerIndex++
      }
    }

    setTeams(updatedTeams)
  }

  const clearAll = () => {
    setPlayers([])
    setTeams([])
    setHistory([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addPlayer()
    }
  }

  const getRemainingPlayers = () => {
    const usedPlayers = teams.flatMap(team => team.players)
    return players.filter(player => !usedPlayers.some(used => used.id === player.id))
  }

  return (
    <div className="team-randomizer">
      <div className="randomizer-header">
        <h1>⚔️ Losuj Drużyny</h1>
        <p>Idealny dla Arena, Clash i custom games - sprawiedliwie przelosuj wszystkich!</p>
      </div>

      <div className="randomizer-content">
        <div className="setup-section">
          <div className="mode-selection">
            <h3>🎮 Wybierz tryb gry</h3>
            <div className="mode-tabs">
              {Object.keys(teamModes).map(mode => (
                <button
                  key={mode}
                  className={`mode-tab ${teamSetup.mode === mode ? 'active' : ''}`}
                  onClick={() => setTeamSetup(teamModes[mode][0])}
                >
                  {mode.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="mode-options">
              {teamModes[teamSetup.mode].map((setup, index) => (
                <label key={index} className="mode-option">
                  <input
                    type="radio"
                    name="teamSetup"
                    checked={teamSetup.description === setup.description}
                    onChange={() => setTeamSetup(setup)}
                  />
                  <span>{setup.description}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="players-section">
            <h3>👥 Dodaj graczy ({players.length})</h3>
            <div className="player-input">
              <input
                type="text"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Wpisz nick gracza..."
                className="player-name-input"
              />
              <button onClick={addPlayer} className="add-player-btn">
                ➕ Dodaj
              </button>
            </div>

            <div className="players-list">
              {players.map((player, index) => (
                <div key={player.id} className="player-item">
                  <span className="player-number">{index + 1}</span>
                  <span className="player-name">{player.name}</span>
                  <button
                    onClick={() => removePlayer(player.id)}
                    className="remove-player-btn"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            <div className="randomizer-controls">
              <button
                onClick={randomizeTeams}
                disabled={players.length < teamSetup.playersPerTeam * 2 || isRandomizing}
                className="randomize-btn"
              >
                {isRandomizing ? '🎲 Losowanie...' : '🎲 Losuj drużyny!'}
              </button>
              
              <button onClick={clearAll} className="clear-btn">
                🗑️ Wyczyść wszystko
              </button>
            </div>

            <div className="requirements-info">
              <p>
                <strong>Wymagane:</strong> Minimum {teamSetup.playersPerTeam * 2} graczy
                <br />
                <strong>Aktualne:</strong> {players.length} graczy
                <br />
                <strong>Drużyny:</strong> {Math.floor(players.length / teamSetup.playersPerTeam)} drużyn po {teamSetup.playersPerTeam} graczy
              </p>
            </div>
          </div>
        </div>

        {teams.length > 0 && (
          <div className="teams-section">
            <h3>🏆 Drużyny ({teams.length})</h3>
            <div className="teams-grid">
              {teams.map((team, index) => (
                <div
                  key={team.id}
                  className="team-card"
                  style={{ borderLeftColor: team.color }}
                >
                  <div className="team-header">
                    <div className="team-info">
                      <div 
                        className="team-color-indicator"
                        style={{ backgroundColor: team.color }}
                      ></div>
                      <h4>Drużyna {team.name}</h4>
                    </div>
                    <button
                      onClick={() => rerollTeam(team.id)}
                      className="reroll-team-btn"
                      title="Przelosuj tę drużynę"
                    >
                      🔄
                    </button>
                  </div>
                  
                  <div className="team-players">
                    {team.players.map((player, playerIndex) => (
                      <div key={player.id} className="team-player">
                        <span className="player-position">{playerIndex + 1}.</span>
                        <span className="player-name">{player.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {getRemainingPlayers().length > 0 && (
              <div className="remaining-players">
                <h4>🪑 Gracze na ławce</h4>
                <div className="remaining-list">
                  {getRemainingPlayers().map(player => (
                    <span key={player.id} className="remaining-player">
                      {player.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {history.length > 0 && (
          <div className="history-section">
            <h3>📜 Historia losowań ({history.length})</h3>
            <div className="history-list">
              {history.map((historyTeams, index) => (
                <div key={index} className="history-item">
                  <div className="history-header">
                    <span>Losowanie #{index + 1}</span>
                    <button
                      onClick={() => setTeams(historyTeams)}
                      className="restore-btn"
                    >
                      🔄 Przywróć
                    </button>
                  </div>
                  <div className="history-teams">
                    {historyTeams.map(team => (
                      <span key={team.id} className="history-team">
                        {team.name}: {team.players.map(p => p.name).join(', ')}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamRandomizer