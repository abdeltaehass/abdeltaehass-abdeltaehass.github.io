import useScrollReveal from '../hooks/useScrollReveal'
import styles from './OpenSource.module.css'

const contributions = [
  {
    repo: 'NVIDIA/cccl',
    lang: 'CUDA C++ / Python',
    title: '[libcu++] Improve cuda::mr::memory_resource debugger pretty-printers',
    description: 'Enhanced GDB and LLDB pretty-printers for CUDA C++ memory resources with state-aware inspection, expanding debugger coverage from 3 to 12 cases across heap, in-situ, empty/reset/moved-from, synchronous, and aliased states. Validated all 12 CMake debugger scenarios against expected GDB and LLDB output across optimized test harnesses.',
    pr: 'https://github.com/NVIDIA/cccl/pull/10790',
    prNumber: '#10790',
    status: 'Merged',
  },
  {
    repo: 'uber/NullAway',
    lang: 'Java',
    title: 'Migrate InitializationTests to addSourceLines',
    description: 'Modernized initialization-analysis tests in Uber\'s NullAway static-analysis framework by replacing deprecated addSourceFile APIs with inline addSourceLines fixtures, removing 4 obsolete testdata files while preserving full regression coverage. Consolidated shared Java test source into a reusable helper and removed obsolete deprecation suppression from the test class.',
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
        <span className={styles.repo}>
          {item.repo}
          {item.lang && <span className={styles.lang}> · {item.lang}</span>}
        </span>
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
