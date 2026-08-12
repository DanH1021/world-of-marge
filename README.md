# World of Marge's — Phase 1 (Design & Content)

This is **Phase 1** of the World of Marge's website, built from the Website Design & Development
Brief: the full site structure, navigation, page content and interactive features, styled with a
placeholder brand system. **Phase 2** will connect it to a real backend (Supabase, matching your
Otter Tail Events stack) so hours/menus/galleries/shakers can be managed from an admin panel
without touching code — see "What's Next" below.

## Running it locally

```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## What's built

- **Homepage** — hero, "Where Are You Today?" Fargo/Ottertail split, the whole family of concepts,
  shaker teaser, story teaser, "Plan My Marge's Day" CTA.
- **Fargo experience page** (`/fargo`) — "A Whole Day of Marge's" morning-to-late-night walkthrough.
- **Ottertail experience page** (`/ottertail`) — lake-country framing, expandable for future concepts.
- **5 concept pages**: Marge's Diner–Fargo, Marge's Bar, Marge's Supper Club, Lucky Lounge (moodier
  dark treatment, nested inside the Supper Club), Marge's Diner–Ottertail.
- **The Shakers** — collection landing page, a searchable/filterable Digital Shaker Museum (sample
  data), a "Show Me a Random Shaker" widget, Shaker of the Month, and a "Help Us Solve This Shaker"
  submission form (front-end only for now — see below).
- **The Marge's Story** — interactive timeline from the basement bar to today.
- **Photos** — a gallery hub with a masonry layout + lightbox per concept.
- **Find Your Marge's** — the "Plan My Day" quiz that generates a humorous itinerary (the default
  Fargo / "No Plan Whatsoever" path reproduces the brief's example itinerary verbatim).

Built with React + Vite + React Router. `netlify.toml` is included and configured for an SPA
deploy (same pattern as your other Netlify sites, with a catch-all redirect to `index.html` so
client-side routes work).

## Real brands applied: Diner, Bar, Supper Club & Lucky Lounge

Four of the five concept pages now use **real, approved** logos and colors instead of placeholders
— the Supper Club & Lucky Lounge brand came from the Menu Builder project brief; the Diner and Bar
logo artwork/colors came from the actual logo files you sent.

- **Logo files:** stored in `public/brand/` — `marges-diner-logo.png`, `marges-bar-logo.png`,
  `marges-supper-club-logo.png` — used as-is (never redrawn/re-typeset), per the brand guide's
  rule about the hand-lettered "Marge's" mark. Each is shown prominently on its concept's page.
- **Marge's Diner (Fargo + Ottertail):** colors sampled directly from the logo artwork — deep
  maroon/near-black script outline, red + gold/mustard neon inner strokes, bright orange banner.
  Scoped via `src/styles/brand-diner.css` (`.brand-diner`). Ottertail uses the same brand — per the
  brief, lake-country feeling comes through in photography/copy, not a separate palette.
- **Marge's Bar:** colors sampled from the neon-sign logo — near-black background, neon red,
  gold/amber glow. Scoped via `src/styles/brand-bar.css` (accent tokens only) plus `src/pages/Bar.css`
  (hardcoded dark backgrounds, same pattern as the Lucky Lounge). Fixed along the way: swept the
  whole site for "Casino" per the brief's warning about an outdated logo misprint — found and fixed
  one spot (a badge on the Lucky Lounge page now just says "Gaming").
- **Marge's Supper Club & Lucky Lounge:** Midnight Navy, Endless Sea, Brass Gold, Antique Ivory,
  Walnut, Charcoal; Cormorant Garamond + Source Sans 3. Scoped via `src/styles/brand-supper-club.css`
  (`.brand-supper-club`).
- **Note on type:** only Supper Club & Lucky Lounge had an explicit typeface spec in writing
  (Cormorant Garamond / Source Sans 3). Diner and Bar use real colors + the real logo mark, but keep
  the umbrella Fraunces/Inter type until you confirm specific typefaces for those two.

## Placeholder brand system (still placeholder) — replace before launch

This applies to the umbrella "World of Marge's" hub (header, footer, homepage, Photos, Shakers,
Story, Find Your Marge's) — by original design this stays a distinct look from any one concept's
own branding, so it's intentionally still placeholder pending its own direction, not modeled on any
single concept's real assets.

- **Colors, type, spacing:** `src/styles/global.css` (`:root` variables at the top).
- **Fonts:** Fraunces (display) + Inter (body), loaded from Google Fonts in `global.css`.
- **Logo/wordmark:** `src/components/Header.jsx` and `Footer.jsx` use a styled text lockup
  ("Marge's" in italic serif) for the umbrella site identity — separate from the real per-concept
  logos now used on the Diner/Bar/Supper Club pages themselves.
- **Photography:** every image is a curated stock photo from Unsplash, mapped by subject in
  `src/data/placeholderImages.js`. Replace the URLs in that one file with real Marge's photography
  and every page updates automatically.
- **Shaker collection data:** `src/data/shakers.js` has 10 sample entries matching the fields the
  brief describes (manufacturer, decade, material, origin, rarity, fun fact, Marge's commentary).
  Real inventory will replace this once cataloged.

## Live menu feed — Marge's Supper Club & Lucky Lounge

The Supper Club page (`/fargo/supper-club`, `#menu` section) now reads its menu **live** from the
Menu Builder tool's Firestore database (`marges-menu` project) instead of static content — kitchen
staff update the menu in the Menu Builder, and it appears here automatically, no copy/paste.

- `src/data/menuSources.js` — the Firebase config per location. Adding another location's Menu
  Builder later (mentioned as something you might do) is just adding another entry here; no page
  code changes needed.
- `src/lib/firestoreMenu.js` — reads `menuItems` (active items only) and `meta/categoryNotes`,
  groups and orders by the category list from the brief (Welcome Snack, Specials, Bar Snacks,
  Apps/Starter Plates, Entrees, Desserts, Sides), sorted by `sortIndex` within each category.
- `src/hooks/useMenu.js` + `src/components/LiveMenu.jsx` — fetch + render, with loading and error
  states so the page still works cleanly if Firestore is briefly unreachable.
- **Auth approach:** the site signs in anonymously to Firestore before reading (`signInAnonymously`).
  This was the safer of the two options in the brief — it requires **zero changes** to the
  production Firestore security rules that the Menu Builder (and kitchen staff) rely on daily. If
  you'd rather switch to public-read rules later (cleaner, but a production rules change), that's a
  one-line swap in `firestoreMenu.js` plus a Firestore rules update — flag it and we can do it
  together.
- **Display decisions already applied:** empty `price` is omitted entirely (not "market price"),
  and inactive items are fully hidden.
- This reads from Firestore only — it never writes, and never touches the `toastLog` collection.
- The Firebase web config in `menuSources.js` is not a secret (per the brief — Firestore security
  rules control access, not hiding the config), so it's safe as committed source.
- The `firebase` package is lazy-loaded only when someone visits the Supper Club page, so it
  doesn't add weight to any other page.

## What's next (Phase 2)

Not built yet, by design (per your call to do design/content first, backend second):

1. **Admin panel + database** — Supabase-backed, so hours, menus, galleries, shaker records, and
   the "Help Us Solve This Shaker" queue can be managed without code changes, same pattern as the
   Otter Tail Events `/admin`.
2. **"Help Us Solve This Shaker" form** currently shows a confirmation message but doesn't send
   anywhere — needs to write to a moderation queue.
3. **Toast online ordering** — the brief asks for this to be enable/disable-able per location;
   navigation and CTAs are already structured to support it without a redesign.
4. **Reservations integration** for the Supper Club ("Save Us a Seat").
5. **Real menus** as structured content (not just PDFs) for SEO/accessibility, per the brief.
6. Domain (`worldofmarges.com`) + Netlify + DNS setup, mirroring the Otter Tail Events setup.
