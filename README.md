# Uday Nandaniya — Portfolio (React)

A React + Vite rebuild of the original portfolio, with a 3D animated neural
network in the hero section built with `@react-three/fiber` / `three.js`,
and scroll/entry animations powered by `framer-motion`.

## Stack

- **React 18 + Vite** — app shell and dev server
- **Tailwind CSS** — styling, using a small custom design-token set in
  `tailwind.config.js` (colors, fonts, glow/grid utilities)
- **Framer Motion** — page-load and scroll-triggered animations
- **@react-three/fiber + three.js** — the animated 3D neural network in the
  hero (`src/components/NeuralNetwork3D.jsx`); it's lazy-loaded so the rest
  of the page renders instantly even before the 3D bundle arrives

## Project structure

```
src/
  data.js               # all resume content (profile, projects, skills, etc.)
  App.jsx                # assembles the page from section components
  components/
    Navbar.jsx
    Hero.jsx              # headline + the 3D neural network background
    NeuralNetwork3D.jsx   # the three.js/react-three-fiber scene
    SectionWrapper.jsx    # shared section heading + scroll-reveal wrapper
    About.jsx
    Projects.jsx
    Experience.jsx
    Skills.jsx
    Contact.jsx
```

To edit the content (name, projects, skills, contact info, etc.), everything
lives in `src/data.js` — no need to touch the components.

## Getting started

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Notes

- The 3D scene respects `prefers-reduced-motion` at the page level (all CSS
  transitions/animations are shortened); if you want the 3D canvas itself to
  also pause for that preference, you can conditionally skip mounting
  `NeuralNetwork3D` based on `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- Fonts (`Sora`, `Manrope`, `JetBrains Mono`) are loaded from Google Fonts in
  `index.html`.
- `node_modules` and `dist` are intentionally excluded from this archive —
  run `npm install` after unzipping.
