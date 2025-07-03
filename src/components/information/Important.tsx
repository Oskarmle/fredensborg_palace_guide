import styles from "./information.module.css";

export default function Important() {
  return (
    <div className={styles.important}>
      <h2 className={styles.important_headline}>Important!</h2>
      <p className={styles.important_text}>
        Please send a text to confirm you participate, as there are limited
        spaces available (max. 18 participants).
      </p>
      <p className={styles.important_text}>
        Provisions are made for illness and other unforeseen situations.
      </p>
    </div>
  );
}
