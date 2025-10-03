import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserStats, canPlayToday, type UserStats } from '../utils/userFingerprint'
import Header from './Header'
import './LoLGuess.css'

interface GameMode {
  id: string
  title: string
  description: string
  icon: string
  difficulty: 'Łatwy' | 'Średni' | 'Trudny'
  color: string
}

const gameModes: GameMode[] = [
  {
    id: 'champion',
    title: 'Champion Guess',
    description: 'Zgadnij championa po podpowiedziach - region, rola, rok wydania',
    icon: '🎯',
    difficulty: 'Średni',
    color: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  {
    id: 'ability',
    title: 'Ability Quiz',
    description: 'Rozpoznaj championa po opisie umiejętności',
    icon: '⚡',
    difficulty: 'Trudny',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    id: 'splash',
    title: 'Splash Art',
    description: 'Zgadnij championa po fragmencie splash arta',
    icon: '🎨',
    difficulty: 'Łatwy',
    color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    id: 'quote',
    title: 'Quote Quiz',
    description: 'Odgadnij championa po jego kultowym cytacie',
    icon: '💬',
    difficulty: 'Średni',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  }
]

function LoLGuess() {
  const [userStats, setUserStats] = useState<UserStats | null>(null)

  useEffect(() => {
    const stats = getUserStats()
    setUserStats(stats)
    
    // Refresh stats when window gains focus (user returns from game)
    const handleFocus = () => {
      const refreshedStats = getUserStats()
      setUserStats(refreshedStats)
    }
    
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])
  const [selectedMode, setSelectedMode] = useState<string | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Łatwy': return '#10b981'
      case 'Średni': return '#f59e0b'
      case 'Trudny': return '#ef4444'
      default: return '#6b7280'
    }
  }

  return (
    <div className="lol-guess">
      <Header 
        title="🎮 LoLGuess" 
        subtitle="Codzienne wyzwania dla fanów League of Legends" 
        customBackPath="/daily"
      />

      <main className="lol-guess-content">
        {userStats && (
          <div className="stats-box">
            <h3>🏆 Twoje pasy</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{userStats.streaks.champion}</span>
                <span className="stat-label">Champion</span>
                <span className={`status-dot ${canPlayToday('champion') ? 'available' : 'completed'}`}></span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userStats.streaks.ability}</span>
                <span className="stat-label">Ability</span>
                <span className={`status-dot ${canPlayToday('ability') ? 'available' : 'completed'}`}></span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userStats.streaks.splash}</span>
                <span className="stat-label">Splash</span>
                <span className={`status-dot ${canPlayToday('splash') ? 'available' : 'completed'}`}></span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userStats.streaks.quote}</span>
                <span className="stat-label">Quote</span>
                <span className={`status-dot ${canPlayToday('quote') ? 'available' : 'completed'}`}></span>
              </div>
            </div>
          </div>
        )}

        <div className="daily-info">
          <div className="daily-badge">
            <span className="daily-number">#{new Date().getDate()}</span>
            <span className="daily-date">
              {new Date().toLocaleDateString('pl-PL', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        <div className="game-modes-grid">
          {gameModes.map((mode, index) => (
            <div
              key={mode.id}
              className={`game-mode-card ${selectedMode === mode.id ? 'selected' : ''}`}
              style={{
                background: mode.color,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedMode(mode.id)}
            >
              <div className="mode-header">
                <span className="mode-icon">{mode.icon}</span>
                <div 
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(mode.difficulty) }}
                >
                  {mode.difficulty}
                </div>
              </div>
              
              <div className="mode-content">
                <h3 className="mode-title">{mode.title}</h3>
                <p className="mode-description">{mode.description}</p>
              </div>

              <div className="mode-footer">
                {mode.id === 'champion' ? (
                  <Link to="/daily/lolguess/champion" className="play-btn">
                    Zagraj teraz
                  </Link>
                ) : mode.id === 'ability' ? (
                  <Link to="/daily/lolguess/ability" className="play-btn">
                    Zagraj teraz
                  </Link>
                ) : (
                  <button className="play-btn" disabled>
                    Wkrótce
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default LoLGuess
