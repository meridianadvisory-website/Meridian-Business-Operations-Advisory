"use client"

import Button from './ui/Button'
import FadeIn from './ui/FadeIn'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 2rem 60px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <FadeIn>
          <div style={{ maxWidth: '720px' }}>
            <p style={{ color: 'var(--teal)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              For firms of 10–75 running on spreadsheets, email, and one person&apos;s memory
            </p>
            <h1 style={{ color: 'var(--white)', marginBottom: '1.5rem', textWrap: 'balance' }}>
              Your most expensive people are doing your cheapest work.
            </h1>
            <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '620px' }}>
              Re-keying client data. Chasing status. Rebuilding the same report every month. We find every hour of it, show you what it cost in unbilled revenue, and take the biggest pieces off your team&apos;s plate. No new headcount.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
              <div
                onClick={() => trackCTA('hero-primary')}
                data-cta-source="hero-primary"
              >
                <Button variant="primary" href={CALENDLY_URL}>
                  Book Your AI Value Map
                </Button>
                <p style={{ color: 'var(--gray-2)', fontSize: '0.7rem', marginTop: '0.4rem', textAlign: 'center' }}>
                  30-min call · no pitch · no obligation
                </p>
              </div>
              <a
                href={`#${SECTION_IDS.method}`}
                style={{
                  color: 'var(--teal)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--teal)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
              >
                See how it works ↓
              </a>
            </div>

            {/* Guarantee badge — links to offer section */}
            <div style={{ marginBottom: '2rem' }}>
              <a
                href={`#${SECTION_IDS.offer}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(0,212,180,0.1)',
                  border: '1px solid var(--teal-border)',
                  borderRadius: '8px',
                  padding: '0.6rem 1rem',
                  fontSize: '0.85rem',
                  color: 'var(--teal)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
              >
                ✓ 3× the fee in value — or you don&apos;t pay
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <p style={{ color: 'var(--gray)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                Trusted by owner-operated businesses across home services, healthcare, legal, financial services, and real estate — 10 to 100 employees, $2M–$50M revenue.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <path d="M8 4L8 20M8 20L14 14M8 20L2 14" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
