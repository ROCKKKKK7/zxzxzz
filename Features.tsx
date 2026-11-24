import type { ComponentType, SVGProps } from "react";
import styles from "./Features.module.css";
import {
  CameraIcon,
  GlassesIcon,
  MicIcon,
  SparkIcon,
  TranslateIcon,
} from "./Icons";

type Feature = {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  { title: "GPT Assistant", text: "Your AI, always with you.", Icon: SparkIcon },
  { title: "Built-in camera", text: "Capture your world.", Icon: CameraIcon },
  { title: "Voice control", text: "Hands-free, naturally.", Icon: MicIcon },
  { title: "Live translation", text: "A more open world.", Icon: TranslateIcon },
  { title: "Everyday style", text: "Advanced. Understated.", Icon: GlassesIcon },
];

export default function Features() {
  return (
    <section className={styles.features} id="technology">
      <ul className={styles.grid}>
        {features.map(({ title, text, Icon }) => (
          <li key={title} className={styles.card}>
            <Icon width={40} height={40} strokeWidth={1.3} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
