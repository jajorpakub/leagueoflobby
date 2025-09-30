import { Routes, Route } from 'react-router-dom'
import Lobby from './components/Lobby'
import GamePage from './components/GamePage'
import ChampionBuilds from './components/ChampionBuilds'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game/:gameId" element={<GamePage />} />
        <Route path="/champion-builds" element={<ChampionBuilds />} />
      </Routes>
    </div>
  )
}

export default App