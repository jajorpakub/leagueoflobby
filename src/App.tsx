import { Routes, Route } from 'react-router-dom'
import MainLobby from './components/MainLobby'
import LoLLobby from './components/LoLLobby'
import DailyLobby from './components/DailyLobby'
import LoLGuess from './components/LoLGuess'
import ChampionGuess from './components/ChampionGuess'
import AbilityQuiz from './components/AbilityQuiz'
import Wordle from './components/Wordle'
import GamePage from './components/GamePage'
import ChampionBuilds from './components/ChampionBuilds'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLobby />} />
        <Route path="/lol" element={<LoLLobby />} />
        <Route path="/lol/:gameId" element={<GamePage />} />
        <Route path="/daily" element={<DailyLobby />} />
        <Route path="/daily/lolguess" element={<LoLGuess />} />
        <Route path="/daily/lolguess/champion" element={<ChampionGuess />} />
        <Route path="/daily/lolguess/ability" element={<AbilityQuiz />} />
        <Route path="/daily/wordle" element={<Wordle />} />
        <Route path="/daily/:toolId" element={<GamePage />} />
        <Route path="/wot" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>🛡️ World of Tanks lobby - wkrótce!</div>} />
        <Route path="/champion-builds" element={<ChampionBuilds />} />
      </Routes>
    </div>
  )
}

export default App