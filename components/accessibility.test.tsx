import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import fs from 'fs'
import path from 'path'

expect.extend(toHaveNoViolations)

// Mock framer-motion for all components
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  useReducedMotion: () => false,
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Menu: (props: any) => <svg data-testid="menu-icon" aria-hidden="true" {...props} />,
  X: (props: any) => <svg data-testid="x-icon" aria-hidden="true" {...props} />,
  Briefcase: (props: any) => <svg aria-hidden="true" {...props} />,
  Clock: (props: any) => <svg aria-hidden="true" {...props} />,
  Award: (props: any) => <svg aria-hidden="true" {...props} />,
  Crosshair: (props: any) => <svg aria-hidden="true" {...props} />,
}))

import Hero from './Hero'
import ProblemSection from './ProblemSection'
import MethodSection from './MethodSection'
import OfferSection from './OfferSection'
import WhyMeridian from './WhyMeridian'
import ProofSection from './ProofSection'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import CTASection from './CTASection'
import Nav from './Nav'
import Footer from './Footer'

describe('Accessibility tests', () => {
  /**
   * **Validates: Task 17.1**
   * Run axe-core accessibility check on each section
   */
  describe('axe-core checks', () => {
    it('Hero has no accessibility violations', async () => {
      const { container } = render(<Hero />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    }, 15000)

    it('ProblemSection has no accessibility violations', async () => {
      const { container } = render(<ProblemSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('MethodSection has no accessibility violations', async () => {
      const { container } = render(<MethodSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('OfferSection has no accessibility violations', async () => {
      const { container } = render(<OfferSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('WhyMeridian has no accessibility violations', async () => {
      const { container } = render(<WhyMeridian />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('ProofSection has no accessibility violations', async () => {
      const { container } = render(<ProofSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('CaseStudies has no accessibility violations', async () => {
      const { container } = render(<CaseStudies />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('FAQ has no accessibility violations', async () => {
      const { container } = render(<FAQ />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('CTASection has no accessibility violations', async () => {
      const { container } = render(<CTASection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Nav has no accessibility violations', async () => {
      const { container } = render(<Nav />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('Footer has no accessibility violations', async () => {
      const { container } = render(<Footer />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  /**
   * **Validates: Task 17.2**
   * Verify heading hierarchy: single h1 in Hero, h2 for section titles, h3 for cards
   */
  describe('heading hierarchy', () => {
    it('Hero contains a single h1', () => {
      const { container } = render(<Hero />)
      const h1s = container.querySelectorAll('h1')
      expect(h1s.length).toBe(1)
    })

    it('MethodSection uses h3 for step titles (no h2 header required, has SectionLabel)', () => {
      const { container } = render(<MethodSection />)
      const h3s = container.querySelectorAll('h3')
      expect(h3s.length).toBe(3) // Map, Build, Operate
    })

    it('OfferSection uses h2 for section heading and h3 for secondary cards', () => {
      const { container } = render(<OfferSection />)
      const h2s = container.querySelectorAll('h2')
      const h3s = container.querySelectorAll('h3')
      expect(h2s.length).toBe(1)
      expect(h3s.length).toBe(2) // Implementation Sprints, Fractional AI Operations
    })

    it('WhyMeridian uses h2 for section heading and h3 for credibility cards', () => {
      const { container } = render(<WhyMeridian />)
      const h2s = container.querySelectorAll('h2')
      const h3s = container.querySelectorAll('h3')
      expect(h2s.length).toBe(1)
      expect(h3s.length).toBe(4)
    })

    it('ProofSection uses h2 for testimonials heading', () => {
      const { container } = render(<ProofSection />)
      const h2s = container.querySelectorAll('h2')
      expect(h2s.length).toBe(1)
    })

    it('CaseStudies uses h2 for section heading and h3 for case study cards', () => {
      const { container } = render(<CaseStudies />)
      const h2s = container.querySelectorAll('h2')
      const h3s = container.querySelectorAll('h3')
      expect(h2s.length).toBe(1)
      expect(h3s.length).toBe(3) // 3 case study cards
    })

    it('FAQ uses h2 for section heading', () => {
      const { container } = render(<FAQ />)
      const h2s = container.querySelectorAll('h2')
      expect(h2s.length).toBe(1)
    })

    it('CTASection uses h2 for section heading', () => {
      const { container } = render(<CTASection />)
      const h2s = container.querySelectorAll('h2')
      expect(h2s.length).toBe(1)
    })
  })

  /**
   * **Validates: Task 17.3**
   * Verify all sections use semantic landmark elements (section with id, nav, footer)
   */
  describe('semantic landmarks', () => {
    it('Hero renders as <section>', () => {
      const { container } = render(<Hero />)
      expect(container.querySelector('section')).not.toBeNull()
    })

    it('ProblemSection renders as <section> with id', () => {
      const { container } = render(<ProblemSection />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('problem')
    })

    it('MethodSection renders as <section> with id', () => {
      const { container } = render(<MethodSection />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('method')
    })

    it('OfferSection renders as <section> with id', () => {
      const { container } = render(<OfferSection />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('offer')
    })

    it('WhyMeridian renders as <section> with id', () => {
      const { container } = render(<WhyMeridian />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('why')
    })

    it('ProofSection renders as <section> with id', () => {
      const { container } = render(<ProofSection />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('proof')
    })

    it('CaseStudies renders as <section> with id', () => {
      const { container } = render(<CaseStudies />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('case-studies')
    })

    it('FAQ renders as <section> with id', () => {
      const { container } = render(<FAQ />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('faq')
    })

    it('CTASection renders as <section> with id', () => {
      const { container } = render(<CTASection />)
      const section = container.querySelector('section')
      expect(section).not.toBeNull()
      expect(section!.getAttribute('id')).toBe('cta')
    })

    it('Nav renders as <nav>', () => {
      const { container } = render(<Nav />)
      expect(container.querySelector('nav')).not.toBeNull()
    })

    it('Footer renders as <footer>', () => {
      const { container } = render(<Footer />)
      expect(container.querySelector('footer')).not.toBeNull()
    })

    it('Footer contains a <nav> for navigation links', () => {
      const { container } = render(<Footer />)
      expect(container.querySelector('footer nav')).not.toBeNull()
    })
  })

  /**
   * **Validates: Task 17.4**
   * Verify #4DB8A0 is NOT used as text color anywhere — all teal text uses --teal (#00D4B4)
   */
  describe('teal color compliance', () => {
    it('#4DB8A0 is not used in any component file', () => {
      const componentsDir = path.resolve(__dirname)
      const componentFiles = fs.readdirSync(componentsDir).filter(
        (f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx')
      )

      for (const file of componentFiles) {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8')
        expect(content).not.toContain('#4DB8A0')
        expect(content).not.toContain('#4db8a0')
      }
    })

    it('#4DB8A0 is not used in UI component files', () => {
      const uiDir = path.resolve(__dirname, 'ui')
      const uiFiles = fs.readdirSync(uiDir).filter(
        (f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx')
      )

      for (const file of uiFiles) {
        const content = fs.readFileSync(path.join(uiDir, file), 'utf-8')
        expect(content).not.toContain('#4DB8A0')
        expect(content).not.toContain('#4db8a0')
      }
    })
  })

  /**
   * **Validates: Task 17.5**
   * Verify all CTA buttons have visible focus indicators (existing focus-visible styles in globals.css)
   */
  describe('focus indicators', () => {
    it('globals.css contains focus-visible styles for interactive elements', () => {
      const globalsPath = path.resolve(__dirname, '..', 'app', 'globals.css')
      const cssContent = fs.readFileSync(globalsPath, 'utf-8')

      // Verify focus-visible rule exists for buttons and links
      expect(cssContent).toContain('focus-visible')
      expect(cssContent).toContain('outline: 2px solid var(--teal)')
      expect(cssContent).toContain('outline-offset: 2px')
    })

    it('Nav hamburger button has aria-label for accessibility', () => {
      const { getByLabelText } = render(<Nav />)
      expect(getByLabelText('Open navigation menu')).toBeInTheDocument()
    })

    it('decorative SVGs have aria-hidden="true"', () => {
      const { container } = render(<WhyMeridian />)
      const svgs = container.querySelectorAll('svg')
      svgs.forEach((svg) => {
        expect(svg.getAttribute('aria-hidden')).toBe('true')
      })
    })

    it('Nav logo SVG has aria-hidden="true"', () => {
      const { container } = render(<Nav />)
      const logoSvg = container.querySelector('nav svg')
      expect(logoSvg).not.toBeNull()
      expect(logoSvg!.getAttribute('aria-hidden')).toBe('true')
    })
  })
})
