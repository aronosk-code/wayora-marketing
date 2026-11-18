# Wayora website (wayoratour.com)

The marketing site for Wayora. Plain Vite + React, hosted on Cloudflare
(Workers with static assets, see `wrangler.jsonc`). The app itself is at
app.wayoratour.com (repo `aronosk-code/wayora`).

## Run locally

```bash
npm install
npm run dev
```

## Build and deploy

Cloudflare builds the `cloudflare` branch automatically on every push:
`npm run build` → `dist/`, then `npx wrangler deploy`.

## Where things are

- Text in 7 languages: `src/lib/i18n/locales/` (legal pages: `src/lib/i18n/legal/`)
- Featured tours, app and store links: `src/lib/siteConfig.js`
- Contact form: posts to the app's `contactMessage` function (saved and emailed)
- Logo and hero video: `public/`
