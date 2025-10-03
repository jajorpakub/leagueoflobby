// Kompletne dane statyczne wszystkich championów League of Legends
export interface ChampionStaticData {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  position: string[];
  species: string;
  resource: string;
  rangeType: 'Melee' | 'Ranged';
  regions: string[];
  releaseYear: number;
}

export const CHAMPION_STATIC_DATA: Record<string, ChampionStaticData> = {
  // A
  "Aatrox": {
    name: "Aatrox",
    gender: "Male",
    position: ["Top"],
    species: "Darkin",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2013
  },
  "Ahri": {
    name: "Ahri",
    gender: "Female",
    position: ["Mid"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2011
  },
  "Akali": {
    name: "Akali",
    gender: "Female",
    position: ["Mid", "Top"],
    species: "Human",
    resource: "Energy",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2010
  },
  "Akshan": {
    name: "Akshan",
    gender: "Male",
    position: ["Mid", "Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shurima"],
    releaseYear: 2021
  },
  "Alistar": {
    name: "Alistar",
    gender: "Male",
    position: ["Support"],
    species: "Minotaur",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2009
  },
  "Amumu": {
    name: "Amumu",
    gender: "Male",
    position: ["Jungle"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2009
  },
  "Anivia": {
    name: "Anivia",
    gender: "Female",
    position: ["Mid"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Freljord"],
    releaseYear: 2009
  },
  "Annie": {
    name: "Annie",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2009
  },
  "Aphelios": {
    name: "Aphelios",
    gender: "Male",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2019
  },
  "Ashe": {
    name: "Ashe",
    gender: "Female",
    position: ["ADC"],
    species: "Iceborn",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Freljord"],
    releaseYear: 2009
  },
  "Aurelion Sol": {
    name: "Aurelion Sol",
    gender: "Male",
    position: ["Mid"],
    species: "Dragon",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2016
  },
  "Azir": {
    name: "Azir",
    gender: "Male",
    position: ["Mid"],
    species: "Ascended",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shurima"],
    releaseYear: 2014
  },

  // B
  "Bard": {
    name: "Bard",
    gender: "Other",
    position: ["Support"],
    species: "Celestial",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Runeterra"],
    releaseYear: 2015
  },
  "Bel'Veth": {
    name: "Bel'Veth",
    gender: "Female",
    position: ["Jungle"],
    species: "Void",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Void"],
    releaseYear: 2022
  },
  "Blitzcrank": {
    name: "Blitzcrank",
    gender: "Other",
    position: ["Support"],
    species: "Golem",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2009
  },
  "Brand": {
    name: "Brand",
    gender: "Male",
    position: ["Support", "Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Freljord"],
    releaseYear: 2011
  },
  "Braum": {
    name: "Braum",
    gender: "Male",
    position: ["Support"],
    species: "Iceborn",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2014
  },
  "Briar": {
    name: "Briar",
    gender: "Female",
    position: ["Jungle"],
    species: "Vampire",
    resource: "Health",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2023
  },

  // C
  "Caitlyn": {
    name: "Caitlyn",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2011
  },
  "Camille": {
    name: "Camille",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Piltover"],
    releaseYear: 2016
  },
  "Cassiopeia": {
    name: "Cassiopeia",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2010
  },
  "Cho'Gath": {
    name: "Cho'Gath",
    gender: "Other",
    position: ["Top"],
    species: "Void",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Void"],
    releaseYear: 2009
  },
  "Corki": {
    name: "Corki",
    gender: "Male",
    position: ["Mid", "ADC"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2009
  },

  // D
  "Darius": {
    name: "Darius",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2012
  },
  "Diana": {
    name: "Diana",
    gender: "Female",
    position: ["Jungle", "Mid"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2012
  },
  "Dr. Mundo": {
    name: "Dr. Mundo",
    gender: "Male",
    position: ["Top", "Jungle"],
    species: "Human",
    resource: "Health",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2009
  },
  "Draven": {
    name: "Draven",
    gender: "Male",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2012
  },

  // E
  "Ekko": {
    name: "Ekko",
    gender: "Male",
    position: ["Mid", "Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2015
  },
  "Elise": {
    name: "Elise",
    gender: "Female",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2012
  },
  "Evelynn": {
    name: "Evelynn",
    gender: "Female",
    position: ["Jungle"],
    species: "Demon",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Runeterra"],
    releaseYear: 2009
  },
  "Ezreal": {
    name: "Ezreal",
    gender: "Male",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2010
  },

  // F
  "Fiddlesticks": {
    name: "Fiddlesticks",
    gender: "Other",
    position: ["Jungle"],
    species: "Demon",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Runeterra"],
    releaseYear: 2009
  },
  "Fiora": {
    name: "Fiora",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2012
  },
  "Fizz": {
    name: "Fizz",
    gender: "Male",
    position: ["Mid"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2011
  },

  // G
  "Galio": {
    name: "Galio",
    gender: "Male",
    position: ["Mid", "Support"],
    species: "Golem",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2010
  },
  "Gangplank": {
    name: "Gangplank",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bilgewater"],
    releaseYear: 2009
  },
  "Garen": {
    name: "Garen",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2010
  },
  "Gnar": {
    name: "Gnar",
    gender: "Male",
    position: ["Top"],
    species: "Yordle",
    resource: "Rage",
    rangeType: "Ranged",
    regions: ["Freljord"],
    releaseYear: 2014
  },
  "Gragas": {
    name: "Gragas",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2010
  },
  "Graves": {
    name: "Graves",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bilgewater"],
    releaseYear: 2011
  },
  "Gwen": {
    name: "Gwen",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shadow Isles"],
    releaseYear: 2021
  },

  // H
  "Hecarim": {
    name: "Hecarim",
    gender: "Male",
    position: ["Jungle"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shadow Isles"],
    releaseYear: 2012
  },
  "Heimerdinger": {
    name: "Heimerdinger",
    gender: "Male",
    position: ["Mid"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2009
  },

  // I
  "Illaoi": {
    name: "Illaoi",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2015
  },
  "Irelia": {
    name: "Irelia",
    gender: "Female",
    position: ["Top", "Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2010
  },
  "Ivern": {
    name: "Ivern",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2016
  },

  // J
  "Janna": {
    name: "Janna",
    gender: "Female",
    position: ["Support"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2009
  },
  "Jarvan IV": {
    name: "Jarvan IV",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2011
  },
  "Jax": {
    name: "Jax",
    gender: "Male",
    position: ["Top", "Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Icathia"],
    releaseYear: 2009
  },
  "Jayce": {
    name: "Jayce",
    gender: "Male",
    position: ["Top", "Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2012
  },
  "Jhin": {
    name: "Jhin",
    gender: "Male",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2016
  },
  "Jinx": {
    name: "Jinx",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2013
  },

  // K
  "K'Sante": {
    name: "K'Sante",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2022
  },
  "Kai'Sa": {
    name: "Kai'Sa",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Void"],
    releaseYear: 2018
  },
  "Kalista": {
    name: "Kalista",
    gender: "Female",
    position: ["ADC"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2014
  },
  "Karma": {
    name: "Karma",
    gender: "Female",
    position: ["Support", "Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2011
  },
  "Karthus": {
    name: "Karthus",
    gender: "Male",
    position: ["Jungle"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2009
  },
  "Kassadin": {
    name: "Kassadin",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2009
  },
  "Katarina": {
    name: "Katarina",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2009
  },
  "Kayle": {
    name: "Kayle",
    gender: "Female",
    position: ["Top"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2009
  },
  "Kayn": {
    name: "Kayn",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2017
  },
  "Kennen": {
    name: "Kennen",
    gender: "Male",
    position: ["Top"],
    species: "Yordle",
    resource: "Energy",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2010
  },
  "Kha'Zix": {
    name: "Kha'Zix",
    gender: "Male",
    position: ["Jungle"],
    species: "Void",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Void"],
    releaseYear: 2012
  },
  "Kindred": {
    name: "Kindred",
    gender: "Other",
    position: ["Jungle"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Runeterra"],
    releaseYear: 2015
  },
  "Kled": {
    name: "Kled",
    gender: "Male",
    position: ["Top"],
    species: "Yordle",
    resource: "Courage",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2016
  },
  "Kog'Maw": {
    name: "Kog'Maw",
    gender: "Other",
    position: ["ADC"],
    species: "Void",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Void"],
    releaseYear: 2010
  },

  // L
  "LeBlanc": {
    name: "LeBlanc",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2010
  },
  "Lee Sin": {
    name: "Lee Sin",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Energy",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2011
  },
  "Leona": {
    name: "Leona",
    gender: "Female",
    position: ["Support"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2011
  },
  "Lillia": {
    name: "Lillia",
    gender: "Female",
    position: ["Jungle"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2020
  },
  "Lissandra": {
    name: "Lissandra",
    gender: "Female",
    position: ["Mid"],
    species: "Iceborn",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Freljord"],
    releaseYear: 2013
  },
  "Lucian": {
    name: "Lucian",
    gender: "Male",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Demacia"],
    releaseYear: 2013
  },
  "Lulu": {
    name: "Lulu",
    gender: "Female",
    position: ["Support"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2012
  },
  "Lux": {
    name: "Lux",
    gender: "Female",
    position: ["Mid", "Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Demacia"],
    releaseYear: 2010
  },

  // M
  "Malphite": {
    name: "Malphite",
    gender: "Male",
    position: ["Top"],
    species: "Golem",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2009
  },
  "Malzahar": {
    name: "Malzahar",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Void"],
    releaseYear: 2010
  },
  "Maokai": {
    name: "Maokai",
    gender: "Male",
    position: ["Support", "Top"],
    species: "Treant",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shadow Isles"],
    releaseYear: 2011
  },
  "Master Yi": {
    name: "Master Yi",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2009
  },
  "Milio": {
    name: "Milio",
    gender: "Male",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ixtal"],
    releaseYear: 2023
  },
  "Miss Fortune": {
    name: "Miss Fortune",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bilgewater"],
    releaseYear: 2010
  },
  "Mordekaiser": {
    name: "Mordekaiser",
    gender: "Male",
    position: ["Top"],
    species: "Undead",
    resource: "Shield",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2010
  },
  "Morgana": {
    name: "Morgana",
    gender: "Female",
    position: ["Support"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2009
  },

  // N
  "Naafiri": {
    name: "Naafiri",
    gender: "Female",
    position: ["Mid"],
    species: "Darkin",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2023
  },
  "Nami": {
    name: "Nami",
    gender: "Female",
    position: ["Support"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bilgewater"],
    releaseYear: 2011
  },
  "Nasus": {
    name: "Nasus",
    gender: "Male",
    position: ["Top"],
    species: "Ascended",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2009
  },
  "Nautilus": {
    name: "Nautilus",
    gender: "Male",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2012
  },
  "Neeko": {
    name: "Neeko",
    gender: "Female",
    position: ["Mid"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ixtal"],
    releaseYear: 2018
  },
  "Nidalee": {
    name: "Nidalee",
    gender: "Female",
    position: ["Jungle"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ixtal"],
    releaseYear: 2009
  },
  "Nilah": {
    name: "Nilah",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2022
  },
  "Nocturne": {
    name: "Nocturne",
    gender: "Male",
    position: ["Jungle"],
    species: "Demon",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Runeterra"],
    releaseYear: 2011
  },
  "Nunu & Willump": {
    name: "Nunu & Willump",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2009
  },

  // O
  "Olaf": {
    name: "Olaf",
    gender: "Male",
    position: ["Top", "Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2010
  },
  "Orianna": {
    name: "Orianna",
    gender: "Female",
    position: ["Mid"],
    species: "Golem",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2011
  },
  "Ornn": {
    name: "Ornn",
    gender: "Male",
    position: ["Top"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2017
  },

  // P
  "Pantheon": {
    name: "Pantheon",
    gender: "Male",
    position: ["Mid", "Top"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2010
  },
  "Poppy": {
    name: "Poppy",
    gender: "Female",
    position: ["Support", "Top"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2010
  },
  "Pyke": {
    name: "Pyke",
    gender: "Male",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2018
  },

  // Q
  "Qiyana": {
    name: "Qiyana",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ixtal"],
    releaseYear: 2019
  },
  "Quinn": {
    name: "Quinn",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Demacia"],
    releaseYear: 2013
  },

  // R
  "Rakan": {
    name: "Rakan",
    gender: "Male",
    position: ["Support"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2017
  },
  "Rammus": {
    name: "Rammus",
    gender: "Male",
    position: ["Jungle"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2009
  },
  "Rek'Sai": {
    name: "Rek'Sai",
    gender: "Female",
    position: ["Jungle"],
    species: "Void",
    resource: "Rage",
    rangeType: "Melee",
    regions: ["Void"],
    releaseYear: 2014
  },
  "Rell": {
    name: "Rell",
    gender: "Female",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2020
  },
  "Renata Glasc": {
    name: "Renata Glasc",
    gender: "Female",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2022
  },
  "Renekton": {
    name: "Renekton",
    gender: "Male",
    position: ["Top"],
    species: "Ascended",
    resource: "Rage",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2011
  },
  "Rengar": {
    name: "Rengar",
    gender: "Male",
    position: ["Jungle"],
    species: "Vastayan",
    resource: "Ferocity",
    rangeType: "Melee",
    regions: ["Ixtal"],
    releaseYear: 2012
  },
  "Riven": {
    name: "Riven",
    gender: "Female",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2011
  },
  "Rumble": {
    name: "Rumble",
    gender: "Male",
    position: ["Top"],
    species: "Yordle",
    resource: "Heat",
    rangeType: "Melee",
    regions: ["Bandle City"],
    releaseYear: 2011
  },
  "Ryze": {
    name: "Ryze",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Runeterra"],
    releaseYear: 2009
  },

  // S
  "Samira": {
    name: "Samira",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2020
  },
  "Sejuani": {
    name: "Sejuani",
    gender: "Female",
    position: ["Jungle"],
    species: "Iceborn",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2012
  },
  "Senna": {
    name: "Senna",
    gender: "Female",
    position: ["ADC", "Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2019
  },
  "Seraphine": {
    name: "Seraphine",
    gender: "Female",
    position: ["Support", "Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Piltover"],
    releaseYear: 2020
  },
  "Sett": {
    name: "Sett",
    gender: "Male",
    position: ["Top"],
    species: "Vastayan",
    resource: "Grit",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2020
  },
  "Shaco": {
    name: "Shaco",
    gender: "Male",
    position: ["Jungle"],
    species: "Demon",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Runeterra"],
    releaseYear: 2009
  },
  "Shen": {
    name: "Shen",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Energy",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2010
  },
  "Shyvana": {
    name: "Shyvana",
    gender: "Female",
    position: ["Jungle"],
    species: "Dragon",
    resource: "Rage",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2011
  },
  "Singed": {
    name: "Singed",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2009
  },
  "Sion": {
    name: "Sion",
    gender: "Male",
    position: ["Top"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2009
  },
  "Sivir": {
    name: "Sivir",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shurima"],
    releaseYear: 2009
  },
  "Skarner": {
    name: "Skarner",
    gender: "Male",
    position: ["Jungle"],
    species: "Brackern",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shurima"],
    releaseYear: 2011
  },
  "Sona": {
    name: "Sona",
    gender: "Female",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Demacia"],
    releaseYear: 2010
  },
  "Soraka": {
    name: "Soraka",
    gender: "Female",
    position: ["Support"],
    species: "Celestial",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2009
  },
  "Swain": {
    name: "Swain",
    gender: "Male",
    position: ["Mid", "Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2010
  },
  "Sylas": {
    name: "Sylas",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2019
  },
  "Syndra": {
    name: "Syndra",
    gender: "Female",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2012
  },

  // T
  "Tahm Kench": {
    name: "Tahm Kench",
    gender: "Male",
    position: ["Support", "Top"],
    species: "Demon",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Bilgewater"],
    releaseYear: 2015
  },
  "Taliyah": {
    name: "Taliyah",
    gender: "Female",
    position: ["Mid", "Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shurima"],
    releaseYear: 2016
  },
  "Talon": {
    name: "Talon",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Noxus"],
    releaseYear: 2011
  },
  "Taric": {
    name: "Taric",
    gender: "Male",
    position: ["Support"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Targon"],
    releaseYear: 2009
  },
  "Teemo": {
    name: "Teemo",
    gender: "Male",
    position: ["Top"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2009
  },
  "Thresh": {
    name: "Thresh",
    gender: "Male",
    position: ["Support"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2013
  },
  "Tristana": {
    name: "Tristana",
    gender: "Female",
    position: ["ADC"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2009
  },
  "Trundle": {
    name: "Trundle",
    gender: "Male",
    position: ["Top"],
    species: "Troll",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2010
  },
  "Tryndamere": {
    name: "Tryndamere",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Rage",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2009
  },
  "Twisted Fate": {
    name: "Twisted Fate",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bilgewater"],
    releaseYear: 2009
  },
  "Twitch": {
    name: "Twitch",
    gender: "Male",
    position: ["ADC"],
    species: "Rat",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2009
  },

  // U
  "Udyr": {
    name: "Udyr",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2009
  },
  "Urgot": {
    name: "Urgot",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2010
  },

  // V
  "Varus": {
    name: "Varus",
    gender: "Male",
    position: ["ADC"],
    species: "Darkin",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2012
  },
  "Vayne": {
    name: "Vayne",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Demacia"],
    releaseYear: 2011
  },
  "Veigar": {
    name: "Veigar",
    gender: "Male",
    position: ["Mid"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2009
  },
  "Vel'Koz": {
    name: "Vel'Koz",
    gender: "Other",
    position: ["Mid", "Support"],
    species: "Void",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Void"],
    releaseYear: 2014
  },
  "Vex": {
    name: "Vex",
    gender: "Female",
    position: ["Mid"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shadow Isles"],
    releaseYear: 2021
  },
  "Vi": {
    name: "Vi",
    gender: "Female",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Piltover"],
    releaseYear: 2012
  },
  "Viego": {
    name: "Viego",
    gender: "Male",
    position: ["Jungle"],
    species: "Undead",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shadow Isles"],
    releaseYear: 2021
  },
  "Viktor": {
    name: "Viktor",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2011
  },
  "Vladimir": {
    name: "Vladimir",
    gender: "Male",
    position: ["Mid"],
    species: "Hemomancer",
    resource: "Health",
    rangeType: "Ranged",
    regions: ["Noxus"],
    releaseYear: 2010
  },
  "Volibear": {
    name: "Volibear",
    gender: "Male",
    position: ["Top", "Jungle"],
    species: "God-Warrior",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Freljord"],
    releaseYear: 2011
  },

  // W
  "Warwick": {
    name: "Warwick",
    gender: "Male",
    position: ["Jungle"],
    species: "Chimera",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2009
  },
  "Wukong": {
    name: "Wukong",
    gender: "Male",
    position: ["Top", "Jungle"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2011
  },

  // X
  "Xayah": {
    name: "Xayah",
    gender: "Female",
    position: ["ADC"],
    species: "Vastayan",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ionia"],
    releaseYear: 2017
  },
  "Xerath": {
    name: "Xerath",
    gender: "Male",
    position: ["Mid"],
    species: "Ascended",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Shurima"],
    releaseYear: 2011
  },
  "Xin Zhao": {
    name: "Xin Zhao",
    gender: "Male",
    position: ["Jungle"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Demacia"],
    releaseYear: 2010
  },

  // Y
  "Yasuo": {
    name: "Yasuo",
    gender: "Male",
    position: ["Mid", "Top"],
    species: "Human",
    resource: "Flow",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2013
  },
  "Yone": {
    name: "Yone",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Flow",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2020
  },
  "Yorick": {
    name: "Yorick",
    gender: "Male",
    position: ["Top"],
    species: "Human",
    resource: "Mana",
    rangeType: "Melee",
    regions: ["Shadow Isles"],
    releaseYear: 2011
  },
  "Yuumi": {
    name: "Yuumi",
    gender: "Female",
    position: ["Support"],
    species: "Cat",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Bandle City"],
    releaseYear: 2019
  },

  // Z
  "Zac": {
    name: "Zac",
    gender: "Male",
    position: ["Jungle"],
    species: "Golem",
    resource: "Health",
    rangeType: "Melee",
    regions: ["Zaun"],
    releaseYear: 2013
  },
  "Zed": {
    name: "Zed",
    gender: "Male",
    position: ["Mid"],
    species: "Human",
    resource: "Energy",
    rangeType: "Melee",
    regions: ["Ionia"],
    releaseYear: 2012
  },
  "Zeri": {
    name: "Zeri",
    gender: "Female",
    position: ["ADC"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2022
  },
  "Ziggs": {
    name: "Ziggs",
    gender: "Male",
    position: ["Mid"],
    species: "Yordle",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Zaun"],
    releaseYear: 2012
  },
  "Zilean": {
    name: "Zilean",
    gender: "Male",
    position: ["Support"],
    species: "Human",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Icathia"],
    releaseYear: 2009
  },
  "Zoe": {
    name: "Zoe",
    gender: "Female",
    position: ["Mid"],
    species: "Aspect",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Targon"],
    releaseYear: 2017
  },
  "Zyra": {
    name: "Zyra",
    gender: "Female",
    position: ["Support"],
    species: "Plant",
    resource: "Mana",
    rangeType: "Ranged",
    regions: ["Ixtal"],
    releaseYear: 2012
  }
};

// Funkcje pomocnicze
export const getAllChampionNames = (): string[] => {
  return Object.keys(CHAMPION_STATIC_DATA);
};

export const getChampionData = (name: string): ChampionStaticData | undefined => {
  return CHAMPION_STATIC_DATA[name];
};

export const getRandomChampion = (): ChampionStaticData => {
  const names = getAllChampionNames();
  const randomName = names[Math.floor(Math.random() * names.length)];
  return CHAMPION_STATIC_DATA[randomName];
};

export const getDailyChampion = (date: Date = new Date()): ChampionStaticData => {
  // Generuje tego samego championa dla danego dnia (Warsaw timezone)
  const warsawDate = new Date(date.toLocaleString("en-US", {timeZone: "Europe/Warsaw"}));
  const dateString = warsawDate.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // Prosta funkcja hash dla deterministic selection
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  const names = getAllChampionNames();
  const index = Math.abs(hash) % names.length;
  return CHAMPION_STATIC_DATA[names[index]];
};