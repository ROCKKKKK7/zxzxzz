import Link from "next/link";
import styles from "./Footer.module.css";
import {
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "./Icons";

const links = ["Product", "Technology", "About", "Support"];

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "X", Icon: XIcon },
  { label: "YouTube", Icon: YoutubeIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo} aria-label="VYRA">
          VYRA
        </Link>
        <p className={styles.slogan}>A clearer tomorrow</p>
      </div>

      <nav className={styles.nav} aria-label="Footer">
        {links.map((label) => (
          <a key={label} href="#">
            {label}
          </a>
        ))}
      </nav>

      <ul className={styles.socials}>
        {socials.map(({ label, Icon }) => (
          <li key={label}>
            <a href="#" aria-label={label}>
              <Icon width={20} height={20} />
            </a>
          </li>
        ))}
      </ul>

      <p className={styles.copy}>
        © 2026 VYRA.
        <br />
        All rights reserved.
      </p>
    </footer>
  );
}
