// Feature: meridian-website, Property 3: NEXUS module ROI badge invariant
import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { nexusModules } from './NexusModules'

describe('Property 3: NEXUS module ROI badge invariant', () => {
  /**
   * **Validates: Requirements 8.6, 8.7, 8.8**
   */
  it('ROI badge is present if and only if module number is "01" or "02"', () => {
    fc.assert(
      fc.property(fc.constantFrom(...nexusModules), (module) => {
        const shouldHaveBadge = module.number === "01" || module.number === "02"
        const hasBadge = module.roiBadge !== undefined
        expect(hasBadge).toBe(shouldHaveBadge)
      }),
      { numRuns: 100 }
    )
  })
})
