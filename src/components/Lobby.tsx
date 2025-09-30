import { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiStatus from './ApiStatus'
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
    id: 'ostatnie-gierki',
    title: 'OSTATNIE GIERKI',
    description: 'Sprawdź historię gier dowolnego gracza z szczegółowymi statystykami',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    icon: '📅',
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
    id: 'losuj-druzyni',
    title: 'LOSUJ DRUŻYNY',
    description: 'Przelosuj drużyny dla Arena, Clash lub custom games - idealne dla grup!',
    color: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    icon: '⚔️',
    isNew: true
  },
  {
    id: 'itemy',
    title: 'ITEMY',
    description: 'Wszystkie przedmioty z League of Legends z filtrami i szczegółami',
    color: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    icon: '🛡️'
  },
  {
    id: 'augumenty',
    title: 'AUGUMENTY',
    description: 'Wszystkie ulepszenia z Arena z podziałem na Silver/Gold/Pryzmatyczne',
    color: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
    icon: '🧭'
  },
  {
    id: 'champion-builds',
    title: 'BUILDS',
    description: 'Aktualne build-y dla championów - itemy, runy, skill order',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    icon: '🔨'
  },
  {
    id: 'championy-nacje',
    title: 'CHAMPIONY',
    description: 'Przeglądaj championów podzielonych na regiony Runeterry',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    icon: '🎭'
  },
  {
    id: 'efekty-championow',
    title: 'EFEKTY',
    description: 'Przeglądaj championów według typów efektów i umiejętności',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    icon: '🧪'
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

      <ApiStatus />

      <footer className="lobby-footer">
        <p>&copy; 2025 LoL Lobby. Nieoficjalny pomocnik dla League of Legends.</p>
      </footer>
    </div>
  )
}

export default Lobby