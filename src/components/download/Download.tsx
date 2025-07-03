import styles from "./download.module.css";

export default function Download() {
  return (
    <div className={styles.download_container}>
      <h3 className={styles.download_headline}>
        Download the map and handout here
      </h3>
      <div className={styles.download_buttons}>
        <a
          href="./files/map.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.download_button} ${styles.map}`}
        >
          <p>Map of the Garden</p>
        </a>
        <a
          href="./files/Handout.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.download_button} ${styles.handout}`}
        >
          <p>Handout</p>
        </a>
      </div>
    </div>
  );
}
