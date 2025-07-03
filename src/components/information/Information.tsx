import Info_box from "./info_box";
import styles from "./information.module.css";

export default function Information() {
  const infoBoxProps1 = [
    {
      icon: "Tag",
      title: "Price",
      text: "20 Euro (150 Dkr,) pr. person and payment through Cash, Mobile Pay or IBAN/Swift.",
    },
    {
      icon: "Footprints",
      title: "The walk",
      text: "150 minutes walk and talk, and 9 story-telling stops. Distance is around 5 km.",
    },
  ];
  const infoBoxProps2 = [
    {
      icon: "CalendarRange",
      title: "Period",
      text: "Saturday from 10.15 AM to 12.45 PM in the period from mid June to mid August e.g. 14 June to 16. August (incl.)",
    },
    {
      icon: "MapPin",
      title: "Meeting point",
      text: "20 meters from the main entrance, it is also marked on the downloadable map.",
    },
  ];

  return (
    <div className={styles.information_container}>
      <div>
        {infoBoxProps1.map((props, index) => (
          <Info_box
            key={index}
            icon={props.icon}
            title={props.title}
            text={props.text}
          />
        ))}
      </div>
      <div>
        {infoBoxProps2.map((props, index) => (
          <Info_box
            key={index}
            icon={props.icon}
            title={props.title}
            text={props.text}
          />
        ))}
      </div>
    </div>
  );
}
