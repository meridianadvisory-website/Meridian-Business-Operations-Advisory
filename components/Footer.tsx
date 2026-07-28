"use client"

import Button from './ui/Button'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1 }}>
      {/* CTA strip */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Know where your hours are going. Know what they cost.
        </p>
        <Button
          variant="primary"
          href={CALENDLY_URL}
          data-cta-source="footer-cta"
          onClick={() => trackCTA('footer-cta')}
        >
          Book a Free 20-Minute Call
        </Button>
      </div>

      {/* Footer content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}
        className="footer-grid"
      >
        {/* Logo and tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <polygon points="16,2 30,28 2,28" stroke="var(--teal)" strokeWidth="2" fill="none" />
              <polygon points="16,10 24,26 8,26" stroke="var(--teal)" strokeWidth="1" fill="rgba(0,212,180,0.08)" />
            </svg>
            <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '1rem', color: 'var(--white)' }}>
              Meridian
            </span>
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '300px' }}>
            We find where your hours go, price them, and fix the expensive ones. No new headcount.
          </p>
          <p style={{ color: 'var(--gray-2)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
            Atlanta, GA · <a href="mailto:kevin@meridiansolutions.com" style={{ color: 'var(--gray-2)', textDecoration: 'none' }}>kevin@meridiansolutions.com</a>
          </p>
        </div>

        {/* Section nav links */}
        <div>
          <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem' }}>Navigate</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href={`#${SECTION_IDS.method}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem' }}>How It Works</a>
            <a href={`#${SECTION_IDS.offer}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem' }}>The Diagnostic</a>
            <a href={`#${SECTION_IDS.why}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem' }}>Why Meridian</a>
            <a href={`#${SECTION_IDS.faq}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem' }}>FAQ</a>
            <a href="/privacy" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy Policy</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--gray-2)', fontSize: '0.75rem', margin: 0 }}>
          &copy; 2026 Meridian Solutions, LLC. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
