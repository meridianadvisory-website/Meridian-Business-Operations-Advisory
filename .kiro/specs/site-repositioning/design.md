# Design Document

## Overview

This design describes the implementation approach for repositioning the Meridian Solutions website from a SaaS ops-intelligence platform to an AI transformation consultancy. The redesign replaces all page sections with new content, preserving the existing Next.js App Router architecture, Tailwind CSS utilities, component patterns (FadeIn, Button, SectionLabel), and brand system (fonts, spacing, card patterns).

## Architecture

### System Context

```
┌────────────────────────────────────────────────────────────────┐
│ Next.js App Router (meridianops.com)                           │
├────────────────────────────────────────────────────────────────┤
│ app/layout.tsx  ─── metadata, fonts, global styles             │
│ app/page.tsx    ─── section composition & ordering             │
├────────────────────────────────────────────────────────────────┤
│ lib/constants.ts   ─── CALENDLY_URL, SECTION_IDS, flags       │
│ lib/content.ts     ─── all proof/case-study/FAQ data           │
├────────────────────────────────────────────────────────────────┤
│ components/                                                    │
│   Nav.tsx, Hero.tsx, ProblemSection.tsx, MethodSection.tsx,     │
│   OfferSection.tsx, WhyMeridian.tsx, ProofSection.tsx,         │
│   CaseStudies.tsx, FAQ.tsx, CTASection.tsx, Footer.tsx         │
│   ui/Button.tsx, ui/FadeIn.tsx, ui/SectionLabel.tsx            │
├────────────────────────────────────────────────────────────────┤
│ .kiro/steering/meridian-positioning.md  ─── brand guardrails  │
└────────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────┐
│ Calendly (ext.)  │  ← All CTAs link here
└──────────────────┘
```

### Component Strategy

**Preserved components (modified in-place):**
- `Nav.tsx` — updated link labels, same structure
- `Hero.tsx` — new copy, CTAs, logo strip; same responsive pattern
- `ProblemSection.tsx` — new agitation statements; same card grid
- `WhyMeridian.tsx` — new differentiator copy; same 2-col + cards layout
- `FAQ.tsx` — new 7 Q&A pairs, convert to accessible accordion (details/summary)
- `CTASection.tsx` — new heading, subhead, CTA text
- `Footer.tsx` — updated tagline, links, copyright, privacy link

**New components:**
- `MethodSection.tsx` — 3-step Map/Build/Operate section
- `OfferSection.tsx` — AI Value Map offer with pricing, guarantee, secondary cards
- `ProofSection.tsx` — metrics strip + testimonial slots
- `CaseStudies.tsx` — 3 cards, feature-flagged

**Removed components (no longer imported in page.tsx):**
- `NexusModules.tsx`
- `ResultsStrip.tsx`
- `SocialProof.tsx`
- `WhatYouGet.tsx`
- `JourneySection.tsx`
- `MeetTheTeam.tsx`
- `DashboardMockup.tsx`

### Data Architecture

```typescript
// lib/constants.ts — expanded
export const CALENDLY_URL = 'https://calendly.com/meridianops/assessment'
export const SITE_URL = 'https://meridianops.com'

export const FEATURE_FLAGS = {
  showCaseStudies: false, // flip to true when real data lands
} as const

export const SECTION_IDS = {
  problem: 'problem',
  method: 'method',
  offer: 'offer',
  why: 'why',
  proof: 'proof',
  caseStudies: 'case-studies',
  faq: 'faq',
  cta: 'cta',
} as const
```

```typescript
// lib/content.ts — centralized editable content
export const proofMetrics = [...]
export const testimonials = [...]
export const caseStudies = [...]
export const faqItems = [...]
```

### Conversion Tracking

Lightweight event firing on CTA clicks using Plausible custom events (already scaffolded in layout.tsx as a commented-out script). Each CTA button receives a `data-cta-source` attribute. A shared utility function fires the event without blocking navigation:

```typescript
// lib/tracking.ts
export function trackCTA(source: string) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('CTA Clicked', { props: { source } })
  }
}
```

### Styling Approach

- Continue using inline styles + CSS-in-JS (`<style>` tags) consistent with existing components
- Use existing CSS custom properties from globals.css (--navy, --teal, --card-bg, --border, etc.)
- Brand color update: keep `--teal: #00D4B4` for interactive/text elements (passes AA on dark), use `#4DB8A0` only in the steering file as the "brand teal" for design assets/decorative use
- Tailwind utility classes for layout shortcuts (flex, grid) where already used (e.g., `className="hidden md:flex"`)
- Mobile-first: all grids default to single column, expand at `min-width: 768px`

### FAQ Accordion Pattern

Replace the current always-visible FAQ with an accessible accordion using native `<details>/<summary>`:

```tsx
<details>
  <summary>{question}</summary>
  <p>{answer}</p>
</details>
```

This is keyboard-navigable, screen-reader-friendly, and requires no JavaScript for core functionality. Framer Motion can enhance open/close animations.

### Feature Flag Implementation

Simple boolean in `lib/constants.ts`. In `page.tsx`:

```tsx
import { FEATURE_FLAGS } from '@/lib/constants'
// ...
{FEATURE_FLAGS.showCaseStudies && <CaseStudies />}
```

No runtime cost when disabled — the section simply isn't rendered.

### Page Composition (app/page.tsx)

```tsx
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <OfferSection />
        <WhyMeridian />
        <ProofSection />
        {FEATURE_FLAGS.showCaseStudies && <CaseStudies />}
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
```

## Correctness Properties

### Property 1: All CTA hrefs resolve to CALENDLY_URL (Req 14)

All anchor elements rendered by CTA buttons across the site SHALL have their `href` attribute equal to the `CALENDLY_URL` constant. This is an invariant — no CTA should point elsewhere.

**Test approach:** Render the full page, query all elements matching `[data-cta-source]` or Button components with variant="primary", and assert each href === CALENDLY_URL.

### Property 2: Section order invariant (Req 15)

The rendered page SHALL always contain sections in the defined order: Hero → ProblemSection → MethodSection → OfferSection → WhyMeridian → ProofSection → [CaseStudies if flag on] → FAQ → CTASection. The order SHALL NOT vary regardless of content changes.

**Test approach:** Query all section elements by their IDs, collect their DOM positions, and assert strictly increasing order.

### Property 3: Feature flag controls Case Studies visibility (Req 8)

WHEN `FEATURE_FLAGS.showCaseStudies` is `false`, the Case Studies section SHALL NOT be present in the DOM. WHEN it is `true`, the section SHALL render with exactly 3 cards.

**Test approach:** Property-based test toggling the flag and asserting presence/absence.

### Property 4: Content file is single source of truth (Req 18)

FOR ALL proof metrics, testimonials, and case study entries defined in `lib/content.ts`, the rendered Proof and Case Studies sections SHALL display the exact same text values. Changing content in the file SHALL be reflected in rendered output without component modifications.

**Test approach:** Import content arrays, render components, verify each item's text appears in the DOM.

### Property 5: Nav and Footer reference only valid SECTION_IDS (Req 11)

All internal anchor links in Nav and Footer SHALL have `href` values that match `#${SECTION_IDS[key]}` for some key in the SECTION_IDS constant. No broken internal links.

**Test approach:** Render Nav and Footer, collect all href attributes starting with `#`, and assert each matches a value in SECTION_IDS.

### Property 6: FAQ accordion accessibility (Req 9, 13)

Each FAQ item SHALL be wrapped in a `<details>` element with a `<summary>` child. The summary SHALL be keyboard-focusable. There SHALL be exactly 7 FAQ items.

**Test approach:** Render FAQ, query `details` elements, assert count === 7, verify each has a `summary` first-child.

### Property 7: Accessible contrast — no teal text on dark without AA compliance (Req 13)

All text elements using teal color SHALL use `--teal` (#00D4B4) which passes 4.5:1 on the navy background. The brand teal #4DB8A0 SHALL NOT appear as a text color in any component.

**Test approach:** Search all component files for color references; verify #4DB8A0 is not used for text fill/color properties.

## File Changes

| File | Action | Purpose |
|------|--------|---------|
| `.kiro/steering/meridian-positioning.md` | Create | Brand guardrails steering file |
| `lib/constants.ts` | Modify | Add FEATURE_FLAGS, update SECTION_IDS |
| `lib/content.ts` | Create | Centralized proof/case-study/FAQ content |
| `lib/tracking.ts` | Create | CTA conversion event utility |
| `app/layout.tsx` | Modify | Update metadata, uncomment Plausible |
| `app/page.tsx` | Modify | New section composition & imports |
| `app/globals.css` | Modify | Add any new utility classes if needed |
| `components/Nav.tsx` | Modify | Update link labels and section references |
| `components/Hero.tsx` | Modify | New headline, subhead, CTAs, logo strip |
| `components/ProblemSection.tsx` | Modify | New agitation copy |
| `components/MethodSection.tsx` | Create | 3-step Map/Build/Operate |
| `components/OfferSection.tsx` | Create | AI Value Map + pricing + guarantee |
| `components/WhyMeridian.tsx` | Modify | New differentiator copy |
| `components/ProofSection.tsx` | Create | Metrics + testimonials |
| `components/CaseStudies.tsx` | Create | 3 cards, feature-flagged |
| `components/FAQ.tsx` | Modify | 7 new Q&As, accordion pattern |
| `components/CTASection.tsx` | Modify | New closing CTA copy |
| `components/Footer.tsx` | Modify | Updated tagline, links, copyright, privacy |

## Dependencies

No new npm dependencies required. The implementation uses:
- `framer-motion` (existing) — animations
- `lucide-react` (existing) — icons
- `next` (existing) — framework, metadata, fonts
- Native `<details>/<summary>` — accordion (no library needed)
- Plausible analytics script (already in layout.tsx, commented out)
