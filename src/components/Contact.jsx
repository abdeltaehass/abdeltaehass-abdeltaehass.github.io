import styles from './Contact.module.css'

const socials = [
  {
    label: 'Email',
    handle: 'abdeltaehass@gmail.com',
    href: 'mailto:abdeltaehass@gmail.com',
  },
  {
    label: 'GitHub',
    handle: 'github.com/abdeltaehass',
    href: 'https://github.com/abdeltaehass',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/abdel-rahman-taeha',
    href: 'https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">// get in touch</p>
        <h2 className="section-title">Contact</h2>
        <div className={styles.layout}>
          <div className={styles.text}>
            <p>
              Whether you have a question, want to collaborate, or just want to say
              hi — my inbox is open. I'm currently open to new opportunities.
            </p>
          </div>
          <div className={styles.links}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialLabel}>{s.label}</span>
                <span className={styles.socialHandle}>{s.handle} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Built by Abdel Rahman Taeha &middot; <a href="https://github.com/abdeltaehass" target="_blank" rel="noopener noreferrer">abdeltaehass</a></p>
      </footer>
    </section>
  )
}
