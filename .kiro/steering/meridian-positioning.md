# Meridian Solutions — Brand & Positioning Steering File

This file governs all future edits to the Meridian Solutions website. Every change to copy, layout, or styling must align with the guardrails below.

---

## Business Identity

**Company:** Meridian Solutions, LLC
**Location:** Atlanta, GA
**Domain:** AI transformation and operations consultancy for established SMBs

---

## Positioning Statement

> "Find where AI pays for itself — before you spend a dollar building it."

We are operations-and-ROI specialists first, AI specialists second. Tool-agnostic, outcome-obsessed. We lead with business results (hours saved, faster cycle times, fewer errors, reclaimed capacity), never tools or models.

---

## Ideal Customer Profile (ICP)

- Owner-operated / lean-leadership SMBs
- 10–100 employees
- $2M–$50M revenue
- Verticals: home services, healthcare practices, legal, financial services, real estate operations
- Buyer profile: already spending on AI tools but unsure of the return

---

## Flagship Offer: The AI Value Map

- Fixed-scope paid diagnostic
- Price: $4,500–$6,500
- Timeline: 2–3 weeks
- Deliverables: stakeholder interviews, process mapping, opportunity scoring (value vs. effort), per-opportunity ROI estimates, vertical compliance/risk flags, prioritized 12-month roadmap, executive readout
- Guarantee: identify at least 3× the fee in annual value or you don't pay. Fee credited 100% toward implementation if the client proceeds within 60 days.

---

## Method (3 Steps)

1. **Map** — The AI Value Map diagnostic
2. **Build** — Implementation sprints, $25K–$75K, fixed scope
3. **Operate** — Fractional AI operations retainer, $3K–$8K/month; training + monitoring + refinement

---

## Differentiator / Credibility

Enterprise-grade discipline sized for a small business. Founder: 25+ years enterprise IT and transformation, PMP + CSM + AWS certified.

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy (primary background) | `#0C3D5C` | Brand navy; used in design assets and brand materials |
| Teal (brand accent) | `#4DB8A0` | Brand teal; use for decorative elements and design assets only |
| Teal (interactive/text) | `#00D4B4` | Accessible teal (`--teal`); use for all text, links, and interactive elements on dark backgrounds — passes WCAG AA |

**Important:** Never use `#4DB8A0` as a text color on dark backgrounds — it fails AA contrast. All teal text must use `#00D4B4` (the `--teal` CSS custom property).

---

## Typography

| Role | Font Family | CSS Variable | Notes |
|------|-------------|--------------|-------|
| Headings, body, UI | Sora | `--font-sora` | Weights: 300–800 |
| Mono / numbers / stats | DM Mono | `--font-dm-mono` | Weights: 400, 500 |

---

## Voice & Tone Guidelines

- **Confident** — We know our stuff. Speak with authority grounded in experience.
- **Plain-spoken** — No jargon for jargon's sake. Say it simply.
- **Zero hype** — No superlatives, no buzzword clouds, no "revolutionary AI." Let results speak.
- **Proof-oriented** — Every claim should be backed by a number, a process, or a credential.
- **Outcome-led** — Lead with what the client gets (hours saved, revenue recovered, capacity freed) not what we do technically.

### Copy Rules

- Never say "cutting-edge," "revolutionary," "game-changing," or "best-in-class."
- Never lead with AI model names, tooling brands, or technical stack unless the audience is technical.
- Always tie features to business outcomes.
- Use second person ("you") when addressing the visitor; first person plural ("we") for Meridian.
- Keep sentences short. Favor periods over semicolons.

---

## Preservation Rules

> **All future edits MUST preserve the following existing conventions:**

1. **Fonts** — Sora (headings + body) and DM Mono (mono/stats). Do not introduce additional font families.
2. **Spacing conventions** — Use the existing section padding, card padding, and gap values already established in the component files. Do not invent new spacing scales.
3. **Layout patterns** — Maintain the established patterns: FadeIn animation wrapper, SectionLabel component for section eyebrows, card-bg with border-radius and border styles, single-column mobile → multi-column desktop at 768px+ breakpoint.
4. **CSS custom properties** — Continue using the variables defined in `globals.css` (--navy, --teal, --card-bg, --border, etc.). Do not replace them with hardcoded hex values.
5. **Component conventions** — Use inline styles + CSS-in-JS (`<style>` tags) consistent with existing components. Use Tailwind utilities only where already established (layout shortcuts like `className="hidden md:flex"`).
6. **Responsive approach** — Mobile-first. All grids default to single column and expand at `min-width: 768px` or `min-width: 900px` depending on the component.

---

## Section IDs (Single Source of Truth)

All internal navigation links must reference these IDs (defined in `lib/constants.ts`):

- `problem`
- `method`
- `offer`
- `why`
- `proof`
- `case-studies`
- `faq`
- `cta`

---

## CTA Routing

All primary CTA buttons route to the `CALENDLY_URL` constant defined in `lib/constants.ts`. No CTA should hardcode a URL — always reference the constant.

---

## Analytics

Use Plausible for privacy-respecting analytics. Fire custom events on CTA clicks using the `trackCTA(source)` utility from `lib/tracking.ts`. Never block navigation while firing events.
