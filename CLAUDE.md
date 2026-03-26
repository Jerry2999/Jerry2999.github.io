# CLAUDE.md — Jerry2999.github.io

## Proyecto
- Portafolio/CV personal de **Gerardo Flores** (alias Jerry), construido con **Twilight** (Astro v5 + Svelte + TailwindCSS v4)
- Idioma del sitio: **español**
- Deploy: GitHub Pages (Jerry2999.github.io)
- Package manager: **pnpm** (no npm/yarn)
- Template base: Twilight (https://github.com/Spr-Aachen/Twilight)

## Arquitectura de datos
- **Configuración central** en `twilight.config.yaml` (perfil, navbar, sidebar, tema, wallpaper, etc.)
- **Skills** son archivos JSON individuales en `src/content/skills/` (name, icon, category, level, experience)
- **Timeline** son archivos JSON en `src/content/timeline/` (experiencia laboral y educación)
- **Proyectos** son carpetas en `src/content/projects/` con `intro.json` + imagen opcional
- **About** es `src/content/about.md` (markdown)
- **Blog posts** van en `src/content/posts/` (actualmente vacío, blog deshabilitado en nav)
- **Avatar** está en `public/assets/images/avatar.jpg` — PENDIENTE: reemplazar con foto real de Gerardo

## Convenciones
- **Imágenes estáticas** van en `public/assets/images/`
- **Navegación** se configura en `twilight.config.yaml` sección `navbar.links`, con presets definidos en `src/constants/link-presets.ts`
- **Redes sociales** se configuran en `twilight.config.yaml` sección `profile.links`
- **Iconos** usan Iconify (fa6-brands, material-symbols, logos, mdi)
- **i18n** tiene soporte integrado en `src/i18n/` — el sitio está configurado en `es`
- **Build** requiere ejecutar `node scripts/generate-icons.js` antes (el script de pnpm dev/build lo hace automáticamente)

## Preferencias del usuario
- El sitio debe estar completamente en **español**
- Al reescribir descripciones de LinkedIn, **no copiar textualmente** — reformular el contenido
- **No** trabaja en Municipio de Tizayuca — esa info era incorrecta de una conversación anterior
- Su nombre/marca personal es **GerardoF** (no EFEELE, que era del template original NeonMint)
- Prefiere WhatsApp como método de contacto principal (wa.me/528441020599)
- El blog está deshabilitado por ahora — solo necesita un CV/portafolio
- Instagram y YouTube fueron removidos — no los usa profesionalmente

## Datos del usuario (referencia rápida)
- **Nombre completo**: Gerardo Alejandro Flores Muñoz
- **Rol**: Software Engineer en Invitafy (Saltillo, Coahuila) desde julio 2022
- **Formación**: Ing. Mecatrónica, Instituto Tecnológico de Saltillo (2017-2022)
- **Experiencia previa**: Líder de línea en Unicar Plastics (ene 2020 - jun 2022)
- **Tech stack**: Angular, React, Svelte, TypeScript, JavaScript, HTML, CSS, Tailwind, APIs REST, Azure, Power BI, Git
- **Idiomas**: Español (nativo), Inglés (B1)
- **Contacto**: gerardo.2999@hotmail.com | WhatsApp: 8441020599
- **GitHub**: Jerry2999 | **LinkedIn**: /in/gerardo-flores-99aa5126b/

## Gotchas
- **Umami config** debe incluir `scripts: ""` aunque esté deshabilitado, o `profile.astro` lanza error `Cannot read properties of undefined (reading 'match')`
- **astro-icon** no soporta `<text>` en SVGs — usar solo `<path>` y `<g>` elements
- **LinkedIn bloquea scraping** (error 999) — pedir al usuario que copie/pegue su info manualmente
- El CV en Word está en la raíz del proyecto: `Gerardo Alejandro Flores Muñoz.docx`
- La carpeta `Twilight-main/` en la raíz es el template original descargado — se puede eliminar

## Decisiones de arquitectura
- **[2026-03-25] Migración de NeonMint a Twilight**: el usuario no le gustó el diseño de NeonMint. Se migró todo el contenido al template Twilight que tiene más features (skills, timeline, proyectos con JSON, blog integrado, búsqueda, temas)
- **[2026-03-25] Blog deshabilitado**: solo se necesita portafolio/CV por ahora. La nav tiene Home, Portafolio (Projects/Skills/Timeline), About
- **[2026-03-25] Tema verde (hue: 160)**: para mantener consistencia con el esquema de colores mint/green que tenía NeonMint
