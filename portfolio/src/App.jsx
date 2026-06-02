import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Technologies from './sections/Technologies'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { personal, technologies, projects, techRationale } from './data'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar name={personal.shortName} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Hero personal={personal} />
          <About personal={personal} />
          <Technologies technologies={technologies} rationale={techRationale} />
          <Projects projects={projects} />
          <Contact personal={personal} />
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© 2025 {personal.name}</span>
        <span>·</span>
        <span>Construido con React + Vite</span>
        <span>·</span>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          {personal.githubUser}
        </a>
      </footer>
    </>
  )
}
