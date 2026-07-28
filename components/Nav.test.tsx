import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Nav from './Nav'

// Mock framer-motion (used by Button child component)
vi.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Menu: (props: any) => <svg data-testid="menu-icon" {...props} />,
  X: (props: any) => <svg data-testid="x-icon" {...props} />,
}))

describe('Nav component', () => {
  /**
   * **Validates: Requirements 5.10**
   */
  it('renders hamburger button with correct initial aria-label', () => {
    const { getByLabelText } = render(<Nav />)
    const hamburger = getByLabelText('Open navigation menu')
    expect(hamburger).toBeInTheDocument()
  })

  /**
   * **Validates: Requirements 5.10**
   */
  it('toggles aria-label when hamburger is clicked', () => {
    const { getByLabelText, queryAllByLabelText } = render(<Nav />)
    const hamburger = getByLabelText('Open navigation menu')
    fireEvent.click(hamburger)
    // After opening, the hamburger button in the nav bar should now say "Close"
    const closeButtons = queryAllByLabelText('Close navigation menu')
    expect(closeButtons.length).toBeGreaterThan(0)
    // The "Open" label should no longer exist
    const openButtons = queryAllByLabelText('Open navigation menu')
    expect(openButtons.length).toBe(0)
  })

  /**
   * **Validates: Requirements 5.6**
   */
  it('renders mobile overlay with nav links when menu is open', () => {
    const { getByLabelText, getAllByText } = render(<Nav />)
    const hamburger = getByLabelText('Open navigation menu')
    fireEvent.click(hamburger)
    // Overlay should show nav links (desktop links also exist, so use getAllByText)
    expect(getAllByText('How It Works').length).toBeGreaterThanOrEqual(2)
    expect(getAllByText('The AI Value Map').length).toBeGreaterThanOrEqual(2)
    expect(getAllByText('Why Meridian').length).toBeGreaterThanOrEqual(2)
    expect(getAllByText('FAQ').length).toBeGreaterThanOrEqual(2)
  })

  /**
   * **Validates: Requirements 5.7**
   */
  it('closes overlay when hamburger is toggled again', () => {
    const { getByLabelText, getAllByLabelText } = render(<Nav />)
    const hamburger = getByLabelText('Open navigation menu')
    // Open
    fireEvent.click(hamburger)
    const closeButtons = getAllByLabelText('Close navigation menu')
    expect(closeButtons.length).toBeGreaterThan(0)
    // Close via the hamburger button in the nav bar (has class lg:hidden)
    const navBarClose = closeButtons.find(
      (btn) => btn.classList.contains('lg:hidden')
    )!
    fireEvent.click(navBarClose)
    // After closing, the open label should be back
    expect(getByLabelText('Open navigation menu')).toBeInTheDocument()
  })

  /**
   * **Validates: Requirements 5.5, 5.6**
   */
  it('closes overlay when a nav link is clicked', () => {
    const { getByLabelText, getAllByText } = render(<Nav />)
    const hamburger = getByLabelText('Open navigation menu')
    fireEvent.click(hamburger)
    // Click a link in the overlay (overlay links have larger font-size style)
    const links = getAllByText('How It Works')
    // The overlay link is the last one rendered
    fireEvent.click(links[links.length - 1])
    // Menu should close — hamburger should show "Open" again
    expect(getByLabelText('Open navigation menu')).toBeInTheDocument()
  })

  /**
   * **Validates: Requirements 5.9**
   */
  it('renders sticky bottom bar with CTA', () => {
    const { container } = render(<Nav />)
    // The sticky bottom bar is a div with position fixed at bottom: 0
    const allElements = container.querySelectorAll('div')
    let stickyBar: Element | null = null
    allElements.forEach((el) => {
      const style = el.getAttribute('style') || ''
      if (style.includes('bottom: 0') || style.includes('bottom:0')) {
        stickyBar = el
      }
    })
    expect(stickyBar).not.toBeNull()
    // It should contain a CTA text
    expect(stickyBar!.textContent).toContain('Book Your AI Value Map')
  })
})
