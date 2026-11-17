# AGENTS.md

## Project Context

Wayora's marketing website (wayoratour.com). A plain Vite + React site hosted on
Cloudflare Pages — no Base44 and no sign-in. The app itself lives at
app.wayoratour.com (repo `aronosk-code/wayora`).

- Build: `npm run build` → `dist/` (Cloudflare Pages: build command `npm run build`, output `dist`).
- Local: `npm run dev`.
- Text in 7 languages: `src/lib/i18n/locales/*.js` (legal pages in `src/lib/i18n/legal/`).
- Contact form posts to the app's backend function `contactMessage` (Supabase);
  messages are stored and emailed to the owner.
- Featured tours are real tours from the app (`FEATURED_TOUR_IDS` in `src/lib/siteConfig.js`).
- Media (logo, hero video) is served from `public/`.

## Working Notes

- Keep claims on the site in line with what the app does (plans, features, numbers).
- Run `npm run lint` and `npm run build` before finishing code changes.
