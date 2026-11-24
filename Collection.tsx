import Image from "next/image";
import styles from "./Collection.module.css";

const products = [
  { id: 1, name: "VYRA ONE", variant: "Classic Amber", price: "$499 USD" },
  { id: 2, name: "VYRA ONE", variant: "Smoke", price: "$499 USD" },
  { id: 3, name: "VYRA ONE", variant: "Clear", price: "$499 USD" },
];

export default function Collection() {
  return (
    <section className={styles.collection} id="collection">
      <p className={styles.eyebrow}>The VYRA collection</p>

      <div className={styles.head}>
        <h2 className={styles.title}>
          Same vision.
          <br />
          Your style.
        </h2>
        <p className={styles.text}>
          Personalize your VYRA glasses with refined finishes. All models
          include GPT assistant, built-in camera, voice control, translation and
          seamless connectivity.
        </p>
      </div>

      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={`/images/product-${product.id}.png`}
                alt={`${product.name} ${product.variant}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.variant}>{product.variant}</p>
            <p className={styles.price}>{product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
