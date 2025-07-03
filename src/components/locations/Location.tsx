import styles from "./locations.module.css";

export default function Location() {
  return (
    <div className={styles.location_container}>
      <div className={styles.headline}>
        <h2>Locations</h2>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          During the tour we will visit these important locations:
        </p>
        <ul>
          <li>Fredensborg Palace</li>
          <li>Palace Garden</li>
          <li>Lake Esrum</li>
        </ul>
      </div>
    </div>
  );
}
