import { useState } from 'react'
import Projects from './Projects'
import Research from './Research'
import styles from './ExperienceProjects.module.css'

const tabs = [
  { key: 'publications', label: 'Publications' },
  { key: 'projects', label: 'Projects' },
]

export default function ProjectsPublications() {
  const [subtab, setSubtab] = useState('publications')

  return (
    <section id="research" className={styles.section}>
      <div className="container">
        <p className="section-label">Projects / Publications</p>
        <h2 className="section-title">What I've built.</h2>

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
          {subtab === 'projects' && <Projects embedded />}
          {subtab === 'publications' && <Research embedded />}
        </div>
      </div>
    </section>
  )
}
