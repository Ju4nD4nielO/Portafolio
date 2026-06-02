# Juan Daniel Ordóñez Sierra — Portfolio

Portafolio web personal desarrollado con **React + Vite**, desplegado en [Vercel](https://vercel.com) / [Render](https://render.com).

## 🔗 Links

- **Portafolio live:** https://portafolio-two-psi-12.vercel.app 
- **GitHub:** [github.com/Ju4nD4nielO](https://github.com/Ju4nD4nielO)

---

## 🛠 Stack

| Tecnología | Uso |
|---|---|
| React 18 | UI y componentes |
| Vite 4 | Bundler y dev server |
| CSS Modules | Estilos con scope por componente |
| Google Fonts (DM Sans / DM Mono) | Tipografía |

Sin dependencias externas de UI — todo construido desde cero.

---

## 📁 Estructura del proyecto

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Icon.jsx
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── sections/         # Secciones del portafolio
│   │   ├── Hero.jsx / Hero.module.css
│   │   ├── About.jsx / About.module.css
│   │   ├── Technologies.jsx / Technologies.module.css
│   │   ├── Projects.jsx / Projects.module.css
│   │   └── Contact.jsx / Contact.module.css
│   ├── data.js           # Todo el contenido del portafolio
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

> Para actualizar contenido (proyectos, bio, links), editar únicamente **`src/data.js`**.

---

## 🚀 Instalación y uso local

### Requisitos

- Node.js >= 16
- npm >= 7

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Ju4nD4nielO/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173
```

### Build de producción

```bash
npm run build
# Genera carpeta /dist lista para deploy

npm run preview
# Preview local del build de producción
```

---

## ☁️ Deploy

### Vercel (recomendado)

```bash
npm i -g vercel
vercel
```

O conecta el repositorio directamente en [vercel.com](https://vercel.com) — detecta Vite automáticamente.

---
