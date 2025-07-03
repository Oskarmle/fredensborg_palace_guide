import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.info}>
          <p className={styles.headline}>Location</p>
          <div className={styles.text_container}>
            <p className={styles.text}>Fredensborg palace</p>
            <p className={styles.text}>Slottet 1B</p>
            <p className={styles.text}>3480 Fredensborg</p>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.headline}>Contact</p>
          <div className={styles.text_container}>
            <p className={styles.text}>Henrik Riise</p>
            <p className={styles.text}>Phone: +45 51349678</p>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.headline}>Prices</p>
          <div className={styles.text_container}>
            <p className={styles.text}>20 Euro (150 Dkr.)</p>
            <p className={styles.text}>pr. person.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
