import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.containerHeader}>
      <header className={styles.headerTop}>
        <div className={styles.headerLogo}>⚔ GG·STATS</div>

        <nav className={styles.navbarLinks}>
          <NavLink to="/profil">Profil</NavLink>
          <NavLink to="/champions">CHAMPIONS</NavLink>
          <NavLink to="/classement">CLASSEMENT</NavLink>
          <NavLink to="/live">LIVE</NavLink>
        </nav>

        <div className={styles.inputSearch}>
          <span>⌕</span>
          <input type="search" placeholder="Pseudo#EUW" />
        </div>
      </header>
    </div>
  );
}
