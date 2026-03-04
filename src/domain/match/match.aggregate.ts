import type { AggregatedStats, PlayerMatch } from "./match.types";

export function aggregateMatches(
  playerMatches: PlayerMatch[],
): AggregatedStats {
  //evite les répétitions
  const gamesCount = playerMatches.length;

  //securise si pas de games
  if (gamesCount === 0) {
    return {
      avgKills: 0,
      avgAssists: 0,
      avgDeaths: 0,
      avgKda: 0,
      csPerMin: 0,
    };
  }

  //Calcul du total des kills deaths assists cs et duration sur les dernieres games

  const totalKills = playerMatches.reduce((acc, current) => {
    return acc + current.kills;
  }, 0);
  const totalDeaths = playerMatches.reduce((acc, current) => {
    return acc + current.deaths;
  }, 0);

  const totalAssists = playerMatches.reduce((acc, current) => {
    return acc + current.assists;
  }, 0);

  const totalCS = playerMatches.reduce((acc, current) => {
    return acc + current.totalCs;
  }, 0);

  const totalDuration = playerMatches.reduce((acc, current) => {
    return acc + current.durationMinutes;
  }, 0);

  //Calcul de la moyenne des kills sur les dernieres games
  const avgKills = totalKills / gamesCount;

  //calcul de la moyenne des cs par minute sur les dernieres games

  const csPerMin = totalDuration > 0 ? totalCS / totalDuration : 0;

  // calcul du KDA moyen sur les dernieres games

  const avgKda =
    totalDeaths > 0 ? (totalKills + totalAssists) / totalDeaths : 0;

  //calcul Deaths moyenne

  const avgDeaths = totalDeaths / gamesCount;

  //calcul Assists moyenne

  const avgAssists = totalAssists / gamesCount;

  //Return objet AggregatedStats
  return {
    avgKills,
    avgDeaths,
    avgAssists,
    avgKda,
    csPerMin,
  };
}
