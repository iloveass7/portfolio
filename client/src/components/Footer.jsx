export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span style={styles.logo}>● ABIR</span>
        <span style={styles.center}>© 2025 Syed Abir Hossain</span>
        <span style={styles.right}>Dhaka, Bangladesh</span>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 1140, margin: '0 auto',
    padding: '24px 40px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'DM Mono', monospace",
    fontSize: 11, color: 'var(--fg3)',
    letterSpacing: '0.06em',
  },
  logo: { color: 'var(--fg)', fontWeight: 500 },
  center: {},
  right: {},
}
