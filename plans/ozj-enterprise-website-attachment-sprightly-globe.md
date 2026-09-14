# OZJ Enterprise Website — Implementation Plan

## Context

The repository is an empty Figma Make scaffold (React 19 + Vite + Tailwind v4). `src/App.tsx` renders nothing. The brief asks for a complete, production-quality, multi-page corporate website for **OZJ Enterprise Limited** (brand: *OZJ Oil & Gas*) — a premium, institutional B2B energy/procurement/marine company with a strong African identity, visually comparable to Trafigura/Vitol and explicitly *not* a generic oil-and-gas template.

The user confirmed: **build all 5 pages** (Home, Capabilities, Procurement, Quality & HSE, Contact) as a polished, clickable, fully-navigable prototype.

No logo, team photos, or client logos were supplied. Per the brief, we use **clearly-marked placeholders** for these (a typographic OZJ wordmark logo, initial-based team portraits or Unsplash professional portraits, and a restrained "client logo" wall using neutral typographic placeholders). We must **not fabricate** certifications, awards, partnerships, statistics, or client relationships — only the stats explicitly given in the brief are used.

## Stance & Design System

- **Stance:** Institutional industrial editorial with restrained kinetic motion (honoring the brief literally over the theme tool's suggestions). Large cinematic photography with deep-navy overlays, thin technical hairlines, subtle grid patterns, generous whitespace, large editorial sections over card grids.
- **Palette (brand-locked):** navy `#082A52`, orange `#F7941D`, white `#FFFFFF`, light grey `#F5F6F7`, dark text `#102033`. Orange is accent-only.
- **Fonts (Google Fonts via `@import` in `src/index.css`, ordering first):** **Sora** for display headlines, **Inter** for body/UI, **JetBrains Mono** for eyebrow/technical labels & the `01–07` process numbers. All public Google Fonts — no fonts-wiring skill needed.
- **Tokens:** define brand CSS variables + Tailwind v4 `@theme` mappings in `src/index.css` (this scaffold has no `theme.css`; keep everything in the documented `src/index.css`). Add hairline color, focus-ring, and a subtle grid-pattern utility. Add scrollbar-hide + smooth-scroll + visible focus states.

## Architecture

Install **`react-router-dom`** for multi-page navigation (client-side routing; the react-router skill patterns apply). Structure:

```
src/
  App.tsx                      # <BrowserRouter> + <Routes> + shared <Layout>
  main.tsx                     # unchanged (imports index.css, mounts App)
  index.css                    # font @imports, brand tokens, @theme, globals
  components/
    Layout.tsx                 # Nav + Footer + <Outlet/> + ScrollToTop
    Nav.tsx                    # sticky nav, desktop links + REQUEST SUPPLY CTA, mobile drawer
    Footer.tsx                 # dark navy footer
    Logo.tsx                   # typographic OZJ wordmark (navy/orange) — placeholder mark
    ui/                        # shared bespoke primitives
      Button.tsx               # primary (orange) / secondary (outline) variants
      Eyebrow.tsx              # mono uppercase label with orange tick
      Section.tsx              # section wrapper w/ consistent spacing
      Reveal.tsx               # IntersectionObserver scroll-reveal wrapper
      Counter.tsx              # count-up for the ONE factual number (30+) only
      SupplyChain.tsx          # animated 7-stage process line (reused Home + Q&HSE)
  pages/
    Home.tsx                   # 12 sections per brief
    Capabilities.tsx
    Procurement.tsx
    QualityHSE.tsx
    Contact.tsx
  data/
    content.ts                 # capabilities, industries, products, team, process steps, nav links
```

Routes: `/` `/capabilities` `/procurement` `/quality-hse` `/contact`. Nav links map About→Home section anchor, Capabilities/Industries/Quality&HSE/Contact→pages. `ScrollToTop` resets scroll on route change; in-page anchors use smooth scroll.

## Pages / Sections

**Home** (all 12 brief sections): Hero (cinematic Unsplash offshore/tanker image + navy gradient overlay, eyebrow, headline, dual CTA, floating lower-right info panel COMMERCIAL/OFFSHORE/TANK FARM/VESSEL-TO-VESSEL) → Trust strip (30+ YEARS with count-up, 24/7, COMMERCIAL·OFFSHORE·MARINE, QUALITY & HSE) → Introduction (2-col editorial, "Discover OZJ" CTA) → Core Capabilities (4 large image blocks, "Explore capability" links → Capabilities page) → Supply Chain (dark navy, animated 7-stage line) → Beyond Diesel (product matrix, "Explore Procurement" → page) → Industries (dark/light split grid, image hover brighten + orange line) → Why OZJ (editorial large-number statements, not feature cards) → Quality & HSE (dark navy, 5 pillars + technical diagram) → Clients (restrained typographic monochrome placeholder logo wall + statement) → Team (4 named leaders, placeholder portraits, "30+ years combined" line, no invented titles) → Final CTA (full-width industrial bg image, dual CTA).

**Capabilities:** hero + 6 capability sections (Commercial Diesel, Offshore & Platform, Tank Farm, Vessel-to-Vessel, Procurement, Marine Logistics), each with large image, Overview / What we coordinate / Typical client requirements / Supply process / CTA. Alternating image side.

**Procurement:** hero ("Beyond Diesel"), petroleum + industrial category matrix, 6-step sourcing workflow (REQUIREMENT→…→DELIVERY), "Discuss a Procurement Requirement" CTA.

**Quality & HSE:** highly technical, dark navy sections + technical diagram; sections for Product quality, Quantity control, Documentation, HSE, Traceability, Supply-chain control.

**Contact:** headline, professional B2B enquiry form (all listed fields; Supply Requirement dropdown with the 9 options), client-side validation states + success state after submit (no backend), plus sales email, phone `+234 708 757 9641`, Location: Nigeria.

**Footer** (all pages): dark navy, company block, service list, contact details, nav, statement "QUALITY PRODUCTS. RELIABLE SUPPLY. PROFESSIONAL EXECUTION."

## Imagery

Unsplash (`images.unsplash.com/photo-{id}?w=…&h=…&fit=crop&auto=format`) — offshore platforms, tankers, tank farms, diesel trucks, ports, engineers. Every image container gets a `bg-[#082A52]` fallback and descriptive alt text; navy overlay where text sits over photos.

## Interactions (restrained)

Sticky nav with scroll-state shadow; mobile drawer; scroll-reveal via IntersectionObserver (`Reveal`); image scale-on-hover; capability/industry hover states; animated supply-chain connecting line (CSS/SVG draw on reveal); count-up only for "30+"; button hover transitions; form validation + success. Respect `prefers-reduced-motion`.

## Responsiveness & Accessibility

Desktop-first (1440) with breakpoints at 1280/1024/768/390; mobile reflows (not naive stacking) — stacked hero, drawer nav, single-column matrices, horizontally scrollable process on small screens. AA contrast, proper heading hierarchy, visible focus rings, non-color-only state cues, adequate touch targets.

## Files to Create / Modify

- **Modify:** `src/App.tsx` (router + layout), `src/index.css` (fonts, tokens, globals).
- **Create:** `package.json` dep add `react-router-dom`; all files under `src/components`, `src/pages`, `src/data` listed above.

## Verification

- `pnpm add react-router-dom`, then rely on the already-running Vite dev server (`$PORT`) for hot reload; confirm no build/type errors via the preview.
- Manually click through all 5 routes + nav (desktop links, mobile drawer, CTAs, in-page "Explore capability"/"Explore Procurement" links) and confirm `ScrollToTop` behavior.
- Verify Contact form validation errors and success state.
- Spot-check responsive layout at 1440 / 1024 / 768 / 390 and check focus states via keyboard tab order.
