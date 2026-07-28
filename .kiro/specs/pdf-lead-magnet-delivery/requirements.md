# Requirements Document

## Introduction

This document defines the requirements for delivering a PDF version of the "7 AI Opportunities Most SMBs Overlook" guide to users who sign up via the LeadCapture form. The PDF is generated at build time from a shared content module, served as a static asset, and delivered through the existing email flow without modifications to the API or frontend components.

## Glossary

- **Lead Magnet**: A free resource (the PDF guide) offered in exchange for a visitor's email address
- **GuideContent**: The TypeScript interface representing the complete guide text structure
- **Build-time generation**: Creating the PDF during the CI/CD build step, not at runtime
- **pdfkit**: A Node.js library for programmatic PDF document creation

## Requirements

### Requirement 1: Content Module

**User Story:** As a developer, I want guide content stored in a single typed module so that the PDF and HTML versions always stay in sync and content updates only need to happen in one place.

#### Acceptance Criteria

- 1.1 Given the project is built, when `lib/lead-magnet-content.ts` is imported, then it exports a `GuideContent` object containing title, author, introduction, 7 opportunities, closing, sign-off, and CTA details.
- 1.2 Given the content module is loaded, when the `opportunities` array is inspected, then it contains exactly 7 items with titles: "Speed-to-quote", "The missed call that never gets called back", "The goldmine already in your database", "Turning paper into data", "Capturing what your best people know", "Triage and intelligent routing", "Plugging the cash-flow leaks".
- 1.3 Given a consumer imports from `lib/lead-magnet-content.ts`, when they access the exports, then TypeScript interfaces `GuideContent` and `Opportunity` are available for compile-time type checking.

### Requirement 2: PDF Generation Script

**User Story:** As a developer, I want a build-time script that generates a branded PDF from the content module so that the lead magnet is always up-to-date and served as a static file.

#### Acceptance Criteria

- 2.1 Given the script `scripts/generate-pdf.ts` is executed via `npx tsx scripts/generate-pdf.ts`, when it completes, then a PDF file exists at `public/assets/7-ai-opportunities-smbs-overlook.pdf`.
- 2.2 Given the PDF is generated, when its content is examined, then it contains the brand mark, title, introduction, all 7 numbered opportunities with titles and body text, closing paragraph, and sign-off.
- 2.3 Given the PDF is generated, when its metadata is inspected, then the Title field equals "The 7 AI Opportunities Most SMBs Overlook" and the Author field equals "Meridian Solutions, LLC".
- 2.4 Given the PDF is generated, when its visual styling is reviewed, then headings use navy (`#0C3D5C`), the brand mark uses teal (`#00D4B4`), and body text uses dark gray with readable font sizing.
- 2.5 Given the script is run multiple times with unchanged content, when the output files are compared, then they are identical (idempotent generation).
- 2.6 Given the `public/assets/` directory does not exist, when the script runs, then it creates the directory before writing the PDF.

### Requirement 3: Build Integration

**User Story:** As a developer deploying to Vercel, I want the PDF generation to run automatically before each build so that the deployed site always includes the current PDF without manual steps.

#### Acceptance Criteria

- 3.1 Given `package.json` scripts are inspected, when the `prebuild` script is checked, then it runs the PDF generation script (`npx tsx scripts/generate-pdf.ts`).
- 3.2 Given the project dependencies are installed, when `devDependencies` is inspected, then `pdfkit`, `@types/pdfkit`, and `tsx` are listed.

### Requirement 4: HTML Version Update

**User Story:** As a website visitor who prefers web viewing, I want the HTML version of the guide to match the PDF content so that both formats present the same information.

#### Acceptance Criteria

- 4.1 Given the HTML file at `public/assets/7-ai-opportunities-smbs-overlook.html` is opened, when its content is read, then it displays the same 7 opportunities from the new user-provided copy (not the old content).
- 4.2 Given the HTML file is updated, when its structure is inspected, then it preserves the existing styling, layout (header, opportunity cards, CTA box, footer), and print styles.
- 4.3 Given the HTML CTA section is inspected, when the link is checked, then it points to the Calendly assessment URL.

### Requirement 5: Existing System Compatibility

**User Story:** As the system owner, I want the PDF delivery to work with the existing email flow without requiring changes to the API route, LeadCapture component, or constants.

#### Acceptance Criteria

- 5.1 Given the feature is implemented, when the `/api/lead` route file is compared to its previous version, then no modifications have been made.
- 5.2 Given the feature is implemented, when the `LeadCapture` component is compared to its previous version, then no modifications have been made.
- 5.3 Given `lib/constants.ts` is inspected, when `LEAD_MAGNET_URL` is checked, then it equals `'/assets/7-ai-opportunities-smbs-overlook.pdf'` (unchanged).
- 5.4 Given the PDF is deployed, when a user requests the URL, then Vercel serves it as a static asset from the CDN without invoking a serverless function.

### Requirement 6: Testing

**User Story:** As a developer, I want automated tests that verify the content module integrity and PDF generation correctness so that regressions are caught before deployment.

#### Acceptance Criteria

- 6.1 Given the test suite is run, when the content validation test executes, then it verifies `guideContent` exports exactly 7 opportunities with sequential numbering (1–7) and all non-empty string fields.
- 6.2 Given the generate script has been run, when the PDF generation test executes, then it verifies the output file exists and starts with PDF magic bytes (`%PDF-`).
- 6.3 Given the test suite is run, when the URL consistency test executes, then it verifies `LEAD_MAGNET_URL` equals the relative path where the PDF is generated.
