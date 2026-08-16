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
    additions: 319,
    deletions: 30,
    files: 6,
    commits: 6,
    merged: 'Aug 14, 2026',
  },
  {
    repo: 'uber/NullAway',
    lang: 'Java',
    title: 'Migrate InitializationTests to addSourceLines',
    description: 'Modernized initialization-analysis tests in Uber\'s NullAway static-analysis framework by replacing deprecated addSourceFile APIs with inline addSourceLines fixtures, removing 4 obsolete testdata files while preserving full regression coverage. Consolidated shared Java test source into a reusable helper and removed obsolete deprecation suppression from the test class.',
    pr: 'https://github.com/uber/NullAway/pull/1694',
    prNumber: '#1694',
    additions: 1020,
    deletions: 1049,
    files: 5,
    commits: 3,
    merged: 'Aug 13, 2026',
  },
]

function MergeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.5 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
    </svg>
  )
}

// Five-block diff bar, GitHub-style: green blocks proportional to additions.
function DiffBar({ additions, deletions }) {
  const total = additions + deletions
  const greens = total === 0 ? 0 : Math.max(1, Math.min(5, Math.round((additions / total) * 5)))
  return (
    <span className={styles.diffBar} aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => (
        <span
          key={i}
          className={`${styles.diffBlock} ${i < greens ? styles.diffBlockAdd : styles.diffBlockDel}`}
        />
      ))}
    </span>
  )
}

function ContributionRow({ item }) {
  return (
    <a
      href={item.pr}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.row}
    >
      <div className={styles.header}>
        <span className={styles.mergedBadge}>
          <MergeIcon />
          Merged
        </span>
        <span className={styles.repo}>
          {item.repo}
          <span className={styles.prNum}> {item.prNumber}</span>
        </span>
        <span className={styles.date}>{item.merged}</span>
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>

      <div className={styles.stats}>
        <span className={styles.additions}>+{item.additions.toLocaleString()}</span>
        <span className={styles.deletions}>−{item.deletions.toLocaleString()}</span>
        <DiffBar additions={item.additions} deletions={item.deletions} />
        <span className={styles.statMeta}>
          {item.files} files · {item.commits} commits
        </span>
        <span className={styles.lang}>{item.lang}</span>
      </div>
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
