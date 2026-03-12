import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Open to opportunities
        </div>
        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.accent}>Abdel Rahman</span>.
          <br />
          I build intelligent systems.
        </h1>
        <p className={styles.sub}>
          Software Engineer at DHCS. CS grad from Sacramento State, MS candidate at Georgia Tech.
          I work at the intersection of software engineering, machine learning, and autonomous agents.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View Projects</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Resume ↗
          </a>
          <a
            href="https://github.com/abdeltaehass"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            GitHub ↗
          </a>
        </div>
        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span /><span /><span />
          </div>
          <pre className={styles.code}>{`$ whoami
abdel-rahman-taeha

$ cat stack.txt
Python · Flutter · React · PyTorch · AWS · LangChain

$ ls projects/
nids/  al-manar/  fajr/  ...`}<span className={styles.cursor}>▌</span></pre>
        </div>
      </div>
    </section>
  )
}
