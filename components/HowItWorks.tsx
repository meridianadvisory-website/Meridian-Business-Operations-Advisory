import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "60-minute deep dive into your operations, goals, and current bottlenecks.",
    eta: "Day 1",
  },
  {
    number: "02",
    title: "System Design",
    description: "We map your custom NEXUS configuration and integration plan.",
    eta: "Days 2–5",
  },
  {
    number: "03",
    title: "Build & Configure",
    description: "Your NEXUS platform is built, integrated, and tested.",
    eta: "Days 6–25",
  },
  {
    number: "04",
    title: "Launch & Train",
    description: "Go live with full team training and 30-day optimization support.",
    eta: "Days 26–30",
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <FadeIn>
          <SectionLabel>The Process</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem', marginBottom: '3.5rem' }}>
            From conversation to running systems in 30 days.
          </h2>
        </FadeIn>

        {/* Steps grid with connecting line */}
        <div className="how-it-works-steps">
          {/* Connecting line — visible only when grid is horizontal (≥768px) */}
          <div className="how-it-works-line" aria-hidden="true" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="how-it-works-step">
                {/* Step number */}
                <div
                  className="text-mono-medium how-it-works-number"
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3 style={{ color: 'var(--white)', margin: '0.75rem 0 0.5rem' }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--gray)', margin: '0 0 1rem', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {step.description}
                </p>

                {/* ETA badge */}
                <span
                  className="text-mono how-it-works-eta"
                >
                  {step.eta}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-steps {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          position: relative;
        }

        .how-it-works-line {
          display: none;
        }

        .how-it-works-number {
          font-size: 2.5rem;
          color: var(--teal);
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .how-it-works-eta {
          display: inline-block;
          background: var(--teal-glow);
          border: 1px solid var(--teal-border);
          border-radius: 20px;
          padding: 0.2rem 0.75rem;
          color: var(--teal);
          font-size: 0.78rem;
        }

        @media (min-width: 768px) {
          .how-it-works-steps {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            align-items: start;
          }

          .how-it-works-line {
            display: block;
            position: absolute;
            top: 1.25rem;
            left: calc(12.5% + 0.75rem);
            right: calc(12.5% + 0.75rem);
            height: 1px;
            background: linear-gradient(
              to right,
              var(--teal-border),
              var(--teal-border) 33%,
              var(--border-2) 33%,
              var(--border-2) 66%,
              var(--teal-border) 66%
            );
            pointer-events: none;
          }
        }
      `}</style>
    </section>
  )
}
