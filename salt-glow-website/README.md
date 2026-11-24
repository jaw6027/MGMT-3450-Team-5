# Salt Glow website

This standalone website is separate from the existing customer studio at the repository root. It has its own dependencies, source, tests, and build output. No root application or deployment workflow changes are needed. The existing GitHub Pages workflow continues to build the root project; it does not deploy this website.

## Run locally

Requires Node.js 20.19+ or 22.12+ (validated with Node 24).

```sh
cd salt-glow-website
npm ci
npm run dev
```

The website runs on port 5174, separate from the root application on port 5173.

```sh
npm run build
npm run preview -- --port 4174
```

Build output is in this folder's `dist/`. Relative asset paths support static hosting under a project path.

## Verify

```sh
npx playwright install chromium
npm test
```

With system Chromium available:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

Tests start their own server on port 5190 and cover navigation, images, service details, contact fields, appointment requests, standing appointments, shopping notes, and responsive layouts.

## Downloadable preview

```sh
node scripts/export-preview.mjs
```

Open the generated `salt-glow-preview.html` in your browser. Images, fonts, styling, and interactions are embedded. Pass a destination filename to export elsewhere. Generated previews are ignored by Git.

## Appointment requests

Visitors enter first and last name, phone, email, service, and preferred date and time. They can request a standing appointment and add occasion/style notes for private shopping. The form prepares text for visitors to copy and manually send to @saltglow661 on Instagram.

No backend or live availability calendar is connected. Nothing is automatically sent, stored in a database, or reserved. Services, pricing, availability, and recurring schedules require confirmation by the business. Details remain in browser memory until the visitor chooses to share them.

## Assets

The supplied Salt Glow logo has a transparent background. Spa and service images are illustrative concepts, not verified photographs of the business or its equipment. Fonts are self-hosted; SIL Open Font License notices are included in `public/fonts/`.
