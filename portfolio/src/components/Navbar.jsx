import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar({ name }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{name}</span>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
