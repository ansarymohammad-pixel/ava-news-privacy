# Design-preserving homepage milestone

## Audit

The existing frontend already uses React 19, Vite, Tailwind CSS 4, React Router, Motion and Recharts. This is a JavaScript-to-TypeScript migration, not a new website or visual redesign.

Already implemented: white/light default, green accents, responsive header, five application cards with exact Google Play URLs, FR/EN/ES, saved language/theme, application category filters, interactive two-series illustrative chart, accessible chart data table, chatbot asset reuse, Analytics route and legacy Analytics redirect. Application, Contact, policy, deletion and child-safety pages retain their URLs. No backend files or API endpoint definitions are changed.

## Scope completed locally

- Strict TypeScript for Home, Layout/Header/Footer, ApplicationCard, SignalChart, preferences, content, App and entry point.
- Typed application records, category IDs, locale dictionaries and React context.
- Chart loading announcement and localized error recovery.
- Escape closes the mobile menu and returns focus to its button; skip link focuses the main content.
- Page title follows the current route and language instead of being reset by theme changes.
- Existing source formatted for maintainability; CSS declarations and class names retained.
- JavaScript Analytics remains supported using allowJs/checkJs=false, enabling gradual migration.

## Next milestones (approval required)

1. Convert existing Analytics API logic to typed response models with runtime validation; preserve /analytics/daily?days=14 and existing API URL resolution.
2. Migrate Fuel, ElectricityCost, Parking and News individually. Preserve data provenance, source dates, country selection, tabs and any existing forms. Never label sample data as live.
3. Migrate MindMatch with the exact existing consent, UTM attribution, payload and separate service override. Keep chatbot endpoints and fallback behavior intact.
4. Migrate Contact, Ecosystem and policy pages with URL compatibility and exact policy text. Review multilingual metadata, prerendering and SEO only before a separately approved release.
5. Validate loading, empty, offline, timeout and retry states per endpoint; add browser checks for keyboard, mobile, tablet and desktop.

## Preview and checks

Run pnpm typecheck, pnpm lint, pnpm test, pnpm build from frontend/. Use pnpm dev for port 3000. If occupied, use pnpm dev --port 3001, or node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 3001 --strictPort.

The current fresh preview runs at http://127.0.0.1:3001/. Existing FastAPI CORS allows 3000; use that port when checking a local live backend, or use the built preview. No CORS settings were changed. Build output stays inside frontend/dist and is not deployed.

Production, DNS, hosting, remotes and the existing release branch are untouched. Work is isolated on codex/typed-homepage. No push, merge or deployment is authorized in this milestone.
