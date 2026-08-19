import { useState, useEffect } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Education from './components/Education'
import ProjectsPublications from './components/ProjectsPublications'
import ExperienceOpenSource from './components/ExperienceOpenSource'
import Contact, { ContactFooter } from './components/Contact'

const SECTIONS = ['about', 'education', 'research', 'work', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const els = SECTIONS.map(id => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="app-layout">
        <Sidebar activeSection={activeSection} />
        <main id="main-content" className="tab-main">
          <About />
          <Education />
          <ProjectsPublications />
          <ExperienceOpenSource />
          <Contact />
        </main>
      </div>
      <ContactFooter />
    </>
  )
}

export default App
