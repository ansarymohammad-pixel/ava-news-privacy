# AVA Intelligent React homepage

Homepage milestone only. React + Vite, Tailwind, React Router (HashRouter), Motion and lazy-loaded Recharts.

## Preview

Node 22.12+ or newer supported release, with pnpm:

```powershell
cd C:\Users\ansar\Desktop\agent\ava-intelligent-dev\frontend
pnpm install
pnpm dev
```

Open http://127.0.0.1:3000. Checks: pnpm lint, pnpm test, pnpm build. To inspect the build, stop dev and run pnpm preview. No deployment script is provided.

If pnpm is not on PATH in this Codex environment, use:

```powershell
node "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs" dev
```

## Architecture

- src/components/Layout.jsx: shared Header, Footer, responsive navigation.
- src/components/ApplicationCard.jsx: application links and visual treatment.
- src/components/SignalChart.jsx: lazy-loaded interactive illustrative chart and accessible data table.
- src/pages/Home.jsx: homepage and application filters.
- src/Preferences.jsx and content.js: FR/EN/ES, theme persistence, existing avaLanguage storage/event compatibility.
- src/App.jsx: HashRouter and scroll management.
- vite.config.js: allowlisted legacy assets for local serving and build output.

Only frontend/ is new. Existing static website, CNAME, sitemap, robots, backend, remotes and hosting settings remain unchanged. Application, analytics and policy links open the existing pages at their original paths. Build copies tracked public assets into frontend/dist; backend and env files are excluded. Existing homepage remains available as /legacy-home.html in this preview.

The original chatbot JS/CSS is reused unchanged. It calls localhost:8000 locally; start the existing FastAPI backend separately if needed. Port 3000 is already allowed by backend CORS. React does not add production API requests. Never put secrets into frontend environment variables.

The chart is illustrative, not live data or a forecast. The chart bundle is lazy loaded. System fonts avoid font downloads. Reduced-motion preferences, keyboard focus, mobile menu and FR/EN/ES are supported. This preview is deliberately noindex; public SEO requires validated canonical URLs, prerendered content and sitemap review before cutover.

## Audit and next migrations — approval required

1. Homepage: this milestone only. Keep ordinary links to static pages until each migration is approved.
2. Fuel: preserve France/Italy/Spain filters, source URLs, dates and price labels. Existing tables contain hardcoded snapshots, not direct API calls. ElectricityCost and Parking currently largely present product information; preserve all content and links. News Verify: migrate tab/panel behavior, scores and source explanations without promoting examples as real-time data.
3. MindMatch: preserve consent, validation, UTM attribution, dataLayer events, payload fields, MINDMATCH_API_URL and MINDMATCH_WAITLIST_PATH. This integration uses a separate localhost:8010 / mindmatch-api.avaintelligent.info service.
4. Analytics: preserve POST /analytics/visit and GET /analytics/daily?days=14, visitor/language tracking. Chat: preserve GET /chat/status and POST /chat/message, history, locale and offline guide. AVA_API_URL override and existing endpoint resolution remain unchanged.
5. Ecosystem, Contact, Privacy, account deletion and MindMatch child safety: retain exact URLs and policy text; port all metadata and translation entries.
6. Full regression checks, API error states, keyboard navigation, translated metadata, accessibility and hosting-compatible routes before separately approved cutover.

FastAPI is unchanged: news, fuel, electricity, chat, waitlist, analytics and health routes. SQLAlchemy, PostgreSQL/pgvector and Redis scaffolding exist. Analytics and waitlist currently use JSONL. Existing i18n translates text and aria-labels using avaLanguage and ava-language-change; React preserves that preference/event for chatbot compatibility.

HashRouter needs no server rewrites for nested routes. BrowserRouter should be reconsidered only after hosting fallback routing or prerendered routes are confirmed. No GitHub Pages configuration was changed. No remaining pages have been migrated.

## Approved publication

English and light mode are the defaults; saved user preferences take precedence. Five official Google Play URLs are present on homepage cards. Production builds replace preview noindex with the canonical home URL. Publishing uses the existing GitHub Pages main branch with compiled assets; original static homepage is retained as legacy-home.html. Backend, domain configuration and application pages remain unchanged.
