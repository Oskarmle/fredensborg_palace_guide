import styles from "./guide.module.css";
import guideImage from "../../assets/guide.webp";

export default function Guide() {
  return (
    <aside className={styles.guide_container}>
      <img
        src={guideImage}
        alt="Local guide at Fredensborg Palace"
        className={styles.guide_img}
      />
      <p className={styles.guide_name}>Guide: Henrik Riise</p>
    </aside>
  );
}
