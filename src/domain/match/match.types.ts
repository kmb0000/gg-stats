export interface PlayerMatch {
  kills: number;
  deaths: number;
  assists: number;
  totalCs: number;
  durationMinutes: number;
  win: boolean;
}

export interface AggregatedStats {
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgKda: number;
  csPerMin: number;
}

export interface RiotParticipant {
  puuid: string;

  kills: number;
  deaths: number;
  assists: number;

  totalMinionsKilled: number;
  neutralMinionsKilled: number;

  win: boolean;

  championName: string;
  champLevel: number;

  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
}

export interface RiotMatch {
  info: {
    gameDuration: number;
    gameEndTimestamp: number;
    participants: RiotParticipant[];
  };
}

export interface MatchItem {
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
}

export interface PlayerMatch {
  championName: string;
  championLevel: number;
  kills: number;
  deaths: number;
  assists: number;
  totalCs: number;
  durationMinutes: number;
  win: boolean;
  items: MatchItem;
  gameEndTimestamp: number;
}
