# Handoff: puia.me — Personal Single-Page Site

## Overview
An ultra-minimal personal landing page for the domain **puia.me**, owned by **Puia Chhakchhuak**. Its only job: when someone receives an email from `puia@puia.me` and visits the domain, they see a beautiful, confident page confirming who Puia is. Name at display scale, one spare line of copy, an email link. No nav, no sections, no business content.

Target implementation: **Next.js** (App Router recommended), built with Claude Code. This is a single static route (`/`) — no data fetching, no client state beyond CSS animations. It can be a pure Server Component with plain CSS.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, not production code to copy directly. Recreate this design in Next.js using its conventions (e.g. `app/page.tsx`, `app/layout.tsx`, CSS Modules or a global stylesheet, `next/font` for Archivo). `Puia.dc.html` uses a proprietary streaming component format — read it for markup/styles, don't ship it.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and animation timings are final. Recreate pixel-perfectly.

## Design System
The page follows the **Modernist** design system: flat, architectural, set entirely in **Archivo**; red-on-off-white; visible structure; **zero border radius anywhere**; strong 2px rules; everything flush left. `styles.css` (bundled) is the full token sheet — port its `:root` variables into `globals.css`.

## Screens / Views

### Single screen: Landing (`/`)
Full-viewport, three-row column: header / hero (fills remaining space, content vertically centered) / footer.

**Page wrapper**
- `min-height: 100vh; display: flex; flex-direction: column;`
- Background `#f3f2f2`, text `#201e1d`, font Archivo.

**Header** (top bar)
- `display: flex; justify-content: space-between; align-items: baseline; padding: 24px 40px;`
- `border-bottom: 2px solid var(--color-divider)` where `--color-divider: color-mix(in srgb, #201e1d 40%, transparent)`.
- Left: `puia.me` — 13px, weight 600, `letter-spacing: 0.08em`, uppercase.
- Right: current month + year, e.g. `Jul 2026` (computed at render; format `MMM YYYY`) — 13px, uppercase, same tracking, color `#7d7979` (neutral-600). Behind a `showDate` flag in the prototype; keep it as a simple const or prop.

**Hero** (`<main>`)
- `flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 64px 40px;`
- Inner wrapper `max-width: 1100px`, all flush left.
- **Kicker**: `Personal domain` — 13px, uppercase, `letter-spacing: 0.12em`, color `#ae1800` (accent-700), `margin-bottom: 28px`.
- **H1**: `Puia` / `Chhakchhuak` on two lines (explicit line break). Archivo weight 700, `font-size: clamp(56px, 10vw, 140px)`, `line-height: 0.98`, `letter-spacing: -0.02em`, color `#201e1d`. Each line is wrapped for the reveal animation (see below).
- **Red rule**: full-width-of-wrapper div, `height: 2px; background: #ec3013; margin: 40px 0;`
- **Intro line**: `Designer of interfaces, builder of front ends. Yes, that email was really from me.` — `font-size: clamp(18px, 2.2vw, 26px)`, `line-height: 1.45`, `max-width: 34ch`.

**Footer** (bottom bar)
- Mirror of header: flex space-between, baseline-aligned, `padding: 24px 40px`, `border-top: 2px solid var(--color-divider)`.
- Left: `puia@puia.me` — `<a href="mailto:puia@puia.me">`, 15px, `letter-spacing: 0.06em`, `text-decoration: none`, color `#201e1d`, `border-bottom: 2px solid #ec3013; padding-bottom: 2px;` Hover: text color → `#ec3013`.
- Right: `Write anytime` — 13px, uppercase, `letter-spacing: 0.08em`, color `#7d7979`.

## Interactions & Behavior

### Load animation sequence (CSS keyframes only — no JS)
1. `rise` — `opacity 0 → 1`, `translateY(14px) → 0`, easing `cubic-bezier(0.2, 0.6, 0.2, 1)`. Applied to: header (0.7s, 0s delay), kicker (0.7s, 0.15s), intro line (0.8s, 0.75s), footer (0.8s, 0.9s). Use `animation-fill-mode: both`.
2. **Name reveal** — each H1 line sits in an `overflow: hidden; position: relative;` wrapper containing:
   - the text: `lineUp` keyframe, `translateY(110%) → 0`, 0.9s, `cubic-bezier(0.2, 0.7, 0.2, 1)`, delays 0.25s (line 1) / 0.4s (line 2);
   - an absolutely-positioned red overlay (`inset: 0; background: #ec3013;`): `blockIn` keyframe — scaleX 0→1 from the left (0–45%), hold (45–55%), then 1→0 collapsing to the right (55–100%); 1.1s, `cubic-bezier(0.6, 0, 0.3, 1)`, delays 0.1s / 0.25s. Net effect: a red block wipes across each line as the text slides up beneath it.
3. **Red rule**: `drawRule` — `scaleX(0) → 1`, `transform-origin: left`, 0.9s, 0.6s delay, `cubic-bezier(0.2, 0.6, 0.2, 1)`.
4. Reduced motion: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`.

### Other states
- Links: default color `#201e1d`, hover `#ec3013`.
- Keyboard focus (system-wide rule): `:focus-visible { outline: 2px solid #ec3013; outline-offset: 2px; }` — never the default blue ring.
- Text selection: accent tint (`::selection` — see styles.css).
- Responsive: type scales via `clamp()`; the flex column works down to mobile as-is. Optionally reduce 40px side padding to 24px under ~480px.

## State Management
None. Static page. The only dynamic value is the header date (`MMM YYYY` from `new Date()` at render — fine to compute server-side).

## Design Tokens (subset used)
- `--color-bg: #f3f2f2` · `--color-text: #201e1d` · `--color-accent: #ec3013`
- `--color-accent-700: #ae1800` (kicker) · `--color-neutral-600: #7d7979` (muted meta)
- `--color-divider: color-mix(in srgb, #201e1d 40%, transparent)`
- Fonts: `"Archivo", system-ui, sans-serif` for everything — load via `next/font/google` (`Archivo`, weights 400/600/700).
- Radius: **0 everywhere.** Rules/borders: 2px. Full token sheet in bundled `styles.css`.

## Assets
None — no images, no icons. Just Archivo (Google Fonts).

## Files
- `Puia.dc.html` — the design prototype (markup + inline styles + keyframes in its `<style>` block).
- `styles.css` — the Modernist token sheet and component layer (reference for tokens and global states).

## Suggested Next.js structure
- `app/layout.tsx` — `next/font/google` Archivo, metadata (`title: "Puia Chhakchhuak"`, description), `globals.css`.
- `app/globals.css` — tokens as CSS variables, body reset, keyframes (`rise`, `lineUp`, `blockIn`, `drawRule`), `a`/`:focus-visible`/`::selection` rules, reduced-motion query.
- `app/page.tsx` — the entire page as one server component.
