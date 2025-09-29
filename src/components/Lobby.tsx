import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Lobby.css'

interface Game {
  id: string
  title: string
  description: string
  color: string
  icon: string
  isNew?: boolean
}

const games: Game[] = [
  {
    id: 'championy-nacje',
    title: 'CHAMPIONY Z PODZIAŁEM NA NACJE',
    description: 'Przeglądaj championów podzielonych na regiony Runeterry',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    icon: '🗺️'
  },
  {
    id: 'efekty-championow',
    title: 'EFEKTY NA CHAMPIONACH',
    description: 'Przeglądaj championów według typów efektów i umiejętności',
    color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    icon: '⚡'
  },
  {
    id: 'one-hity',
    title: 'ONE-HITY',
    description: 'Championni i itemy z efektami proc, pasywami i one-hit effects',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    icon: '⚡',
    isNew: true
  },
  {
    id: 'losuj-picki',
    title: 'LOSUJ PICKI',
    description: 'Wylosuj championów do grania z możliwością wykluczania rozegranych',
    color: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    icon: '🎰'
  },
  {
    id: 'augumenty',
    title: 'AUGUMENTY',
    description: 'Wszystkie ulepszenia z Arena z podziałem na Silver/Gold/Pryzmatyczne',
    color: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
    icon: '⚡'
  },
  {
    id: 'itemy',
    title: 'ITEMY',
    description: 'Wszystkie przedmioty z League of Legends z filtrami i szczegółami',
    color: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    icon: '🛡️',
    isNew: true
  },
  {
    id: 'ostatnie-gierki',
    title: 'OSTATNIE GIERKI',
    description: 'Sprawdź historię gier dowolnego gracza z szczegółowymi statystykami',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    icon: '📊',
    isNew: true
  }
]

function Lobby() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  return (
    <div className="lobby">
      <header className="lobby-header">
        <div className="logo">
          <h1>lol-lobby</h1>
        </div>
        <nav className="nav-menu">
          <button className="menu-btn">☰</button>
        </nav>
      </header>

      <main className="lobby-main">
        <div className="games-grid">
          {games.map((game, index) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="game-card"
              style={{
                background: game.color,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {game.isNew && <div className="new-badge">NOWE</div>}
              <div className="game-icon">{game.icon}</div>
              <h2 className="game-title">{game.title}</h2>
              <p className="game-description">{game.description}</p>
              <div className={`game-overlay ${hoveredGame === game.id ? 'visible' : ''}`}>
                <span>Wejdź</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="lobby-footer">
        <p>&copy; 2025 LoL Lobby. Nieoficjalny pomocnik dla League of Legends.</p>
      </footer>
    </div>
  )
}

export default Lobby