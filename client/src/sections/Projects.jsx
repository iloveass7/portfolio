import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/index'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'web', label: 'Web / Full-Stack' },
  { key: 'systems', label: 'Systems / Games' },
  { key: 'research', label: 'Research' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" style={styles.section}>
      {/* Header — like reference PORTFOLIO header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h2 style={styles.sectionTitle}>PORTFOLIO</h2>
        </div>
        <p style={styles.headerRight}>
          A collection of work across AI research, full-stack engineering,
          systems programming, and competitive problem solving.
        </p>
      </div>

      {/* Filter bar */}
      <div style={styles.filterRow}>
        {filters.map(f => (
          <button
            key={f.key}
            style={{
              ...styles.filterBtn,
              ...(active === f.key ? styles.filterBtnActive : {}),
            }}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {visible.map(p => (
          <ProjectCard key={p.slug} project={p} />
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
    padding: '70px 40px 0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 40,
    borderBottom: '1px solid var(--border)',
    paddingBottom: 28,
  },
  headerLeft: {},
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
    fontSize: 13,
    color: 'var(--fg3)',
    maxWidth: 280,
    textAlign: 'right',
    lineHeight: 1.6,
    fontWeight: 300,
    flexShrink: 0,
  },
  filterRow: {
    maxWidth: 1140,
    margin: '0 auto',
    padding: '20px 40px',
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    borderBottom: '1px solid var(--border)',
  },
  filterBtn: {
    padding: '7px 16px',
    borderRadius: 100,
    border: '1.5px solid var(--border)',
    background: 'transparent',
    color: 'var(--fg2)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'all 0.2s',
  },
  filterBtnActive: {
    backgroundColor: 'var(--btn-dark-bg)',
    color: 'var(--btn-dark-fg)',
    borderColor: 'var(--btn-dark-bg)',
  },
  grid: {
    maxWidth: 1140,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '1px solid var(--border)',
    borderLeft: '1px solid var(--border)',
  },
}
