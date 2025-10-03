// Polskie 6-literowe słowa dla gry WORDLE - możliwe odpowiedzi
export const POLISH_WORDS: string[] = [
  'KOCHAM', 'MIŁOŚĆ', 'SŁOŃCE', 'KSIĘŻYC', 'PLANETA', 'GWIAZDA',
  'GÓRALE', 'MORZE', 'RZEKA', 'DESZCZ', 'ŚNIEG', 'WIATR',
  'DRZEWA', 'KWIATY', 'OGRÓD', 'TRAWY', 'ŁĄKA', 'POLE',
  'MIASTO', 'ULICA', 'SZKOŁA', 'PRACA', 'BIURO', 'SKLEP',
  'RODZINA', 'MATKA', 'OJCIEC', 'BRAT', 'SIOSTRA', 'DZIAD',
  'BABCIA', 'DZIECKO', 'NIEMOWLĘ', 'CZŁOWIEK', 'LUDZIE', 'OSOBA',
  'KSIĄŻKA', 'GAZETA', 'TEKST', 'LITERY', 'SŁOWA', 'ZDANIE',
  'MUZYKA', 'PIOSENKA', 'TANIEC', 'OPERA', 'TEATR', 'KINO',
  'OBRAZ', 'RZEŹBA', 'SZTUKA', 'FARBY', 'PĘDZEL', 'PŁÓTNO',
  'GITARY', 'PIANINO', 'SKRZYPCE', 'FLETY', 'BĘBNY', 'ORKIESTRA',
  'SAMOCHÓD', 'AUTOBUS', 'POCIĄG', 'SAMOLOT', 'STATEK', 'ROWER',
  'MOTOCYKL', 'TRAMWAJ', 'METRO', 'TAKSÓWKA', 'CIĘŻARÓWKA', 'FURGONETKA',
  'KOMPUTER', 'TELEFON', 'LAPTOP', 'TABLET', 'MYSZ', 'KLAWIATURA'
];

// Szerszy słownik słów dozwolonych do wpisywania
export const ALLOWED_WORDS: string[] = [
  // Wszystkie słowa z odpowiedzi
  ...POLISH_WORDS,
  // Dodatkowe popularne 6-literowe słowa
  'POLSKA', 'EUROPA', 'AMERYKA', 'AZJA', 'AFRYKA', 'KANADA',
  'FRANCJA', 'NIEMCY', 'WŁOCHY', 'HISZPANIA', 'ROSJA', 'CHINY',
  'JAPONIA', 'KOREA', 'INDIE', 'BRAZYLIA', 'MEKSYK', 'EGIPT',
  'TURCJA', 'GRECJA', 'WĘGRY', 'CZECHY', 'SŁOWACJA', 'RUMUNIA',
  'BUŁGARIA', 'SERBIA', 'CHORWACJA', 'SŁOWENIA', 'LITWA', 'ŁOTWA',
  'ESTONIA', 'FINLANDIA', 'SZWECJA', 'NORWEGIA', 'DANIA', 'ISLANDIA',
  'IRLANDIA', 'SZKOCJA', 'WALIA', 'ANGLIA', 'BELGIA', 'HOLANDIA',
  'SZWAJCARIA', 'AUSTRIA', 'PORTUGALIA', 'MALTA', 'CYPR', 'LUKSEMBURG',
  'PONIEDZIAŁEK', 'WTOREK', 'ŚRODA', 'CZWARTEK', 'PIĄTEK', 'SOBOTA', 'NIEDZIELA',
  'STYCZEŃ', 'LUTY', 'MARZEC', 'KWIECIEŃ', 'MAJ', 'CZERWIEC',
  'LIPIEC', 'SIERPIEŃ', 'WRZESIEŃ', 'PAŹDZIERNIK', 'LISTOPAD', 'GRUDZIEŃ',
  'WIOSNA', 'LATO', 'JESIEŃ', 'ZIMA', 'PORANEK', 'POŁUDNIE',
  'WIECZÓR', 'NOC', 'DZIEŃ', 'TYDZIEŃ', 'MIESIĄC', 'ROK',
  'GODZINA', 'MINUTA', 'SEKUNDA', 'CHWILA', 'MOMENT', 'CZAS',
  'PRZESZŁOŚĆ', 'TERAŹNIEJSZOŚĆ', 'PRZYSZŁOŚĆ', 'HISTORIA', 'KULTURA', 'TRADYCJA',
  'RELIGIA', 'POLITYKA', 'EKONOMIA', 'SPOŁECZEŃSTWO', 'PAŃSTWO', 'RZĄD',
  'PREZYDENT', 'MINISTER', 'PREMIER', 'PARLAMENT', 'SENAT', 'SEJM',
  'KONSTYTUCJA', 'PRAWO', 'USTAWA', 'KODEKS', 'SĄD', 'SĘDZIA',
  'ADWOKAT', 'NOTARIUSZ', 'PROKURATUR', 'POLICJA', 'STRAŻAK', 'LEKARZ',
  'PIELĘGNIARKA', 'DENTYSTA', 'WETERYNARZ', 'PSYCHOLOG', 'PEDAGOG', 'NAUCZYCIEL',
  'PROFESOR', 'STUDENT', 'UCZEŃ', 'SZKOŁA', 'UNIWERSYTET', 'COLLEGE',
  'LICEUM', 'GIMNAZJUM', 'PODSTAWÓWKA', 'PRZEDSZKOLE', 'ŻŁOBEK', 'INTERNAT',
  'BIBLIOTEKA', 'MUZEUM', 'GALERIA', 'WYSTAWA', 'KONCERT', 'SPEKTAKL',
  'FILM', 'SERIAL', 'PROGRAM', 'WIADOMOŚCI', 'SPORT', 'MECZ',
  'TURNIEJ', 'ZAWODY', 'OLIMPIADA', 'MISTRZOSTWA', 'PUCHAR', 'MEDAL',
  'ZWYCIĘZCA', 'FINALISTA', 'UCZESTNIK', 'KIBIC', 'STADION', 'ARENA',
  'BOISKO', 'KORT', 'BASEN', 'SALA', 'HALA', 'OŚRODEK',
  'HOTEL', 'PENSJONAT', 'CAMPING', 'SCHRONISKO', 'HOSTEL', 'MOTEL',
  'RESTAURACJA', 'KAWIARNIA', 'BAR', 'PUB', 'CLUB', 'DYSKOTEKA',
  'KINO', 'TEATR', 'OPERA', 'FILHARMONIA', 'CYRK', 'PARK',
  'OGRÓD', 'SKWER', 'PLAC', 'RYNEK', 'ULICA', 'ALEJA',
  'BULWAR', 'PROMENADA', 'ŚCIEŻKA', 'DROGA', 'SZOSA', 'AUTOSTRADA',
  'MOSTY', 'TUNEL', 'WIADUKT', 'DWORZEC', 'LOTNISKO', 'PORT',
  'PRZYSTAŃ', 'STACJA', 'PRZYSTANEK', 'PARKING', 'GARAŻ', 'WARSZTAT',
  'FABRYKA', 'ZAKŁAD', 'FIRMA', 'BIURO', 'SKLEP', 'MARKET',
  'SUPERMARKET', 'HIPERMARKET', 'CENTRUM', 'GALERIA', 'BUTIK', 'SALON',
  'FRYZJER', 'KOSMETYCZKA', 'MASAŻYSTA', 'DIETETYK', 'TRENER', 'INSTRUKTOR',
  'KIEROWCA', 'MECHANIK', 'ELEKTRYK', 'HYDRAULIK', 'MALARZ', 'BUDOWLANIEC'
];

// Funkcja do losowania dziennego słowa
export function getDailyWord(): string {
  const today = new Date();
  // Używamy daty jako seed dla deterministycznego wyboru
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % POLISH_WORDS.length;
  return POLISH_WORDS[index];
}

// Funkcja sprawdzająca czy słowo jest dozwolone do wpisania
export function isValidWord(word: string): boolean {
  return ALLOWED_WORDS.includes(word.toUpperCase());
}

// Funkcja do formatowania daty (dla localStorage)
export function getGameDate(): string {
  const today = new Date();
  return `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
}