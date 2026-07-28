# Design Document

## Overview

This design describes the implementation approach for repositioning the Meridian Solutions website from a SaaS ops-intelligence platform to an AI transformation consultancy. The redesign replaces all page sections with new content, preserving the existing Next.js App Router architecture, Tailwind CSS utilities, component patterns (FadeIn, Button, SectionLabel), and brand system (fonts, spacing, card patterns).

## Architecture

### System Context

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Next.js App Router (meridianadvisor.co)                           â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ app/layout.tsx  â”€â”€â”€ metadata, fonts, global styles             â”‚
â”‚ app/page.tsx    â”€â”€â”€ section composition & ordering             â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ lib/constants.ts   â”€â”€â”€ CALENDLY_URL, SECTION_IDS, flags       â”‚
â”‚ lib/content.ts     â”€â”€â”€ all proof/case-study/FAQ data           â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ components/                                                    â”‚
â”‚   Nav.tsx, Hero.tsx, ProblemSection.tsx, MethodSection.tsx,     â”‚
â”‚   OfferSection.tsx, WhyMeridian.tsx, ProofSection.tsx,         â”‚
â”‚   CaseStudies.tsx, FAQ.tsx, CTASection.tsx, Footer.tsx         â”‚
â”‚   ui/Button.tsx, ui/FadeIn.tsx, ui/SectionLabel.tsx            â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ .kiro/steering/meridian-positioning.md  â”€â”€â”€ brand guardrails  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
         â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Calendly (ext.)  â”‚  â† All CTAs link here
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Component Strategy

**Preserved components (modified in-place):**
- `Nav.tsx` â€” updated link labels, same structure
- `Hero.tsx` â€” new copy, CTAs, logo strip; same responsive pattern
- `ProblemSection.tsx` â€” new agitation statements; same card grid
- `WhyMeridian.tsx` â€” new differentiator copy; same 2-col + cards layout
- `FAQ.tsx` â€” new 7 Q&A pairs, convert to accessible accordion (details/summary)
- `CTASection.tsx` â€” new heading, subhead, CTA text
- `Footer.tsx` â€” updated tagline, links, copyright, privacy link

**New components:**
- `MethodSection.tsx` â€” 3-step Map/Build/Operate section
- `OfferSection.tsx` â€” AI Value Map offer with pricing, guarantee, secondary cards
- `ProofSection.tsx` â€” metrics strip + testimonial slots
- `CaseStudies.tsx` â€” 3 cards, feature-flagged

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
// lib/constants.ts â€” expanded
export const CALENDLY_URL = 'https://calendly.com/meridianops/assessment'
export const SITE_URL = 'https://meridianadvisor.co'

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
// lib/content.ts â€” centralized editable content
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

No runtime cost when disabled â€” the section simply isn't rendered.

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

All anchor elements rendered by CTA buttons across the site SHALL have their `href` attribute equal to the `CALENDLY_URL` constant. This is an invariant â€” no CTA should point elsewhere.

**Test approach:** Render the full page, query all elements matching `[data-cta-source]` or Button components with variant="primary", and assert each href === CALENDLY_URL.

### Property 2: Section order invariant (Req 15)

The rendered page SHALL always contain sections in the defined order: Hero â†’ ProblemSection â†’ MethodSection â†’ OfferSection â†’ WhyMeridian â†’ ProofSection â†’ [CaseStudies if flag on] â†’ FAQ â†’ CTASection. The order SHALL NOT vary regardless of content changes.

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

### Property 7: Accessible contrast â€” no teal text on dark without AA compliance (Req 13)

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
- `framer-motion` (existing) â€” animations
- `lucide-react` (existing) â€” icons
- `next` (existing) â€” framework, metadata, fonts
- Native `<details>/<summary>` â€” accordion (no library needed)
- Plausible analytics script (already in layout.tsx, commented out)
