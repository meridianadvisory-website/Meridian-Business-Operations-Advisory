import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'

interface NexusModule {
  number: string
  name: string
  tags: string[]
  outcomes: string[]
  roiBadge?: string
}

export const nexusModules: NexusModule[] = [
  {
    number: "01",
    name: "Lead Intelligence",
    tags: ["CRM Automation", "Follow-up Sequences", "Pipeline Visibility"],
    outcomes: [
      "Stop losing deals to slow response — 3-minute average lead follow-up",
      "Zero leads fall through the cracks, ever",
      "Full pipeline visibility so you know exactly where revenue stands",
    ],
    roiBadge: "Avg. $30K+ recovered in year one",
  },
  {
    number: "02",
    name: "Operations Hub",
    tags: ["Capacity Planning", "Team Performance", "Real-time Dashboards"],
    outcomes: [
      "Remove yourself from every repetitive process",
      "Live dashboard — know where everything stands in 5 minutes",
      "Bottlenecks identified and resolved in 48 hours",
    ],
    roiBadge: "$1,600/week in capacity unlocked",
  },
  {
    number: "03",
    name: "Client Success Engine",
    tags: ["Onboarding Automation", "Milestone Tracking", "Churn Prevention"],
    outcomes: [
      "Every client gets the same excellent onboarding — automatically",
      "Milestone check-ins happen without you remembering",
      "Churn signals surfaced before the client is already gone",
    ],
  },
  {
    number: "04",
    name: "Knowledge Architecture",
    tags: ["SOPs", "Process Documentation", "Team Enablement"],
    outcomes: [
      "Critical knowledge captured so it doesn't walk out the door",
      "New hire ramp time cut by 60%",
      "Business runs without you in the room",
    ],
  },
]

export default function NexusModules() {
  return (
    <section
      id="nexus"
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <FadeIn>
          <SectionLabel>The Solution</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem', marginBottom: '3rem' }}>
            NEXUS — AI Operations Intelligence Platform
          </h2>
        </FadeIn>

        {/* Module cards grid */}
        <div className="nexus-grid">
          {nexusModules.map((module, index) => (
            <FadeIn key={module.number} delay={index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Module number */}
                <div
                  className="text-mono-medium"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--teal-dim)',
                    lineHeight: 1,
                  }}
                >
                  {module.number}
                </div>

                {/* Module name */}
                <h3 style={{ color: 'var(--white)', margin: 0 }}>{module.name}</h3>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {module.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(0,212,180,0.08)',
                        border: '1px solid var(--teal-border)',
                        borderRadius: '20px',
                        padding: '0.2rem 0.6rem',
                        color: 'var(--teal)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-sora), sans-serif',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Outcomes list */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    flex: 1,
                  }}
                >
                  {module.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        color: 'var(--gray)',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: 'var(--teal)',
                          flexShrink: 0,
                          marginTop: '0.1rem',
                          fontSize: '0.9rem',
                        }}
                      >
                        &#10003;
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* ROI badge — only for modules 01 and 02 */}
                {module.roiBadge && (
                  <div
                    className="text-mono"
                    style={{
                      background: 'var(--teal-glow)',
                      border: '1px solid var(--teal-border)',
                      borderRadius: '8px',
                      padding: '0.4rem 0.75rem',
                      color: 'var(--teal)',
                      fontSize: '0.78rem',
                      marginTop: 'auto',
                    }}
                  >
                    {module.roiBadge}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .nexus-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .nexus-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
