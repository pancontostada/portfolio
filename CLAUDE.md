# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

David Jelke's UX/product design portfolio: a static React 19 + Vite 8 + Tailwind v4 site with react-router-dom v7, deployed on Netlify.

## Commands

- `npm run dev` — dev server at http://localhost:5173
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (includes `react-refresh/only-export-components`, so component files must export only components; put shared data in plain `.js` modules)
- `npm run preview` — serve the built `dist/`

There is no test suite. Verify changes in a browser at desktop (~1440px) and phone (~400px) widths, and check that the page has no horizontal overflow.

## Workflow

- Don't commit or push without asking. Work goes on a branch, then a PR; Netlify builds a deploy preview per PR at `deploy-preview-<N>--davidjelke.netlify.app`.
- Portfolio copy can be tightened but must stay truthful to what David actually did.
- The pre-redesign site is preserved at the git tag `original-portfolio`, also checked out as a worktree at `../portfolio-original`.

## Architecture

- `src/App.jsx` defines routes; every page renders inside `src/components/Layout.jsx`. Layout owns the sticky header, the reading-progress bar and the `NextProject` card on `/projects/*`, the scroll reset on navigation, and the contact footer.
- `src/projects.js` is the single ordered list of case studies. It drives the Selected work list on Home and the "next case study" card at the end of each case study, which wraps from the last back to the first. To add a case study, create the page, add a route under `projects` in `App.jsx`, and add an entry to `projects.js`.
- `src/siteConfig.js` holds contact links (email, LinkedIn, `/resume.pdf` in `public/`). An empty value hides that link.
- Case study pages share a pattern: `CaseStudyHeader` (summary plus facts), then `TableOfContents`, which takes a `sections` array whose `id`s must match the `id`s on the page's `<section>` elements; it tracks the active section on scroll.
- Images live in `src/assets/<page>/` and are imported, not referenced by URL.

### Search case study specifics (`src/pages/Search.jsx`)

- **Skim mode:** the reading-mode toggle adds a `skim` class, and CSS hides everything marked `.story-body`. Mark supporting paragraphs with `story-body` so skim mode keeps only headlines, visuals and quotes.
- **Participant privacy:** `UserQuote` shows an illustration (`Portrait.jsx`, with features defined in `src/participants.js`, keyed by the lowercased participant name) until `PhotoUnlock`'s password is entered. After that, an Illustrations | Photos toggle appears. The password check is client-side only; it hides faces from casual viewers but doesn't secure the image files.

## Styling

Design tokens (colors `ink`, `body`, `muted`, `line`, `tint`, `brand`, `brand-soft`, `ok`; the Onest font) live in the `@theme` block of `src/index.css`. The `@layer base` there styles bare elements globally, which matters when writing markup:

- Every `<span>` is bold and brand blue. Use another element for neutral inline text.
- Every `<section>` gets the page max-width, side padding and a bottom margin.
- `p` and `li` get body text size plus `mb-6`, with a larger `md:` size. To override at all widths you need the `md:` variant too (hence classes like `text-sm md:text-sm`).

`html` has `scroll-behavior: smooth`, so programmatic scroll-to-top must pass `behavior: 'instant'`.
