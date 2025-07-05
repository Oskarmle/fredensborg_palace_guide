import styles from "./intro.module.css";

export default function Intro() {
  return (
    <summary className={styles.intro_container}>
      <h2 className={styles.intro}>Fredensborg Palace Garden Tour</h2>
      <p className={styles.intro_text}>
        Join the Fredensborg Palace Garden tour and get insight into Danish
        history, architecture, royal baroque garden, sculptural art and
        beautiful nature.
      </p>
    </summary>
  );
}
