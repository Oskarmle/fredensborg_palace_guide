import styles from "./guide.module.css";
import guideImage from "../../assets/guide.jpg";

export default function Guide() {
  return (
    <div className={styles.guide_container}>
      <img src={guideImage} alt="" className={styles.guide_img} />
      <p className={styles.guide_name}>Guide: Henrik Riise</p>
    </div>
  );
}
