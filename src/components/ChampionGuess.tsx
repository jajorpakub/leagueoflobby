import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ChampionGuess.css';
import { 
  CHAMPION_STATIC_DATA, 
  ChampionStaticData, 
  getDailyChampion, 
  getAllChampionNames 
} from '../data/championData';
import { updateGameResult } from '../utils/userFingerprint';

interface GuessResult {
  champion: ChampionStaticData;
  isCorrect: boolean;
  genderMatch: 'correct' | 'incorrect';
  positionMatch: 'correct' | 'partial' | 'incorrect';
  speciesMatch: 'correct' | 'incorrect';
  resourceMatch: 'correct' | 'incorrect';
  rangeMatch: 'correct' | 'incorrect';
  regionMatch: 'correct' | 'partial' | 'incorrect';
  yearMatch: 'correct' | 'partial' | 'incorrect';
}

const ChampionGuess: React.FC = () => {
  const [dailyChampion, setDailyChampion] = useState<ChampionStaticData | null>(null);
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filteredChampions, setFilteredChampions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(false);
  const [todayResult, setTodayResult] = useState<{won: boolean, attempts: number} | null>(null);

  // Initialize daily champion and check if already played
  useEffect(() => {
    const today = new Date();
    const champion = getDailyChampion(today);
    setDailyChampion(champion);
    
    // Check if already played today
    const savedResult = loadTodayResult();
    if (savedResult && savedResult.champion === champion.name) {
      setAlreadyPlayedToday(true);
      setTodayResult({ won: savedResult.won, attempts: savedResult.attempts });
      setGameWon(savedResult.won);
      setGameLost(!savedResult.won);
      // Update stats ONLY if not already updated
      if (!savedResult.statsUpdated) {
        updateGameResult('champion', savedResult.won);
        // Mark as updated
        savedResult.statsUpdated = true;
        localStorage.setItem(getTodayKey(), JSON.stringify(savedResult));
      }
    }
    
    setLoading(false);
    console.log('Daily Champion:', champion.name);
  }, []);

  // Filter champions based on input
  useEffect(() => {
    if (guess.length > 0) {
      const filtered = getAllChampionNames().filter(name =>
        name.toLowerCase().includes(guess.toLowerCase()) &&
        !guesses.some(g => g.champion.name === name)
      );
      setFilteredChampions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredChampions([]);
      setShowSuggestions(false);
    }
  }, [guess, guesses]);

  // Local storage functions
  const getTodayKey = () => {
    const today = new Date();
    return `championGuess_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
  };

  const saveTodayResult = (won: boolean, attempts: number) => {
    const key = getTodayKey();
    const result = { won, attempts, champion: dailyChampion?.name, statsUpdated: true };
    localStorage.setItem(key, JSON.stringify(result));
  };

  const loadTodayResult = () => {
    const key = getTodayKey();
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  };

  const compareChampions = (guessedChampion: ChampionStaticData, target: ChampionStaticData): GuessResult => {
    const isCorrect = guessedChampion.name === target.name;
    const genderMatch = guessedChampion.gender === target.gender ? 'correct' : 'incorrect';

    let positionMatch: 'correct' | 'partial' | 'incorrect' = 'incorrect';
    const hasPositionOverlap = guessedChampion.position.some(pos => target.position.includes(pos));
    if (JSON.stringify(guessedChampion.position.sort()) === JSON.stringify(target.position.sort())) {
      positionMatch = 'correct';
    } else if (hasPositionOverlap) {
      positionMatch = 'partial';
    }

    const speciesMatch = guessedChampion.species === target.species ? 'correct' : 'incorrect';
    const resourceMatch = guessedChampion.resource === target.resource ? 'correct' : 'incorrect';
    const rangeMatch = guessedChampion.rangeType === target.rangeType ? 'correct' : 'incorrect';

    let regionMatch: 'correct' | 'partial' | 'incorrect' = 'incorrect';
    const hasRegionOverlap = guessedChampion.regions.some(region => target.regions.includes(region));
    if (JSON.stringify(guessedChampion.regions.sort()) === JSON.stringify(target.regions.sort())) {
      regionMatch = 'correct';
    } else if (hasRegionOverlap) {
      regionMatch = 'partial';
    }

    let yearMatch: 'correct' | 'partial' | 'incorrect' = 'incorrect';
    const yearDiff = Math.abs(guessedChampion.releaseYear - target.releaseYear);
    if (yearDiff === 0) {
      yearMatch = 'correct';
    } else if (yearDiff <= 2) {
      yearMatch = 'partial';
    }

    return {
      champion: guessedChampion,
      isCorrect,
      genderMatch,
      positionMatch,
      speciesMatch,
      resourceMatch,
      rangeMatch,
      regionMatch,
      yearMatch
    };
  };

  const handleGuess = (championName?: string) => {
    const nameToGuess = championName || guess.trim();
    
    if (!nameToGuess || !dailyChampion) return;

    const guessedChampionData = CHAMPION_STATIC_DATA[nameToGuess];
    if (!guessedChampionData) {
      alert('Nieprawidłowa nazwa championa!');
      return;
    }

    if (guesses.some(g => g.champion.name === nameToGuess)) {
      alert('Już zgadywałeś tego championa!');
      return;
    }

    const result = compareChampions(guessedChampionData, dailyChampion);
    const newGuesses = [...guesses, result];
    setGuesses(newGuesses);
    setGuess('');
    setShowSuggestions(false);

    if (result.isCorrect) {
      setGameWon(true);
      saveTodayResult(true, newGuesses.length);
      updateGameResult('champion', true);
    } else if (newGuesses.length >= 10) {
      setGameLost(true);
      saveTodayResult(false, newGuesses.length);
      updateGameResult('champion', false);
    }
  };

  const handleSuggestionClick = (championName: string) => {
    handleGuess(championName);
  };

  const getYearHint = (guessedYear: number, targetYear: number): string => {
    if (guessedYear < targetYear) return '⬆️';
    if (guessedYear > targetYear) return '⬇️';
    return '';
  };

  if (loading) {
    return (
      <div className="champion-guess">
        <div className="loading">Ładowanie gry...</div>
      </div>
    );
  }

  return (
    <div className="champion-guess">
      <header className="header">
        <Link to="/daily/lolguess" className="back-btn">
          ← Powrót
        </Link>
        <h1>Champion Guess</h1>
        <div className="attempts">
          Próby: {guesses.length}/10
        </div>
      </header>

      <main className="main-content">
        {alreadyPlayedToday && dailyChampion && todayResult && (
          <div className="already-played-screen">
            <h2>🎮 Już grałeś dzisiaj!</h2>
            <div className="today-result">
              <div className="champion-reveal">
                <img 
                  src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${dailyChampion.name.replace(/[^a-zA-Z0-9]/g, '')}.png`}
                  alt={dailyChampion.name}
                  className="result-portrait"
                />
                <h3>Dzisiejszy champion: {dailyChampion.name}</h3>
                {todayResult.won ? (
                  <p className="win-text">✅ Zgadłeś w {todayResult.attempts} próbach!</p>
                ) : (
                  <p className="lose-text">❌ Nie udało się zgadnąć w 10 próbach</p>
                )}
                <p className="next-game">Następna gra o północy! 🕛</p>
              </div>
            </div>
            <Link to="/daily/lolguess" className="back-to-menu-btn">
              Powrót do menu
            </Link>
          </div>
        )}

        {!alreadyPlayedToday && !gameWon && !gameLost && (
          <div className="input-section">
            <div className="input-wrapper">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Wpisz nazwę championa..."
                className="guess-input"
                onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
                autoComplete="off"
              />
              {showSuggestions && filteredChampions.length > 0 && (
                <div className="suggestions">
                  {filteredChampions.map((championName) => (
                    <div
                      key={championName}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(championName)}
                    >
                      <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championName.replace(/[^a-zA-Z0-9]/g, '')}.png`}
                        alt={championName}
                        className="suggestion-image"
                        onError={(e) => {
                          e.currentTarget.src = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championName.replace(/\W/g, '')}.png`;
                        }}
                      />
                      <span>{championName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => handleGuess()} className="guess-button">
              Sprawdź
            </button>
          </div>
        )}

        {!alreadyPlayedToday && guesses.length > 0 && (
          <div className="results-section">
            <div className="table-header">
              <div className="header-cell">Champion</div>
              <div className="header-cell">♂♀ Płeć</div>
              <div className="header-cell">⚔️ Pozycja</div>
              <div className="header-cell">🧬 Gatunek</div>
              <div className="header-cell">⚡ Zasób</div>
              <div className="header-cell">🎯 Zasięg</div>
              <div className="header-cell">🗺️ Region</div>
              <div className="header-cell">📅 Rok</div>
            </div>

            <div className="results-table">
              {guesses.map((result, index) => (
                <div key={index} className="table-row">
                  <div className={`result-cell champion-cell ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="champion-portrait">
                      <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${result.champion.name.replace(/[^a-zA-Z0-9]/g, '')}.png`}
                        alt={result.champion.name}
                        onError={(e) => {
                          e.currentTarget.src = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${result.champion.name.replace(/\W/g, '')}.png`;
                        }}
                      />
                    </div>
                    <div className="champion-name">{result.champion.name}</div>
                  </div>

                  <div className={`result-cell ${result.genderMatch}`}>
                    <div className="cell-icon">♂♀</div>
                    <div className="cell-text">{result.champion.gender}</div>
                  </div>

                  <div className={`result-cell ${result.positionMatch}`}>
                    <div className="cell-icon">⚔️</div>
                    <div className="cell-text">{result.champion.position.join(', ')}</div>
                  </div>

                  <div className={`result-cell ${result.speciesMatch}`}>
                    <div className="cell-icon">🧬</div>
                    <div className="cell-text">{result.champion.species}</div>
                  </div>

                  <div className={`result-cell ${result.resourceMatch}`}>
                    <div className="cell-icon">⚡</div>
                    <div className="cell-text">{result.champion.resource}</div>
                  </div>

                  <div className={`result-cell ${result.rangeMatch}`}>
                    <div className="cell-icon">🎯</div>
                    <div className="cell-text">{result.champion.rangeType}</div>
                  </div>

                  <div className={`result-cell ${result.regionMatch}`}>
                    <div className="cell-icon">🗺️</div>
                    <div className="cell-text">{result.champion.regions.join(', ')}</div>
                  </div>

                  <div className={`result-cell ${result.yearMatch}`}>
                    <div className="cell-icon">📅</div>
                    <div className="cell-text">
                      {result.champion.releaseYear}
                      {result.yearMatch === 'partial' && dailyChampion && (
                        <span className="year-hint">
                          {getYearHint(result.champion.releaseYear, dailyChampion.releaseYear)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!alreadyPlayedToday && gameWon && dailyChampion && (
          <div className="victory-screen">
            <h2>🎉 Gratulacje!</h2>
            <div className="champion-reveal">
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${dailyChampion.name.replace(/[^a-zA-Z0-9]/g, '')}.png`}
                alt={dailyChampion.name}
                className="victory-portrait"
              />
              <h3>{dailyChampion.name}</h3>
              <p>Znalazłeś dzisiejszego championa w {guesses.length} próbach!</p>
            </div>
            <Link to="/daily/lolguess" className="play-again-btn">
              Powrót do menu
            </Link>
          </div>
        )}

        {!alreadyPlayedToday && gameLost && dailyChampion && (
          <div className="defeat-screen">
            <h2>😢 Nie udało się!</h2>
            <div className="champion-reveal">
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${dailyChampion.name.replace(/[^a-zA-Z0-9]/g, '')}.png`}
                alt={dailyChampion.name}
                className="defeat-portrait"
              />
              <h3>Dzisiejszym championem był: {dailyChampion.name}</h3>
              <p>Spróbuj ponownie jutro!</p>
            </div>
            <Link to="/daily/lolguess" className="play-again-btn">
              Powrót do menu
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default ChampionGuess;