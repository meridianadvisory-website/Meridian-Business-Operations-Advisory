"use client"

import { useState } from 'react'
import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section
        style={{
          padding: '4rem 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--teal-border)',
                borderRadius: '16px',
                padding: '3rem 2rem',
              }}
            >
              <p style={{ color: 'var(--teal)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                ✓ Check your inbox
              </p>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                Your guide is on the way to {email}. Look for it in the next few minutes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section
      style={{
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <FadeIn>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <SectionLabel>Free resource</SectionLabel>
            <h2 style={{ color: 'var(--white)', marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
              Not ready to talk yet?
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Get our guide: <strong style={{ color: 'var(--white)' }}>The 7 operational costs professional service firms overlook</strong> — free, no call required.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--navy-2)',
                  color: 'var(--white)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  opacity: loading ? 0.6 : 1,
                }}
                aria-label="First name"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                required
                disabled={loading}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${error ? 'rgba(255,100,100,0.5)' : 'var(--border)'}`,
                  background: 'var(--navy-2)',
                  color: 'var(--white)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  opacity: loading ? 0.6 : 1,
                }}
                aria-label="Work email"
                aria-invalid={!!error}
              />
              {error && (
                <p style={{ color: '#ff6b6b', fontSize: '0.8rem', margin: 0, textAlign: 'left' }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--teal-border)',
                  background: 'transparent',
                  color: 'var(--teal)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: loading ? 'wait' : 'pointer',
                  minHeight: '44px',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease',
                  opacity: loading ? 0.7 : 1,
                }}
                className="lead-capture-btn"
              >
                {loading ? 'Sending…' : 'Send Me the Guide'}
              </button>
            </form>

            <p style={{ color: 'var(--gray-2)', fontSize: '0.7rem', marginTop: '1rem' }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .lead-capture-btn:hover:not(:disabled) {
          background: rgba(0,212,180,0.08) !important;
          box-shadow: 0 4px 16px rgba(0,212,180,0.15);
          transform: translateY(-1px);
        }
        @media (prefers-reduced-motion: reduce) {
          .lead-capture-btn:hover:not(:disabled) {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
