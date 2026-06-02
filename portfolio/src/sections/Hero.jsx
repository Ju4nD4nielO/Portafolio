import Icon from '../components/Icon'
import styles from './Hero.module.css'

export default function Hero({ personal }) {
  return (
    <div className={styles.hero}>
      <span className={styles.tag}>Disponible para oportunidades</span>
      <h1 className={`${styles.h1} fade-up fade-up-1`}>
        {personal.name.split(' ').slice(0, 2).join(' ')}<br />
        <span className={styles.accent}>{personal.name.split(' ').slice(2).join(' ')}</span>
      </h1>
      <p className={`${styles.subtitle} fade-up fade-up-2`}>
        Desarrollador web full-stack con base en React, back-end propio con Node.js + PostgreSQL, y Docker en producción. Curioso por naturaleza — cuando algo no lo sé, lo encuentro. Me interesa construir productos que funcionen bien, no solo que compilen.
      </p>
      <div className={`${styles.actions} fade-up fade-up-3`}>
        <a href="#proyectos" className={styles.btnPrimary}>
          <Icon name="grid" size={15} />
          Ver proyectos
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
          GitHub
        </a>
        <a href="#contacto" className={styles.btnOutline}>Contacto</a>
      </div>
      <div className={`${styles.meta} fade-up fade-up-4`}>
        <span className={styles.metaItem}>
          <Icon name="location" size={15} />
          {personal.location}
        </span>
        <span className={styles.metaItem}>
          <Icon name="school" size={15} />
          {personal.university}
        </span>
        <span className={styles.metaItem}>
          <Icon name="clock" size={15} />
          Inicio inmediato
        </span>
      </div>
    </div>
  )
}
