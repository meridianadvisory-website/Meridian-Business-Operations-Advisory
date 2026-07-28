import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'

describe('FadeIn unit tests', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('renders children correctly', async () => {
    vi.doMock('framer-motion', () => ({
      motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      },
      useReducedMotion: () => false,
    }))
    const { default: FadeIn } = await import('./FadeIn')
    const { getByText } = render(
      <FadeIn>
        <span>Hello World</span>
      </FadeIn>
    )
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  it('renders at full opacity when prefers-reduced-motion is enabled', async () => {
    vi.doMock('framer-motion', () => ({
      motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      },
      useReducedMotion: () => true,
    }))
    const { default: FadeIn } = await import('./FadeIn')
    const { container } = render(
      <FadeIn>
        <span>Content</span>
      </FadeIn>
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.style.opacity).toBe('1')
    expect(wrapper).toHaveAttribute('data-fadein')
  })

  it('applies className prop', async () => {
    vi.doMock('framer-motion', () => ({
      motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      },
      useReducedMotion: () => false,
    }))
    const { default: FadeIn } = await import('./FadeIn')
    const { container } = render(
      <FadeIn className="custom-class">
        <span>Styled</span>
      </FadeIn>
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('custom-class')
  })

  it('passes delay to motion.div transition', async () => {
    vi.doMock('framer-motion', () => ({
      motion: {
        div: ({ children, transition, ...props }: any) => (
          <div data-delay={transition?.delay} {...props}>{children}</div>
        ),
      },
      useReducedMotion: () => false,
    }))
    const { default: FadeIn } = await import('./FadeIn')
    const { container } = render(
      <FadeIn delay={0.5}>
        <span>Delayed</span>
      </FadeIn>
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.getAttribute('data-delay')).toBe('0.5')
  })

  it('uses default delay of 0 when no delay prop is provided', async () => {
    vi.doMock('framer-motion', () => ({
      motion: {
        div: ({ children, transition, ...props }: any) => (
          <div data-delay={transition?.delay} {...props}>{children}</div>
        ),
      },
      useReducedMotion: () => false,
    }))
    const { default: FadeIn } = await import('./FadeIn')
    const { container } = render(
      <FadeIn>
        <span>No delay</span>
      </FadeIn>
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.getAttribute('data-delay')).toBe('0')
  })
})
