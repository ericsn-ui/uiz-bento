# Infinite Bento (`UIzBENTO`)

![Infinite Bento Preview](./og-image.png)

An interactive, full-viewport bento showcase featuring **144 responsive UI cards** organized across four modular sections (`Dashboard`, `Widgets`, `SEO Analytics`, and `Showcase`), wrapped in an optional infinite vertical scroll loop with live theme customization and GSAP motion choreography.

## Key Features
- **144 Interactive Bento Cards**: Data visualizations, finance & crypto trackers, calendars, media players, activity rings, AI file organizer simulator, focus timer, notification inbox, and interactive form/commerce widgets.
- **Appearance Studio (`Theme & Fonts` Dock)**: Live color theme presets (`Olive`, `Cobalt`, `Indigo`, `Ember`, `Rose`, `Mono`), `Light / Dark / Auto` scheme toggle, lazy-loaded font pairings (`Apple Native`, `Newsreader`, `Bricolage`, `Lora`, `Syne`), `Comfortable / Compact` density modes, and an **Infinite Loop** pause switch persisted in `localStorage`.
- **Command Palette (`Cmd/Ctrl + K`)**: Instant keyboard search, category filtering (`Finance`, `Media`, `SEO`, `Utilities`), jump-to-card highlighting, and quick studio actions.
- **GSAP 3.12.5 + ScrollTrigger Motion**: Batched stagger card entrances, scrubbed media parallax, pointer-tracked radial hover glow + 3D tilt, `#scroll-progress` indicator, cinematic replay, and `prefers-reduced-motion` support.
- **Zero-Runtime Build**: Pre-compiled minified Tailwind CSS (`styles.css`), SVG sprite icons, Unsplash photography with explicit aspect dimensions, and Vercel security/caching headers (`vercel.json`).

## Local Development

Preview locally over any static HTTP server:

```bash
python3 -m http.server 8090
```

Rebuild production CSS after modifying `src/tailwind.css` or `index.html`:

```bash
npm install
npm run build:css
```

Or run without installing `node_modules`:

```bash
npx -y tailwindcss@3.4.16 -c tailwind.config.js -i src/tailwind.css -o styles.css --minify
```

## Deploying to Vercel

- **Framework Preset**: `Other`
- **Root Directory**: `./`
- **Build Command**: Leave empty to serve pre-compiled `styles.css`, or set `npm run build`
- **Output Directory**: `.`
- **Live URL**: [uizbento.vercel.app](https://uizbento.vercel.app/)
