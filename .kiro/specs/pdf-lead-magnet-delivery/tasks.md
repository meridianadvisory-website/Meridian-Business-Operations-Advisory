# Implementation Plan: PDF Lead Magnet Delivery

## Overview

This plan implements a build-time PDF generation pipeline for the lead magnet guide. The content is centralized in a typed module, a script renders it to PDF using pdfkit, the HTML version is updated to match, and tests validate the output.

## Tasks

- [x] 1. Create the lead magnet content module at lib/lead-magnet-content.ts with TypeScript interfaces and full guide content exported as guideContent
- [x] 2. Install pdfkit, types/pdfkit, and tsx as devDependencies using npm
- [x] 3. Update public/assets/7-ai-opportunities-smbs-overlook.html with the new 7 opportunities from user-provided copy, preserving styling and updating copyright to 2026
- [x] 4. Create scripts/generate-pdf.ts that imports guideContent and generates a branded PDF with proper styling and metadata
- [x] 5. Run the generate script to produce the initial PDF and add prebuild script to package.json
- [x] 6. Create lib/lead-magnet-content.test.ts with unit tests and property-based test using fast-check for content invariants [PBT]
- [x] 7. Create integration test verifying generated PDF exists with correct magic bytes and LEAD_MAGNET_URL matches
- [x] 8. Run full test suite and build to confirm everything passes end-to-end

## Task Dependency Graph

1 -> 2, 3
2, 3 -> 4
4 -> 5
5 -> 6, 7
6, 7 -> 8

## Notes

- Task 1 must be completed first as both the PDF script (Task 4) and HTML update (Task 3) depend on the content module
- Tasks 2 and 3 can proceed in parallel after Task 1
- The existing /api/lead route, LeadCapture component, and LEAD_MAGNET_URL constant require no changes
- The PDF is text-only (no embedded images) to keep file size minimal
- tsx enables running TypeScript scripts directly without a separate compile step
