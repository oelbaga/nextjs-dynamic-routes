import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      Links:
      <a className={styles.homelink} href="/api/blogdata">
        Raw JSON
      </a>
      <div className={styles.links}>
        <a href="/blog/title1">
          1. Dynamic Route 1: <strong>/blog/title1</strong>
        </a>
        <a href="/blog/title2">
          2. Dynamic Route 2: <strong>/blog/title2</strong>
        </a>
      </div>
    </div>
  );
}
