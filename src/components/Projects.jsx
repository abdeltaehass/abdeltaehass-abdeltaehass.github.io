import styles from './Projects.module.css'

const projects = [
  {
    name: 'S.A.I.N.T.',
    description: 'Network Intrusion Detection System with an AI agent reasoning engine for threat detection — 89% accuracy on NSL-KDD (125K+ samples). Low-latency inference via Flask + Redis + Plotly, processing 50–100 connections/sec with an interactive agent-in-the-loop dashboard.',
    tags: ['Python', 'PyTorch', 'Flask', 'Redis', 'Plotly'],
    github: 'https://github.com/abdeltaehass/S.A.I.N.T.',
    live: null,
  },
  {
    name: 'StockPulse',
    description: 'A short description of what this project does and what problem it solves.',
    tags: ['Python', 'HTML', 'C'],
    github: null,
    live: 'http://138.2.225.107:8080',
  },
  {
    name: 'PingVault',
    description: 'Network monitoring tool with ICMP ping, SNMP polling, TCP/UDP port checks, and agent-based metrics collection.',
    tags: ['Python', 'React', 'HTML'],
    github: 'https://github.com/abdeltaehass/PingVault',
    live: null,
  },
  {
    name: 'GovCon',
    description: 'A web platform that helps government contractors stay organized — tracking contracts, deadlines, and documentation in one place.',
    tags: ['Python', 'HTML', 'CSS'],
    github: 'https://github.com/abdeltaehass/GovCon',
    live: 'https://abdeltaehass.pythonanywhere.com/bids',
  },
  {
    name: 'Fajr — Islamic Prayer App',
    description: 'Full-featured Islamic companion app with GPS-based prayer times, offline caching, Qibla compass, full Quran with 7 reciters and audio playback, daily hadith, athkar, nearby masjid finder, and 7 customizable color themes.',
    tags: ['Flutter', 'Dart', 'Google Places API', 'just_audio'],
    github: 'https://github.com/abdeltaehass/Fajr',
    live: null,
  },
]

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <svg className={styles.folderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v8.25A2.25 2.25 0 004.5 16.5h15a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <div className={styles.cardLinks}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live demo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.projectDesc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">// what I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
        <div className={styles.more}>
          <a
            href="https://github.com/abdeltaehass"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            See more on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
