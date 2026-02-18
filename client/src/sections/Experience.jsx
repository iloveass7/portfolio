const experiences = [
  {
    icon: '🏆',
    title: 'Hackathon Competitor',
    org: 'NSU · AUST · AUST Carnival',
    desc: 'Participated in multiple hackathons, building full products under time constraints. Built Eventify (MERN) during AUST hackathon — gained experience in rapid prototyping, scoping, and team delivery.',
  },
  {
    icon: '💻',
    title: 'Competitive Programmer',
    org: 'Codeforces · LeetCode · AtCoder',
    desc: 'Active on Codeforces (~1000 rating), LeetCode, and AtCoder. Strong foundation in algorithms and data structures. Problem-solving under pressure informs engineering decisions.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Engineering',
    org: 'Team Projects · Git Workflows',
    desc: 'Experience in team-based environments spanning AI, full-stack, and systems. Comfortable with collaborative Git workflows, code review, and cross-functional communication.',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>EXPERIENCE</h2>
        <p style={styles.headerRight}>
          Competitions, teamwork, and rapid prototyping in the wild.
        </p>
      </div>

      <div style={styles.grid}>
        {experiences.map((exp, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardIcon}>{exp.icon}</div>
            <div style={styles.cardMeta}>{exp.org}</div>
            <h3 style={styles.cardTitle}>{exp.title}</h3>
            <p style={styles.cardDesc}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { borderBottom: '1px solid var(--border)' },
  header: {
    maxWidth: 1140, margin: '0 auto',
    padding: '70px 40px 0',
    display: 'flex', alignItems: 'flex-end',
    justifyContent: 'space-between', gap: 40,
    borderBottom: '1px solid var(--border)', paddingBottom: 28,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(40px, 7vw, 80px)',
    fontWeight: 900, letterSpacing: '-0.02em',
    textTransform: 'uppercase', color: 'var(--fg)', lineHeight: 1,
  },
  headerRight: {
    fontSize: 13, color: 'var(--fg3)',
    maxWidth: 240, textAlign: 'right',
    lineHeight: 1.6, fontWeight: 300, flexShrink: 0,
  },
  grid: {
    maxWidth: 1140, margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '1px solid var(--border)',
    borderLeft: '1px solid var(--border)',
  },
  card: {
    padding: '36px 28px',
    borderRight: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    transition: 'background-color 0.2s',
  },
  cardIcon: { fontSize: 28, marginBottom: 16 },
  cardMeta: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 8,
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20, fontWeight: 700,
    color: 'var(--fg)', marginBottom: 10,
  },
  cardDesc: {
    fontSize: 13.5, color: 'var(--fg2)',
    lineHeight: 1.7, fontWeight: 300,
  },
}
