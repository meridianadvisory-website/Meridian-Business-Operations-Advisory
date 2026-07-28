import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

describe('Button unit tests', () => {
  it('renders as <a> when href is provided', () => {
    const { container } = render(
      <Button variant="primary" href="https://example.com">Link</Button>
    )
    const anchor = container.querySelector('a')
    expect(anchor).not.toBeNull()
    expect(anchor?.getAttribute('href')).toBe('https://example.com')
  })

  it('renders as <button> when onClick is provided', () => {
    const handleClick = vi.fn()
    const { container } = render(
      <Button variant="primary" onClick={handleClick}>Click Me</Button>
    )
    const button = container.querySelector('button')
    expect(button).not.toBeNull()
    fireEvent.click(button!)
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders as <button type="button"> when neither href nor onClick is provided', () => {
    const { container } = render(
      <Button variant="ghost">Idle</Button>
    )
    const button = container.querySelector('button')
    expect(button).not.toBeNull()
    expect(button?.getAttribute('type')).toBe('button')
  })

  it('applies target="_blank" and rel="noopener noreferrer" for external links', () => {
    const { container } = render(
      <Button variant="primary" href="https://calendly.com/test">Book</Button>
    )
    const anchor = container.querySelector('a')
    expect(anchor?.getAttribute('target')).toBe('_blank')
    expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('applies primary variant styles', () => {
    const { container } = render(
      <Button variant="primary" href="https://example.com">Primary</Button>
    )
    const el = container.firstElementChild as HTMLElement
    expect(el.style.background).toContain('var(--teal)')
  })

  it('applies ghost variant styles', () => {
    const { container } = render(
      <Button variant="ghost" href="https://example.com">Ghost</Button>
    )
    const el = container.firstElementChild as HTMLElement
    expect(el.style.border).toContain('var(--teal-border)')
  })
})
