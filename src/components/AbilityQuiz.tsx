import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  getDailyAbility, 
  getAbilityImageUrl, 
  AbilityData,
  getAllAbilities,
  getAbilitiesByChampion
} from '../data/abilityData';
import { updateGameResult } from '../utils/userFingerprint';
import './AbilityQuiz.css';
import './DailyLobby.css';

interface GameState {
  currentAbility: AbilityData;
  userGuess: string;
  gameStatus: 'playing' | 'won' | 'lost';
  attempts: number;
  maxAttempts: number;
  hints: string[];
  showHints: boolean;
  gameDate: string;
  statsUpdated: boolean;
}

const AbilityQuiz: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [allAbilities] = useState<AbilityData[]>(getAllAbilities());
  const [suggestions, setSuggestions] = useState<AbilityData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Funkcja do określania filtra grayscale na podstawie liczby prób
  const getImageFilter = (attempts: number): string => {
    if (attempts < 5) return 'grayscale-100'; // Całkowicie szary
    if (attempts < 10) return 'grayscale-50';  // Pół szary
    return 'grayscale-0'; // Bez filtra
  };

  // Inicjalizacja gry
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const today = new Date().toLocaleDateString('pl-PL');
    const savedGame = localStorage.getItem('abilityQuizGame');
    
    if (savedGame) {
      const parsed = JSON.parse(savedGame);
      if (parsed.gameDate === today) {
        // Kontynuuj dzisiejszą grę
        setGameState(parsed);
        return;
      }
    }
    
    // Rozpocznij nową grę
    const dailyAbility = getDailyAbility();
    const newGameState: GameState = {
      currentAbility: dailyAbility,
      userGuess: '',
      gameStatus: 'playing',
      attempts: 0,
      maxAttempts: 15,
      hints: generateHints(dailyAbility),
      showHints: false,
      gameDate: today,
      statsUpdated: false
    };
    
    setGameState(newGameState);
    localStorage.setItem('abilityQuizGame', JSON.stringify(newGameState));
  };

  const generateHints = (ability: AbilityData): string[] => {
    const hints = [];
    
    // Hint 1: Typ umiejętności
    hints.push(`Typ umiejętności: ${ability.type === 'Passive' ? 'Pasywka' : ability.type}`);
    
    // Hint 2: Trudność
    hints.push(`Poziom trudności: ${ability.difficulty === 'Easy' ? 'Łatwy' : ability.difficulty === 'Medium' ? 'Średni' : 'Trudny'}`);
    
    // Hint 3: Pierwsza litera nazwy championa
    hints.push(`Pierwsza litera championa: ${ability.championName[0]}`);
    
    // Hint 4: Długość nazwy championa
    hints.push(`Długość nazwy championa: ${ability.championName.length} liter`);
    
    // Hint 5: Fragment opisu (bez HTML tagów)
    const cleanDescription = ability.description.replace(/<[^>]*>/g, '');
    const descriptionWords = cleanDescription.split(' ');
    const hintWords = descriptionWords.slice(0, 3).join(' ');
    hints.push(`Fragment opisu: "${hintWords}..."`);
    
    return hints;
  };

  const handleInputChange = (value: string) => {
    if (!gameState || gameState.gameStatus !== 'playing') return;
    
    setGameState(prev => prev ? { ...prev, userGuess: value } : null);
    
    // Pokaż sugestie
    if (value.length >= 2) {
      const filtered = allAbilities.filter(ability =>
        ability.championName.toLowerCase().includes(value.toLowerCase()) ||
        ability.abilityName.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (ability: AbilityData) => {
    if (!gameState) return;
    
    setGameState(prev => prev ? { 
      ...prev, 
      userGuess: `${ability.championName} - ${ability.abilityName}` 
    } : null);
    setShowSuggestions(false);
  };

  const handleGuess = () => {
    if (!gameState || gameState.gameStatus !== 'playing' || !gameState.userGuess.trim()) return;
    
    const guess = gameState.userGuess.toLowerCase();
    const correctChampion = gameState.currentAbility.championName.toLowerCase();
    const correctAbility = gameState.currentAbility.abilityName.toLowerCase();
    
    // Sprawdź czy zgadł championa lub nazwę umiejętności
    const isCorrectChampion = guess.includes(correctChampion);
    const isCorrectAbility = guess.includes(correctAbility);
    const isCorrect = isCorrectChampion || isCorrectAbility;
    
    const newAttempts = gameState.attempts + 1;
    
    let newStatus: 'playing' | 'won' | 'lost' = 'playing';
    if (isCorrect) {
      newStatus = 'won';
    } else if (newAttempts >= gameState.maxAttempts) {
      newStatus = 'lost';
    }

    // Automatycznie pokaż podpowiedzi po 5 próbach
    const shouldShowHints = newAttempts >= 5;
    
    const updatedGameState = {
      ...gameState,
      attempts: newAttempts,
      gameStatus: newStatus,
      showHints: shouldShowHints,
      userGuess: isCorrect ? gameState.userGuess : ''
    };
    
    setGameState(updatedGameState);
    localStorage.setItem('abilityQuizGame', JSON.stringify(updatedGameState));
    setShowSuggestions(false);
    
    // Aktualizuj statystyki gdy gra się kończy
    if (newStatus !== 'playing' && !gameState.statsUpdated) {
      updateGameResult('ability', newStatus === 'won');
      
      updatedGameState.statsUpdated = true;
      setGameState(updatedGameState);
      localStorage.setItem('abilityQuizGame', JSON.stringify(updatedGameState));
    }
  };

  const showHint = () => {
    if (!gameState) return;
    setGameState(prev => prev ? { ...prev, showHints: true } : null);
  };

  const getVisibleHints = (): string[] => {
    if (!gameState || !gameState.showHints) return [];
    
    // Pokaż hinty stopniowo na podstawie liczby prób
    const hintCount = Math.min(gameState.attempts + 1, gameState.hints.length);
    return gameState.hints.slice(0, hintCount);
  };

  if (!gameState) {
    return <div className="ability-quiz loading">Ładowanie gry...</div>;
  }

  return (
    <div className="ability-quiz">
      <header className="daily-header">
        <Link to="/daily" className="back-btn">← Powrót do lobby</Link>
        <div className="header-content">
          <h1>Daily Gierki</h1>
          <p>Codzienne wyzwania i puzzle dla graczy LoL</p>
        </div>
      </header>

      <div className="game-container">
      <div className="game-info-bar">
        <span className="attempts">🎯 Próby: {gameState.attempts}/{gameState.maxAttempts}</span>
        <span className="date">📅 {gameState.gameDate}</span>
      </div>

      <div className="ability-display">
        <div className="ability-image">
          <img 
            src={getAbilityImageUrl(gameState.currentAbility)}
            alt="Umiejętność do odgadnięcia"
            className={`ability-img ${getImageFilter(gameState.attempts)}`}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-ability.png';
            }}
          />
          <div className="ability-type-badge">
            {gameState.currentAbility.type === 'Passive' ? 'P' : gameState.currentAbility.type}
          </div>
        </div>
        
        {/* Nazwa spella po 10 próbach */}
        {gameState.attempts >= 10 && gameState.gameStatus === 'playing' && (
          <div className="spell-name-hint">
            <h3>📝 Nazwa umiejętności: <span className="spell-name">{gameState.currentAbility.abilityName}</span></h3>
          </div>
        )}
        
        {gameState.gameStatus !== 'playing' && (
          <div className="ability-reveal">
            <h3>{gameState.currentAbility.abilityName}</h3>
            <p className="champion-name">{gameState.currentAbility.championName}</p>
            <p className="ability-description">
              {gameState.currentAbility.description.replace(/<[^>]*>/g, '')}
            </p>
          </div>
        )}
      </div>

      {gameState.gameStatus === 'playing' && (
        <div className="game-controls">
          <div className="input-section">
            <div className="input-container">
              <input
                type="text"
                value={gameState.userGuess}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Wpisz nazwę championa lub umiejętności..."
                className="guess-input"
                onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
              />
              <button 
                onClick={handleGuess}
                disabled={!gameState.userGuess.trim()}
                className="guess-button"
              >
                Zgaduj! 🎯
              </button>
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((ability) => (
                  <div
                    key={ability.id}
                    className="suggestion-item"
                    onClick={() => selectSuggestion(ability)}
                  >
                    <span className="champion">{ability.championName}</span>
                    <span className="ability">{ability.abilityName}</span>
                    <span className="type">{ability.type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hint-section">
            {!gameState.showHints && (
              <button onClick={showHint} className="hint-button">
                💡 Pokaż wskazówki
              </button>
            )}
            
            {gameState.showHints && (
              <div className="hints">
                <h4>💡 Wskazówki:</h4>
                {getVisibleHints().map((hint, index) => (
                  <div key={index} className="hint-item">
                    {hint}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {gameState.gameStatus === 'won' && (
        <div className="game-result success">
          <h2>🎉 Brawo! Zgadłeś!</h2>
          <p>Udało Ci się odgadnąć w {gameState.attempts} próbach!</p>
          <div className="result-stats">
            <span>⭐ Wynik: {6 - gameState.attempts}/5 gwiazdek</span>
          </div>
        </div>
      )}

      {gameState.gameStatus === 'lost' && (
        <div className="game-result failure">
          <h2>😢 Nie tym razem!</h2>
          <p>Wykorzystałeś wszystkie próby. Spróbuj ponownie jutro!</p>
        </div>
      )}

      <div className="game-footer">
        <p>🎮 Nowa umiejętność codziennie o północy!</p>
        <p>📊 Łącznie w bazie: <strong>845 umiejętności</strong> od 169 championów</p>
      </div>
      </div>
    </div>
  );
};

export default AbilityQuiz;