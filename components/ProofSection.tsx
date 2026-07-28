import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import { SECTION_IDS } from '@/lib/constants'
import { proofMetrics, testimonials } from '@/lib/content'

export default function ProofSection() {
  return (
    <section
      id={SECTION_IDS.proof}
      style={{
        padding: '4.5rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <SectionLabel>Proof</SectionLabel>
          </div>
        </FadeIn>

        {/* Metrics Strip */}
        <FadeIn delay={0.1}>
          <div className="proof-metrics-strip">
            {proofMetrics.map((metric, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--teal)',
                    lineHeight: 1.4,
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {metric.value}
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--gray)',
                    lineHeight: 1.4,
                  }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div style={{ marginTop: '3rem' }}>
          <FadeIn delay={0.2}>
            <h2
              style={{
                color: 'var(--white)',
                fontSize: '1.75rem',
                fontWeight: 700,
                margin: '0 0 2rem 0',
              }}
            >
              What clients say
            </h2>
          </FadeIn>

          <div className="proof-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <div
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--gray)',
                      fontSize: '1.0625rem',
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: 'italic',
                      flex: 1,
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p
                      style={{
                        color: 'var(--white)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        margin: '0 0 0.25rem 0',
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        color: 'var(--gray)',
                        fontSize: '0.8125rem',
                        margin: 0,
                        opacity: 0.85,
                      }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .proof-metrics-strip {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .proof-testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .proof-metrics-strip {
            grid-template-columns: repeat(4, 1fr);
          }
          .proof-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
