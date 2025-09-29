import { Routes, Route } from 'react-router-dom'
import Lobby from './components/Lobby'
import GamePage from './components/GamePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </div>
  )
}

export default App