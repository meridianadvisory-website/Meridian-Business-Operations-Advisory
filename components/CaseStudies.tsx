"use client"

import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import Button from './ui/Button'
import { CALENDLY_URL, SECTION_IDS } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'
import { caseStudies } from '@/lib/content'

export default function CaseStudies() {
  return (
    <section
      id={SECTION_IDS.caseStudies}
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <SectionLabel>Case studies</SectionLabel>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            style={{
              color: 'var(--white)',
              fontSize: '2rem',
              fontWeight: 700,
              margin: '0 0 2.5rem 0',
              lineHeight: 1.2,
            }}
          >
            Real results from real businesses
          </h2>
        </FadeIn>

        {/* Case Study Cards */}
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <FadeIn key={index} delay={0.15 + index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <h3
                  style={{
                    color: 'var(--white)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {study.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--gray)',
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {study.snapshot}
                </p>

                <div>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    Challenge
                  </p>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    What we did
                  </p>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.whatWeDid}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--teal)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    Results
                  </p>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {study.results}
                  </p>
                </div>

                {/* Quote */}
                <div
                  style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1.25rem',
                    marginTop: 'auto',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {study.quote}
                  </p>
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '0.75rem',
                      margin: 0,
                      opacity: 0.7,
                    }}
                  >
                    — {study.attribution}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <div
              onClick={() => trackCTA('case-studies')}
              data-cta-source="case-studies"
              style={{ display: 'inline-block' }}
            >
              <Button variant="primary" href={CALENDLY_URL} className="case-studies-cta-btn">
                Book Your AI Value Map
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .case-studies-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .case-studies-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .case-studies-cta-btn {
          min-height: 44px;
          min-width: 44px;
        }
      `}</style>
    </section>
  )
}
