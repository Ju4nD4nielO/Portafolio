import Icon from '../components/Icon'
import styles from './Projects.module.css'

const badgeClass = {
  done: styles.badgeDone,
  adv:  styles.badgeAdv,
  ui:   styles.badgeUi,
}

export default function Projects({ projects }) {
  return (
    <section id="proyectos" className={styles.section}>
      <p className={styles.label}>Proyectos</p>
      <h2 className={styles.heading}>Lo que he construido</h2>
      <p className={styles.sub}>Repositorios públicos en GitHub con READMEs detallados e instrucciones de instalación.</p>
      <div className={styles.list}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleRow}>
                <span className={styles.title}>{project.title}</span>
                <span className={`${styles.badge} ${badgeClass[project.badgeType]}`}>
                  {project.badge}
                </span>
              </div>
              <div className={styles.links}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Icon name="github" size={13} />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Icon name="externalLink" size={13} />
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.highlights}>
              {project.highlights.map((h) => (
                <div key={h} className={styles.highlight}>
                  <Icon name="check" size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
