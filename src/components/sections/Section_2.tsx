import Download from "../download/Download";
import Gallery from "../gallery/Gallery";
import styles from "./section.module.css";

export default function Section_2() {
  return (
    <div className={styles.section_2_container}>
      <h2 className={styles.headline}>Special Agreements</h2>
      <p className={styles.text}>
        Are you an English or Danish speaking group, you may contact the guide
        between 05.00 PM and 06.00 PM on phone number +45 51349678 for a special
        agreement (sms, phone). More details in the attached handout.
      </p>
      <Download />
      <Gallery />
    </div>
  );
}
