import type { Region } from "../../types";

export interface Profile {
  id: string;
  name: string;
  tag: string;
  level: number;
  profileIconUrl: string;
  rank: Rank;
  region: Region;
}

export interface Rank {
  tier: Tier;
  division: Division | null;
  lp: number;
  wins: number;
  losses: number;
  winrate: number;
  gamesPlayed: number;
}

export type Tier =
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "EMERALD"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export type Division = "I" | "II" | "III" | "IV";
