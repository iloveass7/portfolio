import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <>
      <nav style={styles.nav}>
        <a href="#" style={styles.logo}>
          <span style={styles.dot} />
          ABIR
        </a>

        <div style={styles.right}>
          <button onClick={toggle} style={styles.themeBtn} title="Toggle theme">
            {theme === 'light' ? '☽' : '☀'}
          </button>
          <button style={styles.menuBtn} onClick={() => setDrawerOpen(true)}>
            MENU&nbsp;&nbsp;
            <span style={styles.menuLines}>
              <span style={styles.line} />
              <span style={styles.line} />
            </span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div style={styles.overlay} onClick={() => setDrawerOpen(false)} />
      )}

      {/* Drawer */}
      <div style={{ ...styles.drawer, right: drawerOpen ? 0 : -340 }}>
        <button style={styles.closeBtn} onClick={() => setDrawerOpen(false)}>✕</button>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={styles.drawerLink}
            onClick={() => setDrawerOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: 64,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    backgroundColor: 'var(--bg)' + 'cc',
    borderBottom: '1px solid var(--border)',
    transition: 'background-color 0.3s',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Mono', monospace",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.12em',
    color: 'var(--fg)',
    textDecoration: 'none',
  },
  dot: {
    width: 8, height: 8,
    borderRadius: '50%',
    backgroundColor: 'var(--fg)',
    display: 'inline-block',
  },
  right: { display: 'flex', alignItems: 'center', gap: 10 },
  themeBtn: {
    width: 36, height: 36,
    borderRadius: '50%',
    border: '1px solid var(--border)',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 15,
    color: 'var(--fg)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  menuBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'var(--btn-dark-bg)',
    color: 'var(--btn-dark-fg)',
    border: 'none',
    padding: '9px 18px',
    borderRadius: 100,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  },
  menuLines: {
    display: 'flex', flexDirection: 'column', gap: 3.5,
    justifyContent: 'center',
  },
  line: {
    display: 'block',
    width: 14, height: 1.5,
    backgroundColor: 'var(--btn-dark-fg)',
    borderRadius: 2,
  },
  overlay: {
    position: 'fixed', inset: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    zIndex: 150,
  },
  drawer: {
    position: 'fixed',
    top: 0, bottom: 0,
    width: 320,
    backgroundColor: 'var(--bg2)',
    borderLeft: '1px solid var(--border)',
    zIndex: 200,
    padding: '80px 44px 44px',
    display: 'flex', flexDirection: 'column',
    gap: 0,
    transition: 'right 0.4s cubic-bezier(0.4,0,0.2,1)',
  },
  closeBtn: {
    position: 'absolute',
    top: 22, right: 22,
    background: 'none', border: 'none',
    fontSize: 20, cursor: 'pointer',
    color: 'var(--fg)',
  },
  drawerLink: {
    display: 'block',
    fontFamily: "'Playfair Display', serif",
    fontSize: 30,
    fontWeight: 700,
    color: 'var(--fg)',
    padding: '12px 0',
    borderBottom: '1px solid var(--border)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
}
