'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart3, ArrowRight } from 'lucide-react'

interface Inputs {
  revenue: number
  employees: number
  manualHours: number
  missedLeadsPerWeek: number
  clientsLost: number
}

interface Results {
  manualWorkCost: number
  missedRevenue: number
  churnCost: number
  totalCost: number
  topArea: string
}

function calculate(inputs: Inputs): Results {
  // Manual work cost: hours/week * $35 loaded cost * 52 weeks
  const manualWorkCost = inputs.manualHours * 35 * 52

  // Missed revenue: missed leads/week * 20% close rate * avg deal value (revenue / customers estimate)
  const avgDealValue = inputs.revenue / (inputs.employees * 15) // rough proxy
  const missedRevenue = inputs.missedLeadsPerWeek * 0.2 * Math.max(avgDealValue, 500) * 52

  // Churn cost: revenue * churn rate * cost-to-replace multiplier (5x cheaper to retain)
  const avgClientValue = inputs.revenue / Math.max(inputs.employees * 8, 1)
  const churnCost = inputs.clientsLost * Math.max(avgClientValue, 2000) * 0.4

  const totalCost = manualWorkCost + missedRevenue + churnCost

  const areas = [
    { name: 'Manual work & administrative overhead', value: manualWorkCost },
    { name: 'Missed leads & slow response times', value: missedRevenue },
    { name: 'Customer churn & inconsistent experience', value: churnCost },
  ]
  const topArea = areas.sort((a, b) => b.value - a.value)[0].name

  return { manualWorkCost, missedRevenue, churnCost, totalCost, topArea }
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>({
    revenue: 3000000,
    employees: 25,
    manualHours: 30,
    missedLeadsPerWeek: 5,
    clientsLost: 8,
  })
  const [results, setResults] = useState<Results | null>(null)
  const [showEmail, setShowEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

  const updateInput = (field: keyof Inputs, value: string) => {
    const num = parseFloat(value) || 0
    setInputs((prev) => ({ ...prev, [field]: num }))
    setResults(null)
  }

  const handleCalculate = () => {
    setResults(calculate(inputs))
    setShowEmail(true)
    setTimeout(() => {
      document.getElementById('calc-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleEmailSubmit = async () => {
    if (!email.trim()) return
    try {
      await fetch('/api/calculator-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, inputs, results }),
      })
    } catch { /* silent */ }
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white px-5 py-12 font-sora">
      <div className="mx-auto max-w-lg">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <line x1="6" y1="30" x2="6" y2="18" stroke="#102A43" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="13" y1="30" x2="13" y2="14" stroke="#102A43" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="30" x2="20" y2="10" stroke="#866118" strokeWidth="3" strokeLinecap="round" />
            <line x1="27" y1="30" x2="27" y2="6" stroke="#102A43" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-gray-900">Meridian</span> <span>&larr; Back</span>
        </Link>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          What is manual work costing your firm?
        </h1>
        <p className="mt-2 text-base text-gray-600">
          Five questions. Instant estimate. You&rsquo;ll see the annual cost broken down by category&mdash;and which one to fix first.
        </p>

        {/* INPUTS */}
        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">Annual revenue</label>
            <input id="revenue" type="number" value={inputs.revenue || ''} onChange={(e) => updateInput('revenue', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
          </div>

          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700">Number of employees</label>
            <input id="employees" type="number" value={inputs.employees || ''} onChange={(e) => updateInput('employees', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
          </div>

          <div>
            <label htmlFor="manualHours" className="block text-sm font-medium text-gray-700">Hours/week your team spends on manual, repetitive, or administrative tasks</label>
            <input id="manualHours" type="number" value={inputs.manualHours || ''} onChange={(e) => updateInput('manualHours', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
            <p className="mt-1 text-xs text-gray-400">Data entry, report formatting, manual follow-ups, scheduling, rekeying information, etc.</p>
          </div>

          <div>
            <label htmlFor="missedLeadsPerWeek" className="block text-sm font-medium text-gray-700">Leads or inquiries that go unanswered or get a slow response (per week)</label>
            <input id="missedLeadsPerWeek" type="number" value={inputs.missedLeadsPerWeek || ''} onChange={(e) => updateInput('missedLeadsPerWeek', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
            <p className="mt-1 text-xs text-gray-400">Include calls to voicemail, form submissions that wait 24+ hours, inquiries that never get followed up.</p>
          </div>

          <div>
            <label htmlFor="clientsLost" className="block text-sm font-medium text-gray-700">How many clients did you lose in the last 12 months?</label>
            <input id="clientsLost" type="number" value={inputs.clientsLost || ''} onChange={(e) => updateInput('clientsLost', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
            <p className="mt-1 text-xs text-gray-400">Count clients who left, didn&rsquo;t renew, or stopped buying. Best estimate is fine.</p>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="mt-8 w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition"
        >
          Calculate My Operational Cost
        </button>

        {/* RESULTS */}
        {results && (
          <div id="calc-results" className="mt-10 scroll-mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <h2 className="text-lg font-bold text-gray-900">Your Estimated Annual Cost of Operational Inefficiency</h2>
            </div>

            <p className="text-4xl font-extrabold text-brand tracking-tight">
              {formatCurrency(results.totalCost)}
              <span className="text-base font-normal text-gray-500">/year</span>
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Manual work &amp; administrative overhead</span>
                <span className="font-semibold text-gray-900">{formatCurrency(results.manualWorkCost)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Missed leads &amp; slow response times</span>
                <span className="font-semibold text-gray-900">{formatCurrency(results.missedRevenue)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Customer churn &amp; inconsistent experience</span>
                <span className="font-semibold text-gray-900">{formatCurrency(results.churnCost)}</span>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-brand/20 bg-brand-light p-3">
              <p className="text-sm font-semibold text-brand-dark">
                Your biggest operational cost: {results.topArea}
              </p>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Estimates based on industry benchmarks for professional service firms. Your actual numbers may vary&mdash;the diagnostic measures them precisely.
            </p>
          </div>
        )}

        {/* EMAIL GATE */}
        {showEmail && results && !submitted && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-bold text-gray-900">Want the full breakdown sent to your inbox?</p>
            <p className="mt-1 text-sm text-gray-600">We&rsquo;ll email you a detailed report with the numbers above, what they mean, and what to look at first.</p>
            <div className="mt-4 flex gap-3">
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
              <button
                onClick={handleEmailSubmit}
                className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition flex items-center gap-1"
              >
                Send <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            {emailError && <p className="mt-2 text-xs text-red-600">{emailError}</p>}
            <p className="mt-2 text-xs text-gray-400">No spam. Just your operational cost report.</p>
          </div>
        )}

        {submitted && (
          <div className="mt-8 rounded-xl border border-brand/20 bg-brand-light p-6 text-center">
            <p className="text-sm font-bold text-brand-dark">Check your inbox.</p>
            <p className="mt-1 text-sm text-brand">Your detailed breakdown is on the way to {email}.</p>
          </div>
        )}

        {/* CTA BRIDGE */}
        {results && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-3">
              Want to know <strong>exactly</strong> where that {formatCurrency(results.totalCost)} is coming from&mdash;and which pieces are fixable?
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Twenty minutes, eight questions. You&rsquo;ll leave knowing which processes to fix first&mdash;no system access, no pitch.
            </p>
            <Link
              href="https://calendly.com/meridian_assessment/15min"
              className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition"
            >
              Book a Free 20-Minute Call
            </Link>
          </div>
        )}

        <p className="mt-10 text-xs text-gray-400 text-center">
          &copy; 2026 Meridian Solutions, LLC. Atlanta, GA.
        </p>
      </div>
    </div>
  )
}
