@AGENTS.md

@CONVENTIONS.md

Read `CONVENTIONS.md` before writing any component, section, or page. Rule 1 comes first on every design: check the design's mobile + desktop `h1`/`h2`/`h3`/`p` values against the `@layer base` scale in `app/globals.css` and update the globals if they don't match. The rest covers the component + asset folder structure, section structure, typography rules, `Button` usage (always pass an explicit `variant`), `em`-based max-widths, Tailwind-only styling, the outline patterns for borders between items, SVG handling (`<Image />` by path, SVGR component only when it needs CSS), the shared GSAP power easings for Tailwind and Framer Motion, inlining the navbar + hero assets so the first screen paints instantly, the responsive layout patterns (aspect-ratio wrappers, absolute bleeds, negative-margin overlaps), the no-comments rule, the Figma layer-name directives (`[[hover]]`, `[[export]]`, `[[lightbox-image]]`), the `Asset` component — every image, video, Rive and Lottie goes through it, typed by `type` with `width`/`height` as the aspect ratio — icons exported from Figma instead of any icon library, the managed scroll restoration in `ScrollToTop`, and the SEO layer (`lib/seo.ts` → `pageMetadata()`, `robots.ts`, `sitemap.ts`, `llms.txt`).

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `kargulstudio/sales-crm`, managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
