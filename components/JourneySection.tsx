import SectionLabel from './ui/SectionLabel'
import FadeIn from './ui/FadeIn'
import Button from './ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

const journeySteps = [
  {
    number: "01",
    title: "Free Operations Assessment",
    description: "60 minutes. We map your current operations, identify your biggest bottlenecks, and show you exactly where revenue is leaking. You leave with a clear picture — whether you work with us or not.",
    hasCTA: true,
    isDimmed: false,
  },
  {
    number: "02",
    title: "Operations Audit",
    description: "A deep-dive into your systems, workflows, and team capacity. We quantify the cost of every broken process and deliver a prioritized roadmap. The audit pays for itself in what you stop wasting.",
    hasCTA: false,
    isDimmed: false,
  },
  {
    number: "03",
    title: "NEXUS Deployment",
    description: "We build and configure your NEXUS platform in 30 days. Day 1: discovery call. Days 2\u20135: system design. Days 6\u201325: build and integrate. Days 26\u201330: launch with full team training. Most clients see ROI within 30 days of going live.",
    hasCTA: false,
    isDimmed: false,
  },
  {
    number: "04",
    title: "Fractional COO (For Scaling Clients)",
    description: "For existing NEXUS clients ready to scale — ongoing strategic oversight, quarterly planning, and continuous system improvement. This is where the relationship grows, not where it starts.",
    hasCTA: false,
    isDimmed: true,
  },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '1rem' }}>
          <SectionLabel>How We Work Together</SectionLabel>
        </div>
        <h2 style={{ color: 'var(--white)', marginBottom: '3.5rem' }}>
          One clear path. Four steps forward.
        </h2>

        {/* Vertical timeline */}
        <div className="journey-timeline">
          {journeySteps.map((step, index) => {
            const isConnected = index < 3 // steps 01, 02, 03 (indices 0, 1, 2)
            const isLast = index === journeySteps.length - 1

            return (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div
                  className="journey-step"
                  style={{
                    opacity: step.isDimmed ? 0.5 : 1,
                    display: 'flex',
                    gap: '1.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Left column: number circle + connecting line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {/* Step number circle */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid var(--teal)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-dm-mono)',
                        fontWeight: 400,
                        fontSize: '0.75rem',
                        color: 'var(--teal)',
                        flexShrink: 0,
                        background: 'var(--navy)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Vertical connecting line (only between steps 01–03) */}
                    {isConnected && (
                      <div
                        style={{
                          width: '2px',
                          flexGrow: 1,
                          minHeight: '2rem',
                          background: 'var(--teal-border)',
                          marginTop: '0',
                        }}
                      />
                    )}
                  </div>

                  {/* Right column: step content */}
                  <div
                    style={{
                      paddingBottom: isLast ? '0' : '2.5rem',
                      paddingTop: '0.25rem',
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: 'var(--white)',
                        margin: '0 0 0.75rem 0',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--gray)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* CTA for step 01 */}
                    {step.hasCTA && (
                      <div style={{ marginTop: '1.25rem' }}>
                        <Button variant="primary" href={CALENDLY_URL}>
                          Get Your Free Operations Map
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>

      <style>{`
        .journey-timeline {
          display: flex;
          flex-direction: column;
        }
        .journey-step {
          align-items: flex-start;
        }
      `}</style>
    </section>
  )
}
