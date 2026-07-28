// Feature: meridian-website, Property 1: FadeIn delay prop passthrough
import { describe, it, expect, vi } from 'vitest'
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import FadeIn from './FadeIn'

// Mock framer-motion to capture props
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, transition, ...props }: any) => (
      <div data-testid="motion-div" data-transition={JSON.stringify(transition)} {...props}>
        {children}
      </div>
    ),
  },
  useReducedMotion: () => false,
}))

describe('Property 1: FadeIn delay prop passthrough', () => {
  /**
   * **Validates: Requirements 4.3**
   */
  it('should pass delay value to motion.div transition', () => {
    fc.assert(
      fc.property(fc.float({ min: 0, max: 2, noNaN: true }), (delay) => {
        const { getByTestId, unmount } = render(
          <FadeIn delay={delay}>
            <span>test</span>
          </FadeIn>
        )
        const motionDiv = getByTestId('motion-div')
        const transition = JSON.parse(motionDiv.getAttribute('data-transition') || '{}')
        expect(transition.delay).toBeCloseTo(delay, 5)
        unmount()
      }),
      { numRuns: 100 }
    )
  })
})
