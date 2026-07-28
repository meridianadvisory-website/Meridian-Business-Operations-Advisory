import { Briefcase, Clock, Award, Crosshair } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import { SECTION_IDS } from '@/lib/constants'

const credibilityCards = [
  {
    Icon: Clock,
    title: "25+ years enterprise IT",
    description:
      "Deep roots in enterprise IT and large-scale transformation programs.",
  },
  {
    Icon: Briefcase,
    title: "15+ years in enterprise operations",
    description:
      "Battle-tested in large-scale, high-stakes operational environments.",
  },
  {
    Icon: Award,
    title: "PMP + CSM + AWS certified",
    description:
      "Credentials that back up the discipline — project management, agile delivery, and cloud infrastructure.",
  },
  {
    Icon: Crosshair,
    title: "Tool-agnostic, outcome-obsessed",
    description:
      "We don't sell tools or platforms. We find what moves your numbers and prove it works.",
  },
]

export default function WhyMeridian() {
  return (
    <section
      id={SECTION_IDS.why}
      style={{
        padding: '4.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, rgba(15,30,56,0.4) 0%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="why-meridian-layout">
          {/* Left column — narrative copy */}
          <div className="why-meridian-left">
            <FadeIn>
              <SectionLabel>Why Meridian</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 style={{ color: 'var(--white)', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Operations specialists first. AI specialists second.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                style={{
                  color: 'var(--gray)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  maxWidth: '42ch',
                }}
              >
                We don&apos;t sell tools or platforms. We find where AI moves your P&amp;L and prove it before you spend. You get enterprise-grade discipline — 25+ years in enterprise IT and transformation, with PMP, CSM, and AWS credentials — sized for a business your size, not a Fortune 500 budget.
              </p>
            </FadeIn>
          </div>

          {/* Right column — 2×2 credibility cards */}
          <div className="why-meridian-right">
            <div className="why-meridian-grid">
              {credibilityCards.map(({ Icon, title, description }, index) => (
                <FadeIn key={title} delay={index * 0.1}>
                  <div className="why-meridian-card">
                    <Icon
                      size={24}
                      aria-hidden="true"
                      style={{ color: 'var(--teal)', flexShrink: 0 }}
                    />
                    <h3 style={{ color: 'var(--white)', margin: '0.75rem 0 0.5rem' }}>
                      {title}
                    </h3>
                    <p style={{ color: 'var(--gray)', margin: 0, fontSize: '0.875rem', lineHeight: 1.65 }}>
                      {description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-meridian-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .why-meridian-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .why-meridian-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
        }

        @media (min-width: 768px) {
          .why-meridian-layout {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .why-meridian-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 767px) {
          .why-meridian-layout {
            grid-template-columns: 1fr;
          }

          .why-meridian-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
