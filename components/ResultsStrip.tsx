import FadeIn from './ui/FadeIn'

const stats = [
  { value: "$30K+", label: "Revenue Recovered" },
  { value: "$1,600", label: "Capacity Unlocked/Week" },
  { value: "3 min", label: "Lead Response" },
  { value: "30 days", label: "To Positive ROI" },
]

export default function ResultsStrip() {
  return (
    <section
      style={{
        background: 'var(--navy-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p
        style={{
          textAlign: 'center',
          color: 'var(--gray)',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          maxWidth: '1200px',
          margin: '0 auto 2rem',
        }}
      >
        Results across our first 12 client engagements
      </p>
      <div
        className="results-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
      >
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.1}>
            <div
              className={`results-stat${index < stats.length - 1 ? ' results-stat--divider' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem 2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 500,
                  fontSize: '2.25rem',
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 400,
                  fontSize: '0.85rem',
                  color: 'var(--gray)',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .results-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .results-stat--divider {
            border-right: 1px solid var(--border);
          }
        }
        @media (min-width: 768px) and (max-width: 899px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .results-stat--divider:nth-child(odd) {
            border-right: 1px solid var(--border);
          }
          .results-stat--divider:nth-child(even) {
            border-right: none;
          }
        }
        @media (max-width: 767px) {
          .results-grid {
            grid-template-columns: 1fr !important;
          }
          .results-stat--divider {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
    </section>
  )
}
