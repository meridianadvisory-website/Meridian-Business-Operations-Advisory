"use client"

import { useState } from 'react'
import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import Button from './ui/Button'
import ValueMapGraphic from './ValueMapGraphic'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

const features = [
  '2–3 weeks',
  'process mapping',
  'opportunity scoring',
  'per-opportunity ROI estimates',
  'compliance/risk flags',
  '12-month roadmap',
  'executive readout',
]

const guaranteeTerms = [
  '\u201CValue\u201D means the total estimated annual savings or revenue identified across all scored opportunities in your AI Value Map report',
  'Value is measured by Meridian\u2019s opportunity-scoring methodology during the diagnostic, validated against your reported operational data',
  'The 3\u00D7 guarantee is evaluated at delivery of the final AI Value Map report',
  '\u201CYou don\u2019t pay\u201D means a full refund of the diagnostic fee \u2014 no partial credits, no conditions beyond the 3\u00D7 threshold',
  'The 60-day implementation credit applies the full diagnostic fee toward any Build engagement signed within 60 calendar days of report delivery',
]

const secondaryCards = [
  {
    title: 'Implementation Sprints',
    description:
      'Fixed scope, measurable outcome. We build AI into your existing systems.',
  },
  {
    title: 'Fractional AI Operations',
    description:
      'We train your team, monitor what\u2019s working, and refine until it runs without us.',
  },
]

export default function OfferSection() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <section
      id={SECTION_IDS.offer}
      style={{
        padding: '4.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(0,212,180,0.05) 0%, transparent 60%), linear-gradient(180deg, var(--navy-3) 0%, var(--navy) 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <SectionLabel>Our flagship offer</SectionLabel>
          </div>
        </FadeIn>

        {/* Primary Offer Card */}
        <FadeIn delay={0.1}>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '2px solid var(--teal)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 40px rgba(0,212,180,0.08)',
            }}
          >
            <div className="offer-card-layout">
              {/* Left: Copy */}
              <div>
                <h2
                  style={{
                    color: 'var(--white)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    margin: '0 0 1.25rem 0',
                    lineHeight: 1.2,
                  }}
                >
                  Start with the AI Value Map
                </h2>

                <p
                  style={{
                    color: 'var(--gray)',
                    fontSize: '1.125rem',
                    lineHeight: 1.7,
                    margin: '0 0 2rem 0',
                    maxWidth: '720px',
                  }}
                >
                  A fixed-price diagnostic that shows you exactly where AI creates
                  return in your business — and what&apos;s not worth touching. In 2–3
                  weeks you get a prioritized, ROI-backed roadmap you can act on with
                  or without us.
                </p>

                {/* Feature tags */}
                <div className="offer-features" style={{ marginBottom: '2.5rem' }}>
                  {features.map((feature) => (
                    <span
                      key={feature}
                      style={{
                        display: 'inline-block',
                        background: 'rgba(0, 212, 180, 0.08)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.75rem',
                        fontSize: '0.875rem',
                        color: 'var(--gray)',
                        fontFamily: 'var(--font-dm-mono)',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Guarantee */}
                <div
                  style={{
                    background: 'rgba(0, 212, 180, 0.06)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.5rem 2rem',
                    marginBottom: '2rem',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--teal)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      margin: '0 0 0.75rem 0',
                      lineHeight: 1.4,
                    }}
                  >
                    We identify at least 3× the fee in annual value — or you don&apos;t
                    pay.
                  </p>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Proceed to implementation within 60 days and the full fee is
                    credited toward it.
                  </p>
                </div>

                {/* Guarantee Terms Disclosure */}
                <div style={{ marginBottom: '2rem' }}>
                  <button
                    onClick={() => setShowTerms(!showTerms)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--gray)',
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      padding: '0.5rem 0',
                      minHeight: '44px',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                    aria-expanded={showTerms}
                  >
                    {showTerms ? 'Hide guarantee terms' : 'View guarantee terms'}
                  </button>

                  {showTerms && (
                    <ul
                      style={{
                        marginTop: '1rem',
                        paddingLeft: '1.25rem',
                        listStyle: 'disc',
                      }}
                    >
                      {guaranteeTerms.map((term, i) => (
                        <li
                          key={i}
                          style={{
                            color: 'var(--gray)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.6,
                            marginBottom: '0.5rem',
                            opacity: 0.85,
                          }}
                        >
                          {term}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA */}
                <div
                  onClick={() => trackCTA('offer-section')}
                  data-cta-source="offer-section"
                  style={{ display: 'inline-block' }}
                >
                  <Button variant="primary" href={CALENDLY_URL} className="offer-cta-btn">
                    Book Your AI Value Map
                  </Button>
                  <p style={{ color: 'var(--gray-2)', fontSize: '0.7rem', marginTop: '0.4rem', textAlign: 'center' }}>
                    30-min call · no pitch · no obligation
                  </p>
                </div>
              </div>

              {/* Right: Graphic */}
              <div className="offer-graphic">
                <ValueMapGraphic />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Secondary Cards */}
        <div className="offer-secondary-grid">
          {secondaryCards.map((card, index) => (
            <FadeIn key={card.title} delay={0.2 + index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <h3
                  style={{
                    color: 'var(--white)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: 'var(--gray)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .offer-card-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .offer-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 900px) {
          .offer-card-layout {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
          }
        }
        @media (max-width: 899px) {
          .offer-graphic {
            order: -1;
          }
        }
        .offer-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .offer-secondary-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .offer-secondary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .offer-cta-btn {
          min-height: 44px;
          min-width: 44px;
        }
      `}</style>
    </section>
  )
}
