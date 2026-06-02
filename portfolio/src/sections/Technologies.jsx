import styles from './Technologies.module.css'

const iconColors = {
  blue: styles.blue,
  amber: styles.amber,
  teal: styles.teal,
  blue2: styles.blue2,
  purple: styles.purple,
  green: styles.green,
}

const techIcons = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8l4 4-4 4"/>
    </svg>
  ),
  'Node.js + Express': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  'PostgreSQL + Prisma': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  'Git / GitHub': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
  'HTML / CSS + Vite': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

export default function Technologies({ technologies, rationale }) {
  return (
    <section id="tecnologias" className={styles.section}>
      <p className={styles.label}>Tecnologías</p>
      <h2 className={styles.heading}>Stack elegido y por qué</h2>
      <div
        className={styles.rationale}
        dangerouslySetInnerHTML={{ __html: rationale }}
      />
      <div className={styles.grid}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.icon} ${iconColors[tech.color]}`}>
                {techIcons[tech.name]}
              </div>
              <span className={styles.cardName}>{tech.name}</span>
            </div>
            <p className={styles.cardDesc}>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
