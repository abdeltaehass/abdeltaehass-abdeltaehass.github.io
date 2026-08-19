import { useState } from 'react'
import OpenSource from './OpenSource'
import Experience from './Experience'
import styles from './ExperienceProjects.module.css'

const tabs = [
  { key: 'opensource', label: 'Open Source' },
  { key: 'experience', label: 'Experience' },
]

export default function ExperienceOpenSource() {
  const [subtab, setSubtab] = useState('opensource')

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <p className="section-label">Experience / Open Source</p>
        <h2 className="section-title">What I've worked on.</h2>

        <div className={styles.subtabs} role="tablist">
          {tabs.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={subtab === t.key}
              onClick={() => setSubtab(t.key)}
              className={`${styles.subtab} ${subtab === t.key ? styles.subtabActive : ''}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.content} role="tabpanel">
          {subtab === 'opensource' && <OpenSource embedded />}
          {subtab === 'experience' && <Experience embedded />}
        </div>
      </div>
    </section>
  )
}
