import useScrollReveal from '../hooks/useScrollReveal'
import styles from './OpenSource.module.css'

const contributions = [
  {
    repo: 'uber/NullAway',
    title: 'Migrate InitializationTests to addSourceLines',
    description: 'Modernized initialization-analysis tests in Uber\'s NullAway static-analysis framework by replacing deprecated addSourceFile APIs with inline addSourceLines fixtures, removing 4 obsolete testdata files while preserving full regression coverage.',
    pr: 'https://github.com/uber/NullAway/pull/1694',
    prNumber: '#1694',
    status: 'Merged',
  },
]

function ContributionRow({ item }) {
  return (
    <a
      href={item.pr}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.row}
    >
      <div className={styles.header}>
        <span className={styles.repo}>{item.repo}</span>
        <span className={styles.status}>{item.status} {item.prNumber}</span>
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </a>
  )
}

export default function OpenSource({ embedded = false }) {
  const ref = useScrollReveal()

  const content = (
    <div className={styles.list}>
      {contributions.map(c => <ContributionRow key={c.pr} item={c} />)}
    </div>
  )

  if (embedded) return content

  return (
    <section id="open-source">
      <div className={`container reveal`} ref={ref}>
        <p className="section-label">Open Source</p>
        <h2 className="section-title">Contributions.</h2>
        {content}
      </div>
    </section>
  )
}
