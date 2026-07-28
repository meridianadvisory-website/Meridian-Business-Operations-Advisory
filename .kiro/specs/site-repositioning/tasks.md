# Implementation Tasks

## Task 1: Create Brand Steering File
> Requirement: 1 | Create .kiro/steering/meridian-positioning.md with brand guardrails

- [x] 1.1 Create `.kiro/steering/meridian-positioning.md` with brand colors (Navy #0C3D5C, Teal #4DB8A0), font families (Sora, DM Mono), voice guidelines (confident, plain-spoken, zero hype, proof-oriented, outcome-led), business identity (Meridian Solutions, LLC — AI transformation and operations consultancy), positioning statement, and ICP definition
- [x] 1.2 Include instruction that existing fonts, spacing conventions, and layout patterns must be preserved in all future edits

## Task 2: Update Constants and Create Content File
> Requirement: 11, 14, 15, 18 | Set up data layer for new site

- [x] 2.1 Update `lib/constants.ts`: add `FEATURE_FLAGS` object with `showCaseStudies: false`, update `SECTION_IDS` to new section anchors (problem, method, offer, why, proof, caseStudies, faq, cta)
- [x] 2.2 Create `lib/content.ts` with exported arrays for: `proofMetrics` (placeholder metrics), `testimonials` (2+ placeholder slots), `caseStudies` (3 cards with [VERIFY] data), `faqItems` (7 Q&A pairs)
- [x] 2.3 Create `lib/tracking.ts` with `trackCTA(source: string)` utility that fires Plausible custom event without blocking navigation

## Task 3: Update Layout Metadata and Analytics
> Requirement: 12, 17, 19 | SEO, analytics, privacy

- [x] 3.1 Update `app/layout.tsx` metadata: page title to reflect AI transformation consulting, meta description updated, OG and Twitter card metadata updated, canonical URL preserved
- [x] 3.2 Uncomment the Plausible analytics script in `app/layout.tsx`

## Task 4: Rewrite Hero Section
> Requirement: 2 | New headline, subhead, CTAs, logo strip

- [x] 4.1 Replace Hero.tsx content with new headline, subheadline, and ICP qualifier
- [x] 4.2 Update CTA buttons: primary CTA routes to CALENDLY_URL with `data-cta-source="hero-primary"`, secondary ghost CTA links to method section
- [x] 4.3 Replace stats row with a logo strip or trust indicator section
- [x] 4.4 Add `trackCTA` call to primary CTA onClick
- [x] 4.5 Preserve responsive layout (single column mobile, two-column at 900px+)

## Task 5: Rewrite Problem-Agitation Section
> Requirement: 3 | Bold agitation statements

- [x] 5.1 Replace ProblemSection.tsx pain cards with new agitation copy (verbatim from content owner)
- [x] 5.2 Maintain card-grid layout and FadeIn animation pattern
- [x] 5.3 Verify WCAG AA contrast for all text elements (4.5:1 minimum)
- [x] 5.4 Ensure section ID matches `SECTION_IDS.problem`

## Task 6: Create Method Section (Map / Build / Operate)
> Requirement: 4 | 3-step engagement model

- [x] 6.1 Create `components/MethodSection.tsx` with 3 steps: Map, Build, Operate — each with number, title, and description
- [x] 6.2 Use visually distinct background treatment (e.g., subtle gradient or border-top/bottom) to separate from adjacent sections
- [x] 6.3 Apply responsive grid: 3-column at desktop, single-column stacked at mobile
- [x] 6.4 Use FadeIn animation pattern consistent with other sections
- [x] 6.5 Set section ID to `SECTION_IDS.method`

## Task 7: Create Offer Section (AI Value Map)
> Requirement: 5 | Flagship offer with pricing, guarantee, secondary cards

- [x] 7.1 Create `components/OfferSection.tsx` with featured AI Value Map card displaying pricing
- [x] 7.2 Add guarantee statement with terms disclosure (what counts as value, measurement method, evaluation window, refund/credit mechanics)
- [x] 7.3 Add secondary service cards alongside primary offer
- [x] 7.4 Add CTA button routing to CALENDLY_URL with `data-cta-source="offer-section"` and trackCTA integration
- [x] 7.5 Set section ID to `SECTION_IDS.offer`
- [x] 7.6 Ensure card layout stacks on mobile (<768px)

## Task 8: Update Why Meridian Section
> Requirement: 6 | Differentiator/credibility rewrite

- [x] 8.1 Replace WhyMeridian.tsx differentiator copy with new content (verbatim)
- [x] 8.2 Preserve 2-column + card grid layout pattern
- [x] 8.3 Maintain existing FadeIn and SectionLabel patterns
- [x] 8.4 Set section ID to `SECTION_IDS.why`

## Task 9: Create Proof Section
> Requirement: 7 | Metrics placeholders + testimonial slots

- [x] 9.1 Create `components/ProofSection.tsx` that imports `proofMetrics` and `testimonials` from `lib/content.ts`
- [x] 9.2 Display metrics in a horizontal strip (DM Mono font for numbers)
- [x] 9.3 Display testimonial cards (minimum 2 slots) with quote, attribution placeholder
- [x] 9.4 Set section ID to `SECTION_IDS.proof`
- [x] 9.5 Ensure responsive stacking on mobile

## Task 10: Create Case Studies Section (Feature-Flagged)
> Requirement: 8 | 3 cards with VERIFY data, gated by flag

- [x] 10.1 Create `components/CaseStudies.tsx` that imports `caseStudies` from `lib/content.ts`
- [x] 10.2 Render 3 cards with business descriptor, challenge summary, and outcome
- [x] 10.3 Ensure all placeholder data in content file is marked with [VERIFY]
- [x] 10.4 Set section ID to `SECTION_IDS.caseStudies`
- [x] 10.5 Confirm component only renders when `FEATURE_FLAGS.showCaseStudies` is true (controlled in page.tsx)

## Task 11: Rewrite FAQ Section with Accordion
> Requirement: 9 | 7 Q&A pairs, accessible accordion

- [x] 11.1 Replace FAQ.tsx content with 7 new Q&A pairs imported from `lib/content.ts`
- [x] 11.2 Convert from always-visible cards to `<details>/<summary>` accordion pattern
- [x] 11.3 Style accordion with existing card-bg, border, and border-radius patterns
- [x] 11.4 Add Framer Motion animation for open/close if feasible without breaking accessibility
- [x] 11.5 Verify keyboard navigation works (Tab to focus summary, Enter/Space to toggle)
- [x] 11.6 Set section ID to `SECTION_IDS.faq`

## Task 12: Rewrite Closing CTA Section
> Requirement: 10 | Updated heading, subhead, CTA

- [x] 12.1 Replace CTASection.tsx content with new heading, subheadline, and CTA button text (verbatim)
- [x] 12.2 Route CTA to CALENDLY_URL with `data-cta-source="closing-cta"` and trackCTA
- [x] 12.3 Add brief data-handling note below CTA (e.g., "We'll use your info to schedule and prepare for your call. No spam.")
- [x] 12.4 Set section ID to `SECTION_IDS.cta`

## Task 13: Update Navigation
> Requirement: 11, 14, 16 | Nav labels, CTA, mobile

- [x] 13.1 Update Nav.tsx desktop link labels to match new sections (using SECTION_IDS)
- [x] 13.2 Update Nav.tsx mobile overlay links to match
- [x] 13.3 Keep primary CTA button routing to CALENDLY_URL with `data-cta-source="nav-cta"` and trackCTA
- [x] 13.4 Update sticky mobile bottom bar CTA text
- [x] 13.5 Verify hamburger menu behavior preserved below 768px

## Task 14: Update Footer
> Requirement: 11, 19 | Tagline, links, copyright, privacy

- [x] 14.1 Update Footer.tsx tagline to reflect AI transformation consultancy positioning
- [x] 14.2 Update footer navigation links to reference new SECTION_IDS
- [x] 14.3 Update copyright to "Meridian Solutions, LLC"
- [x] 14.4 Add privacy policy link (can link to a placeholder /privacy page or external URL)
- [x] 14.5 Ensure CTA in footer strip routes to CALENDLY_URL with `data-cta-source="footer-cta"` and trackCTA

## Task 15: Update Page Composition
> Requirement: 15 | Section order, remove deprecated

- [x] 15.1 Update `app/page.tsx` imports: remove NexusModules, ResultsStrip, SocialProof, WhatYouGet, JourneySection, MeetTheTeam; add MethodSection, OfferSection, ProofSection, CaseStudies
- [x] 15.2 Compose sections in order: Nav → Hero → ProblemSection → MethodSection → OfferSection → WhyMeridian → ProofSection → {CaseStudies if flag} → FAQ → CTASection → Footer
- [x] 15.3 Import FEATURE_FLAGS and conditionally render CaseStudies

## Task 16: Responsive and Mobile Verification
> Requirement: 16 | Layout at 375px, tap targets, stacking

- [x] 16.1 Verify all new sections (MethodSection, OfferSection, ProofSection, CaseStudies) stack to single column below 768px
- [x] 16.2 Verify no horizontal overflow at 375px viewport width across all sections
- [x] 16.3 Verify all interactive elements meet 44×44px minimum tap target
- [x] 16.4 Verify FAQ accordion is touch-operable on mobile

## Task 17: Accessibility Audit
> Requirement: 13 | Contrast, semantics, keyboard

- [x] 17.1 Run axe-core accessibility check on rendered page (update existing accessibility.test.tsx)
- [x] 17.2 Verify heading hierarchy: single h1 in Hero, h2 for section titles, h3 for cards
- [x] 17.3 Verify all sections use semantic landmark elements (section with id, nav, footer)
- [x] 17.4 Verify #4DB8A0 is NOT used as text color anywhere — all teal text uses --teal (#00D4B4)
- [x] 17.5 Verify all CTA buttons have visible focus indicators (existing focus-visible styles in globals.css)
