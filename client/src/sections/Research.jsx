import { research } from '../data/index'

export default function Research() {
  return (
    <section id="research" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>RESEARCH</h2>
        <p style={styles.headerRight}>
          Ongoing undergraduate thesis and research work focused on AI and intelligent systems.
        </p>
      </div>

      <div style={styles.cards}>
        {research.map((r) => (
          <div key={r.slug} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.resLabel}>{r.label}</span>
              <h3 style={styles.resTitle}>{r.title}</h3>
              <p style={styles.resSummary}>{r.summary}</p>
            </div>

            <div style={styles.metaGrid}>
              <div style={styles.metaItem}>
                <div style={styles.metaKey}>Problem Statement</div>
                <div style={styles.metaVal}>{r.problem}</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaKey}>Research Motivation</div>
                <div style={styles.metaVal}>{r.motivation}</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaKey}>Algorithms & Tools</div>
                <div style={styles.metaVal}>{r.algorithms}</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaKey}>Expected Contributions</div>
                <div style={styles.metaVal}>{r.contributions}</div>
              </div>
            </div>

            <div style={styles.cardBottom}>
              <div style={styles.techRow}>
                {r.tech.map(t => (
                  <span key={t} style={styles.techTag}>{t}</span>
                ))}
              </div>
              <a href={r.github} target="_blank" rel="noreferrer" style={styles.ghBtn}>
                GitHub (WIP) ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    borderBottom: '1px solid var(--border)',
  },
  header: {
    maxWidth: 1140,
    margin: '0 auto',
    padding: '70px 40px 28px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 40,
    borderBottom: '1px solid var(--border)',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(40px, 7vw, 80px)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: 'var(--fg)',
    lineHeight: 1,
  },
  headerRight: {
    fontSize: 13, color: 'var(--fg3)',
    maxWidth: 260, textAlign: 'right',
    lineHeight: 1.6, fontWeight: 300, flexShrink: 0,
  },
  cards: {
    maxWidth: 1140, margin: '0 auto',
    padding: '0 40px 70px',
    display: 'flex', flexDirection: 'column', gap: 1,
  },
  card: {
    borderBottom: '1px solid var(--border)',
    padding: '44px 0',
    display: 'flex', flexDirection: 'column', gap: 28,
  },
  cardTop: {},
  resLabel: {
    display: 'block',
    fontFamily: "'DM Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 12,
  },
  resTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(22px, 3vw, 34px)',
    fontWeight: 700, color: 'var(--fg)',
    lineHeight: 1.2, marginBottom: 14,
  },
  resSummary: {
    fontSize: 14, color: 'var(--fg2)',
    lineHeight: 1.75, fontWeight: 300, maxWidth: 780,
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px 60px',
  },
  metaItem: {},
  metaKey: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 6,
  },
  metaVal: {
    fontSize: 13.5, color: 'var(--fg2)',
    lineHeight: 1.65, fontWeight: 300,
  },
  cardBottom: {
    display: 'flex', alignItems: 'center',
    gap: 20, flexWrap: 'wrap',
  },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: 5 },
  techTag: {
    backgroundColor: 'var(--tag-bg)', color: 'var(--tag-fg)',
    padding: '3px 10px', borderRadius: 100,
    fontSize: 10.5, fontFamily: "'DM Mono', monospace",
  },
  ghBtn: {
    fontSize: 12, padding: '6px 16px',
    borderRadius: 100, border: '1px solid var(--border)',
    color: 'var(--fg)', textDecoration: 'none',
    fontWeight: 500, marginLeft: 'auto',
  },
}
