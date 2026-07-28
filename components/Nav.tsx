"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '72px',
          zIndex: 50,
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          backgroundColor: `rgba(10, 22, 40, ${isScrolled ? 0.95 : 0.7})`,
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          maxWidth: '100vw',
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <polygon points="16,2 30,28 2,28" stroke="var(--teal)" strokeWidth="2" fill="none" />
            <polygon points="16,10 24,26 8,26" stroke="var(--teal)" strokeWidth="1" fill="rgba(0,212,180,0.08)" />
          </svg>
          <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>
            Meridian
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '1.75rem', marginLeft: '2rem' }}>
          <a href={`#${SECTION_IDS.method}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>How It Works</a>
          <a href={`#${SECTION_IDS.offer}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>The Diagnostic</a>
          <a href={`#${SECTION_IDS.why}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Why Meridian</a>
          <a href={`#${SECTION_IDS.faq}`} style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>FAQ</a>
          <Button
            variant="primary"
            href={CALENDLY_URL}
            data-cta-source="nav-cta"
            onClick={() => trackCTA('nav-cta')}
            className="nav-cta-btn"
          >
            Book a Free Call
          </Button>
        </div>

        {/* Hamburger button â€” mobile/tablet */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--white)',
            padding: '10px',
            minHeight: '44px',
            minWidth: '44px',
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'rgba(5, 12, 24, 0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {/* Close button at top-right */}
          <button
            onClick={closeMenu}
            aria-label="Close navigation menu"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--white)',
              padding: '10px',
              minHeight: '44px',
              minWidth: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={24} />
          </button>

          {/* Nav links */}
          <a
            href={`#${SECTION_IDS.method}`}
            onClick={closeMenu}
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'var(--font-sora)',
              fontWeight: 600,
            }}
          >
            How It Works
          </a>
          <a
            href={`#${SECTION_IDS.offer}`}
            onClick={closeMenu}
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'var(--font-sora)',
              fontWeight: 600,
            }}
          >
            The Diagnostic
          </a>
          <a
            href={`#${SECTION_IDS.why}`}
            onClick={closeMenu}
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'var(--font-sora)',
              fontWeight: 600,
            }}
          >
            Why Meridian
          </a>
          <a
            href={`#${SECTION_IDS.faq}`}
            onClick={closeMenu}
            style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'var(--font-sora)',
              fontWeight: 600,
            }}
          >
            FAQ
          </a>
          <div style={{ marginTop: '1rem' }}>
            <Button
              variant="primary"
              href={CALENDLY_URL}
              data-cta-source="nav-cta"
              onClick={() => trackCTA('nav-cta')}
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      )}

      {/* Sticky bottom bar â€” mobile only, appears after scrolling past hero */}
      {isScrolled && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            padding: '0.75rem 1rem',
            background: 'var(--navy-2)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Button
            variant="primary"
            href={CALENDLY_URL}
            data-cta-source="nav-cta"
            onClick={() => trackCTA('nav-cta')}
            className="w-full"
          >
            Book a Free Call
          </Button>
        </div>
      )}

      <style>{`
        .nav-cta-btn {
          white-space: nowrap;
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
        }
      `}</style>
    </>
  )
}
