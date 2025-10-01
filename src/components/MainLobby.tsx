import { Link } from 'react-router-dom'
import ApiStatus from './ApiStatus'
import './MainLobby.css'

interface Game {
  id: string
  title: string
  icon: string
}

const games: Game[] = [
  {
    id: 'lol',
    title: 'LEAGUE OF LEGENDS',
    icon: '⚔️'
  },
  {
    id: 'universal',
    title: 'UNIVERSAL TOOLS',
    icon: '🛠️'
  },
  {
    id: 'wot',
    title: 'WORLD OF TANKS',
    icon: '🛡️'
  }
]

function MainLobby() {
  return (
    <div className="main-lobby">
      <header className="main-lobby-header">
        <div className="logo">
          <h1>GG-LOBBY</h1>
        </div>
        <nav className="nav-menu">
          <button className="menu-btn">☰</button>
        </nav>
      </header>

      <main className="main-lobby-content">
        <div className="hero-section">
          <h2>Wybierz swoją grę</h2>
          <p>Profesjonalne narzędzia dla każdej gry w jednym miejscu</p>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <Link
              key={game.id}
              to={game.id === 'wot' ? '#' : `/${game.id}`}
              className="game-card"
              data-game={game.id}
              data-title={game.title}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="game-content">
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-section">
          <h3>🎯 Najnowsze narzędzia</h3>
          <div className="featured-tools">
            <div className="featured-tool">
              <span className="tool-icon">📊</span>
              <div className="tool-info">
                <h4>Ostatnie Gierki</h4>
                <p>Zaawansowana analiza meczów League of Legends</p>
              </div>
              <Link to="/lol/ostatnie-gierki" className="tool-link">Sprawdź</Link>
            </div>
            <div className="featured-tool">
              <span className="tool-icon">👥</span>
              <div className="tool-info">
                <h4>Losuj Drużyny</h4>
                <p>Idealny podział graczy na teams dla aren i custom games</p>
              </div>
              <Link to="/universal/losuj-druzyny" className="tool-link">Sprawdź</Link>
            </div>
          </div>
        </div>
      </main>

      <ApiStatus />

      <footer className="main-lobby-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>GG-Lobby</h4>
            <p>Profesjonalne narzędzia dla graczy wszystkich poziomów</p>
          </div>
          <div className="footer-section">
            <h4>Wspierane gry</h4>
            <ul>
              <li>League of Legends</li>
              <li>Valorant (Beta)</li>
              <li>TeamFight Tactics (Beta)</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Społeczność</h4>
            <a href="https://dc.gglobby.pl" target="_blank" rel="noopener noreferrer">
              🎮 Dołącz na Discord
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GG-Lobby. Nieoficjalny pomocnik dla graczy.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLobby