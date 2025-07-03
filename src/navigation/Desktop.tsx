import styles from "./nav.module.css";

export default function DesktopNavigation() {
  return (
    <nav className={styles.navBox}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <button about="" className={styles.listButton}>
            Information
          </button>
        </li>
        <li className={styles.listItem}>
          <button about="" className={styles.listButton}>
            Locations
          </button>
        </li>
        <li className={styles.listItem}>
          <button about="" className={styles.listButton}>
            Special Agreements
          </button>
        </li>
        <li className={styles.listItem}>
          <button about="" className={styles.listButton}>
            Handout and map
          </button>
        </li>
        <li className={styles.listItem}>
          <button about="" className={styles.listButton}>
            Gallery
          </button>
        </li>
      </ul>
    </nav>
  );
}
