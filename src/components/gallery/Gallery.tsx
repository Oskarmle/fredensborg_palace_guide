import styles from "./gallary.module.css";

// Images
import buildings1 from "../../assets/buildings.jpg";
import buildings2 from "../../assets/buildings2.jpg";
import lake from "../../assets/lake.jpeg";
import pond from "../../assets/pond.jpg";
import statues from "../../assets/statues.jpg";
import water from "../../assets/water.jpg";

export default function Gallery() {
  const images = [
    {
      src: buildings1,
      alt: "Historic palace building with detailed architecture",
    },
    {
      src: buildings2,
      alt: "Another view of Fredensborg Palace from the garden",
    },
    { src: lake, alt: "Scenic lake surrounded by lush greenery" },
    { src: pond, alt: "Quiet pond in the Fredensborg palace Garden" },
    { src: statues, alt: "Classical statues found in the Palace Garden" },
    { src: water, alt: "A view of the Esrum lake close to the Palace" },
  ];

  return (
    <div className={styles.gallery_container} id="gallery">
      <h2 className={styles.gallery_headline}>Gallery</h2>
      <p className={styles.gallery_text}>
        Experience a preview of the tour as we walk together through the
        beautiful Fredensborg Palace Garden.
      </p>
      <div className={styles.gallery}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={styles.gallery_image}
          />
        ))}
      </div>
    </div>
  );
}
