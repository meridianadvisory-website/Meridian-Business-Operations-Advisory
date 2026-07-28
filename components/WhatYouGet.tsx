import { FileText, TrendingUp, ListChecks } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import FadeIn from './ui/FadeIn'
import Button from './ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

const deliverables = [
  {
    Icon: FileText,
    title: "Your Revenue Leak Map",
    description: "A clear visual of exactly where money is falling through — missed leads, slow follow-up, broken handoffs, and untracked pipeline. You'll see the dollar cost of every gap.",
  },
  {
    Icon: TrendingUp,
    title: "Capacity Score",
    description: "A number that tells you how much of your team's time is going to repetitive manual work instead of billable revenue. Most owners are shocked — the average is 22% wasted capacity.",
  },
  {
    Icon: ListChecks,
    title: "Priority Roadmap",
    description: "The 3 highest-ROI fixes for your business, ranked by impact and effort. Not a generic playbook — specific to your team, your workflows, and your revenue goals.",
  },
]

export default function WhatYouGet() {
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
          <SectionLabel>The Free Assessment</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{ color: 'var(--white)', marginTop: '1rem', marginBottom: '0.75rem' }}>
            What you walk away with — even if we never work together.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '580px' }}>
            60 minutes. No pitch. You leave with a complete picture of where your operations are costing you revenue and capacity — and a clear plan to fix it.
          </p>
        </FadeIn>

        <div className="wyg-grid">
          {deliverables.map(({ Icon, title, description }, index) => (
            <FadeIn key={title} delay={index * 0.1}>
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(0,212,180,0.08)',
                    border: '1px solid var(--teal-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} aria-hidden="true" style={{ color: 'var(--teal)' }} />
                </div>
                <h3 style={{ color: 'var(--white)', margin: 0 }}>{title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button variant="primary" href={CALENDLY_URL}>
              Get Your Free Operations Map
            </Button>
            <p style={{ color: 'var(--gray-2)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
              60 minutes. Zero obligation. Yours to keep.
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .wyg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .wyg-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
