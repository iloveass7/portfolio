import { expertise } from '../data/index'

export default function ExpertiseStrip() {
  return (
    <div style={styles.strip}>
      <div style={styles.inner}>
        {expertise.map((item, i) => (
          <div key={i} style={styles.item}>
            <p style={styles.title}>{item.title.toUpperCase()}</p>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  strip: {
    borderBottom: '1px solid var(--border)',
    borderTop: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
  },
  inner: {
    maxWidth: 1140,
    margin: '0 auto',
    padding: '28px 40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
  },
  item: {},
  title: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: 'var(--fg)',
    marginBottom: 7,
  },
  desc: {
    fontSize: 12.5,
    color: 'var(--fg3)',
    lineHeight: 1.55,
  },
}
