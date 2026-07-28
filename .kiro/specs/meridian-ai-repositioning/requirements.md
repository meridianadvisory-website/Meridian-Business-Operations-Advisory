# Requirements Document

## Introduction

Comprehensive content overhaul of the Meridian Solutions website to reposition the business from an AI operations intelligence platform to an AI transformation and operations consultancy for established SMBs. The site retains its existing Next.js (app router), Tailwind CSS, and component architecture while replacing all marketing copy, page sections, and CTAs to reflect the new positioning: operations-and-ROI specialists first, AI specialists second. Brand colors (navy #0C3D5C, teal #4DB8A0), fonts (Sora, DM Mono), spacing, and layout patterns are preserved.

## Glossary

- **Site**: The Meridian Solutions marketing website at meridianadvisor.co, built with Next.js App Router and Tailwind CSS
- **Brand_Steering_File**: A Markdown file in `.kiro/steering/` that codifies brand voice, positioning rules, color palette, and tone guidelines for consistent content generation
- **Hero_Section**: The first visible section of the homepage occupying full viewport height, containing headline, subhead, CTA buttons, and an ICP qualifier badge
- **Problem_Section**: A content section that agitates the buyer's current pain points â€” spending on AI tools without clear ROI â€” to create urgency
- **Method_Section**: A three-step visual section presenting Map â†’ Build â†’ Operate as the engagement model
- **AI_Value_Map_Section**: A featured-offer section detailing the flagship diagnostic product ($4,500â€“$6,500, 2â€“3 weeks) including scope, deliverables, guarantee, and credit terms
- **Why_Meridian_Section**: A differentiator section communicating enterprise-grade discipline sized for small business, founder credentials, and tool-agnostic approach
- **Proof_Section**: A section combining quantitative metrics, client testimonials, and case study summaries (placeholder data acceptable at launch)
- **FAQ_Section**: An accordion or list section addressing common buyer objections with concise answers
- **CTA_Section**: The closing call-to-action section at the bottom of the page driving visitors to schedule a consultation
- **Nav_Component**: The fixed-position top navigation bar with desktop and mobile variants
- **Footer_Component**: The page footer containing links, contact info, and legal references
- **Booking_Flow**: The integration point where CTAs direct users â€” either an embedded scheduler (Calendly) or a contact form
- **ICP**: Ideal Customer Profile â€” owner-operated/lean-leadership SMBs, 10â€“100 employees, $2Mâ€“$50M revenue, in home services, healthcare practices, legal, financial services, or real estate operations

## Requirements

### Requirement 1: Brand Steering File

**User Story:** As a developer working on the site, I want a steering file that codifies the brand voice, positioning, color palette, and tone rules, so that all future content changes remain consistent with the repositioned brand.

#### Acceptance Criteria

1. THE Site SHALL include a Brand_Steering_File at `.kiro/steering/meridian-brand.md` containing the brand positioning statement, tone guidelines, color palette (navy #0C3D5C, teal #4DB8A0), typography rules, and ICP definition
2. THE Brand_Steering_File SHALL specify tone as "confident, plain-spoken, zero hype" and prohibit superlatives, buzzwords, and tool-specific claims
3. THE Brand_Steering_File SHALL define the positioning hierarchy as "operations-and-ROI specialists first, AI specialists second"
4. THE Brand_Steering_File SHALL specify that all copy leads with business results (hours saved, faster cycle times, fewer errors, reclaimed capacity) and avoids leading with tools or models

### Requirement 2: Hero Section Rewrite

**User Story:** As a site visitor, I want to immediately understand what Meridian does and who it serves, so that I can determine within seconds whether to continue reading.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a primary headline communicating the value proposition of finding where AI pays for itself before spending money building it
2. THE Hero_Section SHALL display a subheadline identifying the target buyer (established SMBs already spending on AI tools but unsure of the return)
3. THE Hero_Section SHALL include a primary CTA button linking to the Booking_Flow with text referencing the AI Value Map
4. THE Hero_Section SHALL include a secondary ghost CTA button linking to the Method_Section
5. THE Hero_Section SHALL display an ICP qualifier badge stating the target audience (10â€“100 employees, $2Mâ€“$50M revenue)
6. THE Hero_Section SHALL preserve existing layout patterns (full viewport height, responsive grid, scroll indicator)

### Requirement 3: Problem Agitation Section

**User Story:** As a site visitor who is spending on AI tools without clear return, I want to see my situation described accurately, so that I feel understood and motivated to explore Meridian's solution.

#### Acceptance Criteria

1. THE Problem_Section SHALL describe the pain of paying for AI tools while being unsure whether they generate positive ROI
2. THE Problem_Section SHALL reference common failure patterns: shelfware licenses, pilot projects that stall, disconnected tools, and lack of measurement
3. THE Problem_Section SHALL avoid naming specific AI tools or vendors
4. THE Problem_Section SHALL use a section label indicating the problem context
5. THE Problem_Section SHALL end with a transition statement pointing toward the method as the solution

### Requirement 4: Three-Step Method Section (Map / Build / Operate)

**User Story:** As a potential buyer, I want to understand Meridian's engagement model at a glance, so that I can envision the path from diagnostic to ongoing operations.

#### Acceptance Criteria

1. THE Method_Section SHALL present exactly three steps: Map, Build, and Operate
2. THE Method_Section SHALL describe the Map step as the AI Value Map diagnostic (2â€“3 weeks, fixed scope)
3. THE Method_Section SHALL describe the Build step as implementation sprints ($25Kâ€“$75K, fixed scope)
4. THE Method_Section SHALL describe the Operate step as a fractional AI operations retainer ($3Kâ€“$8K/month) covering training, monitoring, and refinement
5. THE Method_Section SHALL use a numbered or visually sequenced layout indicating progression
6. THE Method_Section SHALL include a CTA after the steps directing to the AI_Value_Map_Section or the Booking_Flow

### Requirement 5: AI Value Map Featured Offer Section

**User Story:** As a potential buyer, I want to understand exactly what I get from the flagship diagnostic, so that I can evaluate the investment and feel confident booking.

#### Acceptance Criteria

1. THE AI_Value_Map_Section SHALL state the price range as $4,500â€“$6,500
2. THE AI_Value_Map_Section SHALL state the timeline as 2â€“3 weeks
3. THE AI_Value_Map_Section SHALL list all deliverables: stakeholder interviews, process mapping, opportunity scoring (value vs. effort), per-opportunity ROI estimates, vertical compliance/risk flags, a prioritized 12-month roadmap, and an executive readout
4. THE AI_Value_Map_Section SHALL state the guarantee: identify at least 3x the fee in annual value or the client does not pay
5. THE AI_Value_Map_Section SHALL state the credit terms: fee credited 100% toward implementation if the client proceeds within 60 days
6. THE AI_Value_Map_Section SHALL include a CTA linking to the Booking_Flow

### Requirement 6: Why Meridian Differentiator Section

**User Story:** As a buyer evaluating consultancies, I want to understand what makes Meridian different, so that I can justify choosing them over alternatives.

#### Acceptance Criteria

1. THE Why_Meridian_Section SHALL communicate the differentiator as "enterprise-grade discipline sized for a small business"
2. THE Why_Meridian_Section SHALL state the founder's credentials: 25+ years enterprise IT and transformation, 15 years at Delta Air Lines, PMP + CSM + AWS certified
3. THE Why_Meridian_Section SHALL communicate the tool-agnostic, outcome-obsessed approach
4. THE Why_Meridian_Section SHALL avoid naming specific AI tools, platforms, or models as capabilities

### Requirement 7: Proof Section (Metrics, Testimonials, Case Studies)

**User Story:** As a buyer needing social validation, I want to see quantifiable results and client stories, so that I can trust Meridian delivers on its claims.

#### Acceptance Criteria

1. THE Proof_Section SHALL display quantitative metrics demonstrating business results (hours saved, cycle time improvements, error reductions, capacity reclaimed)
2. THE Proof_Section SHALL display client testimonials with attribution (name, title, company â€” placeholder data acceptable at launch)
3. THE Proof_Section SHALL display case study summaries with scenario, approach, and outcome (placeholder data acceptable at launch)
4. THE Proof_Section SHALL present metrics in a visually distinct strip or card layout using the mono font for numbers
5. THE Proof_Section SHALL use at least three metrics, two testimonials, and two case studies as placeholders

### Requirement 8: FAQ Section

**User Story:** As a buyer with objections, I want answers to common questions about scope, cost, timeline, and fit, so that I can move toward a decision without scheduling a call first.

#### Acceptance Criteria

1. THE FAQ_Section SHALL address at least six common buyer objections
2. THE FAQ_Section SHALL include questions about: pricing structure, timeline, what happens after the diagnostic, company size fit, industry applicability, and what "tool-agnostic" means
3. THE FAQ_Section SHALL present questions and answers in an expandable accordion or visible list format
4. THE FAQ_Section SHALL use plain-spoken language consistent with the Brand_Steering_File tone

### Requirement 9: Closing CTA Section

**User Story:** As a visitor who has read the full page, I want a final compelling prompt to take action, so that I can schedule a consultation without scrolling back up.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a headline reinforcing the value proposition
2. THE CTA_Section SHALL include a primary CTA button linking to the Booking_Flow
3. THE CTA_Section SHALL restate the guarantee (3x value identified or you don't pay)
4. THE CTA_Section SHALL be visually distinct from surrounding sections (elevated background, border, or glow treatment)

### Requirement 10: Navigation Update

**User Story:** As a site visitor, I want navigation links that reflect the new page sections, so that I can jump to any section of interest.

#### Acceptance Criteria

1. THE Nav_Component SHALL display links matching the new section order: Method, AI Value Map, Why Meridian, Proof
2. THE Nav_Component SHALL include a primary CTA button labeled with a reference to the AI Value Map or booking action
3. THE Nav_Component SHALL preserve existing mobile hamburger menu behavior, sticky positioning, and backdrop blur styling
4. WHEN the mobile menu is open, THE Nav_Component SHALL display the updated section links with correct anchor targets

### Requirement 11: Footer and SEO Update

**User Story:** As a site owner, I want the footer and page metadata to reflect the new positioning, so that the site is consistent end-to-end and discoverable via search.

#### Acceptance Criteria

1. THE Footer_Component SHALL display the updated company description aligned with AI transformation consulting positioning
2. THE Footer_Component SHALL include a link to the Booking_Flow
3. THE Site SHALL update the page title metadata to reference AI transformation consulting for SMBs
4. THE Site SHALL update the meta description to reference the AI Value Map and ROI-focused positioning
5. THE Site SHALL update Open Graph and Twitter card metadata to match the new title and description

### Requirement 12: CTA Booking Flow Integration

**User Story:** As a visitor ready to engage, I want all CTA buttons to direct me to a scheduling or contact mechanism, so that I can book the AI Value Map without friction.

#### Acceptance Criteria

1. WHEN a visitor clicks any primary CTA button, THE Site SHALL direct the visitor to the Booking_Flow (Calendly link or contact form)
2. THE Site SHALL use a single consistent Booking_Flow URL defined in the constants file
3. THE Site SHALL ensure the mobile sticky bottom bar CTA also links to the Booking_Flow with updated label text
4. IF the Calendly URL is not yet configured, THEN THE Site SHALL display a placeholder link that can be updated without code changes

### Requirement 13: Accessibility Compliance

**User Story:** As a site visitor using assistive technology, I want the repositioned content to remain fully accessible, so that I can navigate and understand the site regardless of ability.

#### Acceptance Criteria

1. THE Site SHALL maintain WCAG 2.1 AA color contrast ratios for all text against background combinations
2. THE Site SHALL provide descriptive aria-labels on all interactive elements (buttons, links, navigation toggles)
3. THE Site SHALL use semantic HTML heading hierarchy (h1 â†’ h2 â†’ h3) without skipping levels
4. THE Site SHALL ensure all sections have appropriate landmark roles or semantic sectioning elements
5. THE Site SHALL preserve visible focus ring styles for keyboard navigation

### Requirement 14: Page Section Order

**User Story:** As a site owner, I want the page sections rendered in the specified flow, so that the narrative builds persuasion in the intended sequence.

#### Acceptance Criteria

1. THE Site SHALL render page sections in the following order: Hero_Section â†’ Problem_Section â†’ Method_Section â†’ AI_Value_Map_Section â†’ Why_Meridian_Section â†’ Proof_Section â†’ FAQ_Section â†’ CTA_Section
2. THE Site SHALL remove or replace sections from the previous positioning that no longer apply (NexusModules, ResultsStrip, SocialProof, WhatYouGet, JourneySection, DashboardMockup)
3. THE Site SHALL preserve the Nav_Component above main content and Footer_Component below main content
