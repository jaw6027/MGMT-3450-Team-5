# Salt Glow — Spa & Wellness

The main website is a responsive luxury spa concept with ivory, brown, and gold styling, self-hosted typography, locally served illustrative spa imagery, service detail dialogs, mobile navigation, and reduced-motion support.

Booking buttons open an appointment request planner. Visitors select a ritual, preferred date and time, then copy their request and manually send it to **@saltglow661** on Instagram. The planner does not send messages, persist personal details, reserve availability, or confirm appointments. Services, pricing, and availability require personal confirmation. The generated spa images illustrate the visual direction and are not photographs of Salt Glow premises.

The existing customer studio remains available through **Team Studio** in the footer or `?studio` on the current site URL. Its functionality and browser storage are preserved.

## Customer Studio

A responsive customer relationship and marketing workspace inspired by Salt Glow's Instagram presence, @saltglow661. The site combines customer interests, campaign planning, and follow-up tasks in a cream, gold, and forest-green interface.

## Run locally

Requires Node.js 20.19+ or 22.12+ (validated with Node 24).

```sh
npm ci
npm run dev
```

The development server listens on port 5173 by default. For a production build, run `npm run build`; `npm run preview` serves the generated `dist/` directory. Deploy `dist/` to a static website host.

## What works

- Overview counts calculated from the current workspace data.
- Add and edit contacts, track their interests and inquiry stages, record marketing permission and notes.
- Search and filter contacts; export the matching rows as CSV.
- Create and edit campaign captions, intended audience, channel, review status, and planned date.
- Copy campaign captions for manual sharing.
- Add, complete, and delete follow-up tasks.
- Browser persistence and responsive layouts for phones and desktops.
- Original three Instagram drafts retained and loaded into the campaign planner.

The workspace starts with **fictional sample contacts**. It saves data only in this browser's local storage. It does not synchronize between teammates, connect to Instagram, send messages, publish scheduled posts, accept bookings, or collect real leads. Do not use this prototype to store sensitive or real customer data. Production use requires authentication, authorized team access, a shared database, privacy controls, and approved social integrations. CSV export is provided for the current filtered list; consent is recorded, not automatically obtained.

Salt Glow's current location, availability, prices, and health claims have not been verified. Campaigns remain drafts pending business review. The generated flyer and decorative artwork are concepts, not photographs of the actual premises; no group package or included refreshments is promised. Confirm imagery accurately represents any promoted experience. The lotus/leaf styling is illustrative, not an official logo asset. Optional Google Fonts have system font fallbacks.

## Verification

```sh
npx playwright install chromium
npm test
npm run build
```

With system Chromium, use `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test` instead of downloading a browser.

Browser tests cover website navigation, local images, service details, appointment request validation and copying, manual confirmation, responsive layouts, and dialog controls. Studio tests exercise contact creation/editing/persistence/filtering/export, campaign creation, task completion/persistence, mobile layout, image loading, and modal controls. In constrained environments, set `npm_config_cache` and `PLAYWRIGHT_BROWSERS_PATH` to writable directories under `/tmp` or `/workspace`.

## Team collaboration

Use the existing checkout. Read `AGENTS.md`, fetch and incorporate current remote changes safely before editing, and fetch again before pushing. Preserve teammates' work; never force-push.

## Publish a shareable website

A GitHub Pages workflow is included. A repository administrator must first choose **Settings → Pages → Build and deployment → Source → GitHub Actions** (Pages availability depends on the repository's visibility and plan). Then run **Actions → Deploy Customer Studio to GitHub Pages → Run workflow**, or push to `main`. The deployment job displays the actual website URL after success. This repository's default project URL would be `https://jaw6027.github.io/MGMT-3450-Team-5/`; it is not live until Pages is enabled and deployment succeeds. No secret or access token needs to be added for the included workflow.

The production build uses relative URLs so assets work under the repository's project path. Publishing this prototype does not add authentication or shared customer storage.

## Website assets

Spa imagery is generated concept artwork, compressed as WebP in `public/images/spa/`. Cormorant Garamond and DM Sans font files are self-hosted in `public/fonts/`, with their SIL Open Font License notices included. The public website requires no third-party font or image requests. The customer studio also uses local DM Sans and Playfair Display files, avoiding external font requests during startup.
