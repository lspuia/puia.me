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
      <header className={styles.header} role="banner">
        <span className={styles.headerBrand}>puia.me</span>
        <time className={styles.headerDate} dateTime={now.toISOString()}>
          {dateString}
        </time>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.kicker}>Personal domain</div>
          <h1 className={styles.title}>
            <span className={styles.line1}>Liansangpuia</span>
            <span className={styles.line2}>Chhakchhuak</span>
          </h1>
          <div className={styles.rule}></div>
          <p className={styles.intro}>
            AI powered UI/UX/WEB DEVELOPMENT
          </p>
        </div>
      </main>

      <footer className={styles.footer} role="contentinfo">
        <a
          href="mailto:puia@puia.me"
          className={styles.footerEmail}
          aria-label="Email Liansangpuia Chhakchhuak"
        >
          puia@puia.me
        </a>
        <span className={styles.footerCta}>Write anytime</span>
      </footer>
    </div>
  );
}
