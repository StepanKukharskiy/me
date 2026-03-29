# Stepan Kukharskiy - Personal Website

A modern, responsive personal portfolio website built with SvelteKit, showcasing work at the intersection of artificial intelligence, procedural geometry, and spatial design.

## About

This website presents my work as an architect, computational designer, and founder. It highlights:

- **Spellshape** - AI agent for natural language to parametric 3D conversion
- **SA lab** - Algorithmic architecture and digital fabrication
- Technical stack across spatial computing, AI/ML, and web development
- Published architectural projects and open-source contributions

## Tech Stack

- **Framework:** SvelteKit with TypeScript
- **Styling:** Component-scoped CSS with responsive design
- **Deployment:** Node.js adapter
- **Development Tools:** ESLint, Prettier, Vitest

## Development

### Prerequisites

- Node.js (v18 or higher)
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
│   ├── +page.svelte      # Main portfolio page
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

## License

© 2026 Stepan Kukharskiy. All rights reserved.

---

**Connect with me:**
- [LinkedIn](https://www.linkedin.com/in/stepan-kukharskiy-25347342)
- [GitHub](https://github.com/StepanKukharskiy)
