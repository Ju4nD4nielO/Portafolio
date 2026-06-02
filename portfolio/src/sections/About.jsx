import Icon from '../components/Icon'
import styles from './About.module.css'

export default function About({ personal }) {
  return (
    <section id="sobre-mi" className={styles.section}>
      <p className={styles.label}>Sobre mí</p>
      <div className={styles.grid}>
        <div className={styles.text}>
          {personal.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Datos</h4>
          <div className={styles.row}>
            <Icon name="user" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} />
            <span className={styles.rowLabel}>Nombre</span>
            <span className={styles.rowValue}>{personal.name}</span>
          </div>
          <div className={styles.row}>
            <Icon name="school" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} />
            <span className={styles.rowLabel}>Universidad</span>
            <span className={styles.rowValue}>{personal.university}</span>
          </div>
          <div className={styles.row}>
            <Icon name="mail" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} />
            <span className={styles.rowLabel}>Email</span>
            <span className={styles.rowValue}>
              <a href={`mailto:${personal.email}`} className={styles.link}>{personal.email}</a>
            </span>
          </div>
          <div className={styles.row}>
            <Icon name="github" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} />
            <span className={styles.rowLabel}>GitHub</span>
            <span className={styles.rowValue}>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}>{personal.githubUser}</a>
            </span>
          </div>
          <div className={styles.row}>
            <Icon name="linkedin" size={15} style={{ color: 'var(--accent)', marginTop: 2 }} />
            <span className={styles.rowLabel}>LinkedIn</span>
            <span className={styles.rowValue}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>{personal.linkedinLabel}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
