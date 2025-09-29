export interface SummonerInfo {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}

export interface MatchInfo {
  metadata: {
    dataVersion: string
    matchId: string
    participants: string[]
  }
  info: {
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants: Participant[]
    platformId: string
    queueId: number
    teams: Team[]
    tournamentCode: string
  }
}

export interface Participant {
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  championTransform: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusLost: number
  nexusTakedowns: number
  objectivesStolen: number
  objectivesStolenAssists: number
  participantId: number
  pentaKills: number
  perks: {
    statPerks: {
      defense: number
      flex: number
      offense: number
    }
    styles: Array<{
      description: string
      selections: Array<{
        perk: number
        var1: number
        var2: number
        var3: number
      }>
      style: number
    }>
  }
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdName: string
  riotIdTagline: string
  role: string
  sightWardsBought: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionWardsBought: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export interface Team {
  bans: Array<{
    championId: number
    pickTurn: number
  }>
  objectives: {
    baron: { first: boolean; kills: number }
    champion: { first: boolean; kills: number }
    dragon: { first: boolean; kills: number }
    inhibitor: { first: boolean; kills: number }
    riftHerald: { first: boolean; kills: number }
    tower: { first: boolean; kills: number }
  }
  teamId: number
  win: boolean
}

export interface GameMode {
  queueId: number
  map: string
  description: string
  name: string
}

class MatchHistoryService {
  private static instance: MatchHistoryService
  private apiKey: string = '' // Note: W produkcji to powinno być w zmiennych środowiskowych
  private baseUrl: string = 'https://{region}.api.riotgames.com'
  private version: string = '15.19.1'

  private constructor() {}

  static getInstance(): MatchHistoryService {
    if (!MatchHistoryService.instance) {
      MatchHistoryService.instance = new MatchHistoryService()
    }
    return MatchHistoryService.instance
  }

  // Note: Riot API wymaga klucza API, więc użyjemy mock danych dla demonstracji
  async getSummonerByName(summonerName: string, region: string = 'eun1'): Promise<SummonerInfo> {
    // W prawdziwej implementacji:
    // const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`
    
    // Mock data dla demonstracji
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (summonerName.toLowerCase().includes('error')) {
          reject(new Error('Summoner not found'))
          return
        }
        
        resolve({
          id: 'mock_id_' + Math.random().toString(36).substr(2, 9),
          accountId: 'mock_account_' + Math.random().toString(36).substr(2, 9),
          puuid: 'mock_puuid_' + Math.random().toString(36).substr(2, 9),
          name: summonerName,
          profileIconId: Math.floor(Math.random() * 100) + 1,
          revisionDate: Date.now(),
          summonerLevel: Math.floor(Math.random() * 400) + 30
        })
      }, 1000) // Symulacja opóźnienia API
    })
  }

  async getMatchHistory(puuid: string, count: number = 10): Promise<string[]> {
    // Mock match IDs
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchIds = Array.from({ length: count }, (_, i) => 
          `EUN1_${Math.random().toString(36).substr(2, 9)}_${i}`
        )
        resolve(matchIds)
      }, 500)
    })
  }

  async getMatchDetails(matchId: string): Promise<MatchInfo> {
    // Mock match data
    return new Promise((resolve) => {
      setTimeout(() => {
        const gameModes = ['CLASSIC', 'ARAM', 'URF', 'ARENA']
        const champions = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Azir']
        const gameMode = gameModes[Math.floor(Math.random() * gameModes.length)]
        
        const participants: Participant[] = Array.from({ length: gameMode === 'ARAM' ? 10 : (gameMode === 'ARENA' ? 8 : 10) }, (_, i) => ({
          assists: Math.floor(Math.random() * 20),
          baronKills: 0,
          bountyLevel: 0,
          champExperience: Math.floor(Math.random() * 20000) + 5000,
          champLevel: Math.floor(Math.random() * 10) + 10,
          championId: Math.floor(Math.random() * 150) + 1,
          championName: champions[Math.floor(Math.random() * champions.length)],
          championTransform: 0,
          consumablesPurchased: Math.floor(Math.random() * 10),
          damageDealtToBuildings: Math.floor(Math.random() * 5000),
          damageDealtToObjectives: Math.floor(Math.random() * 10000),
          damageDealtToTurrets: Math.floor(Math.random() * 3000),
          damageSelfMitigated: Math.floor(Math.random() * 30000),
          deaths: Math.floor(Math.random() * 15),
          detectorWardsPlaced: Math.floor(Math.random() * 10),
          doubleKills: Math.floor(Math.random() * 3),
          dragonKills: 0,
          firstBloodAssist: Math.random() > 0.8,
          firstBloodKill: Math.random() > 0.9,
          firstTowerAssist: Math.random() > 0.8,
          firstTowerKill: Math.random() > 0.9,
          gameEndedInEarlySurrender: false,
          gameEndedInSurrender: Math.random() > 0.8,
          goldEarned: Math.floor(Math.random() * 20000) + 8000,
          goldSpent: Math.floor(Math.random() * 18000) + 7000,
          individualPosition: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'][Math.floor(Math.random() * 5)],
          inhibitorKills: 0,
          inhibitorTakedowns: 0,
          inhibitorsLost: 0,
          item0: Math.floor(Math.random() * 3000) + 1000,
          item1: Math.floor(Math.random() * 3000) + 1000,
          item2: Math.floor(Math.random() * 3000) + 1000,
          item3: Math.floor(Math.random() * 3000) + 1000,
          item4: Math.floor(Math.random() * 3000) + 1000,
          item5: Math.floor(Math.random() * 3000) + 1000,
          item6: Math.floor(Math.random() * 3000) + 3000,
          itemsPurchased: Math.floor(Math.random() * 30) + 10,
          killingSprees: Math.floor(Math.random() * 3),
          kills: Math.floor(Math.random() * 20),
          lane: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM'][Math.floor(Math.random() * 4)],
          largestCriticalStrike: Math.floor(Math.random() * 2000),
          largestKillingSpree: Math.floor(Math.random() * 5),
          largestMultiKill: Math.floor(Math.random() * 3) + 1,
          longestTimeSpentLiving: Math.floor(Math.random() * 1000),
          magicDamageDealt: Math.floor(Math.random() * 50000),
          magicDamageDealtToChampions: Math.floor(Math.random() * 30000),
          magicDamageTaken: Math.floor(Math.random() * 25000),
          neutralMinionsKilled: Math.floor(Math.random() * 200),
          nexusKills: 0,
          nexusLost: 0,
          nexusTakedowns: 0,
          objectivesStolen: 0,
          objectivesStolenAssists: 0,
          participantId: i + 1,
          pentaKills: Math.random() > 0.95 ? 1 : 0,
          perks: {
            statPerks: { defense: 5008, flex: 5008, offense: 5005 },
            styles: []
          },
          physicalDamageDealt: Math.floor(Math.random() * 50000),
          physicalDamageDealtToChampions: Math.floor(Math.random() * 30000),
          physicalDamageTaken: Math.floor(Math.random() * 25000),
          profileIcon: Math.floor(Math.random() * 100) + 1,
          puuid: `mock_puuid_${i}`,
          quadraKills: Math.random() > 0.9 ? 1 : 0,
          riotIdName: `Player${i + 1}`,
          riotIdTagline: 'EUN1',
          role: ['SOLO', 'CARRY', 'SUPPORT'][Math.floor(Math.random() * 3)],
          sightWardsBought: Math.floor(Math.random() * 5),
          spell1Casts: Math.floor(Math.random() * 50),
          spell2Casts: Math.floor(Math.random() * 50),
          spell3Casts: Math.floor(Math.random() * 50),
          spell4Casts: Math.floor(Math.random() * 20),
          summoner1Casts: Math.floor(Math.random() * 10),
          summoner1Id: 4, // Flash
          summoner2Casts: Math.floor(Math.random() * 10),
          summoner2Id: Math.floor(Math.random() * 20) + 1,
          summonerId: `summoner_${i}`,
          summonerLevel: Math.floor(Math.random() * 400) + 30,
          summonerName: `Player${i + 1}`,
          teamEarlySurrendered: false,
          teamId: i < 5 ? 100 : 200,
          teamPosition: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'][i % 5],
          timeCCingOthers: Math.floor(Math.random() * 100),
          timePlayed: Math.floor(Math.random() * 3000) + 1200,
          totalDamageDealt: Math.floor(Math.random() * 150000) + 50000,
          totalDamageDealtToChampions: Math.floor(Math.random() * 50000) + 10000,
          totalDamageShieldedOnTeammates: Math.floor(Math.random() * 5000),
          totalDamageTaken: Math.floor(Math.random() * 40000) + 10000,
          totalHeal: Math.floor(Math.random() * 10000),
          totalHealsOnTeammates: Math.floor(Math.random() * 5000),
          totalMinionsKilled: Math.floor(Math.random() * 300) + 50,
          totalTimeCCDealt: Math.floor(Math.random() * 200),
          totalTimeSpentDead: Math.floor(Math.random() * 300),
          totalUnitsHealed: Math.floor(Math.random() * 10),
          tripleKills: Math.floor(Math.random() * 2),
          trueDamageDealt: Math.floor(Math.random() * 10000),
          trueDamageDealtToChampions: Math.floor(Math.random() * 5000),
          trueDamageTaken: Math.floor(Math.random() * 5000),
          turretKills: Math.floor(Math.random() * 3),
          turretTakedowns: Math.floor(Math.random() * 5),
          turretsLost: Math.floor(Math.random() * 5),
          unrealKills: 0,
          visionScore: Math.floor(Math.random() * 80) + 10,
          visionWardsBought: Math.floor(Math.random() * 10),
          wardsKilled: Math.floor(Math.random() * 20),
          wardsPlaced: Math.floor(Math.random() * 30),
          win: Math.random() > 0.5
        }))

        resolve({
          metadata: {
            dataVersion: '2',
            matchId: matchId,
            participants: participants.map(p => p.puuid)
          },
          info: {
            gameCreation: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000), // Last week
            gameDuration: Math.floor(Math.random() * 2400) + 900, // 15-55 minutes
            gameEndTimestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
            gameId: Math.floor(Math.random() * 1000000),
            gameMode: gameMode,
            gameName: 'teambuilder-match-' + Math.random().toString(36).substr(2, 9),
            gameStartTimestamp: Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
            gameType: 'MATCHED_GAME',
            gameVersion: this.version,
            mapId: gameMode === 'ARAM' ? 12 : (gameMode === 'ARENA' ? 30 : 11),
            participants: participants,
            platformId: 'EUN1',
            queueId: gameMode === 'ARAM' ? 450 : (gameMode === 'ARENA' ? 1700 : 420),
            teams: [
              {
                bans: [],
                objectives: {
                  baron: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  champion: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 50) },
                  dragon: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 5) },
                  inhibitor: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  riftHerald: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 2) },
                  tower: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 10) }
                },
                teamId: 100,
                win: Math.random() > 0.5
              },
              {
                bans: [],
                objectives: {
                  baron: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  champion: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 50) },
                  dragon: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 5) },
                  inhibitor: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 3) },
                  riftHerald: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 2) },
                  tower: { first: Math.random() > 0.5, kills: Math.floor(Math.random() * 10) }
                },
                teamId: 200,
                win: Math.random() > 0.5
              }
            ],
            tournamentCode: ''
          }
        })
      }, 800)
    })
  }

  getQueueName(queueId: number): string {
    const queues: { [key: number]: string } = {
      420: 'Ranked Solo/Duo',
      440: 'Ranked Flex',
      450: 'ARAM',
      400: 'Normal Draft',
      430: 'Normal Blind',
      1700: 'Arena',
      900: 'URF',
      1020: 'One for All'
    }
    return queues[queueId] || 'Niestandardowy tryb'
  }

  formatGameDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  getTimeAgo(timestamp: number): string {
    const now = Date.now()
    const diff = now - timestamp
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor(diff / (1000 * 60))

    if (days > 0) return `${days} dni temu`
    if (hours > 0) return `${hours} godzin temu`
    if (minutes > 0) return `${minutes} minut temu`
    return 'Przed chwilą'
  }
}

export default MatchHistoryService