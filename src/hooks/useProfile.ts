import { useEffect, useState } from "react";
import {
  getMatchById,
  getMatchIds,
  getPuuid,
  getRank,
  getSummoner,
} from "../services/riotApi";
import { type Profile } from "../domain/profile/profile.types";
import { adaptProfile } from "../domain/profile/profile.adapter";
import { type Region } from "../types";
import { infoGame } from "../domain/match/matcth.adapter";
import { aggregateMatches } from "../domain/match/match.aggregate";
import {
  type PlayerMatch,
  type AggregatedStats,
} from "../domain/match/match.types";

export function useProfile(region: Region, gameName: string, tagLine: string) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stats, setStats] = useState<AggregatedStats | null>(null);
  const [matches, setMatches] = useState<PlayerMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiFetch = async () => {
      setLoading(true);
      setError("");
      try {
        const account = await getPuuid(gameName, tagLine);

        const matchIds = await getMatchIds(account.puuid);

        const matchDetails = await Promise.all(
          matchIds.map((matchId) => getMatchById(matchId)),
        );

        const playerMatches = matchDetails.map((match) =>
          infoGame(match, account.puuid),
        );

        setMatches(playerMatches);

        const computedStats = aggregateMatches(playerMatches);
        setStats(computedStats);

        const summoner = await getSummoner(account.puuid);
        const ranks = await getRank(account.puuid);
        const adapted = adaptProfile(account, summoner, ranks, region);
        setProfile(adapted);
      } catch (error) {
        console.error("Erreur", error);
        setError("Erreur lors de la récupération du profil");
      } finally {
        setLoading(false);
      }
    };
    apiFetch();
  }, [gameName, tagLine, region]);

  return { profile, stats, loading, error, matches };
}
