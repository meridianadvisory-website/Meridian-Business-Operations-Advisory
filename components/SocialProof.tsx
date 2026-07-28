import SectionLabel from './ui/SectionLabel'
import FadeIn from './ui/FadeIn'

const testimonials = [
  {
    quote: "Within 30 days of working with Meridian, we recovered $28K in revenue we didn't even know we were losing. The lead follow-up system alone paid for everything.",
    author: "Sarah M.",
    role: "Owner, Apex Home Services",
    result: "$28K recovered in 30 days",
    initials: "SM",
  },
  {
    quote: "I used to spend 3 hours every Monday morning just trying to figure out where everything stood. Now I open the dashboard and I know in 5 minutes. It's changed how I run the business.",
    author: "James T.",
    role: "Founder, Clearwater Consulting",
    result: "3 hrs/week saved on reporting",
    initials: "JT",
  },
  {
    quote: "We were losing clients in month two because onboarding was chaos. NEXUS automated the entire process — now every client gets the same great experience and our retention is up 40%.",
    author: "Marcus R.",
    role: "CEO, Pinnacle Property Management",
    result: "40% improvement in client retention",
    initials: "MR",
  },
]

const trustedLogos = [
  "Apex Home Services",
  "Clearwater Consulting",
  "Pinnacle Property Mgmt",
  "Redline Electrical",
  "Summit HR Solutions",
  "Coastal Landscaping Co",
]

export default function SocialProof() {
  return (
    <section
      id="proof"
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
        {/* Section header */}
        <div style={{ marginBottom: '1rem' }}>
          <SectionLabel>Client Results</SectionLabel>
        </div>
        <h2 style={{ color: 'var(--white)', marginBottom: '3rem' }}>
          What changes when the systems actually work.
        </h2>

        {/* Three-column grid */}
        <div className="proof-grid">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  height: '100%',
                }}
              >
                {/* Quote */}
                <div
                  style={{
                    borderLeft: '3px solid var(--teal)',
                    paddingLeft: '1rem',
                    flexGrow: 1,
                  }}
                >
                  <p
                    style={{
                      color: 'var(--white)',
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: '0.95rem',
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author with photo placeholder */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
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
                    {testimonial.initials}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontWeight: 700,
                        color: 'var(--white)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {testimonial.author}
                    </span>
                    <span style={{ color: 'var(--gray)', fontSize: '0.78rem' }}>
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Result badge */}
                <div>
                  <span
                    className="text-mono"
                    style={{
                      display: 'inline-block',
                      background: 'var(--teal-glow)',
                      border: '1px solid var(--teal-border)',
                      borderRadius: '20px',
                      padding: '0.2rem 0.75rem',
                      color: 'var(--teal)',
                      fontSize: '0.78rem',
                    }}
                  >
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Trusted by logo bar */}
        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: 'var(--gray-2)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Trusted by service businesses across the country
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              {trustedLogos.map((name) => (
                <div
                  key={name}
                  style={{
                    padding: '0.6rem 1.25rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--card-bg)',
                    color: 'var(--gray)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .proof-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 900px) {
          .proof-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
