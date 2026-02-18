export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <h2 style={styles.heading}>
            BUILDING<br />
            INTELLIGENT<br />
            SYSTEMS &<br />
            <em style={styles.italic}>RESEARCH-DRIVEN</em><br />
            SOFTWARE.
          </h2>
        </div>

        <div style={styles.right}>
          <p style={styles.leadText}>
            I'm Syed Abir Hossain, a Computer Science & Engineering student at
            Ahsanullah University of Science & Technology, maintaining a CGPA of 3.502.
          </p>
          <p style={styles.bodyText}>
            My work sits at the crossroads of applied AI research and production-grade software
            engineering. From building multilingual speech-to-text systems with Whisper, to designing
            GCN-based rover navigation from satellite imagery — I approach every problem with a
            research-first mindset while caring deeply about real-world deployability.
          </p>
          <p style={styles.bodyText}>
            When I'm not training models or debugging APIs, I'm competing in hackathons,
            solving algorithmic problems on Codeforces, and experimenting with new technologies
            across the full stack.
          </p>
          <div style={styles.links}>
            <a href="https://github.com/iloveass7" target="_blank" rel="noreferrer" style={styles.link}>
              GitHub ↗
            </a>
            <a href="mailto:borshonjsr@gmail.com" style={styles.link}>
              borshonjsr@gmail.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    borderBottom: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 1140,
    margin: '0 auto',
    padding: '90px 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'start',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(32px, 4.5vw, 58px)',
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: 'var(--fg)',
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: 700,
    color: 'var(--fg)',
  },
  leadText: {
    fontSize: 17,
    fontWeight: 400,
    color: 'var(--fg)',
    lineHeight: 1.55,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 14,
    color: 'var(--fg2)',
    lineHeight: 1.8,
    marginBottom: 16,
    fontWeight: 300,
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginTop: 12,
  },
  link: {
    fontSize: 13,
    color: 'var(--fg)',
    fontFamily: "'DM Mono', monospace",
    textDecoration: 'none',
    letterSpacing: '0.04em',
    borderBottom: '1px solid var(--border)',
    paddingBottom: 8,
  },
}
