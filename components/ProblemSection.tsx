"use client"

import FadeIn from './ui/FadeIn'
import Button from './ui/Button'
import { SECTION_IDS, CALENDLY_URL } from '@/lib/constants'
import { trackCTA } from '@/lib/tracking'

const agitationStatements = [
  "You bought the subscriptions. Your team tried ChatGPT. Maybe you even stood up a chatbot.",
  "Months later, the tools mostly sit idle. The pilot never scaled. And no one can point to a dollar it earned.",
  "You\u2019re not behind. You\u2019re stuck exactly where most businesses get stuck \u2014 spending on AI with no map of where it actually creates value.",
  "That\u2019s the gap Meridian closes. Stop paying to experiment. Start paying for results.",
]

export default function ProblemSection() {
  return (
    <section
      id={SECTION_IDS.problem}
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Agitation statements grid */}
        <div className="problem-grid" style={{ marginBottom: '3rem' }}>
          {agitationStatements.map((statement, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <p
                  style={{
                    color: 'var(--white)',
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {statement}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div
            style={{
              textAlign: 'center',
              padding: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <div
              onClick={() => trackCTA('problem-section')}
              data-cta-source="problem-section"
              style={{ display: 'inline-block' }}
            >
              <Button variant="primary" href={CALENDLY_URL}>
                Book Your AI Value Map
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .problem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
