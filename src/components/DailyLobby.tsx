import { Link } from 'react-router-dom'
import './DailyLobby.css'

interface DailyGame {
  id: string
  title: string
  description: string
  icon: string
  status: 'active' | 'coming-soon'
  difficulty: 'easy' | 'medium' | 'hard'
}

const dailyGames: DailyGame[] = [
  {
    id: 'lolguess',
    title: 'LOLGUESS',
    description: 'Zgaduj championów po podpowiedziach, umiejętnościach i splash artach',
    icon: '🎯',
    status: 'active',
    difficulty: 'medium'
  },
  {
    id: 'rune-master',
    title: 'RUNE MASTER',
    description: 'Zgaduj które runy pasują do danego championa',
    icon: '📜',
    status: 'coming-soon',
    difficulty: 'hard'
  },
  {
    id: 'item-builder',
    title: 'ITEM BUILDER',
    description: 'Zbuduj optymalne itemy dla randomowego championa',
    icon: '⚔️',
    status: 'coming-soon',
    difficulty: 'medium'
  },
  {
    id: 'map-master',
    title: 'MAP MASTER',
    description: 'Rozpoznaj lokacje na mapie Summoner\'s Rift',
    icon: '🗺️',
    status: 'coming-soon',
    difficulty: 'easy'
  }
]

function DailyLobby() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981'
      case 'medium': return '#f59e0b'
      case 'hard': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <div className="status-badge active">DOSTĘPNE</div>
      case 'coming-soon':
        return <div className="status-badge coming-soon">WKRÓTCE</div>
      default:
        return null
    }
  }

  return (
    <div className="daily-lobby">
      <header className="daily-header">
        <Link to="/" className="back-btn">← Powrót do lobby</Link>
        <div className="header-content">
          <h1>Daily Gierki</h1>
          <p>Codzienne wyzwania i puzzle dla graczy LoL</p>
        </div>
      </header>

      <main className="daily-content">
        <div className="daily-info">
          <div className="daily-streak">
            <span className="streak-icon">🔥</span>
            <div className="streak-text">
              <h3>Twoja passa</h3>
              <p className="streak-number">7 dni</p>
            </div>
          </div>
          <div className="daily-stats">
            <div className="stat">
              <span className="stat-number">24</span>
              <span className="stat-label">Gier ukończone</span>
            </div>
            <div className="stat">
              <span className="stat-number">89%</span>
              <span className="stat-label">Średnia celność</span>
            </div>
          </div>
        </div>

        <div className="games-section">
          <h2>Wybierz grę</h2>
          <div className="daily-games-grid">
            {dailyGames.map((game, index) => (
              <Link
                key={game.id}
                to={game.status === 'active' ? `/daily/${game.id}` : '#'}
                className={`daily-game-card ${game.status}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {getStatusBadge(game.status)}
                
                <div className="game-icon">{game.icon}</div>
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                
                <div className="game-footer">
                  <div 
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(game.difficulty) }}
                  >
                    {game.difficulty.toUpperCase()}
                  </div>
                  {game.status === 'active' && (
                    <span className="play-btn">Graj →</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}

export default DailyLobby