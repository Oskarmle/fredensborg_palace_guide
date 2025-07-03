import Guide from "../guide/Guide";
import Important from "../information/Important";
import Information from "../information/Information";
import Intro from "../intro/Intro";

import styles from "./section.module.css";

export default function Section_1() {
  return (
    <div className={styles.section_1_container}>
      <Intro />
      <div className={styles.section_1_content}>
        <div className={styles.info}>
          <Information />
          <Important />
        </div>
        <Guide />
      </div>
    </div>
  );
}
