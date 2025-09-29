import { useParams, Link } from 'react-router-dom'
import ChampionsRegions from './ChampionsRegions'
import ChampionEffects from './ChampionEffects'
import OneHits from './OneHits'
import RandomPicks from './RandomPicks'
import Auguments from './Auguments'
import Items from './Items'
import './GamePage.css'

const gameData: Record<string, {
  title: string
  description: string
  color: string
  content: string
}> = {
  'championy-nacje': {
    title: 'CHAMPIONY Z PODZIAŁEM NA NACJE',
    description: 'Przeglądaj championów podzielonych na regiony Runeterry',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    content: 'Regiony Runeterry z championami!'
  },
  'efekty-championow': {
    title: 'EFEKTY NA CHAMPIONACH',
    description: 'Przeglądaj championów według typów efektów i umiejętności',
    color: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    content: 'Kategorie efektów championów!'
  },
  'one-hity': {
    title: 'ONE-HITY',
    description: 'Championni i itemy z efektami proc, pasywami i one-hit effects',
    color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    content: 'One-hit efekty i proc mechanics!'
  },
  'losuj-picki': {
    title: 'LOSUJ PICKI',
    description: 'Wylosuj championów do grania z możliwością wykluczania rozegranych',
    color: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    content: 'Losowanie championów do gier!'
  },
  'augumenty': {
    title: 'AUGUMENTY',
    description: 'Wszystkie ulepszenia z Arena z podziałem na Silver/Gold/Pryzmatyczne',
    color: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
    content: 'Augumenty z trybu Arena!'
  },
  'itemy': {
    title: 'ITEMY',
    description: 'Wszystkie przedmioty z League of Legends z filtrami i szczegółami',
    color: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    content: 'Wszystkie itemy z gry!'
  },
  'pro-scene-quiz': {
    title: 'PRO SCENE QUIZ',
    description: 'Sprawdz swoją wiedzę o profesjonalnej scenie LoL',
    color: 'linear-gradient(135deg, #7c2d92 0%, #a855f7 100%)',
    content: 'Tu będzie quiz o profesjonalnej scenie!'
  },
  'ability-quiz': {
    title: 'ABILITY QUIZ',
    description: 'Dopasuj umiejętności do właściwych championów',
    color: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
    content: 'Tu będzie quiz z umiejętnościami championów!'
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

  // Specjalne przypadki dla dedykowanych komponentów
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

  if (gameId === 'one-hity') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to="/" className="back-btn">← Powrót</Link>
          <h1>{game.title}</h1>
        </header>
        <OneHits />
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

  return (
    <div className="game-page">
      <header className="game-header">
        <Link to="/" className="back-btn">← Powrót</Link>
        <h1>{game.title}</h1>
      </header>
      
      <main className="game-content">
        <div className="game-info">
          <p>{game.description}</p>
        </div>
        
        <div className="game-area">
          <div className="placeholder-content">
            <h2>🚧 W budowie</h2>
            <p>{game.content}</p>
            <p>Ta strona będzie zawierała pełną grę!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GamePage