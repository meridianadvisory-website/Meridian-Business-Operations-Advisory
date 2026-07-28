import FadeIn from './ui/FadeIn'
import Button from './ui/Button'

export default function CaseStudy() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <FadeIn>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-2)',
              borderRadius: '16px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--teal), var(--teal-dim))',
              }}
            />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--navy-3)',
                  border: '1px solid var(--border-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--teal)',
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                SM
              </div>
              <div>
                <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>
                  Sarah M. — Apex Home Services
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '0.78rem', margin: 0 }}>
                  12 employees, $1.8M revenue
                </p>
              </div>
            </div>

            {/* Problem / Solution / Result */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p
                  style={{
                    color: 'var(--amber)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  The Problem
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  Leads were coming in from 4 different sources — website, referrals, Google Ads, and Yelp — but nobody owned follow-up. Average response time was 11 hours. Sarah estimated she was losing 2-3 jobs per week to competitors who responded faster.
                </p>
              </div>

              <div>
                <p
                  style={{
                    color: 'var(--teal)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  The Solution
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  NEXUS Module 01 (Lead Intelligence) unified all lead sources into one pipeline, auto-scored leads by job value, and triggered instant follow-up sequences. Response time dropped from 11 hours to under 3 minutes — without adding headcount.
                </p>
              </div>

              <div>
                <p
                  style={{
                    color: 'var(--white)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  The Result
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--teal)' }}>$28K</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gray)' }}>Revenue recovered</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--teal)' }}>3 min</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gray)' }}>Avg response time</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--teal)' }}>22 days</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gray)' }}>Time to ROI</div>
                  </div>
                </div>
                <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                  &ldquo;The lead follow-up system alone paid for everything. We didn&apos;t even know we were losing that revenue.&rdquo;
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '2rem' }}>
              <Button variant="ghost" href="/case-study/apex-home-services">
                Read Full Case Study
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
