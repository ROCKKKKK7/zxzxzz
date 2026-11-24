import Link from "next/link";
import styles from "./Header.module.css";
import { BagIcon, SearchIcon } from "./Icons";

const links = [
  { href: "#product", label: "Product" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="VYRA">
        VYRA
      </Link>

      <nav className={styles.nav} aria-label="Main">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Search">
          <SearchIcon width={20} height={20} />
        </button>
        <button className={styles.iconButton} aria-label="Cart">
          <BagIcon width={20} height={20} />
        </button>
        <a href="#collection" className={styles.cta}>
          Shop now
        </a>
      </div>
    </header>
  );
}
