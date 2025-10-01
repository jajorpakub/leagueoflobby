import { Routes, Route } from 'react-router-dom'
import MainLobby from './components/MainLobby'
import LoLLobby from './components/LoLLobby'
import GamePage from './components/GamePage'
import ChampionBuilds from './components/ChampionBuilds'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLobby />} />
        <Route path="/lol" element={<LoLLobby />} />
        <Route path="/lol/:gameId" element={<GamePage />} />
        <Route path="/valorant" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>🎯 Valorant lobby - wkrótce!</div>} />
        <Route path="/tft" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>♔ TFT lobby - wkrótce!</div>} />
        <Route path="/universal/:toolId" element={<GamePage />} />
        <Route path="/wot" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>🛡️ World of Tanks lobby - wkrótce!</div>} />
        <Route path="/cs2" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>🎯 CS2 lobby - wkrótce!</div>} />
        <Route path="/apex" element={<div style={{color: 'white', padding: '2rem', textAlign: 'center'}}>🔫 Apex lobby - wkrótce!</div>} />
        <Route path="/champion-builds" element={<ChampionBuilds />} />
      </Routes>
    </div>
  )
}

export default App