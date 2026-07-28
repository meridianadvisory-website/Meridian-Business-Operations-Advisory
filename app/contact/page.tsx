﻿'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const BOOKING_HREF = 'https://calendly.com/meridian_assessment/15min'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    employees: '',
    challenge: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
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
          <h1 className="font-manrope text-2xl font-bold text-navy md:text-3xl">Thank you.</h1>
          <p className="mt-4 text-base text-charcoal">We have received your information and will be in touch within one business day.</p>
          <div className="mt-8 flex flex-col gap-4 items-center">
            <Link href={BOOKING_HREF} className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
              Schedule an Executive Introduction <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="text-sm font-medium text-slate hover:text-navy transition">
              Return to Meridian
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-ivory font-inter">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
          {/* Left: Context — sticky so it stays visible alongside long form */}
          <div className="md:sticky md:top-24">
            <Link href="/" aria-label="Back to Meridian homepage" className="inline-flex items-center gap-3 text-sm text-slate hover:text-navy transition mb-8">
              <span aria-hidden="true">&larr;</span>
              <img src="/assets/meridian-logo-full.svg" alt="Meridian Business Operations Advisory" className="h-8" />
            </Link>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Contact</p>
            <h1 className="font-manrope text-[2rem] font-bold text-navy leading-tight md:text-[2.5rem]">
              Start a Conversation
            </h1>
            <p className="mt-6 text-base leading-relaxed text-charcoal">
              Whether you have a specific operational challenge or want to explore whether Meridian is the right fit, we are happy to talk.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Prefer to schedule directly?</p>
                <a href={BOOKING_HREF} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gold hover:text-navy transition">
                  Book an Executive Introduction &rarr;
                </a>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:kevin@meridiansolutions.com" className="text-sm text-charcoal hover:text-navy transition">kevin@meridiansolutions.com</a>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-charcoal">Atlanta, GA</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h2 className="font-manrope text-lg font-bold text-navy mb-1">Send us a message</h2>
            <p className="text-xs text-charcoal mb-4">We typically respond within one business day.</p>
            <p className="text-[10px] text-slate mb-4">* indicates a required field</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-firstName" className="block text-xs font-medium text-charcoal mb-1">First name *</label>
                  <input id="contact-firstName" required value={form.firstName} onChange={e => update('firstName', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
                <div>
                  <label htmlFor="contact-lastName" className="block text-xs font-medium text-charcoal mb-1">Last name *</label>
                  <input id="contact-lastName" required value={form.lastName} onChange={e => update('lastName', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-charcoal mb-1">Business email *</label>
                <input id="contact-email" required type="email" value={form.email} onChange={e => update('email', e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-medium text-charcoal mb-1">Phone</label>
                <input id="contact-phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(555) 123-4567"
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-company" className="block text-xs font-medium text-charcoal mb-1">Company *</label>
                  <input id="contact-company" required value={form.company} onChange={e => update('company', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
                <div>
                  <label htmlFor="contact-role" className="block text-xs font-medium text-charcoal mb-1">Your role *</label>
                  <input id="contact-role" required value={form.role} onChange={e => update('role', e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-employees" className="block text-xs font-medium text-charcoal mb-1">Number of employees</label>
                <select id="contact-employees" value={form.employees} onChange={e => update('employees', e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30">
                  <option value="">Select...</option>
                  <option>1-19</option>
                  <option>20-50</option>
                  <option>51-100</option>
                  <option>101-150</option>
                  <option>150+</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-challenge" className="block text-xs font-medium text-charcoal mb-1">What is your biggest operational challenge?</label>
                <textarea id="contact-challenge" value={form.challenge} onChange={e => update('challenge', e.target.value)} rows={3}
                  className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none"
                  placeholder="Optional - helps us prepare for the conversation." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <p className="text-[11px] text-slate text-center">
                Your information is used to respond to your inquiry and provide relevant follow-up. No spam. No sale of personal information. <a href="/privacy" className="underline hover:text-navy transition">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
