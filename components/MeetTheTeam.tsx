import SectionLabel from './ui/SectionLabel'
import FadeIn from './ui/FadeIn'

const team = [
  {
    name: "Alex Mercer",
    title: "Founder & Lead Operator",
    initials: "AM",
    blurb: "Built and scaled a 22-person service company before founding Meridian. Knows what breaks at $1M, $3M, and $5M — because he broke it himself first.",
  },
  {
    name: "Jordan Ellis",
    title: "Head of NEXUS Deployments",
    initials: "JE",
    blurb: "Former ops director at a $4M consulting firm. Spent 6 years building the systems that let the founder step back. Now does it in 30 days with NEXUS.",
  },
  {
    name: "Priya Sharma",
    title: "Client Success Lead",
    initials: "PS",
    blurb: "10 years in service business operations. Obsessed with onboarding, retention, and making sure no client ever feels like a number.",
  },
]

export default function MeetTheTeam() {
  return (
    <section
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <SectionLabel>The Team</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem', marginBottom: '1rem' }}>
            Meet the operators behind Meridian
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '560px' }}>
            We&apos;ve been in your seat. We&apos;ve run the businesses, hit the walls, and built the systems that got us through. Now we do it for you.
          </p>
        </FadeIn>

        <div className="team-grid">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  height: '100%',
                }}
              >
                {/* Photo placeholder */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--navy-3)',
                    border: '2px solid var(--teal-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--teal)',
                    fontWeight: 500,
                  }}
                >
                  {member.initials}
                </div>

                {/* Name and title */}
                <div>
                  <h3 style={{ color: 'var(--white)', margin: '0 0 0.25rem' }}>
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: 'var(--teal)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {member.title}
                  </p>
                </div>

                {/* Blurb */}
                <p
                  style={{
                    color: 'var(--gray)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {member.blurb}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
