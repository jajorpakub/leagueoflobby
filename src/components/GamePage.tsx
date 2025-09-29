import { useParams, Link } from 'react-router-dom'
import ChampionsRegions from './ChampionsRegions'
import ChampionEffects from './ChampionEffects'
import RandomPicks from './RandomPicks'
import Auguments from './Auguments'
import Items from './Items'
import MatchHistory from './MatchHistory'
import './GamePage.css'

const gameData: Record<string, {
  title: string
  description: string
  color: string
  content: string
}> = {
  'ostatnie-gierki': {
    title: 'OSTATNIE GIERKI',
    description: 'Sprawdź historię gier dowolnego gracza z szczegółowymi statystykami',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    content: 'Historia meczów gracza!'
  },
  'losuj-picki': {
    title: 'LOSUJ PICKI',
    description: 'Wylosuj championów do grania z możliwością wykluczania rozegranych',
    color: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    content: 'Losowanie championów do gier!'
  },
  'przejdziemy-po-poprawkach': {
    title: 'PRZEJDZIEMY PO POPRAWKACH',
    description: 'Sprawdź najnowsze zmiany w patchu i jak wpływają na gameplay',
    color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    content: 'Analiza zmian w najnowszym patchu!'
  },
  'itemy': {
    title: 'ITEMY',
    description: 'Wszystkie przedmioty z League of Legends z filtrami i szczegółami',
    color: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    content: 'Wszystkie itemy z gry!'
  },
  'augumenty': {
    title: 'AUGUMENTY',
    description: 'Wszystkie ulepszenia z Arena z podziałem na Silver/Gold/Pryzmatyczne',
    color: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
    content: 'Augumenty z trybu Arena!'
  },
  'championy-nacje': {
    title: 'CHAMPIONY',
    description: 'Przeglądaj championów podzielonych na regiony Runeterry',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    content: 'Regiony Runeterry z championami!'
  },
  'efekty-championow': {
    title: 'EFEKTY',
    description: 'Przeglądaj championów według typów efektów i umiejętności',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    content: 'Kategorie efektów championów!'
  }
}

function GamePage() {
  const { gameId } = useParams<{ gameId: string }>()
  const game = gameId ? gameData[gameId] : null

  if (!game) {
    return (
      <div className="game-page">
        <div className="game-not-found">
          <h1>Gra nie została znaleziona!</h1>
          <Link to="/" className="back-btn">Powrót do lobby</Link>
        </div>
      </div>
    )
  }

  // Routing dla dedykowanych komponentów
  if (gameId === 'ostatnie-gierki') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <MatchHistory />
      </div>
    )
  }

  if (gameId === 'championy-nacje') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <ChampionsRegions />
      </div>
    )
  }

  if (gameId === 'efekty-championow') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <ChampionEffects />
      </div>
    )
  }

  if (gameId === 'losuj-picki') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <RandomPicks />
      </div>
    )
  }

  if (gameId === 'augumenty') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <Auguments />
      </div>
    )
  }

  if (gameId === 'itemy') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <Items />
      </div>
    )
  }

  if (gameId === 'przejdziemy-po-poprawkach') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <div className="game-content">
          <div className="feature-placeholder">
            <h2>📋 Analiza Poprawek</h2>
            <p>Ta funkcja jest w przygotowaniu. Tutaj będziesz mógł sprawdzić:</p>
            <ul>
              <li>• Najnowsze zmiany w patchu</li>
              <li>• Buffy i nerfy championów</li>
              <li>• Zmiany w itemach</li>
              <li>• Meta analysis</li>
              <li>• Tier listy po patchu</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  // Domyślny fallback
  return (
    <div className="game-page">
      <header className="game-header">
        <Link to="/" className="back-btn">← Powrót</Link>
        <h1>{game.title}</h1>
      </header>
      <div className="game-content">
        <div className="feature-placeholder">
          <h2>🚧 W przygotowaniu</h2>
          <p>{game.description}</p>
          <p>Ta funkcja zostanie dodana w najbliższym czasie!</p>
        </div>
      </div>
    </div>
  )
}

export default GamePage