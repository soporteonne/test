# CLAUDE.md — Argo Consulting Website

This document provides guidance for AI assistants (and developers) working on this codebase.

---

## Project Overview

**Argo Consulting** is a static corporate website for a global management consulting firm. The site is frontend-only — no backend, no API, no database — and is deployed via GitHub Pages with a custom domain (`www.masaes.com`).

---

## Repository Structure

```
/
├── index.html      # Main HTML file (702 lines) — all content lives here
├── styles.css      # External stylesheet (303 lines)
├── script.js       # Vanilla JavaScript (14 lines)
├── CNAME           # GitHub Pages custom domain → www.masaes.com
└── README.md       # Minimal placeholder
```

Everything is in the root directory. There are no sub-folders, no assets directory, and no components structure.

---

## Technology Stack

| Concern        | Solution                              |
|----------------|---------------------------------------|
| Markup         | HTML5 (semantic elements)             |
| Styling        | CSS3 (custom properties, grid, clamp) |
| Scripting      | Vanilla JavaScript (ES6+)             |
| Fonts          | Google Fonts CDN (Inter)              |
| Images         | Unsplash CDN                          |
| Hosting        | GitHub Pages                          |
| Build system   | None                                  |
| Package manager| None                                  |
| Frameworks     | None                                  |
| Tests          | None                                  |

---

## Page Sections (`index.html`)

The HTML follows a single-page layout with anchor navigation:

| Anchor       | Section                                                              |
|--------------|----------------------------------------------------------------------|
| `#inicio`    | Hero — headline, CTA buttons, hero visual                            |
| `#servicios` | Services — 6 cards (CS, AF, FX, TD, GR, CH)                        |
| `#sectores`  | Industry sectors — 6 cards (Finanzas, Retail, Tech, Salud, etc.)    |
| `#nosotros`  | About — history, mission, values, stats (15+ yrs, 420 projects…)    |
| `#insights`  | Blog previews — 3 insight articles                                   |
| `#contacto`  | Contact form + office info                                           |

The `<header>` contains sticky navigation. `<footer>` has social links and legal text.

---

## Styling Conventions

### Embedded vs. External CSS

- `index.html` contains **embedded `<style>` block** (lines 12–399) that governs layout, variables, and responsive behavior.
- `styles.css` is a **separate stylesheet** linked in `<head>` with an alternative dark-themed color scheme (dark teal background, coral/lime accents).

When updating visual design, be aware that both files may need changes.

### CSS Custom Properties (Variables)

Key variables defined in `index.html`'s embedded styles:

```css
--color-primary: #002f6c;    /* Deep blue */
--color-accent:  #f5a623;    /* Gold */
--shadow-card:   0 2px 16px rgba(0,47,108,.10);
```

### Responsive Design

- Breakpoints: `720px`, `899px`, `600px`
- Uses `clamp()` for fluid typography
- Layout: `grid-template-columns: repeat(auto-fit, minmax(...))` — no manual column counts

---

## JavaScript Conventions (`script.js`)

The script is minimal and uses:

- **Optional chaining** (`?.`) for safe DOM queries
- **ES6 event listeners** (no jQuery, no legacy patterns)

Current behaviors:
1. Mobile menu toggle (`.menu-toggle` + `.nav-links.open`)
2. Close nav on link click
3. Header blur on scroll
4. Contact form intercept — prevents default submit, shows `alert()` with user name

> **Note:** The contact form does **not** submit data anywhere. If real form submission is needed, a backend endpoint or third-party service (e.g., Formspree, Netlify Forms) must be added.

---

## Language

All content is in **Spanish**. Variable names, CSS class names, and identifiers may mix Spanish and English — this is expected.

---

## Development Workflow

### Making Changes

Since there is no build step, changes are immediately reflected by opening `index.html` in a browser:

```bash
# Open locally (any method works)
open index.html
# or
python3 -m http.server 8080
```

### No Linting / No Tests

There is currently no linter (ESLint, Stylelint) and no test framework. Code quality is enforced by review only.

### Deployment

The site is deployed automatically by GitHub Pages when changes are pushed to the `master` branch. The `CNAME` file maps the GitHub Pages URL to `www.masaes.com`.

---

## Git Conventions

- **Main branch**: `master` (production)
- **Feature branches**: descriptive names (e.g., `codex/consultoria2`)
- **Claude branches**: prefixed `claude/` (e.g., `claude/claude-md-...`)
- Changes merged to `master` go live on `www.masaes.com`

### Commit history summary

| Commit    | Change                                       |
|-----------|----------------------------------------------|
| c9ac3f8   | Added full index.html content + CNAME        |
| b0cf1fa   | Consultoría v2 feature branch                |
| 6cc5bc2   | Dark green background theme                  |
| 6680c6a   | Initial landing page                         |

---

## Key Constraints & Gotchas

1. **No package manager** — do not run `npm install` or introduce `package.json` without explicit intent to add a build pipeline.
2. **Dual CSS sources** — `index.html` has its own `<style>` block in addition to `styles.css`. Inspect both when diagnosing style issues.
3. **No form backend** — the contact form only shows a JS alert. Submissions are not persisted.
4. **All content is Spanish** — preserve the language when editing or generating copy.
5. **Images are CDN URLs** — Unsplash URLs may expire or change. If images break, update the `src` attributes.
6. **GitHub Pages deployment** — only `master` triggers live deployment. Branch pushes are for review only.
