import type { PlayerMatch } from "../../domain/match/match.types";
import MatchCard from "../match/MatchCard";
import styles from "./MatchHistory.module.scss";

interface Props {
  matches: PlayerMatch[];
}

export default function MatchHistory({ matches }: Props) {
  return (
    <section className={styles.wrapper}>
      {/* LEFT COLUMN */}
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>Historique des parties</h2>

        <div className={styles.matchesList}>
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={styles.rightColumn}>
        <h2 className={styles.title}>Maîtrise des champions</h2>

        <div className={styles.placeholder}>À venir...</div>
      </div>
    </section>
  );
}
