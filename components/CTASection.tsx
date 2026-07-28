"use client"

import FadeIn from './ui/FadeIn'
import Button from './ui/Button'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

export default function CTASection() {
  return (
    <section
      id={SECTION_IDS.cta}
      style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <FadeIn>
          <div
            style={{
              border: '1px solid var(--teal-border)',
              borderRadius: '16px',
              padding: '4rem 3rem',
              textAlign: 'center',
              background: 'radial-gradient(ellipse at center, rgba(0,212,180,0.08) 0%, transparent 70%)',
              position: 'relative',
            }}
          >
            <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
              AI rewards the businesses that move with a plan.
            </h2>
            <p style={{ color: 'var(--gray)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Let&apos;s build yours — starting with a map of exactly where it pays.
            </p>
            <Button
              variant="primary"
              href={CALENDLY_URL}
              onClick={() => trackCTA('closing-cta')}
              data-cta-source="closing-cta"
            >
              Book Your AI Value Map
            </Button>
            <p style={{ color: 'var(--gray-2)', fontSize: '0.7rem', marginTop: '0.4rem' }}>
              30-min call · no pitch · no obligation
            </p>
            <p style={{ color: 'var(--gray-2)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
              We&apos;ll use your info to schedule and prepare for your call. No spam.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
