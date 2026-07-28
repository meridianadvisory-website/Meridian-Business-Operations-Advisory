# Requirements Document

## Introduction

Reposition the Meridian Solutions website from an operations-intelligence SaaS platform (NEXUS) to an AI transformation and operations consultancy for established SMBs. The site will communicate a new value proposition — helping owner-operated businesses (10–100 employees, $2M–$50M revenue) find where AI pays for itself before spending a dollar building it. All existing copy and sections will be replaced with new content reflecting the consultancy model, the Map / Build / Operate method, and the AI Value Map flagship offer.

## Glossary

- **Site**: The Next.js App Router website at meridianops.com
- **Steering_File**: A markdown document at `.kiro/steering/meridian-positioning.md` containing brand voice, color, and positioning guardrails for all future edits
- **Hero_Section**: The above-the-fold landing area containing headline, subhead, CTAs, and social proof strip
- **Problem_Section**: A content block below the hero that uses bold agitation statements to articulate the visitor's pain
- **Method_Section**: A 3-step visual section explaining the Map / Build / Operate engagement model
- **Offer_Section**: The section presenting the AI Value Map flagship offer with pricing, guarantee, and secondary service cards
- **Why_Section**: A differentiator and credibility section explaining why Meridian over competitors
- **Proof_Section**: A section displaying metrics placeholders and testimonial slots
- **Case_Studies_Section**: A section with 3 cards showing client outcome summaries with placeholder data
- **FAQ_Section**: A section with 7 Q&A pairs handling common objections
- **Closing_CTA_Section**: A final call-to-action section with updated heading, subhead, and button
- **Nav_Component**: The fixed navigation bar with links and primary CTA button
- **Footer_Component**: The site footer with links, tagline, and copyright
- **Booking_Flow**: The external scheduler (Calendly) or embedded form that all CTAs route to
- **ICP**: Ideal Customer Profile — owner-operated SMBs, 10–100 employees, $2M–$50M revenue, in home services, healthcare, legal, financial services, real estate
- **Brand_Colors**: Navy #0C3D5C, Teal #4DB8A0 as primary palette
- **Guarantee_Terms**: The written terms defining what "3x value or you don't pay" means — including measurement method, evaluation window, and refund/credit mechanics
- **Feature_Flag**: A configuration-level toggle that controls whether a section renders on the live site
- **Conversion_Event**: A client-side analytics event fired when a visitor clicks a booking CTA

## Requirements

### Requirement 1: Brand Steering File

**User Story:** As a developer making future edits to the Meridian site, I want a steering file with brand guardrails, so that all changes remain consistent with the new positioning.

#### Acceptance Criteria

1. WHEN a developer references the steering file, THE Steering_File SHALL contain the brand color palette (Navy #0C3D5C, Teal #4DB8A0), existing font families, voice guidelines (confident, plain-spoken, zero hype, proof-oriented, outcome-led), business identity, positioning statement, and ICP definition
2. THE Steering_File SHALL be located at `.kiro/steering/meridian-positioning.md`
3. THE Steering_File SHALL instruct that existing fonts, spacing conventions, and layout patterns are preserved

### Requirement 2: Hero Section Rewrite

**User Story:** As a website visitor, I want to immediately understand Meridian's value proposition, so that I can decide whether to engage further.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a new headline, subheadline, and two CTA buttons (primary and secondary)
2. THE Hero_Section SHALL include a logo strip or social proof indicator below the CTAs
3. WHEN a visitor views the Hero_Section, THE Hero_Section SHALL use verbatim copy provided by the content owner without regeneration
4. THE Hero_Section SHALL use the primary brand color (Teal #4DB8A0) for accent elements and CTAs
5. THE Hero_Section SHALL preserve the existing responsive layout pattern (single column on mobile, multi-column on desktop)

### Requirement 3: Problem-Agitation Section

**User Story:** As a website visitor, I want to see my business pain articulated clearly, so that I feel understood and motivated to explore the solution.

#### Acceptance Criteria

1. THE Problem_Section SHALL display bold agitation statements that articulate the ICP's operational pain points
2. THE Problem_Section SHALL use verbatim copy provided by the content owner
3. THE Problem_Section SHALL appear directly below the Hero_Section in the page flow
4. THE Problem_Section SHALL maintain accessible contrast ratios (WCAG AA minimum 4.5:1 for body text)

### Requirement 4: Three-Step Method Section (Map / Build / Operate)

**User Story:** As a website visitor, I want to understand Meridian's engagement process, so that I know what working with them looks like.

#### Acceptance Criteria

1. THE Method_Section SHALL present exactly three steps: Map, Build, and Operate
2. WHEN displayed, THE Method_Section SHALL show each step with a number, title, and description
3. THE Method_Section SHALL use verbatim copy provided by the content owner
4. THE Method_Section SHALL be visually distinct from adjacent sections using spacing or background treatment

### Requirement 5: AI Value Map Offer Section

**User Story:** As a website visitor, I want to see the flagship offer details including pricing and guarantee, so that I can evaluate the engagement.

#### Acceptance Criteria

1. THE Offer_Section SHALL present the AI Value Map as the primary featured offer with pricing information
2. THE Offer_Section SHALL include a guarantee statement that links to or references the Guarantee_Terms
3. THE Offer_Section SHALL display secondary service cards alongside the primary offer
4. THE Offer_Section SHALL include a CTA that routes to the Booking_Flow
5. THE Offer_Section SHALL use verbatim copy provided by the content owner
6. THE Offer_Section SHALL include a guarantee terms disclosure that defines: what counts as "value," how value is measured, the evaluation window (e.g., 60 days), and what "you don't pay" means in practice (refund vs. fee credit)

### Requirement 6: Why Meridian Section

**User Story:** As a website visitor, I want to understand what differentiates Meridian from other consultancies, so that I can build trust and confidence in their approach.

#### Acceptance Criteria

1. THE Why_Section SHALL present differentiators and credibility indicators for Meridian
2. THE Why_Section SHALL use verbatim copy provided by the content owner
3. THE Why_Section SHALL maintain visual consistency with the site's card-based design pattern

### Requirement 7: Proof Section

**User Story:** As a website visitor, I want to see evidence of results, so that I can trust the consultancy's claims.

#### Acceptance Criteria

1. THE Proof_Section SHALL display metrics with placeholder values (marked for future replacement with real data)
2. THE Proof_Section SHALL include testimonial slots (at minimum 2 placeholders)
3. THE Proof_Section SHALL use a visually distinct layout (e.g., metrics strip or card grid)

### Requirement 8: Case Studies Section

**User Story:** As a website visitor, I want to read brief case studies, so that I can see how the consultancy has helped businesses similar to mine.

#### Acceptance Criteria

1. THE Case_Studies_Section SHALL display exactly 3 case study cards
2. WHEN displayed, each case study card SHALL include a business descriptor, challenge summary, and outcome
3. THE Case_Studies_Section SHALL mark all placeholder data with a [VERIFY] tag to indicate it requires validation
4. THE Case_Studies_Section SHALL use verbatim copy provided by the content owner
5. THE Case_Studies_Section SHALL be gated behind a Feature_Flag so it can be hidden until real client data is available
6. WHILE the Feature_Flag is disabled, THE Site SHALL render the page without the Case_Studies_Section (no empty space or broken layout)

### Requirement 9: FAQ Section

**User Story:** As a website visitor, I want answers to common objections, so that I can overcome hesitation about engaging.

#### Acceptance Criteria

1. THE FAQ_Section SHALL contain exactly 7 question-and-answer pairs
2. THE FAQ_Section SHALL use verbatim copy provided by the content owner
3. WHEN a visitor interacts with the FAQ_Section, THE FAQ_Section SHALL allow expanding and collapsing individual answers (accordion pattern)
4. THE FAQ_Section SHALL use accessible markup (e.g., details/summary or ARIA-controlled disclosure)

### Requirement 10: Closing CTA Section

**User Story:** As a website visitor who has read through the page, I want a final prompt to take action, so that I can easily book a consultation.

#### Acceptance Criteria

1. THE Closing_CTA_Section SHALL display an updated heading, subheadline, and primary CTA button
2. THE Closing_CTA_Section SHALL use verbatim copy provided by the content owner
3. WHEN clicked, THE CTA button SHALL route to the Booking_Flow

### Requirement 11: Navigation and Footer Updates

**User Story:** As a website visitor, I want navigation labels that match the new site sections, so that I can find relevant content.

#### Acceptance Criteria

1. THE Nav_Component SHALL update link labels to reflect the repositioned section names (referencing sections defined in Requirement 15)
2. THE Nav_Component SHALL retain the primary CTA button routing to the Booking_Flow
3. THE Footer_Component SHALL update its tagline and navigation links to match the new positioning
4. THE Footer_Component SHALL display the updated copyright with "Meridian Solutions, LLC"
5. THE Nav_Component and Footer_Component SHALL reference the same SECTION_IDS constant as the page composition (single source of truth for section anchors)

### Requirement 12: SEO and Metadata Updates

**User Story:** As a site owner, I want updated meta tags and page titles, so that search engines index the repositioned content correctly.

#### Acceptance Criteria

1. THE Site SHALL update the page title and meta description in layout.tsx to reflect AI transformation consulting positioning
2. THE Site SHALL update Open Graph and Twitter Card metadata with the new positioning copy
3. THE Site SHALL preserve the existing canonical URL and metadataBase configuration

### Requirement 13: Accessibility Compliance

**User Story:** As a website visitor using assistive technology, I want the site to remain accessible after the redesign, so that I can navigate and understand all content.

#### Acceptance Criteria

1. THE Site SHALL maintain WCAG AA contrast ratios (minimum 4.5:1 for body text, 3:1 for large text) across all new sections
2. THE Site SHALL use semantic HTML elements (headings hierarchy, landmark regions, lists) for all new content
3. THE Site SHALL ensure all interactive elements (CTAs, FAQ accordion) are keyboard navigable with visible focus indicators
4. IF the brand color Teal #4DB8A0 fails contrast against the dark background, THEN THE Site SHALL use the existing accessible teal (#00D4B4) for text elements while reserving #4DB8A0 for decorative or large-text use only

### Requirement 14: CTA Wiring

**User Story:** As a website visitor, I want all call-to-action buttons to take me to a booking flow, so that I can schedule a consultation from any point on the page.

#### Acceptance Criteria

1. THE Site SHALL route all primary CTA buttons to the Booking_Flow (Calendly URL or embedded form)
2. WHEN a visitor clicks any CTA button, THE Site SHALL open the Booking_Flow in a manner consistent with the existing implementation (new tab or inline embed)
3. THE Site SHALL maintain the existing CALENDLY_URL constant in lib/constants.ts as the single source of truth for the booking destination
4. THE Site SHALL include a sticky mobile CTA bar at the bottom of the viewport on small screens

### Requirement 15: Page Composition and Section Order

**User Story:** As a site owner, I want the page sections ordered to follow a logical persuasion flow, so that visitors are guided from awareness through consideration to action.

#### Acceptance Criteria

1. THE Site SHALL render sections in the following order: Nav, Hero_Section, Problem_Section, Method_Section, Offer_Section, Why_Section, Proof_Section, Case_Studies_Section (when Feature_Flag enabled), FAQ_Section, Closing_CTA_Section, Footer_Component
2. THE Site SHALL remove or replace any existing sections (NexusModules, ResultsStrip, SocialProof, WhatYouGet, JourneySection, MeetTheTeam) that no longer apply to the consultancy positioning
3. THE Site SHALL update the page.tsx imports and composition to reflect the new section order

### Requirement 16: Responsive Layout and Mobile Behavior

**User Story:** As a mobile visitor (375px–768px viewport), I want the site to render correctly with readable text and usable interactions, so that I can evaluate and engage with Meridian on my phone.

#### Acceptance Criteria

1. THE Site SHALL render all sections without horizontal overflow or overlapping elements at 375px viewport width
2. THE Site SHALL stack card grids (Offer cards, Case Study cards, Method steps) into a single column at viewports below 768px
3. THE Site SHALL maintain minimum tap target size of 44×44px for all interactive elements on mobile
4. THE Site SHALL ensure the FAQ accordion is fully operable via touch on mobile viewports
5. WHEN the viewport is below 768px, THE Nav_Component SHALL collapse into a hamburger menu (preserving existing mobile nav behavior)

### Requirement 17: Conversion Tracking

**User Story:** As a site owner, I want to know which CTAs drive bookings, so that I can measure and optimize the page's effectiveness.

#### Acceptance Criteria

1. WHEN a visitor clicks any booking CTA button, THE Site SHALL fire a Conversion_Event with a label identifying the CTA source (e.g., "hero-primary", "offer-section", "closing-cta")
2. THE Site SHALL implement conversion tracking using a lightweight, privacy-respecting approach (e.g., Plausible custom events or dataLayer push)
3. THE Site SHALL not block page rendering or CTA navigation while firing the Conversion_Event

### Requirement 18: Editable Proof Content

**User Story:** As a site owner, I want metrics, testimonials, and case study content to live in a centralized data file, so that I can update them without modifying component code.

#### Acceptance Criteria

1. THE Site SHALL store all Proof_Section metrics, testimonial quotes, and Case_Studies_Section data in a dedicated content file (e.g., lib/content.ts or a JSON file)
2. THE Site SHALL import proof and case study data from this content file rather than hardcoding it in components
3. WHEN the content file is updated, THE Site SHALL reflect changes without requiring component modifications

### Requirement 19: Privacy Disclosure

**User Story:** As a website visitor providing personal information, I want to know how my data is handled, so that I can make an informed decision about booking.

#### Acceptance Criteria

1. IF the Booking_Flow collects personal data (name, email, company), THEN THE Footer_Component SHALL include a link to a privacy policy page or disclosure
2. THE Site SHALL display a brief data-handling note near any form that collects visitor information (e.g., "We'll use your info to schedule and prepare for your call. No spam.")
3. IF analytics are enabled, THEN THE Site SHALL use a privacy-respecting analytics tool that does not require cookie consent banners (e.g., Plausible)
