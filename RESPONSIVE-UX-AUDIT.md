# Responsive UX Audit — TimberDrone (timberdrone.se)

**Date:** 2026-03-08
**Auditor:** Frontend/UX specialist pass
**Scope:** Full responsive UI audit — mobile (320–414px), tablet (768–1024px), desktop (1024px+), wide (1440px+)

---

## 1. Executive Summary

### Top 5 Most Critical Issues

1. **Mobile menu has no body scroll lock and no internal scrolling** — When the hamburger menu opens, the background page remains scrollable. The menu itself lists 15+ service links and 7+ knowledge links with no `max-height` or `overflow-y: auto`, meaning it likely extends below the viewport on small screens with no way to reach the bottom items.

2. **Low-contrast text throughout dark sections fails WCAG AA** — Heavy use of `text-white/50`, `text-white/30`, and `text-white/40` on dark forest-green backgrounds. These fall well below the 4.5:1 required ratio for normal text (and likely below 3:1 for large text). Affects Hero, ProcessSteps, TrustBlock, CTABand, Footer, and all dark sections.

3. **No horizontal overflow containment on `<html>` or `<body>`** — Multiple decorative elements (`w-[600px]`, `w-[500px]` with blurs) and floating animations with `translateY`/`translateX` are present. While some parent sections have `overflow-hidden`, the overall document has no `overflow-x: hidden`, risking horizontal scroll on narrow viewports.

4. **Inconsistent header-offset strategy causes content clipping** — The fixed header is `h-20` (80px). Hero uses `pt-32` (128px) on mobile. But Breadcrumbs uses `pt-20` (80px), and ServicePageLayout header uses only `pt-8` on mobile. This means service page headers sit partially behind the fixed nav bar.

5. **FAQ accordion uses hard-coded `max-h-96` (384px)** — Any FAQ answer exceeding this height will be clipped with no scroll. On mobile with larger text reflow, this is easily hit. There is no `overflow-y: auto` fallback.

### Overall Quality Assessment

The codebase demonstrates competent Tailwind usage and a consistent design language. The component architecture is clean and reusable. However, the responsive implementation has **structural gaps at the mobile and tablet levels** that would degrade real-user experience — especially around navigation, scroll behavior, text legibility, and spacing consistency.

### Biggest Risks to Usability/Conversion

- Mobile users cannot reliably access all menu items (scroll/overflow issue)
- Low-contrast body text in dark sections reduces readability
- StickyCTA on mobile obscures footer content and lacks proper spacing from page bottom
- The LeadForm (primary conversion target) has no visible error states per-field, only a generic error banner
- No tablet-specific breakpoint handling (640px → 1024px jump)

---

## 2. Findings by Severity

### CRITICAL

#### C1. Mobile menu: no scroll lock, no internal scroll
- **What:** When `mobileOpen` is true, the menu renders but `<body>` remains scrollable. The menu itself has no `max-height` or `overflow-y: auto`.
- **Where:** `src/components/Header.tsx:174-236`
- **Why:** The menu is conditionally rendered as a static `<nav>` inside the header. No `useEffect` toggles `overflow: hidden` on `<body>`. The menu container has no height constraint.
- **Root cause:** Missing body scroll lock logic; no height/scroll constraint on mobile nav.
- **Impact:** On a 320px–414px viewport, the menu (9 service links + 7 knowledge links + 4 nav items + CTA = ~20+ items) extends well beyond the viewport. Users cannot scroll to reach bottom items, and background scrolls confusingly.
- **Fix:** Add `useEffect` that sets `document.body.style.overflow = 'hidden'` when `mobileOpen` is true. Add `max-h-[calc(100dvh-5rem)]` and `overflow-y-auto` to the mobile nav container.

#### C2. Text contrast fails WCAG AA across all dark sections
- **What:** Body text in dark sections uses opacity values that produce contrast ratios well below 4.5:1.
- **Where:** Hero (`text-white/60`), ProcessSteps (`text-white/50`), TrustBlock (`text-white/50`), CTABand (`text-white/60`), Footer (`text-white/60`, `text-white/50`, `text-white/40`), Breadcrumbs (`text-white/40`), Header nav links (`text-white/70`, dropdown items `text-white/60`), stat labels (`text-white/30`).
- **Why:** The forest-600 background is approximately `#1B4332`. White at 50% opacity on this background yields roughly 3.2:1 contrast. White at 30% yields ~1.8:1. Both fail AA.
- **Root cause:** Opacity-based text color approach without contrast verification.
- **Impact:** Affects readability for all users; fails automated accessibility audits; legal liability under EU accessibility directives.
- **Fix:** Replace `text-white/50` with minimum `text-white/70` for body text, `text-white/60` for secondary text. Replace `text-white/30` with `text-white/50` minimum. Stat labels (`text-white/30`) need at minimum `text-white/50`. Verify each pairing with a contrast checker.

#### C3. ServicePageLayout header clipped by fixed nav
- **What:** The header area in `ServicePageLayout` uses `pt-8 sm:pt-12` but the fixed header is 80px tall. Content starts behind the navigation bar.
- **Where:** `src/components/ServicePageLayout.tsx:33`
- **Root cause:** `Breadcrumbs` component adds `pt-20` (80px) to clear the header, but the `<header>` section below it only adds `pt-8`. The breadcrumb does handle the offset, but visually the gradient header section starts immediately after and the `pt-8` top padding is relative to the breadcrumb bottom, not the viewport. If breadcrumbs are omitted or the page is accessed with a fragment link, the header overlap becomes real.
- **Fix:** Ensure all page patterns that sit below the fixed header have consistent offset handling. The breadcrumb `pt-20` approach works but is fragile. Consider a shared layout wrapper that handles the offset once.

#### C4. No `overflow-x: hidden` on document root
- **What:** Large decorative elements (600px+ wide blurred circles, floating animated elements, tree SVGs) exist in many sections. While individual sections have `overflow-hidden`, the `<html>` and `<body>` elements do not.
- **Where:** `src/app/layout.tsx`, `src/app/globals.css`
- **Why:** Any section that forgets `overflow-hidden` (or has it removed during refactoring) will cause horizontal scroll.
- **Root cause:** No defensive `overflow-x: hidden` on `<html>` or `<body>`.
- **Impact:** Horizontal scroll observed on narrow viewports when decorative elements overflow.
- **Fix:** Add `overflow-x: hidden` to `<html>` in globals.css base layer. This is a defensive one-liner: `html { @apply overflow-x-hidden; }`.

---

### MAJOR

#### M1. Missing `md` breakpoint usage — tablet dead zone
- **What:** The entire codebase jumps from `sm` (640px) to `lg` (1024px). No `md` (768px) breakpoint is used anywhere. Tailwind's default `md` exists but is never referenced.
- **Where:** All components, all pages.
- **Why:** Deliberate or oversight — but it means iPad portrait (768px), iPad mini, and similar tablets get the same layout as a 641px phone in landscape.
- **Impact:** On a 768px tablet, grids like `sm:grid-cols-2` look cramped; typography sized for `sm` is undersized. The service card grid at `sm:grid-cols-2` crams 14 cards into 2 narrow columns.
- **Fix:** Add `md` breakpoint usage for key layout decisions: grid column counts, typography scale, section padding. Particularly: service grid (`md:grid-cols-2 lg:grid-cols-3`), hero typography, container padding.

#### M2. FAQ accordion `max-h-96` clips long content
- **What:** Open FAQ answers are constrained to `max-h-96` (384px) with no overflow handling.
- **Where:** `src/components/FAQ.tsx:33`
- **Why:** CSS transition on `max-height` requires a fixed value. But 384px is too small for longer answers on mobile.
- **Root cause:** Hard-coded max-height for animation, no overflow fallback.
- **Fix:** Increase to `max-h-[800px]` (still fixed for animation) or switch to `grid-rows` animation pattern. Add `overflow-y-auto` as a safety net.

#### M3. `btn-primary` and `btn-accent` are identical
- **What:** Both classes produce the exact same visual output — amber rounded-full buttons.
- **Where:** `src/app/globals.css:58-75`
- **Why:** Copy-paste without differentiation.
- **Impact:** No visual hierarchy distinction between primary and accent CTAs. Multiple CTAs on the same page (hero, sections, sticky CTA) all look identical.
- **Fix:** Either remove `btn-accent` and standardize on `btn-primary`, or give `btn-accent` a distinct appearance (e.g., larger, different hover effect, or different padding scale).

#### M4. ProcessSteps grid `lg:grid-cols-4` with 3 items on homepage
- **What:** The homepage passes only 3 process steps but the component uses `lg:grid-cols-4`. This creates 3 cards with one empty column.
- **Where:** `src/app/page.tsx:56-60` passes 3 steps; `src/components/ProcessSteps.tsx:33` uses `lg:grid-cols-4`.
- **Root cause:** Component designed for 4 steps but homepage only defines 3.
- **Fix:** Either add a 4th step on the homepage, or make the grid responsive to item count: `lg:grid-cols-${steps.length}` or use `grid-cols-3` when 3 items are passed.

#### M5. StickyCTA mobile layout overlaps footer and lacks safe spacing
- **What:** The StickyCTA renders as a full-width fixed bottom bar on mobile. It uses `env(safe-area-inset-bottom)` for padding but has no spacing awareness of the page footer.
- **Where:** `src/components/StickyCTA.tsx:41-64`
- **Why:** `fixed bottom-0 left-0 right-0` positions it at the absolute bottom. It overlaps whatever content is at the page bottom.
- **Impact:** Footer links (privacy policy, cookie policy) are obscured. Content at the bottom of the page is clipped.
- **Fix:** Add a `pb-[env(safe-area-inset-bottom)+60px]` or similar spacer to the footer/body when StickyCTA is visible. Or offset the footer with bottom padding.

#### M6. Render-blocking font imports via CSS `@import`
- **What:** Three Google Fonts are loaded via `@import url()` in `globals.css`, which is render-blocking.
- **Where:** `src/app/globals.css:5-10`
- **Why:** CSS `@import` blocks rendering until fonts are fetched.
- **Impact:** FOIT (Flash of Invisible Text) or FOUT on slower connections. Hurts LCP and FCP metrics.
- **Fix:** Move font loading to `next/font/google` (Next.js built-in) which handles preloading, subsetting, and self-hosting automatically. This is the canonical Next.js approach.

#### M7. LayerStack has fixed pixel dimensions
- **What:** The 3D layer stack uses `style={{ width: 400, height: 320 }}` inline, which doesn't scale.
- **Where:** `src/components/LayerStack.tsx:65`
- **Why:** Inline fixed pixel values for the perspective container.
- **Impact:** On viewports between 1024px and ~480px wider than content, the stack may not center well. On exactly 1024px (lg breakpoint), the stack switches from hidden to visible at a fixed 400px width regardless of available space.
- **Fix:** Use responsive width (e.g., `w-full max-w-[400px] mx-auto`) and aspect-ratio or relative height.

#### M8. Hover-only affordances fail on touch devices
- **What:** Multiple interactive patterns rely solely on `:hover` for feedback: card-shine effect, glow-border reveal, ServiceCard "Läs mer" text (opacity 0 → 100 on hover), LayerStack layer selection.
- **Where:** `ServiceCard.tsx:26` (opacity-0 to opacity-100 on hover), `LayerStack.tsx:80-81` (onMouseEnter/onMouseLeave), globals.css `.card-shine:hover`, `.glow-border:hover`.
- **Impact:** On touch devices, the "Läs mer" link text on service cards is invisible (opacity: 0) and there's no visible call-to-action on the card.
- **Fix:** Make "Läs mer" always visible on mobile (`opacity-100 lg:opacity-0 lg:group-hover:opacity-100`). Add touch event handling to LayerStack or make it always show labels.

---

### MINOR

#### m1. Orphaned `style.css` at project root
- **What:** `/home/user/Skog/style.css` (11KB) exists at the project root, appears to be a legacy file not imported anywhere in the Next.js app.
- **Impact:** Dead code, potential confusion.
- **Fix:** Verify it's unused and remove.

#### m2. `reveal-delay-${index}` classes beyond 6 don't exist
- **What:** `ServiceCard` uses `reveal-delay-${index + 1}` dynamically. The services page has 14 items, so indices 7–14 produce classes like `reveal-delay-8` which are undefined in CSS.
- **Where:** `src/components/ServiceCard.tsx:15`, `globals.css:174-179` (only defines 1–6).
- **Impact:** Items 7+ have no stagger delay — they all animate simultaneously. Minor visual issue.
- **Fix:** Cap the delay at 6: `reveal-delay-${Math.min(index + 1, 6)}` (already done in some places but not ServiceCard).

#### m3. Hero section has no explicit `min-height`
- **What:** The hero section relies on content + padding for height. No `min-height` is set.
- **Where:** `src/components/Hero.tsx:25`
- **Impact:** On desktop with short headlines (e.g., a service page with a brief title), the hero can appear truncated. On mobile with `pt-32 pb-16`, it's adequate but not defensive.
- **Fix:** Add `min-h-[50vh] lg:min-h-[60vh]` or similar to ensure the hero always feels substantial.

#### m4. Inconsistent section background alternation
- **What:** The homepage alternates between `bg-cream-100` (default), `bg-cream-200/50`, `bg-cream-50`, and dark forest sections. The pattern isn't systematic.
- **Where:** `src/app/page.tsx` — the section sequence is: dark hero → dark process → light persona → cream-200 verticals → light output → cream-50 features → cream-200 benefits → dark trust → light FAQ → dark CTA.
- **Impact:** Visual rhythm is inconsistent. Some light sections blend together.
- **Fix:** Establish a strict alternation rule: light / dark / light or add subtle top/bottom borders between same-background sections.

#### m5. LeadForm email field alone in a 2-column grid row
- **What:** The email field is in a `sm:grid-cols-2` grid but is the only field in its row, creating an asymmetric half-width field.
- **Where:** `src/components/LeadForm.tsx:117-122`
- **Impact:** Visually unbalanced. The email field looks oddly narrow at `sm` breakpoint.
- **Fix:** Either pair it with another field (e.g., phone number) or make it full-width.

#### m6. Footer grid doesn't collapse gracefully on mobile
- **What:** Footer uses `lg:grid-cols-4` which collapses to a single column on mobile. All four footer sections (brand, services, knowledge, customer segments) stack vertically, creating a very long footer.
- **Where:** `src/components/Footer.tsx:44`
- **Impact:** Footer is excessively long on mobile (~40+ links in a single column).
- **Fix:** Add `sm:grid-cols-2` to the footer grid so link columns pair up on mobile.

#### m7. Missing focus-visible styles on several interactive elements
- **What:** Cards (ServiceCard, persona cards, CaseCard) have no `focus-visible` outline styles. They are links but lack keyboard navigation indication.
- **Where:** `src/components/ServiceCard.tsx`, `src/app/page.tsx` (persona cards), `src/components/CaseCard.tsx`.
- **Impact:** Keyboard-only users cannot see which card is focused.
- **Fix:** Add `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-500` to card link elements.

#### m8. `text-[10px]` and `text-[11px]` used without line-height control
- **What:** Several instances of custom tiny text sizes without explicit line-height.
- **Where:** Hero stat labels (`text-[11px]`), LayerStack labels (`text-[10px]`), OutputShowcase badges, FeatureShowcase stat overlays.
- **Impact:** Default line-height for 10–11px text may be too tight on some fonts, affecting readability.
- **Fix:** Use `text-[10px] leading-normal` or `leading-tight` explicitly.

#### m9. Desktop dropdown menus use hover-only, no keyboard support
- **What:** Desktop nav dropdowns (Tjänster, Kunskap) open only on `onMouseEnter`/`onMouseLeave`. No keyboard interaction (Enter/Space/ArrowDown) is implemented.
- **Where:** `src/components/Header.tsx:69-98, 101-130`
- **Impact:** Keyboard-only users cannot access dropdown navigation items.
- **Fix:** Add `onFocus`/`onBlur` handlers and keyboard event handling for dropdown toggling.

---

## 3. Standardization Opportunities

### 3.1 Repeated contrast anti-pattern
`text-white/50`, `text-white/60`, `text-white/30` appear in 10+ components on dark backgrounds. Define semantic text color classes:
```
.text-on-dark        → text-white/80   (primary body text on dark)
.text-on-dark-muted  → text-white/60   (secondary text on dark)
.text-on-dark-subtle → text-white/50   (tertiary, captions only)
```

### 3.2 Section wrapper pattern
Every section repeats `relative overflow-hidden` + decorative blurs + `container-page` + `section-padding`. This should be a `<Section>` component with props for background variant, padding size, and whether to include decorative elements.

### 3.3 Button component
CTAs are defined inconsistently — some use `.btn-primary` class, others inline the same styles. The header CTA, hero CTA, CTABand CTA, and StickyCTA all have slightly different button markup despite wanting the same visual. A `<Button>` component should unify this.

### 3.4 Card component
ServiceCard, persona cards, CaseCard, and OutputShowcase cards all share: `rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-forest-X hover:shadow-2xl hover:-translate-y-1.5`. This base should be a `<Card>` wrapper component.

### 3.5 Header offset token
The fixed header height (80px / `h-20`) is referenced in multiple places via different padding values (`pt-20`, `pt-32`, `pt-8`). Define a CSS custom property: `--header-height: 5rem` and reference it consistently.

---

## 4. Proposed Implementation Plan

### Phase 1: Must-Fix (Critical)

| # | Fix | Files | Effort |
|---|-----|-------|--------|
| 1 | Add body scroll lock + internal scroll to mobile menu | `Header.tsx` | Small |
| 2 | Add `overflow-x: hidden` to `<html>` | `globals.css` | Tiny |
| 3 | Fix text contrast on all dark sections (minimum `text-white/70` for body) | `globals.css`, `Hero.tsx`, `ProcessSteps.tsx`, `TrustBlock.tsx`, `CTABand.tsx`, `Footer.tsx`, `Header.tsx`, `Breadcrumbs.tsx` | Medium |
| 4 | Fix ServicePageLayout header offset | `ServicePageLayout.tsx` | Small |
| 5 | Fix FAQ max-height clipping | `FAQ.tsx` | Tiny |

### Phase 2: Should-Fix (Major)

| # | Fix | Files | Effort |
|---|-----|-------|--------|
| 6 | Add `md` breakpoint to key layouts (grids, typography) | Multiple pages/components | Medium |
| 7 | Remove duplicate `btn-accent` or differentiate it | `globals.css` | Tiny |
| 8 | Fix ProcessSteps grid for 3-item case | `ProcessSteps.tsx` or `page.tsx` | Small |
| 9 | Fix StickyCTA footer overlap | `StickyCTA.tsx`, `Footer.tsx` | Small |
| 10 | Move fonts to `next/font/google` | `layout.tsx`, `globals.css`, `tailwind.config.ts` | Medium |
| 11 | Fix LayerStack fixed dimensions | `LayerStack.tsx` | Small |
| 12 | Fix hover-only affordances (ServiceCard "Läs mer", etc.) | `ServiceCard.tsx`, `LayerStack.tsx` | Small |

### Phase 3: Polish (Minor)

| # | Fix | Files | Effort |
|---|-----|-------|--------|
| 13 | Remove orphaned `style.css` | Root | Tiny |
| 14 | Cap `reveal-delay` class index | `ServiceCard.tsx` | Tiny |
| 15 | Add `min-height` to Hero | `Hero.tsx` | Tiny |
| 16 | Fix LeadForm email field layout | `LeadForm.tsx` | Tiny |
| 17 | Add `sm:grid-cols-2` to Footer grid | `Footer.tsx` | Tiny |
| 18 | Add `focus-visible` to card links | `ServiceCard.tsx`, `CaseCard.tsx`, page files | Small |
| 19 | Add keyboard support to desktop dropdowns | `Header.tsx` | Medium |
| 20 | Standardize section backgrounds | Multiple pages | Small |
| 21 | Add explicit line-height to `text-[10px]`/`text-[11px]` | Multiple components | Tiny |

---

## 5. Ready-for-Implementation Checklist

### Phase 1 — Critical (do first)

- [ ] 1. `Header.tsx`: Add `useEffect` that toggles `document.body.style.overflow = 'hidden'` when `mobileOpen` is true. Add `max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain` to the mobile `<nav>` container.
- [ ] 2. `globals.css`: In `@layer base`, add `overflow-x: hidden` to `html` rule.
- [ ] 3. Contrast fix — replace every instance of `text-white/50` used for body text with `text-white/70`. Replace `text-white/30` (stat labels, captions) with `text-white/50`. Replace `text-white/40` (breadcrumbs, footer) with `text-white/60`. Affected files: `Hero.tsx`, `ProcessSteps.tsx`, `TrustBlock.tsx`, `CTABand.tsx`, `Footer.tsx`, `Header.tsx`, `Breadcrumbs.tsx`, `ServicePageLayout.tsx`.
- [ ] 4. `ServicePageLayout.tsx:33`: Change `pt-8 pb-16 sm:pt-12 sm:pb-24` to `pt-12 pb-16 sm:pt-16 sm:pb-24` to ensure clearance after breadcrumbs.
- [ ] 5. `FAQ.tsx:33`: Change `max-h-96` to `max-h-[800px]` and add `overflow-y-auto` as safety.

### Phase 2 — Major

- [ ] 6. Add `md:` breakpoint variants to: service grid (`md:grid-cols-2`), persona grid, benefits grid, footer grid, hero typography, section padding.
- [ ] 7. `globals.css`: Delete `.btn-accent` block (lines 72-75) or alias it. Search for usages and replace with `btn-primary`.
- [ ] 8. `ProcessSteps.tsx:33`: Change grid to `lg:grid-cols-${steps.length > 3 ? 4 : 3}` or make the grid dynamic based on item count.
- [ ] 9. `StickyCTA.tsx`: On mobile, add an equivalent padding spacer to the page bottom (e.g., via a portal-rendered spacer div) or increase footer `pb` by 60px when sticky CTA is visible.
- [ ] 10. Replace `@import url()` font loading with `next/font/google` in `layout.tsx`. Remove `@import` lines from `globals.css`. Update `tailwind.config.ts` font families to use CSS variables.
- [ ] 11. `LayerStack.tsx:65`: Replace inline `style={{ width: 400, height: 320 }}` with `className="w-full max-w-[400px] mx-auto"` and use aspect-ratio for height.
- [ ] 12. `ServiceCard.tsx:26`: Change "Läs mer" div from `opacity-0 ... group-hover:opacity-100` to `opacity-100 lg:opacity-0 lg:group-hover:opacity-100` so it's always visible on touch devices.

### Phase 3 — Polish

- [ ] 13. Delete `/home/user/Skog/style.css` after verifying no imports reference it.
- [ ] 14. `ServiceCard.tsx:15`: Cap reveal delay class to max 6.
- [ ] 15. `Hero.tsx:25`: Add `min-h-[50vh] lg:min-h-[60vh]` to the section element.
- [ ] 16. `LeadForm.tsx:117-122`: Remove the wrapping `<div className="grid gap-5 sm:grid-cols-2">` around the email-only row, making it full-width.
- [ ] 17. `Footer.tsx:44`: Change `grid gap-12 lg:grid-cols-4` to `grid gap-12 sm:grid-cols-2 lg:grid-cols-4`.
- [ ] 18. Add `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-500` to `ServiceCard`, `CaseCard`, persona card links, and OutputShowcase card links.
- [ ] 19. `Header.tsx`: Add `onFocus`/`onBlur` handlers to dropdown triggers and implement ArrowDown/Escape keyboard handling.
- [ ] 20. Audit section background alternation on homepage and establish a consistent light/dark rhythm.
- [ ] 21. Add `leading-normal` to all `text-[10px]` and `text-[11px]` instances.
