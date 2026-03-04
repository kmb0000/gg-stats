import styles from "./Stats.module.scss";
import StatItem from "../ui/StatItem";
import type { Rank } from "../../domain/profile/profile.types";
import type { AggregatedStats } from "../../domain/match/match.types";

interface Props {
  rank: Rank;
  stats: AggregatedStats;
}

export default function StatsCard({ rank, stats }: Props) {
  const formatedKda = Math.round(stats.avgKda * 10) / 10;
  const formatedCs = Math.round(stats.csPerMin * 10) / 10;
  const gamesPerDay = Math.round(rank.gamesPlayed / 30);

  function getFarmingLabel(cs: number): string {
    if (cs > 10) return "Excellent farming";
    if (cs >= 8) return "Bon farming";
    if (cs >= 5) return "Moyen";
    if (cs >= 3) return "Peut mieux faire";
    return "Très en dessous";
  }

  const kdaProgress = Math.min((stats.avgKda / 10) * 100, 100);
  const csProgress = Math.min((stats.csPerMin / 10) * 100, 100);
  const gamesProgress = Math.min(rank.gamesPlayed, 100);

  const cards = [
    {
      label: "Winrate S14",
      value: rank.winrate,
      unit: "%",
      sub: `${rank.wins}V · ${rank.losses}D sur ${rank.gamesPlayed} parties`,
      color: "#00c853",
      progress: rank.winrate,
    },
    {
      label: "KDA MOYEN",
      value: formatedKda,
      sub: `${stats.avgKills} / ${stats.avgDeaths} / ${stats.avgAssists}`,
      color: "#c89b3c",
      progress: kdaProgress,
    },
    {
      label: "CS / MIN",
      value: formatedCs,
      sub: getFarmingLabel(stats.csPerMin),
      color: "#0ac8b9",
      progress: csProgress,
    },
    {
      label: "Parties jouées",
      value: rank.gamesPlayed,
      sub: `≈ ${gamesPerDay} par jour`,
      color: "#f0e6c8",
      progress: gamesProgress,
    },
  ];

  return (
    <section className={styles.sectionStats}>
      {cards.map((card) => (
        <StatItem key={card.label} {...card} />
      ))}
    </section>
  );
}
