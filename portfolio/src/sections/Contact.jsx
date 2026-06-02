import Icon from '../components/Icon'
import styles from './Contact.module.css'

export default function Contact({ personal }) {
  const contacts = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: 'mail' },
    { label: 'GitHub', value: `github.com/${personal.githubUser}`, href: personal.github, icon: 'github' },
    { label: 'LinkedIn', value: personal.linkedinLabel, href: personal.linkedin, icon: 'linkedin' },
    { label: 'Ubicación', value: personal.location, href: null, icon: 'location' },
  ]

  return (
    <section id="contacto" className={styles.section}>
      <p className={styles.label}>Contacto</p>
      <h2 className={styles.heading}>Hablemos</h2>
      <p className={styles.sub}>¿Interesado en trabajar juntos? Puedes encontrarme en cualquiera de estos canales.</p>
      <div className={styles.grid}>
        {contacts.map((c) =>
          c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className={styles.card}>
              <div className={styles.icon}><Icon name={c.icon} size={18} /></div>
              <div>
                <div className={styles.cardLabel}>{c.label}</div>
                <div className={styles.cardValue}>{c.value}</div>
              </div>
            </a>
          ) : (
            <div key={c.label} className={`${styles.card} ${styles.cardStatic}`}>
              <div className={styles.icon}><Icon name={c.icon} size={18} /></div>
              <div>
                <div className={styles.cardLabel}>{c.label}</div>
                <div className={styles.cardValue}>{c.value}</div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
