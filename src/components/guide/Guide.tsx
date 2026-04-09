import styles from "./guide.module.css";
import guideImage from "../../assets/guide_image.jpg";

export default function Guide() {
  return (
    <aside className={styles.guide_container}>
      <img
        src={guideImage}
        alt="Local guide at Fredensborg Palace Garden"
        className={styles.guide_img}
      />
      <p className={styles.guide_name}>Guide: Henrik Riise</p>
    </aside>
  );
}
