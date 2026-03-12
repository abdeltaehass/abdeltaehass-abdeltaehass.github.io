import styles from './About.module.css'

const skills = [
  'Python', 'JavaScript / React', 'Flutter / Dart',
  'PyTorch / TensorFlow', 'SQL', 'AWS / GCP',
  'Docker', 'LangChain / CrewAI',
  'Node.js / Spring Boot', 'Git / CI-CD',
  'Swift', 'C / C++ / Java',
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">// who I am</p>
        <h2 className="section-title">About Me</h2>
        <div className={styles.layout}>
          <div className={styles.bio}>
            <p>
              I'm Abdel Rahman, a Software Engineer at DHCS where I build autonomous
              AI agents and ETL pipelines that bridge enterprise systems and downstream
              analytics. I hold a BS in Computer Science from Sacramento State and I'm
              currently pursuing my MS in Computer Science (Machine Learning) at
              Georgia Tech.
            </p>
            <p>
              I'm drawn to problems at the intersection of software engineering and
              machine learning — building systems that are not just functional but
              genuinely intelligent. I care about clean architecture, reliable data,
              and shipping things that work.
            </p>
            <p>
              Outside of work I'm studying for CCNA, CompTIA Security+, Network+,
              and A+ certifications, and building iOS apps in my spare time.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Download Resume ↗
            </a>
          </div>
          <div className={styles.skillsBox}>
            <p className={styles.skillsLabel}>Technologies I work with</p>
            <ul className={styles.skills}>
              {skills.map(s => (
                <li key={s} className={styles.skill}>
                  <span className={styles.arrow}>▸</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
