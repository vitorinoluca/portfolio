# Portfolio

Portfolio personal con estética terminal/macOS, hecho con React, TypeScript y Tailwind CSS.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Demo

🔗 [vitorinoluca-portfolio.netlify.app](https://vitorinoluca-portfolio.netlify.app)

## Características

- Navbar estilo macOS y hero de escritorio (`MacNavbar`, `HeroDesktop`).
- Explorador de archivos simulado para navegar el contenido del sitio (`FileExplorer`).
- Log de experiencia con formato de terminal (`ExperienceLog`).
- Sección de contacto que emula una consola interactiva (`ContactTerminal`).
- Animaciones con `motion` (Framer Motion) e iconos con `lucide-react`.

## Stack técnico

- React + TypeScript + Vite
- Tailwind CSS (vía `@tailwindcss/postcss`)
- `motion` para animaciones, `lucide-react` para iconos

## Instalación

```bash
git clone https://github.com/vitorinoluca/portfolio.git
cd portfolio
npm install
npm run dev
```

Build de producción: `npm run build` (compila TypeScript y genera el bundle con Vite).

<!-- TODO: agregar captura -->
