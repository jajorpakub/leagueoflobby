# Polish Lobby - Gaming Portal

Polska strona z mini-grami i quizami online.

## 🎮 Dostępne Gry

- **SZEŚCIALIADA** - Odgadnij 6 najwyżej punktowanych odpowiedzi
- **SORTOWNICA** - Ułóż 8 odpowiedzi w dobrej kolejności  
- **CYTATY** - Kto to napisał?
- **KTO TO JEST?** - Odgadnij znaną osobę po wskazówkach
- **POLDLE** - Polska wersja Wordle
- **KONTEKŚCIAKI** - Odgadnij influencera na podstawie podobieństw
- **STRZELNICA** - Wystrzel 6 z 18 poprawnych odpowiedzi

## 🚀 Deployment na Render.com

### Automatyczne wdrożenie:

1. Połącz swoje repozytorium GitHub z Render.com
2. Wybierz "Web Service"
3. Ustaw następujące konfiguracje:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node.js`

### Zmienne środowiskowe (opcjonalne):
```
NODE_ENV=production
```

## 🛠️ Rozwój lokalny

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim  
npm run dev

# Budowanie na produkcję
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## 📦 Struktura projektu

```
src/
├── components/
│   ├── Lobby.tsx      # Główna strona lobby
│   ├── Lobby.css      
│   ├── GamePage.tsx   # Strona pojedynczej gry
│   └── GamePage.css
├── App.tsx            # Router aplikacji
├── main.tsx           # Entry point
└── index.css          # Globalne style
```

## 🎨 Technologie

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **CSS3** - Styling with gradients and animations

## 📱 Responsywność

Strona jest w pełni responsywna i działa na:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (<768px)

## 🔧 Dodawanie nowych gier

1. Dodaj nową grę do tablicy `games` w `Lobby.tsx`
2. Dodaj dane gry do `gameData` w `GamePage.tsx` 
3. Stwórz komponent gry w folderze `components/`
4. Zaktualizuj router w `App.tsx`

## 📄 Licencja

Ten projekt jest stworzony dla celów edukacyjnych i rozrywkowych.