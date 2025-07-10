import styles from "./intro.module.css";

export default function Intro() {
  return (
    <summary className={styles.intro_container}>
      <h2 className={styles.intro}>
        Private Guided Tour of Fredensborg Palace (Fredensborg Slot)
      </h2>
      <p className={styles.intro_text}>
        Experience a unique Fredensborg Palace private guided tour with a
        knowledgeable local guide. Discover the rich history, stunning
        architecture, royal baroque gardens, sculptural art, and the beauty of
        Fredensborg Slot on a personalized tour with your own private guide.
      </p>
    </summary>
  );
}
