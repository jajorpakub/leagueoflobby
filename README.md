# 🎮 League of Lobby

<div align="center">

![League of Legends](https://img.shields.io/badge/League%20of%20Legends-Analytics-gold?style=for-the-badge&logo=riot-games)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Riot API](https://img.shields.io/badge/Riot%20Games%20API-Official-red?style=for-the-badge)

**Zaawansowana aplikacja do analizy statystyk graczy League of Legends z unikalnym systemem oceny wydajności**

[🚀 Demo](#-funkcje) • [📊 Funkcje](#-funkcje) • [🛠️ Instalacja](#️-instalacja) • [💻 Użycie](#-użycie)

</div>

---

## 📋 Spis Treści

- [🎯 O Projekcie](#-o-projekcie)
- [✨ Funkcje](#-funkcje)
- [🛠️ Technologie](#️-technologie)
- [🚀 Instalacja](#-instalacja)
- [💻 Użycie](#-użycie)
- [🎨 Zrzuty Ekranu](#-zrzuty-ekranu)
- [🔧 Konfiguracja](#-konfiguracja)
- [📈 Roadmapa](#-roadmapa)
- [🤝 Współpraca](#-współpraca)

---

## 🎯 O Projekcie

**League of Lobby** to nowoczesna aplikacja webowa do kompleksowej analizy statystyk graczy League of Legends. Aplikacja wykorzystuje oficjalne API Riot Games do pobierania danych w czasie rzeczywistym i prezentuje je w intuicyjny, wizualnie atrakcyjny sposób.

### 🌟 Unikalny System "Długość Fujary"

Nasza aplikacja zawiera humorystyczny, ale precyzyjny system oceny wydajności gracza oparty na KDA i winrate, przedstawiony w formie kolorowego paska z pomiarami w centymetrach - im gorsze statystyki, tym... dłuższa fujara! 😄

---

## ✨ Funkcje

### 🔍 **Zaawansowane Wyszukiwanie**
- **Smart Autocomplete** - inteligentne podpowiedzi oparte na:
  - 🕐 Ostatnio wyszukiwanych gracze
  - 👥 Gracze z twoich meczów (teammates/przeciwnicy)
  - ⭐ Popularni gracze w regionie
  - 🔍 Fuzzy matching i warianty nazw
- **Multi-region Support** - obsługa wszystkich regionów LoL
- **Riot ID Format** - pełne wsparcie dla `Nick#TAG`

### 📊 **Kompleksowe Statystyki**
- **Aktualna Ranga** - Solo/Duo i Flex queue
- **KDA Analysis** - szczegółowa analiza zabójstw/śmierci/asyst
- **Winrate Calculation** - procent wygranych na podstawie rzeczywistych meczów
- **CS Score** - średnia ilość creepów na minutę
- **Average Damage** - średnie obrażenia na grę (ŚDG)
- **Most Played Role** - automatyczna detekcja najczęściej granej pozycji

### 🎯 **System Oceny Wydajności "Fujara"**
- **Algorytm Reverse Logic** - im gorsze statystyki, tym większa "fujara"
- **Kolorowy Progress Bar** - wizualny indicator z gradientem
- **Pomiary w Centymetrach** - realistyczna skala 0-30cm
- **Real-time Calculation** - na podstawie ostatnich 10 meczów

### 🎮 **Historia Meczów**
- **Szczegółowe Match Data** - pełne informacje o każdym meczu
- **Champion Analysis** - zdjęcia i statystyki championów
- **Items Showcase** - wizualizacja itemów z każdego mecza
- **Timeline Information** - czas trwania, tryb gry, data
- **Performance Metrics** - damage dealt, gold earned, vision score

### 🚀 **Nowoczesny UX/UI**
- **Responsive Design** - działa na wszystkich urządzeniach
- **Dark Theme** - elegancki ciemny motyw z efektami
- **Animated Gradients** - żywe animacje tekstu i elementów
- **Loading States** - płynne przejścia i feedbacki
- **Error Handling** - informacyjne komunikaty błędów

---

## 🛠️ Technologie

### Frontend
- **React 18** - nowoczesny framework UI
- **TypeScript** - statyczne typowanie
- **CSS3** - zaawansowany styling z animacjami
- **Vite** - szybki bundler i dev server

### Backend/API
- **Riot Games API** - oficjalne endpointy:
  - `account-v1` - Riot ID resolution
  - `summoner-v4` - informacje o summonerze
  - `match-v5` - historia meczów
  - `league-v4` - rankingi
  - `champion-mastery-v4` - mastery championów

### Storage & Performance
- **LocalStorage** - cache dla suggestions i recent searches
- **Synchronous Loading** - reliable data fetching
- **Debounced Search** - optymalizacja wydajności
- **Memory Management** - smart caching strategies

---

## 🚀 Instalacja

### Wymagania
- **Node.js** 16.x lub nowszy
- **npm** lub **yarn**
- **Riot Games API Key** (bezpłatny)

### Kroki

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/your-username/league-of-lobby.git
cd league-of-lobby
```

2. **Zainstaluj dependencies**
```bash
npm install
# lub
yarn install
```

3. **Konfiguracja API Key**
```bash
# Skopiuj przykładowy plik konfiguracji
cp .env.example .env

# Edytuj .env i dodaj swój API key
VITE_RIOT_API_KEY=twój_api_key_tutaj
```

4. **Uruchom development server**
```bash
npm run dev
# lub
yarn dev
```

5. **Otwórz przeglądarkę**
```
http://localhost:5173
```

### Build Production
```bash
npm run build
npm run preview
```

---

## 💻 Użycie

### 🔍 Wyszukiwanie Gracza

1. **Wpisz nick** w pole wyszukiwania
2. **Wybierz tag** (automatyczne uzupełnianie regionu)
3. **Skorzystaj z suggestions** - system podpowie podobne nicki
4. **Kliknij "Szukaj"** lub naciśnij Enter

### 📊 Analiza Statystyk

Po załadowaniu gracza zobaczysz:
- **Header z podstawowymi info** - avatar, level, ranga
- **Sekcja "Fujara"** - humorystyczna ocena wydajności
- **Grid ze statystykami** - KDA, winrate, CS, damage, rola
- **Historia meczów** - ostatnie 10 gier z szczegółami

### 🎯 System "Fujara"

```
📏 Skala Fujary:
🟢 0-10cm   - Excellent (KDA > 3.0, Winrate > 65%)
🟡 10-20cm  - Good (KDA > 2.0, Winrate > 50%)
🟠 20-25cm  - Average (KDA > 1.0, Winrate > 40%)
🔴 25-30cm  - Needs Improvement (KDA < 1.0, Winrate < 40%)
```

---

## 🎨 Zrzuty Ekranu

### 🏠 Główny Ekran
*[Miejsce na screenshot głównego interfejsu]*

### 🔍 Smart Autocomplete
*[Miejsce na screenshot dropdown suggestions]*

### 📊 Dashboard Gracza
*[Miejsce na screenshot z pełnymi statystykami]*

### 📱 Mobile View
*[Miejsce na screenshot responsive design]*

---

## 🔧 Konfiguracja

### Environment Variables
```env
# Riot Games API
VITE_RIOT_API_KEY=RGAPI-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Optional: Custom API endpoints
VITE_API_BASE_URL=https://api.riotgames.com

# Optional: Debug mode
VITE_DEBUG_MODE=false
```

### Supported Regions
```typescript
'eun1' | 'euw1' | 'na1' | 'kr' | 'jp1' | 'br1' | 
'la1' | 'la2' | 'oc1' | 'tr1' | 'ru'
```

---

## 📈 Roadmapa

### 🚧 W Trakcie
- [ ] **Champion Mastery Charts** - wykresy mastery punktów
- [ ] **Detailed Match Timeline** - timeline wydarzeń w meczu
- [ ] **Comparison Tool** - porównanie dwóch graczy

### 🎯 Planowane
- [ ] **Team Analysis** - analiza całych drużyn
- [ ] **Tournament Mode** - śledzenie turniejów
- [ ] **Achievement System** - system osiągnięć
- [ ] **Export to PDF** - raporty do pobrania
- [ ] **Social Features** - udostępnianie statystyk
- [ ] **Live Game Tracker** - śledzenie gier na żywo

### 💡 Pomysły na Przyszłość
- [ ] **Machine Learning Predictions** - przewidywanie wyników
- [ ] **VOD Review Integration** - analiza nagrań
- [ ] **Coaching Tools** - narzędzia dla trenerów
- [ ] **Mobile App** - natywna aplikacja mobilna

---

## 🤝 Współpraca

Zachęcamy do współpracy! Jeśli chcesz przyczynić się do rozwoju projektu:

### 🐛 Zgłaszanie Błędów
1. Sprawdź czy błąd nie został już zgłoszony
2. Użyj template do issue
3. Dołącz szczegółowy opis i kroki reprodukcji

### 💡 Sugestie Funkcji
1. Otwórz Feature Request issue
2. Opisz przypadek użycia
3. Dołącz mockupy jeśli możliwe

### 🔧 Pull Requests
1. Fork repozytorium
2. Stwórz feature branch (`git checkout -b feature/amazing-feature`)
3. Commit zmiany (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Otwórz Pull Request

### 📝 Coding Standards
- **TypeScript** - używaj statycznego typowania
- **ESLint** - przestrzegaj reguł lintera
- **Prettier** - formatuj kod automatycznie
- **Conventional Commits** - używaj standardowych commitów

---

## 📄 Licencja

Ten projekt jest na licencji **MIT** - zobacz [LICENSE](LICENSE) dla szczegółów.

---

## 🙏 Podziękowania

- **Riot Games** - za udostępnienie oficjalnego API
- **React Team** - za wspaniały framework
- **Community** - za feedback i sugestie

---

## 📞 Kontakt

- **GitHub Issues** - zgłaszanie błędów i sugestii
- **Email** - [your-email@example.com](mailto:your-email@example.com)
- **Discord** - [Link do serwera Discord](https://discord.gg/your-server)

---

<div align="center">

**Zrobione z ❤️ dla społeczności League of Legends**

⭐ **Jeśli podoba Ci się projekt, zostaw gwiazdkę!** ⭐

</div>