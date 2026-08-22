import useScrollReveal from '../hooks/useScrollReveal'
import styles from './OpenSource.module.css'

const contributions = [
  {
    repo: 'google/gvisor',
    lang: 'Go',
    status: 'merged',
    title: 'docs: select go branch for Go consumers',
    description: 'gVisor is Google\'s sandbox for safely running untrusted code, used in Google Cloud. Developers trying to install it as a Go library kept hitting a confusing build error with no obvious cause. I traced it to how the main branch is laid out for a different build system, confirmed the project publishes a separate branch meant for Go users, and documented that in the README and setup guide so others stop getting blocked.',
    pr: 'https://github.com/google/gvisor/pull/14144',
    prNumber: '#14144',
    files: 2,
    touched: ['README.md', 'quickstart.md'],
    merged: 'Aug 2026',
  },
  {
    repo: 'NVIDIA/cccl',
    lang: 'CUDA C++ / Python',
    title: '[libcu++] Improve cuda::mr::memory_resource debugger pretty-printers',
    description: 'CCCL is NVIDIA\'s core CUDA library collection, used by GPU developers worldwide. When inspecting GPU memory objects in a debugger, developers saw almost no useful detail. I rewrote the debugger display logic to expose each object\'s real internal state, expanded coverage from 3 to 12 scenarios, and added tests that check every case against actual GDB and LLDB output.',
    pr: 'https://github.com/NVIDIA/cccl/pull/10790',
    prNumber: '#10790',
    additions: 319,
    deletions: 30,
    files: 6,
    commits: 6,
    merged: 'Aug 2026',
  },
  {
    repo: 'NVIDIA/cccl',
    lang: 'CUDA C++',
    status: 'approved',
    title: '[cudax] Use _CCCL_NO_UNIQUE_ADDRESS instead of [[no_unique_address]]',
    description: 'A memory-saving C++ optimization in NVIDIA\'s CUDA headers was written with syntax that not every compiler supports the same way, so the optimization silently did nothing on some platforms. I swapped it for the library\'s own cross-compiler macro so it now applies consistently everywhere.',
    pr: 'https://github.com/NVIDIA/cccl/pull/10881',
    prNumber: '#10881',
    files: 4,
    touched: ['execution_policy.cuh', 'parallel_for_scope.cuh', 'run_once.cuh', 'optionally_static.cuh'],
    merged: 'Aug 2026',
  },
  {
    repo: 'uber/NullAway',
    lang: 'Java',
    title: 'Migrate InitializationTests to addSourceLines',
    description: 'NullAway is Uber\'s tool that catches null-pointer crashes in Java before code ships. Its test suite leaned on deprecated APIs and scattered fixture files, which made tests hard to follow and maintain. I moved the tests to define their sample code inline, deleted 4 obsolete files, and pulled shared setup into a reusable helper — all while keeping test coverage identical.',
    pr: 'https://github.com/uber/NullAway/pull/1694',
    prNumber: '#1694',
    additions: 1020,
    deletions: 1049,
    files: 5,
    commits: 3,
    merged: 'Aug 2026',
  },
]

function MergeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.5 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
    </svg>
  )
}

function PullRequestIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z" />
    </svg>
  )
}

const STATUSES = {
  merged: { label: 'Merged', icon: MergeIcon, cls: 'badgeMerged' },
  approved: { label: 'Approved', icon: CheckIcon, cls: 'badgeApproved' },
  open: { label: 'Open', icon: PullRequestIcon, cls: 'badgeOpen' },
}

function StatusBadge({ status = 'merged' }) {
  const { label, icon: Icon, cls } = STATUSES[status] ?? STATUSES.merged
  return (
    <span className={`${styles.badge} ${styles[cls]}`}>
      <Icon />
      {label}
    </span>
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
        <StatusBadge status={item.status} />
        <span className={styles.repo}>
          {item.repo}
          <span className={styles.prNum}> {item.prNumber}</span>
        </span>
        <span className={styles.date}>{item.merged}</span>
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>

      <div className={styles.stats}>
        {item.touched ? (
          <>
            <span className={styles.statMeta}>{item.files} files</span>
            <span className={styles.fileList}>
              {item.touched.map(f => (
                <span key={f} className={styles.file}>{f}</span>
              ))}
            </span>
          </>
        ) : (
          <>
            <span className={styles.additions}>+{item.additions.toLocaleString()}</span>
            <span className={styles.deletions}>−{item.deletions.toLocaleString()}</span>
            <DiffBar additions={item.additions} deletions={item.deletions} />
            <span className={styles.statMeta}>
              {item.files} files · {item.commits} commits
            </span>
          </>
        )}
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
