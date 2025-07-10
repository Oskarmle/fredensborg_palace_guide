import styles from "./gallary.module.css";

// Images
import buildings1 from "../../assets/buildings.webp";
import buildings2 from "../../assets/buildings2.webp";
import lake from "../../assets/lake.webp";
import pond from "../../assets/pond.webp";
import statues from "../../assets/statues.webp";
import water from "../../assets/water.webp";

export default function Gallery() {
  const images = [
    {
      src: buildings1,
      alt: "Historic Fredensborg Palace building with detailed architecture",
    },
    {
      src: buildings2,
      alt: "Another view of Fredensborg Palace from the royal garden",
    },
    {
      src: lake,
      alt: "Scenic lake near Fredensborg Palace surrounded by lush greenery",
    },
    { src: pond, alt: "Quiet pond in the Fredensborg Palace Garden" },
    {
      src: statues,
      alt: "Classical statues found in the Fredensborg Palace Garden",
    },
    { src: water, alt: "A view of Esrum lake close to Fredensborg Palace" },
  ];

  return (
    <div className={styles.gallery_container} id="gallery">
      <h2 className={styles.gallery_headline}>Gallery</h2>
      <p className={styles.gallery_text}>
        Get a glimpse of the private guided tour experience as you explore the
        stunning Fredensborg Palace Garden, royal architecture, and beautiful
        natural surroundings with your local guide.
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
