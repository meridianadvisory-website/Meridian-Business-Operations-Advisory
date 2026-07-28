'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const BOOKING_HREF = 'https://calendly.com/meridian_assessment/15min'

export default function ExecutiveOverviewPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    employees: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/executive-overview-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch { /* silent */ }
    setSubmitted(true)
    setLoading(false)
  }

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  if (submitted) {
    return (
      <main className="min-h-screen bg-ivory font-inter flex items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center">
          <CheckCircle className="h-12 w-12 text-gold mx-auto mb-6" />
          <h1 className="font-manrope text-2xl font-bold text-navy md:text-3xl">Your Executive Briefing is on the way.</h1>
          <p className="mt-4 text-base text-slate">Check your inbox. We&rsquo;ve also included a direct download below.</p>
          <div className="mt-8 flex flex-col gap-4 items-center">
            <a href="/assets/meridian-executive-briefing.html" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
              Download Executive Briefing <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/operational-health-assessment" className="text-sm font-medium text-navy hover:text-gold transition">
              Take the Operational Health Scorecard &rarr;
            </Link>
            <Link href={BOOKING_HREF} className="text-sm font-medium text-slate hover:text-navy transition">
              Or Schedule an Executive Introduction directly
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-ivory font-inter">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          {/* Left: Value prop */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-sm text-slate hover:text-navy transition mb-8"><span>&larr;</span><img src="/assets/meridian-logo-full.svg" alt="Meridian" className="h-8" /></Link>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Executive Resource</p>
            <h1 className="font-manrope text-[2rem] font-bold text-navy leading-tight md:text-[2.5rem]">
              A Clearer Way to Improve Operations and Evaluate AI
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Download the Meridian Executive Briefing to learn how growing service businesses can identify operational bottlenecks, prioritize high-value improvements, and apply AI with greater confidence.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Who Meridian is and how we help',
                'The ALIGN\u2122 Framework explained',
                'Three engagement paths and what you receive',
                'How better operations create measurable business value',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-slate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h2 className="font-manrope text-lg font-bold text-navy mb-1">Send Me the Executive Briefing</h2>
            <p className="text-xs text-slate mb-6">We&rsquo;ll email the PDF and include a direct download link.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">First name *</label>
                  <input required value={form.firstName} onChange={e => update('firstName', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">Last name *</label>
                  <input required value={form.lastName} onChange={e => update('lastName', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-charcoal mb-1">Business email *</label>
                <input required type="email" value={form.email} onChange={e => update('email', e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-charcoal mb-1">Company *</label>
                <input required value={form.company} onChange={e => update('company', e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-charcoal mb-1">Job title *</label>
                <input required value={form.role} onChange={e => update('role', e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">Industry</label>
                  <select value={form.industry} onChange={e => update('industry', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30">
                    <option value="">Select...</option>
                    <option>Healthcare</option>
                    <option>Property Management</option>
                    <option>Professional Services</option>
                    <option>Home Services</option>
                    <option>Transportation &amp; Logistics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">Employees</label>
                  <select value={form.employees} onChange={e => update('employees', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30">
                    <option value="">Select...</option>
                    <option>1-19</option>
                    <option>20-50</option>
                    <option>51-100</option>
                    <option>101-150</option>
                    <option>150+</option>
                  </select>
                </div>
              </div>
              <button type="submit" disabled={loading}
                className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Me the Executive Briefing'}
              </button>
              <p className="text-[11px] text-slate/60 text-center">
                Your information is used to send the requested resource and relevant follow-up. No spam. No sale of personal information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
