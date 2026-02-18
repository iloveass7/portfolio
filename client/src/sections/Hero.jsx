import { profile, stats } from "../data/index";
import photo from "../assets/photo.jpg.jpg";
export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {/* LEFT */}
        <div style={styles.left}>
          <p style={styles.greeting}>{profile.greeting}</p>
          <h1 style={styles.h1}>
            <span style={styles.line1}>A CSE</span>
            <span style={styles.line2}>Student</span>
            <span style={styles.line3}>focused on</span>
            <span style={styles.line4}>AI, ML &amp;</span>
            <span style={styles.line5}>Intelligent</span>
            <span style={styles.line6}>Systems.</span>
          </h1>
          <p style={styles.tagline}>{profile.tagline}</p>
          <a href="#contact" style={styles.btnDark}>
            CONTACT ME &nbsp;→
          </a>
        </div>

        {/* CENTER: Portrait — circle bg, photo bleeds upward */}
        <div style={styles.center}>
          <div style={styles.portraitArch}>
            {/*
              To add your photo:
              1. Put your image at client/src/assets/photo.jpg
              2. Add at top of file: import photo from '../assets/photo.jpg'
              3. Replace the placeholder div with:
                 <img src={photo} alt="Abir" style={styles.portraitImg} />
            */}
            <img src={photo} alt="Abir" style={styles.portraitImg} />
          </div>
        </div>

        {/* RIGHT: Stats */}
        <div style={styles.right}>
          {stats.map((s, i) => (
            <div key={i} style={styles.statItem}>
              <span style={styles.statNum}>{s.num}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: 64,
    height: "100vh",
    minHeight: 600,
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid var(--border)",
    overflow: "hidden",
  },
  grid: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 40px",
    display: "grid",
    gridTemplateColumns: "0.95fr 1.3fr 0.6fr",
    alignItems: "center",
    height: "100%",
  },

  /* LEFT */
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 20,
  },
  greeting: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    fontWeight: 300,
    color: "var(--fg2)",
    marginBottom: 6,
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    lineHeight: 0.95,
    letterSpacing: "-0.02em",
    color: "var(--fg)",
    marginBottom: 22,
    display: "flex",
    flexDirection: "column",
  },
  line1: {
    fontSize: "clamp(38px, 5.5vw, 78px)",
    fontWeight: 900,
    display: "block",
  },
  line2: {
    fontSize: "clamp(38px, 5.5vw, 78px)",
    fontWeight: 900,
    display: "block",
  },
  line3: {
    fontSize: "clamp(22px, 3vw, 38px)",
    fontWeight: 700,
    fontStyle: "italic",
    color: "var(--fg2)",
    display: "block",
    lineHeight: 1.3,
  },
  line4: {
    fontSize: "clamp(38px, 5.5vw, 78px)",
    fontWeight: 900,
    display: "block",
  },
  line5: {
    fontSize: "clamp(38px, 5.5vw, 78px)",
    fontWeight: 900,
    display: "block",
  },
  line6: {
    fontSize: "clamp(38px, 5.5vw, 78px)",
    fontWeight: 900,
    fontStyle: "italic",
    display: "block",
  },

  tagline: {
    fontSize: 13,
    lineHeight: 1.75,
    color: "var(--fg2)",
    maxWidth: 260,
    marginBottom: 28,
    fontWeight: 300,
  },
  btnDark: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: "var(--btn-dark-bg)",
    color: "var(--btn-dark-fg)",
    padding: "13px 24px",
    borderRadius: 100,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    width: "fit-content",
    fontFamily: "'DM Sans', sans-serif",
  },

  /* CENTER */
  /* CENTER: The Portrait Container */
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Changed from flex-end to hang from the top
    height: "100%",
    position: "relative",
    paddingTop: "100px", // Adds some space from the very top of the screen
    zIndex: 1,
  },

  portraitArch: {
    width: "min(400px, 100vw)",
    height: "min(600px, 1200vh)",

    /* REVERSED ARCH: Flat on top, rounded on bottom */
    borderRadius: "0 0 300px 300px",

    /* REFINED GLASS EFFECT */
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(15px) saturate(120%)",
    WebkitBackdropFilter: "blur(15px) saturate(120%)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",

    overflow: "hidden",
    position: "relative",
  },

  portraitImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    /* Adjust 'top' to ensure the face is visible since the bottom is now rounded */
    objectPosition: "center top",
    display: "block",
  },
  placeholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 24px 32px",
    gap: 8,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  placeholderIcon: { fontSize: 72, opacity: 0.18 },
  placeholderHint: {
    fontSize: 10,
    color: "var(--fg3)",
    fontFamily: "'DM Mono', monospace",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
    opacity: 0.5,
  },

  /* RIGHT */
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 26,
    height: "100%",
    paddingLeft: 24,
  },
  statItem: { textAlign: "right" },
  statNum: {
    display: "block",
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(30px, 3.8vw, 54px)",
    fontWeight: 900,
    color: "var(--fg)",
    lineHeight: 1,
  },
  statLabel: {
    display: "block",
    fontSize: 9.5,
    color: "var(--fg3)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginTop: 4,
    fontFamily: "'DM Mono', monospace",
  },
};
