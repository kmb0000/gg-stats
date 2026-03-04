import styles from "./StatItem.module.scss";

interface StatItemProps {
  label: string;
  value: number;
  sub: string;
  color: string;
  unit?: string;
  progress: number;
}
export default function StatItem({
  label,
  value,
  sub,
  color,
  unit,
  progress,
}: StatItemProps) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.winrate} style={{ color: color }}>
        {value}
        {unit && <span>{unit}</span>}
      </div>
      <div className={styles.infoStats}>{sub}</div>
      <div className={styles.statBar}>
        <div
          className={styles.statBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
