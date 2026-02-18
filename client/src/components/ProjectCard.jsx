const statusColors = {
  'Completed':     { bg: '#d8eed8', fg: '#1a5a1a' },
  'Ongoing':       { bg: '#feecd4', fg: '#7a4a10' },
  'Research':      { bg: '#d4e6f8', fg: '#1a3a6a' },
  'Ongoing Thesis':{ bg: '#d4e6f8', fg: '#1a3a6a' },
}

export default function ProjectCard({ project }) {
  const sc = statusColors[project.status] || { bg: 'var(--tag-bg)', fg: 'var(--tag-fg)' }

  return (
    <div style={styles.card} className="proj-card">
      <div style={styles.top}>
        <span style={styles.catTag}>{project.categoryLabel}</span>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.desc}>{project.desc}</p>
      </div>
      <div style={styles.bottom}>
        <div style={styles.techRow}>
          {project.tech.map(t => (
            <span key={t} style={styles.techTag}>{t}</span>
          ))}
        </div>
        <div style={styles.footer}>
          <span style={{ ...styles.statusBadge, backgroundColor: sc.bg, color: sc.fg }}>
            {project.status}
          </span>
          <a href={project.github} target="_blank" rel="noreferrer" style={styles.ghBtn}>
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: 'var(--bg)',
    borderRight: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
    position: 'relative',
    transition: 'background-color 0.2s',
    cursor: 'default',
  },
  top: {},
  catTag: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--fg3)',
    display: 'block',
    marginBottom: 8,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--fg)',
    lineHeight: 1.2,
    marginBottom: 10,
  },
  desc: {
    fontSize: 13,
    color: 'var(--fg2)',
    lineHeight: 1.65,
    fontWeight: 300,
  },
  bottom: {},
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 16,
  },
  techTag: {
    backgroundColor: 'var(--tag-bg)',
    color: 'var(--tag-fg)',
    padding: '3px 9px',
    borderRadius: 100,
    fontSize: 10.5,
    fontFamily: "'DM Mono', monospace",
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusBadge: {
    fontSize: 10,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontWeight: 600,
    padding: '3px 10px',
    borderRadius: 100,
    fontFamily: "'DM Mono', monospace",
  },
  ghBtn: {
    fontSize: 11,
    padding: '5px 12px',
    borderRadius: 100,
    border: '1px solid var(--border)',
    color: 'var(--fg)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background 0.2s',
  },
}
