# 🎮 League of Lobby

<div align="center">

![League of Legends](https://img.shields.io/badge/League%20of%20Legends-Analytics-gold?style=for-the-badge&logo=riot-games)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Riot API](https://img.shields.io/badge/Riot%20Games%20API-Official-red?style=for-the-badge)

**Zaawansowana aplikacja do analizy statystyk graczy League of Legends z unikalnym systemem oceny wydajności**

</div>

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

---

## � Jak Korzystać

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

### 🎯 Skala "Fujary"

```
📏 Skala Fujary (algorytm reverse logic):
🟢 0-10cm   - Potrzebuje poprawy (KDA < 1.0, Winrate < 40%)
🟡 10-20cm  - Średnio (KDA > 1.0, Winrate > 40%)
🟠 20-25cm  - Dobrze (KDA > 2.0, Winrate > 50%)
🔴 25-30cm  - Excellent (KDA > 3.0, Winrate > 65%)
```

*Im gorsze statystyki, tym dłuższa fujara! �*

---

<div align="center">

p.s to wszystko robi ai xd to się rozwija mocno aha

</div>