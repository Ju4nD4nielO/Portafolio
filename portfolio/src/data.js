export const personal = {
  name: 'Juan Daniel Ordóñez Sierra',
  shortName: 'JD Ordóñez',
  role: 'Desarrollador web full-stack',
  university: 'Ingeniería en CC — UVG',
  location: 'Ciudad de Guatemala, GT',
  email: 'danielordonez400@gmail.com',
  github: 'https://github.com/Ju4nD4nielO',
  githubUser: 'Ju4nD4nielO',
  linkedin: 'https://www.linkedin.com/in/juan-daniel-ord%C3%B3%C3%B1ez-sierra-46b1362b0',
  linkedinLabel: 'juan-daniel-ordóñez-sierra',
  bio: [
    'Soy estudiante de Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala (UVG). Mi formación previa fue en el Colegio Decroly Americano.',
    'Me defino como alguien curioso y proactivo. No siempre tengo todas las respuestas, pero cuando me encuentro con un problema que no conozco, lo investigo hasta resolverlo. Esa actitud de mantenerme informado y preparado es lo que guía mi forma de trabajar.',
    'En lo técnico, me siento cómodo construyendo aplicaciones full-stack: desde la interfaz en React hasta el servidor, la base de datos y el ambiente dockerizado. Me interesa que el código no solo funcione, sino que tenga estructura, pueda crecer y no dé vergüenza mostrar.',
  ],
}

export const techRationale = `
<strong>¿Por qué React?</strong> Su modelo de componentes me permite pensar en piezas reutilizables. Con hooks, Context API y React Router tengo lo que necesito para construir SPAs completas sin sobre-ingeniería. Lo he usado en proyectos con flujos de autenticación, estado global y consumo de APIs REST — no solo en tutoriales.<br><br>
<strong>¿Por qué Node.js + PostgreSQL?</strong> Porque construir el back-end propio me da control real sobre la lógica de negocio: desde los endpoints hasta los roles en base de datos. En el proyecto Grocery usé stored procedures, Prisma como ORM y seguridad a nivel de PostgreSQL — decisiones que se tomaron por razones técnicas concretas, no por seguir un tutorial.<br><br>
<strong>¿Por qué Docker?</strong> Porque "funciona en mi máquina" no es una solución. Docker me permite entregar ambientes reproducibles y separar servicios de forma limpia. Mis proyectos incluyen <code>docker-compose.yml</code> funcional.
`

export const technologies = [
  {
    name: 'React',
    color: 'blue',
    description: 'SPAs con hooks, Context API, React Router. Formularios con validación, manejo de estados de carga y error. Vite como bundler.',
  },
  {
    name: 'Node.js + Express',
    color: 'amber',
    description: 'APIs REST propias: rutas, middlewares, autenticación con JWT y sesiones. Back-end completo con lógica de negocio propia.',
  },
  {
    name: 'PostgreSQL + Prisma',
    color: 'teal',
    description: 'Modelado relacional, roles y permisos a nivel de base de datos, stored procedures. ORM con Prisma para migraciones y consultas tipadas.',
  },
  {
    name: 'Docker',
    color: 'blue2',
    description: 'Contenedores para front, back y BD. Docker Compose para orquestar ambientes reproducibles. Desplegado en Render.',
  },
  {
    name: 'Git / GitHub',
    color: 'purple',
    description: 'Ramas por feature, commits descriptivos, repositorios públicos con READMEs detallados. Historial que muestra cómo trabajo, no solo qué entrego.',
  },
  {
    name: 'HTML / CSS + Vite',
    color: 'green',
    description: 'HTML semántico, CSS responsivo como estándar mínimo. Vite para builds rápidos con HMR en desarrollo.',
  },
]

export const projects = [
  {
    title: 'Grocery — Seguridad avanzada',
    badge: 'Full-stack · Avanzado',
    badgeType: 'adv',
    description:
      'Extensión del sistema de tiendita con seguridad implementada a múltiples niveles. No solo autenticación en el back-end — los roles y permisos están definidos directamente en PostgreSQL, con stored procedures para operaciones críticas y Prisma como ORM para las migraciones y consultas del día a día. Autenticación basada en sesiones con manejo de expiración y logout seguro.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Roles en BD', 'Stored Procedures', 'Sesiones', 'Docker'],
    highlights: [
      'Roles y permisos en PostgreSQL',
      'Stored procedures para lógica crítica',
      'Prisma ORM + migraciones',
      'Autenticación con sesiones',
    ],
    github: 'https://github.com/Ju4nD4nielO/Grocery_proyecto2/tree/proyecto-3',
    live: null,
  },
  {
    title: 'Game Tracker',
    badge: 'Full-stack · Live',
    badgeType: 'done',
    description:
      'Aplicación para llevar el registro personal de videojuegos: los que estás jugando, los que quieres jugar y los que ya completaste. Front-end en React consumiendo una REST API propia construida con Node.js, Express y PostgreSQL. Desplegado en Render con back-end y base de datos en producción real.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'Render', 'Deploy'],
    highlights: [
      'REST API propia documentada',
      'Desplegado en producción (Render)',
      'Front + back + BD propios',
    ],
    github: 'https://github.com/Ju4nD4nielO/Proyecto1-frontend',
    live: 'https://proyecto1-frontend.onrender.com',
  },
  {
    title: 'Snake — React',
    badge: 'Front-end · Componentes',
    badgeType: 'ui',
    description:
      'Implementación del juego clásico Snake construida en React con Vite. Lo interesante no es el juego en sí, sino las decisiones de arquitectura: lógica de juego separada de la presentación, estado manejado completamente con hooks, componentes reutilizables para el tablero y las celdas, y ciclo de game loop gestionado con useEffect y setInterval. Un ejercicio claro de pensar en React antes de escribir código.',
    tags: ['React', 'Vite', 'Hooks', 'useState', 'useEffect', 'Componentes', 'Game loop'],
    highlights: [
      'Arquitectura orientada a componentes',
      'Estado 100% con hooks de React',
      'Lógica separada de presentación',
    ],
    github: 'https://github.com/Ju4nD4nielO/lab6-snake',
    live: null,
  },
]
