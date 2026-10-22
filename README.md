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

## Deploy notes (app pages)

- **`/delete-account` self-service form.** The form calls each market's Nexus API, set at **build** time:
  `NEXT_PUBLIC_NEXUS_API_AU=https://api-au.ebizco.com.au/api/v1` and, for the VN pretrial (VN-PT a, OVH Singapore),
  `NEXT_PUBLIC_NEXUS_API_VN=https://api-vn.ebizco.com.au/api/v1`. Both go in `.env.production.local` (one line each;
  append, don't overwrite the AU line) and need a rebuild: the values are baked in at build, not read at run time.
  The VN view links as `/delete-account?m=vn` (`?market=vn` and `?lang=vi` also work).
  Unset = no form for that market (the page then shows only the in-app and email paths), so leave it unset
  until the AU production API answers. The page text says AU 23 days / VN 30 days (`GRACE_DAYS`); the real
  due date comes from the API reply. The API must allow CORS from `https://ebizco.com.au` and
  `https://www.ebizco.com.au` for `GET /auth/otp/channels` and `POST /auth/otp/send`, `/auth/otp/verify`,
  `/public/account-deletion` (JSON body, so browsers send an `OPTIONS` preflight).
- **App privacy notices** (`/privacy/aura`, `/privacy/maven`). The text is Finance's, copied verbatim with
  `node scripts/sync-privacy.mjs <nexus notice.md> "### 2b." <version>` into `content/privacy/`; the script
  also writes `<version>.meta.json` (the effective date from Finance's heading, and the source commit); the
  version per page is in `lib/privacyNotices.js`. While any open marker remains or `effective` is null,
  the page shows a draft banner and is `noindex`. Deploy only on the PM's word.
