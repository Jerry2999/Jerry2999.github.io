# CLAUDE.md — Jerry2999.github.io

## Proyecto
- Portafolio/CV personal de **Gerardo Flores** (alias Jerry), construido con **Astro v5 + Preact + TailwindCSS v4**
- Idioma del sitio: **español**
- Deploy: GitHub Pages (Jerry2999.github.io)

## Arquitectura de datos
- Los datos del perfil (nombre, links, títulos, hobbies, SEO) están en `src/content/staticData/allStaticData.json` con schema en `src/content/config.ts`
- La experiencia laboral está **hardcodeada** en `src/components/portfolio/Experience.astro` (array `EXPERIENCE`), no en el JSON
- Las herramientas/tech stack están hardcodeadas en `src/components/portfolio/Tools.astro` (array `allTools`)
- La foto de perfil se referencia en 4 lugares: `allStaticData.json`, `MarkdownPostLayout.astro`, `MarkdownAbout.astro`, `about-me.md`

## Convenciones
- **Imágenes estáticas** van en `public/images/`
- **Textos de UI** están inline en los componentes Astro, no en archivos i18n
- **Headings** usan el componente `Heading.astro` con props `text` y `textGradient`
- **Navegación** se define en `Navigation.astro` con el objeto `menu` (hardcoded)
- Los blog posts son archivos `.md` en `src/pages/blog/posts/`
- Los proyectos del portafolio son `.md` en `src/pages/portfolio/projects/`

## Preferencias del usuario
- El sitio debe estar completamente en **español**
- Al reescribir descripciones de LinkedIn, **no copiar textualmente** — reformular el contenido
- El usuario prefiere que se obtenga info de sus perfiles públicos (LinkedIn, GitHub) cuando sea posible

## Gotchas
- **LinkedIn bloquea scraping** (error 999) — pedir al usuario que copie/pegue su info manualmente
- `Astro.glob` está deprecated en Astro v5 — usar `import.meta.glob` en su lugar (warnings existentes en build)
- La página `about-me.md` aún contiene el contenido original de Fernando López — pendiente de reescribir con la historia de Gerardo
