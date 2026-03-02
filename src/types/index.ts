export type MatchResult = "WIN" | "LOSS";

export type Region = "EUW" | "NA" | "KR" | "EUNE";

export interface KDA {
  kills: number;
  deaths: number;
  assists: number;
}

export interface Match {
  championName: string;
  championImage: string; // url de l'image
  result: MatchResult;
  kda: KDA;
  cs: number;
  durationMinutes: number;
}

export interface Player {
  pseudo: string;
  tag: string;
  region: Region;
  level: number;
  profileIcon?: string;
  latestGames: Match[];
}
