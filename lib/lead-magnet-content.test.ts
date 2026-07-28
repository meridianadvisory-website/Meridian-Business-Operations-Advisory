import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { guideContent } from './lead-magnet-content'

describe('lead-magnet-content', () => {
  describe('unit tests', () => {
    it('guideContent.opportunities has exactly 7 items', () => {
      expect(guideContent.opportunities).toHaveLength(7)
    })

    it('opportunity numbers are sequential 1-7', () => {
      const numbers = guideContent.opportunities.map((o) => o.number)
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    it('all top-level string fields are non-empty', () => {
      expect(guideContent.title.length).toBeGreaterThan(0)
      expect(guideContent.subtitle.length).toBeGreaterThan(0)
      expect(guideContent.author.length).toBeGreaterThan(0)
      expect(guideContent.authorName.length).toBeGreaterThan(0)
      expect(guideContent.authorEmail.length).toBeGreaterThan(0)
      expect(guideContent.footerTagline.length).toBeGreaterThan(0)
      expect(guideContent.openingHeadline.length).toBeGreaterThan(0)
      expect(guideContent.openingBody.length).toBeGreaterThan(0)
      expect(guideContent.patternHeadline.length).toBeGreaterThan(0)
      expect(guideContent.patternBody.length).toBeGreaterThan(0)
      expect(guideContent.frameworkHeadline.length).toBeGreaterThan(0)
      expect(guideContent.frameworkSubheadline.length).toBeGreaterThan(0)
      expect(guideContent.ctaHeadline.length).toBeGreaterThan(0)
      expect(guideContent.ctaAction.length).toBeGreaterThan(0)
      expect(guideContent.ctaSupportingLine.length).toBeGreaterThan(0)
      expect(guideContent.ctaButtonText.length).toBeGreaterThan(0)
      expect(guideContent.ctaUrl.length).toBeGreaterThan(0)
    })

    it('each opportunity has all required non-empty fields', () => {
      for (const opp of guideContent.opportunities) {
        expect(opp.title.length).toBeGreaterThan(0)
        expect(opp.icon.length).toBeGreaterThan(0)
        expect(opp.theLeak.length).toBeGreaterThan(0)
        expect(opp.theAiOpportunity.length).toBeGreaterThan(0)
        expect(opp.businessImpact.length).toBeGreaterThan(0)
        expect(opp.whyOverlooked.length).toBeGreaterThan(0)
        expect(opp.valueLeak.length).toBeGreaterThan(0)
        expect(opp.potentialGain.length).toBeGreaterThan(0)
      }
    })

    it('framework has exactly 4 steps', () => {
      expect(guideContent.frameworkSteps).toHaveLength(4)
      const names = guideContent.frameworkSteps.map((s) => s.name)
      expect(names).toEqual(['Find', 'Size', 'Prioritize', 'Automate'])
    })

    it('CTA bullets are non-empty', () => {
      expect(guideContent.ctaBullets.length).toBeGreaterThan(0)
      for (const bullet of guideContent.ctaBullets) {
        expect(bullet.trim().length).toBeGreaterThan(0)
      }
    })

    it('pattern examples are non-empty', () => {
      expect(guideContent.patternExamples.length).toBeGreaterThan(0)
      for (const example of guideContent.patternExamples) {
        expect(example.trim().length).toBeGreaterThan(0)
      }
    })
  })

  describe('[PBT] content invariants', () => {
    it('all opportunity numbers are in range [1, 7]', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...guideContent.opportunities),
          (opportunity) => {
            expect(opportunity.number).toBeGreaterThanOrEqual(1)
            expect(opportunity.number).toBeLessThanOrEqual(7)
          }
        )
      )
    })

    it('all opportunity string fields pass a non-empty check', () => {
      const allStrings = [
        ...guideContent.opportunities.map((o) => o.title),
        ...guideContent.opportunities.map((o) => o.theLeak),
        ...guideContent.opportunities.map((o) => o.theAiOpportunity),
        ...guideContent.opportunities.map((o) => o.businessImpact),
        ...guideContent.opportunities.map((o) => o.whyOverlooked),
        ...guideContent.opportunities.map((o) => o.valueLeak),
        ...guideContent.opportunities.map((o) => o.potentialGain),
      ]

      fc.assert(
        fc.property(fc.constantFrom(...allStrings), (str) => {
          expect(str.trim().length).toBeGreaterThan(0)
        })
      )
    })

    it('opportunities array always has length 7', () => {
      fc.assert(
        fc.property(fc.constant(guideContent.opportunities), (opportunities) => {
          expect(opportunities).toHaveLength(7)
        })
      )
    })
  })
})
