import Image from "next/image";
import portrait from "./portrait.jpg";
import styles from "./page.module.css";

// A hand-drawn line, stretched to whatever width it is given
function Stroke({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 5.2C38 3.1 96 3.9 170 4.4c92 .6 150-1.3 236-.6 78 .6 140 1.5 194 .4v2.9c-60 1.2-122 .2-200-.3-88-.6-142 1.4-232 .8C96 7.1 40 8.2 0 7.6Z" />
    </svg>
  );
}

// Structured data so search engines read this as one person's profile page
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://puia.me/#website",
      url: "https://puia.me",
      name: "puia.me",
      inLanguage: "en",
      publisher: { "@id": "https://puia.me/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://puia.me/#webpage",
      url: "https://puia.me",
      name: "Liansangpuia Chhakchhuak — Human-Centred Design - Engineered with AI.",
      inLanguage: "en",
      isPartOf: { "@id": "https://puia.me/#website" },
      mainEntity: { "@id": "https://puia.me/#person" },
      primaryImageOfPage: "https://puia.me/opengraph-image.jpg",
    },
    {
      "@type": "Person",
      "@id": "https://puia.me/#person",
      name: "Liansangpuia Chhakchhuak",
      givenName: "Liansangpuia",
      familyName: "Chhakchhuak",
      url: "https://puia.me",
      email: "mailto:puia@puia.me",
      description: "Human-Centred Design - Engineered with AI.",
    },
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Charcoal filters: wobble the edges, then knock out specks of grain */}
      <svg className={styles.defs} aria-hidden="true" focusable="false">
        <defs>
          <filter id="charcoal" x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="3"
              seed="4"
              result="warp"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warped"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              seed="9"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 6.2"
              result="speck"
            />
            <feComposite in="warped" in2="speck" operator="in" />
          </filter>
          <filter
            id="charcoal-small"
            x="-5%"
            y="-10%"
            width="110%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              seed="4"
              result="warp"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warped"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              seed="9"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 6.6"
              result="speck"
            />
            <feComposite in="warped" in2="speck" operator="in" />
          </filter>
          <filter
            id="charcoal-line"
            x="-2%"
            y="-150%"
            width="104%"
            height="400%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              seed="7"
              result="warp"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warped"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              seed="3"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 6.2"
              result="speck"
            />
            <feComposite in="warped" in2="speck" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className={styles.art}>
        <Image
          src={portrait}
          alt="Charcoal-style portrait of Liansangpuia Chhakchhuak and wife in a graffiti-covered room"
          fill
          sizes="(orientation: portrait) 160vw, 100vw"
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          className={styles.photo}
        />
      </div>

      <header className={styles.header} role="banner">
        <span className={styles.headerBrand}>puia.me</span>
        <time className={styles.headerDate} dateTime={now.toISOString()}>
          {dateString}
        </time>
        <Stroke className={styles.divider} />
      </header>

      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.kicker}>Personal domain</div>
          <h1 className={styles.title}>
            <span className={styles.line1}>Liansangpuia</span>{" "}
            <span className={styles.line2}>Chhakchhuak</span>
          </h1>
          <Stroke className={styles.rule} />
          <p className={styles.intro}>
            Human-Centred Design - Engineered with AI.
          </p>
        </div>
      </main>

      <footer className={styles.footer} role="contentinfo">
        <Stroke className={styles.divider} />
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
