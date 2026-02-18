import { education, skills } from '../data/index'

export default function Education() {
  return (
    <section id="education" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>EDUCATION<br />&amp; SKILLS</h2>
      </div>

      <div style={styles.body}>
        {/* Left: Education */}
        <div style={styles.eduCol}>
          <div style={styles.colLabel}>Education</div>
          {education.map((e, i) => (
            <div key={i} style={styles.eduItem}>
              <p style={styles.eduInst}>{e.inst}</p>
              <p style={styles.eduDegree}>{e.degree}</p>
              <p style={styles.eduMeta}>{e.year} &mdash; {e.result}</p>
            </div>
          ))}
        </div>

        {/* Right: Skills */}
        <div style={styles.skillsCol}>
          <div style={styles.colLabel}>Skills</div>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} style={styles.skillsGroup}>
              <p style={styles.groupTitle}>{group}</p>
              <div style={styles.pills}>
                {list.map(s => (
                  <span key={s} style={styles.pill}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { borderBottom: '1px solid var(--border)' },
  header: {
    maxWidth: 1140, margin: '0 auto',
    padding: '70px 40px 36px',
    borderBottom: '1px solid var(--border)',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(40px, 7vw, 80px)',
    fontWeight: 900, letterSpacing: '-0.02em',
    textTransform: 'uppercase', color: 'var(--fg)', lineHeight: 1.0,
  },
  body: {
    maxWidth: 1140, margin: '0 auto',
    padding: '50px 40px 70px',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
  },
  colLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 24, borderBottom: '1px solid var(--border)', paddingBottom: 12,
  },
  eduCol: {},
  eduItem: {
    paddingBottom: 24, marginBottom: 24,
    borderBottom: '1px solid var(--border)',
  },
  eduInst: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 17, fontWeight: 700,
    color: 'var(--fg)', marginBottom: 4,
  },
  eduDegree: { fontSize: 14, color: 'var(--fg2)', marginBottom: 4, fontWeight: 300 },
  eduMeta: { fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--fg3)' },
  skillsCol: {},
  skillsGroup: { marginBottom: 24 },
  groupTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 10,
  },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 7 },
  pill: {
    backgroundColor: 'var(--tag-bg)', color: 'var(--tag-fg)',
    padding: '5px 13px', borderRadius: 100,
    fontSize: 12, fontFamily: "'DM Mono', monospace",
    cursor: 'default', transition: 'background 0.2s, color 0.2s',
  },
}
