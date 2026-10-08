# Stepan Kukharskiy - Personal Website

A SvelteKit website for Stepan Kukharskiy's tested AI Work experiments, reusable Skills, independent projects and teaching.

## About

The shared thesis is: "I build systems that turn AI output into structured, editable work." The homepage leads into the practical question: which real professional routines can AI do, and how can successful procedures become reusable Skills?

- **AI Work** — original experiments with actual inputs, checked outputs, explicit limits and downloadable Skills. One experiment is currently published; the series aims for 100 tested jobs.
- **Relay** — reusable Skills, retained work and a Chrome extension for selected ChatGPT text.
- **Spellshape / Live OBJ and Drawing Analysis Engine** — independent projects around editable geometry and traceable evidence.
- **Teaching and background** — computational design workshops, SA lab and published architectural work.

The homepage shows the actual checked Excel-to-PowerPoint output before the project cards. A shared LinkedIn follow prompt appears on the homepage, AI Work archive and experiment article. Article bylines and visible publication/update dates agree with their structured data; update dates should reflect real editorial changes.

The Background section includes two architectural contributions described by Stepan:
parking-area design ideas as an architect for Lakhta Center, and furniture, lighting
and mirror drawings supporting the Trudon boutique opening at Rockefeller Center.
Project links provide context about the buildings; they are not personal-role credits.
The Background gallery uses published SA lab images from ArchDaily, Designboom and
Architizer, with captions distinguishing the built FLEXSE pavilion and Crane Design
Showroom from the Under Yggdrasil proposal rendering. Images are served locally and
lazy-loaded. Source URLs and
creator credits are recorded in `static/architecture/README.md` and shown on the page.

## Tech Stack

- **Framework:** SvelteKit with TypeScript
- **Styling:** Component-scoped CSS with responsive design
- **Deployment:** Node.js adapter
- **Development Tools:** ESLint, Prettier, Vitest

## Development

### Prerequisites

- Node.js 24
- npm, pnpm, or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte      # Identity, experiment evidence and projects
│   ├── ai-work/          # Canonical experiment articles
│   ├── relay/chrome/     # Chrome extension explanation and install link
│   └── +layout.svelte    # Root layout
├── lib/
│   ├── assets/           # Static assets
│   └── index.ts          # Library exports
└── app.html              # HTML template
```

## Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile
- **Modern Typography:** Clean, readable font hierarchy
- **Interactive Elements:** Hover effects and smooth transitions
- **Semantic HTML:** Accessible and SEO-friendly structure
- **Component Scoped Styles:** Maintainable CSS architecture

## Deployment

This project uses the Node.js adapter for deployment. To deploy to different platforms, you may need to install additional [SvelteKit adapters](https://svelte.dev/docs/kit/adapters).

### Cookie-free site activity

The homepage displays today's estimated visitors, page views and countries, fetched once
per page opening with no background polling. A first-party request on navigation records
page views, including navigation between prerendered pages. DNT, GPC and common bots are skipped.
Daily hashes deduplicate IP address + browser user-agent; raw values are never stored in
the analytics database. Old hashes and daily secrets are removed on the next day's first
request; aggregate daily totals persist. Days follow Europe/Moscow time.

Railway needs Node.js 24, one service replica and a persistent volume mounted at `/data`.
Set `ADDRESS_HEADER=x-real-ip` to use Railway's trusted client-IP header. Storage defaults
to `$RAILWAY_VOLUME_MOUNT_PATH/analytics/activity.sqlite`; an explicit
`PERSONAL_WEBSITE_ANALYTICS_DIR` overrides that location. Production without persistent
storage hides the strip instead of reporting temporary counters. Development uses the
git-ignored `.local-data/analytics` directory. `PERSONAL_WEBSITE_ANALYTICS=off` disables it.

`GET /api/activity` returns public daily aggregates; same-origin `POST /api/activity`
counts supported page paths and returns the updated summary. Country lookup runs locally
using the bundled PDDL database documented in `data/geo/README.md`. Visitor and country
counts are estimates; privacy details are at `/ai-work/privacy`.

## License

© 2026 Stepan Kukharskiy. All rights reserved.

---

**Connect with me:**
- [LinkedIn](https://www.linkedin.com/in/stepan-kukharskiy-25347342)
- [GitHub](https://github.com/StepanKukharskiy)

## AI Work editorial archive

Articles live under `/ai-work`; the Excel-to-PowerPoint experiment is canonical at
`https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation`. Skill ZIPs,
examples and verification assets remain on Relay. The article has local copies
of the actual three report previews, so its illustrations survive product renaming.

The server counts eligible HTML GET requests with fixed anonymous event fields.
`PERSONAL_WEBSITE_ANALYTICS=off` disables these counts. See `/ai-work/privacy`.
Events are request totals, not unique visitors or linked conversions. Fixed v3
campaign labels carry to Relay; legacy Relay campaigns remain unchanged.

Build/check: `npm run check`, `npm run build`. Railway uses the existing Node
adapter and `node build` start command. Medium is a separate distribution draft;
its canonical URL must be set in the Medium editor before publication.

## Personal thesis and navigation

The homepage leads with: "I build systems that turn AI output into structured,
editable work." Projects, AI Work and Teaching are separate personal sections.
Relay, Spellshape / Live OBJ and Drawing Analysis Engine remain independent
projects. Their shared concern is preserved editability, evidence and continuation.
Project-to-project integrations are described as directions to test, not shipped
features. Only verified public project links are listed. No course dates or new
media accounts are invented. The personal article, hero assets and existing
request-counter scope remain intact. Section pages share one layout component.

## Search and AI discovery

Public content is delivered as readable HTML, with canonical URLs in `static/sitemap.xml`.
`static/robots.txt` explicitly permits OpenAI and Claude search/user retrieval,
Google, Bing and Perplexity while excluding `/api/` from crawling. The existing
permission for training crawlers is preserved; search visibility and training
permission are separate controls. Cloudflare must also allow legitimate crawlers;
robots.txt alone cannot override an edge challenge or firewall block.

`/llms.txt` is a concise linked index, and `/llms-full.txt` expands the public site's
project descriptions, experiment evidence and limitations. The shared HTML head
links to the guide with `rel="describedby"`. These files follow an emerging proposal,
not a guarantee that every assistant reads them or cites the site. Keep both texts
aligned with the visible pages when updating project claims or publishing articles.

JSON-LD identifies the person and website, with separate organization identities;
the Chrome page describes its SoftwareApplication and the article its BlogPosting.
Do not add invented ratings, credentials, launch dates or unsupported product claims.

After deploying, submit `https://stepankukharskiy.com/sitemap.xml` in verified Google
Search Console and Bing Webmaster Tools properties. Use their indexing reports to
check discovery; public search queries cannot establish complete index coverage.
No webmaster accounts have been created or sitemap submissions made by this code.
Maintain the sitemap as canonical pages are added. Search eligibility does not
guarantee ranking or inclusion in an AI answer.

## Distribution measurement

Use [the monthly visibility checklist](docs/distribution-measurement.md) and its CSV
templates to record search performance, published experiments, Skills, external
mentions and a fixed set of AI citation tests. Blank values mean unmeasured, not zero.
The templates are manual records; they do not schedule work or fetch account data.
