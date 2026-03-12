import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.prompt}>~</span>
          <span className={styles.name}>abdeltaeha</span>
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/abdeltaehass"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghBtn}
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
