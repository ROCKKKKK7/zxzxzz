import Image from "next/image";
import styles from "./Hero.module.css";
import { ArrowIcon } from "./Icons";

const tagline = ["See", "Understand", "Translate", "Create", "Go further"];

export default function Hero() {
  return (
    <section className={styles.hero} id="product">
      <Image
        src="/images/hero.png"
        alt="Woman wearing VYRA AI glasses at sunset"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Human potential
          <br />
          in focus
        </p>
        <h1 className={styles.title}>
          A smarter
          <br />
          look at
          <br />
          tomorrow
        </h1>
        <p className={styles.subtitle}>
          AI glasses for a more connected, open world.
        </p>
        <a href="#collection" className={styles.button}>
          Discover VYRA
          <ArrowIcon width={14} height={14} />
        </a>
      </div>

      <ul className={styles.side}>
        {tagline.map((word) => (
          <li key={word}>{word}</li>
        ))}
        <li className={styles.dash} aria-hidden="true" />
      </ul>
    </section>
  );
}
