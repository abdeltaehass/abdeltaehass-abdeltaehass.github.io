import { useState } from 'react'
import Experience from './Experience'
import Projects from './Projects'
import OpenSource from './OpenSource'
import styles from './ExperienceProjects.module.css'

const tabs = [
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'opensource', label: 'Open Source' },
]

export default function ExperienceProjects() {
  const [subtab, setSubtab] = useState('experience')

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <p className="section-label">Experience / Projects</p>
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
          {subtab === 'experience' && <Experience embedded />}
          {subtab === 'projects' && <Projects embedded />}
          {subtab === 'opensource' && <OpenSource embedded />}
        </div>
      </div>
    </section>
  )
}
