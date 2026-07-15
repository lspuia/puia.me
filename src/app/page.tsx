import styles from "./page.module.css";

export default function Home() {
  const now = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateString = `${months[now.getMonth()]} ${now.getFullYear()}`;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.headerBrand}>puia.me</span>
        <span className={styles.headerDate}>{dateString}</span>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.kicker}>Personal domain</div>
          <h1 className={styles.title}>
            <span className={styles.line1}>Puia</span>
            <span className={styles.line2}>Chhakchhuak</span>
          </h1>
          <div className={styles.rule}></div>
          <p className={styles.intro}>
            Designer of interfaces, builder of front ends. Yes, that email was
            really from me.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:puia@puia.me" className={styles.footerEmail}>
          puia@puia.me
        </a>
        <span className={styles.footerCta}>Write anytime</span>
      </footer>
    </div>
  );
}
