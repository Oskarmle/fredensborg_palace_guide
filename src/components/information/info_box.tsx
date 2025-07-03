import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

import styles from "./information.module.css";

type Info_box_props = {
  icon: string;
  title: string;
  text: string;
};

export default function Info_box({ icon, title, text }: Info_box_props) {
  const IconComponent =
    LucideIcons[icon as keyof typeof LucideIcons] as ComponentType<LucideProps>;

  return (
    <div className={styles.info_box_container}>
      <IconComponent className={styles.icon} color="var(--dark_blue)" />
      <div>
        <h3 className={styles.info_title}>{title}</h3>
        <p className={styles.info_text}>{text}</p>
      </div>
    </div>
  );
}
