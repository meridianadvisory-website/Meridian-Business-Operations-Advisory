import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import { SECTION_IDS } from '@/lib/constants'

const steps = [
  {
    number: '01',
    title: 'Map',
    description:
      'We start with how your business actually runs: where time leaks, where work piles up, where errors cost you. The AI Value Map scores every opportunity by return and ranks the few worth pursuing — so you get a clear, ROI-backed roadmap before any build begins.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Once we know what\u2019s worth it, we build it into your existing systems. Fixed scope, measurable outcome, no science projects.',
  },
  {
    number: '03',
    title: 'Operate',
    description:
      'Then we make it stick. We train your team, monitor what\u2019s working, and refine until it runs without us — or stay on as your fractional AI operations partner.',
  },
]

export default function MethodSection() {
  return (
    <section
      id={SECTION_IDS.method}
      style={{
        padding: '4.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(180deg, rgba(12, 61, 92, 0.3) 0%, rgba(12, 61, 92, 0) 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <SectionLabel>How we work</SectionLabel>
          </div>
        </FadeIn>

        <div className="method-grid">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '2.5rem',
                    fontWeight: 500,
                    color: 'var(--teal)',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    color: 'var(--white)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: 'var(--gray)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .method-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .method-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
