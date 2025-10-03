import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDailyWord, getGameDate } from '../data/polishWords';
import { updateGameResult } from '../utils/userFingerprint';
import './Wordle.css';
import './DailyLobby.css';

interface WordleGameState {
  targetWord: string;
  currentGuess: string;
  guesses: string[];
  gameStatus: 'playing' | 'won' | 'lost';
  currentRow: number;
  gameDate: string;
}

interface LetterState {
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'empty';
}

const Wordle: React.FC = () => {
  const [gameState, setGameState] = useState<WordleGameState | null>(null);
  const [shakeRow, setShakeRow] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState<string>('');

  // Inicjalizacja gry
  useEffect(() => {
    const today = getGameDate();
    const savedGame = localStorage.getItem(`wordle_${today}`);
    
    if (savedGame) {
      const parsed = JSON.parse(savedGame);
      setGameState(parsed);
    } else {
      const newGame: WordleGameState = {
        targetWord: getDailyWord(),
        currentGuess: '',
        guesses: [],
        gameStatus: 'playing',
        currentRow: 0,
        gameDate: today
      };
      setGameState(newGame);
      localStorage.setItem(`wordle_${today}`, JSON.stringify(newGame));
    }
  }, []);

  // Zapisywanie stanu gry
  useEffect(() => {
    if (gameState) {
      localStorage.setItem(`wordle_${gameState.gameDate}`, JSON.stringify(gameState));
      
      // Aktualizuj statystyki gdy gra się kończy
      if (gameState.gameStatus !== 'playing') {
        updateGameResult(
          'champion', // Używamy 'champion' jako placeholder dla wordle
          gameState.gameStatus === 'won'
        );
      }
    }
  }, [gameState]);

  // Obsługa klawiatury
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameState || gameState.gameStatus !== 'playing') return;

      if (e.key === 'Enter') {
        handleSubmitGuess();
      } else if (e.key === 'Backspace') {
        handleDeleteLetter();
      } else if (/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]$/.test(e.key)) {
        handleAddLetter(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState]);

  const handleAddLetter = (letter: string) => {
    if (!gameState || gameState.currentGuess.length >= 6) return;
    
    setGameState(prev => prev ? {
      ...prev,
      currentGuess: prev.currentGuess + letter
    } : null);
  };

  const handleDeleteLetter = () => {
    if (!gameState) return;
    
    setGameState(prev => prev ? {
      ...prev,
      currentGuess: prev.currentGuess.slice(0, -1)
    } : null);
  };

  const handleSubmitGuess = () => {
    if (!gameState || gameState.currentGuess.length !== 6) {
      showTemporaryMessage('Słowo musi mieć 6 liter!');
      return;
    }

    // Sprawdzamy tylko czy słowo składa się z liter (bez sprawdzania słownika)
    if (!/^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+$/.test(gameState.currentGuess)) {
      showTemporaryMessage('Słowo może zawierać tylko litery!');
      setShakeRow(gameState.currentRow);
      setTimeout(() => setShakeRow(null), 600);
      return;
    }

    const newGuesses = [...gameState.guesses, gameState.currentGuess];
    const isWin = gameState.currentGuess === gameState.targetWord;
    const isLoss = newGuesses.length >= 6 && !isWin;

    setGameState(prev => prev ? {
      ...prev,
      guesses: newGuesses,
      currentGuess: '',
      currentRow: prev.currentRow + 1,
      gameStatus: isWin ? 'won' : isLoss ? 'lost' : 'playing'
    } : null);

    if (isWin) {
      showTemporaryMessage(`Brawo! Odgadłeś w ${newGuesses.length} próbach!`);
    } else if (isLoss) {
      showTemporaryMessage(`Koniec gry! Słowo to: ${gameState.targetWord}`);
    }
  };

  const showTemporaryMessage = (message: string) => {
    setShowMessage(message);
    setTimeout(() => setShowMessage(''), 3000);
  };

  const getLetterState = (letter: string, position: number, guess: string): LetterState['state'] => {
    if (!gameState) return 'empty';
    
    const targetWord = gameState.targetWord;
    
    // Algorytm jak w prawdziwym Wordle
    const result: LetterState['state'][] = new Array(6).fill('absent');
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    
    // Krok 1: Oznacz wszystkie dokładne dopasowania (zielone)
    for (let i = 0; i < 6; i++) {
      if (guessLetters[i] === targetLetters[i]) {
        result[i] = 'correct';
        targetLetters[i] = ''; // Usuń z dostępnych liter
      }
    }
    
    // Krok 2: Sprawdź pozostałe litery czy są dostępne gdzie indziej (żółte)
    for (let i = 0; i < 6; i++) {
      if (result[i] === 'absent') {
        const targetIndex = targetLetters.indexOf(guessLetters[i]);
        if (targetIndex !== -1) {
          result[i] = 'present';
          targetLetters[targetIndex] = ''; // Usuń z dostępnych liter
        }
      }
    }
    
    return result[position];
  };

  const renderGrid = () => {
    if (!gameState) return null;

    const rows = [];
    
    for (let i = 0; i < 6; i++) {
      const guess = i < gameState.guesses.length ? gameState.guesses[i] : 
                   i === gameState.currentRow ? gameState.currentGuess : '';
      const isCurrentRow = i === gameState.currentRow;
      const isShaking = shakeRow === i;
      
      const letters = [];
      for (let j = 0; j < 6; j++) {
        const letter = guess[j] || '';
        const state = i < gameState.guesses.length ? 
                     getLetterState(letter, j, guess) : 'empty';
        
        letters.push(
          <div
            key={j}
            className={`letter-tile ${state} ${isCurrentRow && letter ? 'filled' : ''}`}
          >
            {letter}
          </div>
        );
      }
      
      rows.push(
        <div
          key={i}
          className={`word-row ${isShaking ? 'shake' : ''}`}
        >
          {letters}
        </div>
      );
    }
    
    return rows;
  };

  const renderKeyboard = () => {
    if (!gameState) return null;

    const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
    ];

    // Sprawdź stan każdej litery na podstawie dotychczasowych prób
    const getKeyState = (key: string): string => {
      let state = 'unused';
      
      gameState.guesses.forEach(guess => {
        guess.split('').forEach((letter, index) => {
          if (letter === key) {
            const letterState = getLetterState(letter, index, guess);
            if (letterState === 'correct' && state !== 'correct') {
              state = 'correct';
            } else if (letterState === 'present' && state === 'unused') {
              state = 'present';
            } else if (letterState === 'absent' && state === 'unused') {
              state = 'absent';
            }
          }
        });
      });
      
      return state;
    };

    return (
      <div className="keyboard">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
              <button
                key={key}
                className={`key ${key.length > 1 ? 'special-key' : ''} ${getKeyState(key)}`}
                onClick={() => {
                  if (key === 'ENTER') {
                    handleSubmitGuess();
                  } else if (key === 'BACKSPACE') {
                    handleDeleteLetter();
                  } else {
                    handleAddLetter(key);
                  }
                }}
                disabled={gameState.gameStatus !== 'playing'}
              >
                {key === 'BACKSPACE' ? '⌫' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

  if (!gameState) {
    return <div className="wordle loading">Ładowanie gry...</div>;
  }

  return (
    <div className="wordle">
      <header className="daily-header">
        <Link to="/daily" className="back-btn">← Powrót do lobby</Link>
        <div className="header-content">
          <h1>Daily Gierki</h1>
          <p>Codzienne wyzwania i puzzle dla graczy LoL</p>
        </div>
      </header>

      <div className="game-container">
        <div className="game-info-bar">
          <span className="attempts">📝 Próby: {gameState.guesses.length}/6</span>
          <span className="date">📅 {gameState.gameDate}</span>
        </div>

        {showMessage && (
          <div className="message-popup">
            {showMessage}
          </div>
        )}

        <div className="game-grid">
          {renderGrid()}
        </div>

        {renderKeyboard()}

        {gameState.gameStatus !== 'playing' && (
          <div className="game-result">
            <h3>
              {gameState.gameStatus === 'won' ? '🎉 Brawo!' : '😔 Następnym razem!'}
            </h3>
            <p>
              {gameState.gameStatus === 'won' 
                ? `Odgadłeś słowo "${gameState.targetWord}" w ${gameState.guesses.length} próbach!`
                : `Słowo to: "${gameState.targetWord}"`
              }
            </p>
            <p className="next-game">Następne słowo jutro!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wordle;