import { useParams, Link, useLocation } from 'react-router-dom'
import ChampionsRegions from './ChampionsRegions'
import ChampionEffects from './ChampionEffects'
import RandomPicks from './RandomPicks'
import Auguments from './Auguments'
import Items from './Items'
import MatchHistory from './MatchHistory'
import ChampionBuilds from './ChampionBuilds'
import TeamRandomizer from './TeamRandomizer'
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
  'losuj-druzyni': {
    title: 'LOSUJ DRUŻYNY',
    description: 'Przelosuj drużyny dla Arena, Clash lub custom games - idealne dla grup!',
    color: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    content: 'Losowanie drużyn dla gier teamowych!'
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
  'champion-builds': {
    title: 'BUILDS',
    description: 'Aktualne build-y dla championów - itemy, runy, skill order',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    content: 'Build-y championów!'
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
  const { gameId, toolId } = useParams<{ gameId?: string; toolId?: string }>()
  const location = useLocation()
  
  // Ustal czy to jest LoL tool czy Daily tool
  const isLolTool = location.pathname.startsWith('/lol/')
  const isDailyTool = location.pathname.startsWith('/daily/')
  const currentToolId = gameId || toolId
  
  // Określ ścieżkę powrotu
  const backPath = isLolTool ? '/lol' : isDailyTool ? '/' : '/'
  const backLabel = isLolTool ? '← Powrót do LoL' : '← Powrót do lobby'
  
  const game = currentToolId ? gameData[currentToolId] : null

  if (!game) {
    return (
      <div className="game-page">
        <div className="game-not-found">
          <h1>Narzędzie nie zostało znalezione!</h1>
          <Link to={backPath} className="back-btn">Powrót do lobby</Link>
        </div>
      </div>
    )
  }

  // Routing dla dedykowanych komponentów
  if (currentToolId === 'ostatnie-gierki') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <MatchHistory />
      </div>
    )
  }

  if (currentToolId === 'championy-nacje') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <ChampionsRegions />
      </div>
    )
  }

  if (currentToolId === 'efekty-championow') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <ChampionEffects />
      </div>
    )
  }

  if (currentToolId === 'losuj-picki') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <RandomPicks />
      </div>
    )
  }

  if (currentToolId === 'losuj-druzyni') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <TeamRandomizer />
      </div>
    )
  }

  if (currentToolId === 'augumenty') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <Auguments />
      </div>
    )
  }

  if (currentToolId === 'itemy') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <Items />
      </div>
    )
  }

  if (currentToolId === 'champion-builds') {
    return (
      <div className="game-page">
        <header className="game-header">
          <Link to={backPath} className="back-btn">{backLabel}</Link>
          <h1>{game.title}</h1>
        </header>
        <ChampionBuilds />
      </div>
    )
  }

  // Domyślny fallback
  return (
    <div className="game-page">
      <header className="game-header">
        <Link to={backPath} className="back-btn">{backLabel}</Link>
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