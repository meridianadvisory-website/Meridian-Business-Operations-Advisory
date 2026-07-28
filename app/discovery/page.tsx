'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

// Replace this with your actual Stripe Payment Link once created
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/YOUR_LINK_HERE'
const BOOKING_HREF = 'https://calendly.com/meridian_assessment/15min'

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen bg-ivory font-inter">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Logo + context link */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/assets/meridian-logo-full.svg" alt="Meridian" className="h-8" />
          </Link>
          <Link href="/" className="text-xs font-medium text-slate hover:text-navy transition">
            Learn about Meridian &rarr;
          </Link>
        </div>

        {/* Header */}
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Next Step</p>
        <h1 className="font-manrope text-[2rem] font-bold text-navy leading-tight md:text-[2.5rem]">
          Executive Operations Discovery
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal max-w-2xl">
          Thank you for the introductory conversation. This is the next step in understanding your business at a deeper level.
        </p>

        {/* What's Included */}
        <div className="mt-10 rounded-lg border border-gray-200 bg-white p-8">
          <h2 className="font-manrope text-lg font-bold text-navy mb-4">What&rsquo;s Included</h2>
          <div className="space-y-3">
            {[
              'Focused leadership conversation (60\u201390 minutes)',
              'Review of current operational structure and priorities',
              'Identification of key friction points and constraints',
              'Preliminary opportunity assessment',
              'Written summary of findings and recommended next steps',
              'Determination of whether a full ALIGN\u2122 Assessment is appropriate',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Investment */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-lightgray p-8 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate mb-2">Investment</p>
          <p className="font-manrope text-4xl font-extrabold text-navy">$997</p>
          <p className="mt-2 text-sm text-charcoal">One-time. No recurring commitment.</p>
          <p className="mt-1 text-xs text-charcoal">Fee credited 100% toward a full ALIGN&trade; Assessment if you proceed within 60 days.</p>
        </div>

        {/* Guarantee */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-navy">100% Satisfaction Guarantee</p>
          <p className="text-xs text-charcoal mt-1">If the Discovery session does not provide meaningful insight into your operational priorities, we will refund your investment in full.</p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={STRIPE_PAYMENT_LINK}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-8 py-4 text-base font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all"
          >
            Proceed to Payment <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-slate">Secure payment processed by Stripe.</p>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="font-manrope text-lg font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What if we decide not to proceed to the full ALIGN\u2122 Assessment?',
                a: 'That\u2019s perfectly fine. The Discovery session is valuable on its own \u2014 you\u2019ll receive a written summary of findings and recommendations regardless of whether you continue with Meridian.',
              },
              {
                q: 'What does the $997 not include?',
                a: 'It does not include process mapping, workflow redesign, technology recommendations, or implementation. Those are part of the full ALIGN\u2122 Assessment and subsequent engagements.',
              },
              {
                q: 'How should I prepare?',
                a: 'After payment, you\u2019ll receive a brief preparation guide. Generally, come prepared to discuss your top 2\u20133 operational challenges and what you\u2019ve already tried.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Yes. If the session does not provide meaningful insight, we will refund your investment in full. No questions, no conditions.',
              },
            ].map((item) => (
              <div key={item.q}>
                <p className="text-sm font-semibold text-navy">{item.q}</p>
                <p className="mt-1 text-sm text-charcoal leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens Next */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="font-manrope text-sm font-bold text-navy mb-4">After Payment</h3>
          <div className="space-y-2 text-sm text-charcoal">
            <p>1. You&rsquo;ll receive a confirmation email with scheduling instructions.</p>
            <p>2. We&rsquo;ll schedule your Executive Operations Discovery session.</p>
            <p>3. You&rsquo;ll receive a brief preparation guide before the session.</p>
            <p>4. Within 5 business days of the session, you&rsquo;ll receive a written summary with findings and recommendations.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs text-charcoal">Questions before proceeding?</p>
              <div className="flex gap-4 mt-1">
                <a href="mailto:kevin@meridiansolutions.com" className="text-xs font-medium text-navy hover:text-gold transition">Email Kevin</a>
                <a href={BOOKING_HREF} className="text-xs font-medium text-navy hover:text-gold transition">Schedule a quick call</a>
              </div>
            </div>
            <p className="text-xs text-slate">Meridian Business Operations Advisory<br />Business First. AI Enabled.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
