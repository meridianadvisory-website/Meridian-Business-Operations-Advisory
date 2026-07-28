// Feature: meridian-website, Property 2: Button href renders as anchor with correct security attributes
import { describe, it, expect, vi } from 'vitest'
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import Button from './Button'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

describe('Property 2: Button href renders as anchor with correct security attributes', () => {
  /**
   * **Validates: Requirements 4.7, 4.8**
   */
  it('should render as <a> with target="_blank" and rel="noopener noreferrer" for any URL', () => {
    fc.assert(
      fc.property(fc.webUrl(), (url) => {
        const { container, unmount } = render(
          <Button variant="primary" href={url}>
            Click
          </Button>
        )
        const anchor = container.querySelector('a')
        expect(anchor).not.toBeNull()
        expect(anchor?.getAttribute('target')).toBe('_blank')
        expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer')
        expect(anchor?.getAttribute('href')).toBe(url)
        unmount()
      }),
      { numRuns: 100 }
    )
  })
})
