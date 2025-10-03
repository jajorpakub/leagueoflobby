// Prosty fingerprinting przeglądarki do trackingu passy użytkownika
export function generateUserFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Canvas fingerprint
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('LoLGuess fingerprint 🎮', 2, 2);
  }
  const canvasFingerprint = canvas.toDataURL();
  
  // Zbieramy podstawowe info o przeglądarce
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    platform: navigator.platform,
    canvas: canvasFingerprint.slice(-50), // Ostatnie 50 znaków dla oszczędności
    localStorage: typeof Storage !== 'undefined',
    sessionStorage: typeof sessionStorage !== 'undefined'
  };
  
  // Tworzymy hash z tych danych
  const fingerprintString = JSON.stringify(fingerprint);
  return btoa(fingerprintString).slice(0, 16); // 16 znaków hash
}

export function getUserId(): string {
  let userId = localStorage.getItem('lolguess_user_id');
  
  if (!userId) {
    userId = generateUserFingerprint();
    localStorage.setItem('lolguess_user_id', userId);
  }
  
  return userId;
}

// Struktura danych passy użytkownika
export interface UserStats {
  userId: string;
  lastPlayDate: string;
  streaks: {
    champion: number;
    ability: number;
    splash: number;
    quote: number;
  };
  totalGames: {
    champion: number;
    ability: number;
    splash: number;
    quote: number;
  };
  todayPlayed: {
    champion: boolean;
    ability: boolean;
    splash: boolean;
    quote: boolean;
  };
}

export function getUserStats(): UserStats {
  const userId = getUserId();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const savedStats = localStorage.getItem(`lolguess_stats_${userId}`);
  
  if (savedStats) {
    const stats: UserStats = JSON.parse(savedStats);
    
    // Reset dziennych gier jeśli nowy dzień
    if (stats.lastPlayDate !== today) {
      stats.todayPlayed = {
        champion: false,
        ability: false,
        splash: false,
        quote: false
      };
      stats.lastPlayDate = today;
      saveUserStats(stats);
    }
    
    return stats;
  }
  
  // Nowy użytkownik
  const newStats: UserStats = {
    userId,
    lastPlayDate: today,
    streaks: {
      champion: 0,
      ability: 0,
      splash: 0,
      quote: 0
    },
    totalGames: {
      champion: 0,
      ability: 0,
      splash: 0,
      quote: 0
    },
    todayPlayed: {
      champion: false,
      ability: false,
      splash: false,
      quote: false
    }
  };
  
  saveUserStats(newStats);
  return newStats;
}

export function saveUserStats(stats: UserStats): void {
  localStorage.setItem(`lolguess_stats_${stats.userId}`, JSON.stringify(stats));
}

export function updateGameResult(
  gameMode: 'champion' | 'ability' | 'splash' | 'quote',
  won: boolean
): UserStats {
  const stats = getUserStats();
  
  // Oznacz że grał dzisiaj w ten tryb
  stats.todayPlayed[gameMode] = true;
  stats.totalGames[gameMode]++;
  
  // Aktualizuj passę
  if (won) {
    stats.streaks[gameMode]++;
  } else {
    stats.streaks[gameMode] = 0;
  }
  
  saveUserStats(stats);
  return stats;
}

export function canPlayToday(gameMode: 'champion' | 'ability' | 'splash' | 'quote'): boolean {
  const stats = getUserStats();
  return !stats.todayPlayed[gameMode];
}