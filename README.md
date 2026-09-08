# eBizCo Australia

Company website for eBizCo Australia Pty Ltd, built with Next.js (App Router).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5200](http://localhost:5200) with your browser to see the result.

## Structure

- `app/(main)/` — the main eBizCo marketing site (home, about, services, blog, contact, etc.)
- `app/ozkie/` — the OZKIE / Sovereign Lock Platform sub-brand (`/ozkie`, `/ozkie/ozlock`, `/ozkie/ozlodge`, `/ozkie/ozpms`), with its own independent layout and design system
- `lib/products.js` — central registry of product links (OZLODGE, OZLOCK, OZPMS, ICUTV, AntiFake, ProjMan) used across both trees
- `public/assets/` — static assets (CSS, JS, fonts, images)
- `docs/` — internal product specifications

## Scripts

```bash
npm run dev     # start the dev server on port 5200
npm run build   # production build
npm run start   # run the production build; reads PORT from the environment (defaults to 3000)
npm run lint    # lint the project
```
