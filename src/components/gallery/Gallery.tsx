import styles from "./gallary.module.css";

// Images
import buildings1 from "../../assets/buildings.jpg";
import buildings2 from "../../assets/buildings2.jpg";
import lake from "../../assets/lake.jpeg";
import pond from "../../assets/pond.jpg";
import statues from "../../assets/statues.jpg";
import water from "../../assets/water.jpg";

export default function Gallery() {
  const images = [buildings1, buildings2, lake, pond, statues, water];

  return (
    <div className={styles.gallery_container} id="gallery">
      <h2 className={styles.gallery_headline}>Gallery</h2>
      <p className={styles.gallery_text}>
        Experience a preview of the tour as we walk together through the
        beautiful Palace Garden.
      </p>
      <div className={styles.gallery}>
        {images.map((image, index) => (
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={styles.gallery_image}
            />
        ))}
      </div>
    </div>
  );
}
