import Image from "next/image";
import styles from "./Cta.module.css";
import { ArrowIcon } from "./Icons";

const tagline = ["People", "Ideas", "Places", "A clearer", "Tomorrow"];

export default function Cta() {
  return (
    <section className={styles.cta} id="about">
      <Image
        src="/images/cta.png"
        alt="Man wearing VYRA AI glasses against a city skyline"
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />

      <ul className={styles.side}>
        {tagline.map((word) => (
          <li key={word}>{word}</li>
        ))}
        <li className={styles.dash} aria-hidden="true" />
      </ul>

      <div className={styles.content}>
        <h2 className={styles.title}>
          More
          <br />
          perspective
          <br />
          every day
        </h2>
        <p className={styles.text}>
          Join a global community exploring
          <br />
          what&apos;s next with AI eyewear.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            aria-label="Your email address"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Join us
            <ArrowIcon width={14} height={14} />
          </button>
        </form>
      </div>
    </section>
  );
}
