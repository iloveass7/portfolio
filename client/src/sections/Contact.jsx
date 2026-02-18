import { useState } from 'react'
import { profile } from '../data/index'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    // POST to backend
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      alert('Direct email: ' + profile.email)
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>CONTACT</h2>
      </div>

      <div style={styles.body}>
        {/* Left */}
        <div style={styles.left}>
          <h3 style={styles.bigText}>
            Let's<br /><em style={styles.italic}>Build</em><br />Together.
          </h3>

          <div style={styles.contactLinks}>
            <a href={`mailto:${profile.email}`} style={styles.cLink}>
              <span style={styles.cLinkLabel}>Email</span>
              <span style={styles.cLinkVal}>{profile.email}</span>
              <span>→</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" style={styles.cLink}>
              <span style={styles.cLinkLabel}>GitHub</span>
              <span style={styles.cLinkVal}>github.com/iloveass7</span>
              <span>↗</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g,'')}`} style={styles.cLink}>
              <span style={styles.cLinkLabel}>Phone</span>
              <span style={styles.cLinkVal}>{profile.phone}</span>
              <span>→</span>
            </a>
            <a href="#" style={styles.cLink}>
              <span style={styles.cLinkLabel}>Location</span>
              <span style={styles.cLinkVal}>{profile.location}</span>
              <span></span>
            </a>
          </div>

          <a href={profile.github} target="_blank" rel="noreferrer" style={styles.cvBtn}>
            Download CV ↓
          </a>
        </div>

        {/* Right: Form */}
        <div style={styles.right}>
          {sent ? (
            <div style={styles.sentMsg}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700 }}>
                Message sent ✓
              </p>
              <p style={{ color: 'var(--fg2)', fontSize: 14, marginTop: 8 }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button style={{ ...styles.submitBtn, marginTop: 20, cursor: 'pointer' }} onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <p style={styles.formLabel}>Send a message</p>
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Your name" required style={styles.input}
              />
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Your email" required style={styles.input}
              />
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Your message..." required style={styles.textarea}
                rows={5}
              />
              <button type="submit" style={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { borderBottom: '1px solid var(--border)' },
  header: {
    maxWidth: 1140, margin: '0 auto',
    padding: '70px 40px 28px',
    borderBottom: '1px solid var(--border)',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(40px, 7vw, 80px)',
    fontWeight: 900, letterSpacing: '-0.02em',
    textTransform: 'uppercase', color: 'var(--fg)', lineHeight: 1,
  },
  body: {
    maxWidth: 1140, margin: '0 auto',
    padding: '60px 40px 80px',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
  },
  left: {},
  bigText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: 900, lineHeight: 1.0,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase', color: 'var(--fg)',
    marginBottom: 40,
  },
  italic: { fontStyle: 'italic', fontWeight: 700 },
  contactLinks: { display: 'flex', flexDirection: 'column' },
  cLink: {
    display: 'flex', alignItems: 'center', gap: 12,
    fontSize: 13.5, color: 'var(--fg2)',
    textDecoration: 'none', padding: '13px 0',
    borderBottom: '1px solid var(--border)',
    transition: 'color 0.2s',
  },
  cLinkLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    minWidth: 70,
  },
  cLinkVal: { flex: 1 },
  cvBtn: {
    display: 'inline-flex', alignItems: 'center',
    marginTop: 28,
    backgroundColor: 'var(--btn-dark-bg)', color: 'var(--btn-dark-fg)',
    padding: '12px 28px', borderRadius: 100,
    fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
    textDecoration: 'none',
  },
  right: {},
  formLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--fg3)',
    marginBottom: 20,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  input: {
    width: '100%',
    backgroundColor: 'var(--bg2)',
    border: '1px solid var(--border)',
    color: 'var(--fg)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    padding: '13px 16px',
    borderRadius: 4,
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    backgroundColor: 'var(--bg2)',
    border: '1px solid var(--border)',
    color: 'var(--fg)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    padding: '13px 16px',
    borderRadius: 4,
    outline: 'none',
    resize: 'vertical',
    transition: 'border-color 0.2s',
  },
  submitBtn: {
    backgroundColor: 'var(--btn-dark-bg)',
    color: 'var(--btn-dark-fg)',
    border: 'none', padding: '13px 28px',
    borderRadius: 100, fontSize: 13,
    fontWeight: 500, letterSpacing: '0.04em',
    cursor: 'pointer', alignSelf: 'flex-start',
    fontFamily: "'DM Sans', sans-serif",
  },
  sentMsg: { display: 'flex', flexDirection: 'column' },
}
