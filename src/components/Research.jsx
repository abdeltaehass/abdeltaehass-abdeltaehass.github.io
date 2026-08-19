import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Research.module.css'

const papers = [
  {
    title: 'SpineFairBench: A Counterfactual Evaluation Suite for Auditing Demographic Sensitivity in Spinal Radiology VLM Reports',
    authors: [
      { name: 'Ahmed Taha' },
      { name: 'Abdelrahman Taeha', me: true },
      { name: 'Muzzammil Ahmadzada' },
    ],
    abstract: 'A paired counterfactual evaluation suite for auditing demographic sensitivity in spinal-radiology VLM reports. Evaluates a frozen nine-model VLM panel across 7,996 source/counterfactual pairs — apparent age and sex edited under target-pathology preservation. Recommendation drift observed in all nine models; 443/450 stratified pairs (98.4%) passed blinded review by three board-certified radiologists.',
    tags: ['Counterfactual Fairness', 'VLM', 'Medical Imaging', 'Stable Diffusion'],
    paper: 'https://www.researchgate.net/publication/404620116_SpineFairBench_A_Counterfactual_Benchmark_for_Auditing_Demographic_Sensitivity_in_Spinal_Radiology_VLM_Reports',
    code: 'https://github.com/ahmedtaha100/SpineFairBench',
    dataset: 'https://huggingface.co/datasets/ahmedtaha100/spinefairbench-artifacts',
  },
  {
    title: 'MedInsider: Evaluating Medical LLM Agent Integrity Under Institutional Pressure',
    authors: [
      { name: 'Ahmed Taha' },
      { name: 'Abdelrahman Taeha', me: true },
      { name: 'Muzzammil Ahmadzada' },
    ],
    abstract: 'A FHIR-style evaluation suite measuring medical LLM agent integrity under institutional pressure across 840 paired-twin scenarios. Contributed evaluation and logging infrastructure for agent behavior analysis — deterministic action tracking, auditing workflows, and reproducibility tooling.',
    tags: ['LLM Agents', 'FHIR', 'Healthcare AI', 'Evaluation'],
    paper: null,
    code: null,
    dataset: null,
  },
]

function AuthorsLine({ authors }) {
  return (
    <p className={styles.authors}>
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ', '}
          {a.me ? <span className={styles.authorMe}>{a.name}</span> : a.name}
        </span>
      ))}
    </p>
  )
}

function PaperCard({ paper }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{paper.title}</h3>
      <AuthorsLine authors={paper.authors} />
      <p className={styles.abstract}>{paper.abstract}</p>
      <div className={styles.tags}>
        {paper.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      {(paper.paper || paper.code || paper.dataset) && (
        <div className={styles.links}>
          {paper.paper && (
            <a href={paper.paper} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Paper
            </a>
          )}
          {paper.code && (
            <a href={paper.code} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Code
            </a>
          )}
          {paper.dataset && (
            <a href={paper.dataset} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                <path strokeLinecap="round" d="M4 5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5M4 11v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
              </svg>
              Dataset
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Research({ embedded = false }) {
  const ref = useScrollReveal()

  const content = (
    <div className={styles.list}>
      {papers.map(p => <PaperCard key={p.title} paper={p} />)}
    </div>
  )

  if (embedded) return content

  return (
    <section id="research" className={styles.section}>
      <div className={`container reveal`} ref={ref}>
        <p className="section-label">Research</p>
        <h2 className="section-title">Publications.</h2>
        <p className="section-subtitle">
          Open-source audit tools for medical AI — testing demographic
          robustness, agent integrity, and reproducibility.
        </p>
        {content}
      </div>
    </section>
  )
}
