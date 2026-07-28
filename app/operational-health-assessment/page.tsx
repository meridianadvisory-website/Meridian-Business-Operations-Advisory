﻿'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const BOOKING_HREF = 'https://calendly.com/meridian_assessment/15min'

const dimensions = [
  {
    name: 'Leadership & Strategic Alignment',
    questions: [
      'Our leadership team has a clear and shared set of business priorities.',
      'Department objectives are aligned with company-level goals.',
      'Ownership and accountability for major operational initiatives are clearly defined.',
      'Leadership regularly reviews meaningful operational performance measures.',
    ],
  },
  {
    name: 'Process Consistency & Efficiency',
    questions: [
      'Our most important workflows are clearly defined and consistently followed.',
      'Employees can complete routine work without unnecessary handoffs or approvals.',
      'Rework, duplicate effort, and avoidable delays are limited.',
      'We regularly improve processes instead of relying on employees to work around problems.',
    ],
  },
  {
    name: 'Technology & Data Enablement',
    questions: [
      'Our existing business systems are used consistently and effectively.',
      'Employees can access the information they need without searching across multiple disconnected tools.',
      'Duplicate data entry and manual information transfers are limited.',
      'Leadership has timely, reliable information for operational decision-making.',
    ],
  },
  {
    name: 'Workforce Capacity & Adoption',
    questions: [
      'Employees spend most of their time on work that requires judgment, expertise, or customer interaction.',
      'Critical operational knowledge is documented rather than dependent on a few individuals.',
      'Employees receive sufficient training when processes or technologies change.',
      'The organization can adopt new ways of working without major disruption.',
    ],
  },
  {
    name: 'Customer Experience & Service Delivery',
    questions: [
      'Customers receive timely responses throughout their relationship with our business.',
      'Our onboarding or service-delivery experience is consistent.',
      'Customer issues are routed and resolved efficiently.',
      'Our operational processes support a predictable, high-quality customer experience.',
    ],
  },
  {
    name: 'Scalability & AI Readiness',
    questions: [
      'The business can grow without creating proportional increases in administrative work.',
      'Managers spend more time improving performance than resolving recurring operational problems.',
      'Our processes and data are sufficiently structured to support automation or AI.',
      'We can identify specific business outcomes that AI or automation would be expected to improve.',
    ],
  },
]

const scaleOptions = [
  { label: 'Strongly disagree', value: 1 },
  { label: 'Disagree', value: 2 },
  { label: 'Neutral', value: 3 },
  { label: 'Agree', value: 4 },
  { label: 'Strongly agree', value: 5 },
]

const notSureOption = { label: 'Not sure', value: 0 }

type Responses = Record<string, number>

function calculateResults(responses: Responses) {
  const categoryScores: { name: string; score: number; answered: number }[] = []

  dimensions.forEach((dim, di) => {
    let total = 0
    let count = 0
    dim.questions.forEach((_, qi) => {
      const key = `${di}-${qi}`
      const val = responses[key]
      if (val && val > 0) { total += val; count++ }
    })
    const score = count > 0 ? Math.round((total / (count * 5)) * 100) : 0
    categoryScores.push({ name: dim.name, score, answered: count })
  })

  const totalAnswered = categoryScores.reduce((sum, c) => sum + c.answered, 0)
  const overallScore = totalAnswered > 0
    ? Math.round(categoryScores.reduce((sum, c) => sum + c.score, 0) / categoryScores.length)
    : 0

  const confidence = totalAnswered >= 20 ? 'High' : totalAnswered >= 14 ? 'Moderate' : 'Low'

  let maturity = 'Reactive'
  if (overallScore >= 80) maturity = 'Scalable'
  else if (overallScore >= 60) maturity = 'Structured'
  else if (overallScore >= 40) maturity = 'Developing'

  const sorted = [...categoryScores].sort((a, b) => b.score - a.score)
  const strengths = sorted.slice(0, 2)
  const priorities = sorted.slice(-2).reverse()

  return { overallScore, maturity, confidence, categoryScores, strengths, priorities }
}

export default function AssessmentPage() {
  const [stage, setStage] = useState<'intro' | 'questions' | 'results'>('intro')
  const [currentDimension, setCurrentDimension] = useState(0)
  const [responses, setResponses] = useState<Responses>({})
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [emailCaptured, setEmailCaptured] = useState(false)

  const handleResponse = (questionIndex: number, value: number) => {
    setResponses(prev => ({ ...prev, [`${currentDimension}-${questionIndex}`]: value }))
  }

  const handleEmailCapture = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !firstName) return
    try {
      await fetch('/api/assessment-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, source: 'scorecard-start' }),
      })
    } catch { /* silent */ }
    setEmailCaptured(true)
    setStage('questions')
  }

  const currentQuestions = dimensions[currentDimension]?.questions || []
  const totalQuestions = 24
  const answeredCount = Object.keys(responses).length
  const progress = Math.round((answeredCount / totalQuestions) * 100)

  const results = stage === 'results' ? calculateResults(responses) : null

  // INTRO
  if (stage === 'intro') {
    return (
      <main className="min-h-screen bg-ivory font-inter px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="inline-flex items-center gap-3 text-sm text-slate hover:text-navy transition mb-8"><span>&larr;</span><img src="/assets/meridian-logo-full.svg" alt="Meridian" className="h-8" /></Link>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Executive Assessment</p>
          <h1 className="font-manrope text-[2rem] font-bold text-navy leading-tight md:text-[2.5rem]">
            Meridian Operational Health Scorecard
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate">
            Discover where operational friction may be limiting productivity, scalability, and business performance. This assessment takes approximately 6&ndash;8 minutes.
          </p>
          <div className="mt-8 space-y-3">
            {['24 questions across 6 operational dimensions', 'Immediate overall score and maturity level', 'Identify your two strongest areas and two priority improvement areas', 'Practical recommendations based on your results'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-slate">{item}</span>
              </div>
            ))}
          </div>

          {!emailCaptured ? (
            <form onSubmit={handleEmailCapture} className="mt-10 rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold text-navy mb-1">Enter your details to begin</p>
              <p className="text-xs text-slate mb-4">We use this to save your progress and send your results.</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">First name *</label>
                  <input required placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">Business email *</label>
                  <input required type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-ivory px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" />
                </div>
              </div>
              <button type="submit" className="mt-4 w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
                Begin Scorecard
              </button>
            </form>
          ) : null}
        </div>
      </main>
    )
  }

  // RESULTS
  if (stage === 'results' && results) {
    return (
      <main className="min-h-screen bg-ivory font-inter px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Your Results</p>
          <h1 className="font-manrope text-2xl font-bold text-navy md:text-3xl">Meridian Operational Health Score</h1>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <p className="text-4xl font-manrope font-extrabold text-navy">{results.overallScore}</p>
              <p className="text-xs text-slate mt-1">Overall Score (0-100)</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <p className="text-xl font-manrope font-bold text-gold">{results.maturity}</p>
              <p className="text-xs text-slate mt-1">Maturity Level</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <p className="text-xl font-manrope font-bold text-navy">{results.confidence}</p>
              <p className="text-xs text-slate mt-1">Assessment Confidence</p>
            </div>
          </div>

          {/* Category Scores */}
          <div className="mt-10">
            <h2 className="font-manrope text-lg font-bold text-navy mb-4">Category Breakdown</h2>
            <div className="space-y-4">
              {results.categoryScores.map((cat) => {
                const barColor = cat.score >= 70 ? 'bg-emerald-600' : cat.score >= 50 ? 'bg-gold' : 'bg-slate'
                return (
                <div key={cat.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-charcoal font-medium">{cat.name}</span>
                    <span className="text-navy font-bold">{cat.score}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className={`h-2 rounded-full ${barColor} transition-all`} style={{ width: `${cat.score}%` }} />
                  </div>
                </div>
              )})}
            </div>
          </div>

          {/* Strengths & Priorities */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-manrope text-sm font-bold text-navy mb-3">Operational Strengths</h3>
              {results.strengths.map(s => (
                <p key={s.name} className="text-sm text-slate mb-1">&bull; {s.name} ({s.score})</p>
              ))}
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-manrope text-sm font-bold text-gold mb-3">Priority Improvement Areas</h3>
              {results.priorities.map(p => (
                <p key={p.name} className="text-sm text-slate mb-1">&bull; {p.name} ({p.score})</p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-navy p-8 text-center">
            <h2 className="font-manrope text-xl font-bold text-ivory">Discuss Your Results with Meridian</h2>
            <p className="mt-2 text-sm text-slate">A focused conversation about your results and whether Meridian is the right fit. No pitch.</p>
            <div className="mt-6">
              <Link href={BOOKING_HREF} className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold/90 hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-gold/30 focus:ring-offset-2">
                Schedule an Executive Introduction <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate/60 text-center">
            This scorecard provides directional insight based on the responses submitted. The Meridian ALIGN&trade; Assessment goes deeper&mdash;stakeholder interviews, workflow analysis, and dollar-level sizing of each opportunity.
          </p>
          <div className="mt-6 text-center">
            <Link href="/executive-overview" className="text-sm font-medium text-slate hover:text-navy transition">
              Download the Meridian Executive Briefing &rarr;
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // QUESTIONS
  return (
    <main className="min-h-screen bg-ivory font-inter px-6 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <img src="/assets/meridian-logo-full.svg" alt="Meridian" className="h-8" />
          </Link>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-slate mb-2">
            <span>Section {currentDimension + 1} of 6 &mdash; {dimensions[currentDimension].name}</span>
            <span>{answeredCount} / {totalQuestions}</span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-200">
            <div className="h-1.5 rounded-full bg-navy transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3">
            <Link href="/" className="text-xs text-slate/60 hover:text-navy transition">&larr; Exit scorecard</Link>
          </div>
        </div>

        <h2 className="font-manrope text-xl font-bold text-navy mb-8">{dimensions[currentDimension].name}</h2>

        <div className="space-y-10">
          {currentQuestions.map((question, qi) => {
            const key = `${currentDimension}-${qi}`
            const selectedValue = responses[key]
            return (
              <div key={key} className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-sm font-medium text-navy mb-4">
                  <span className="text-gold mr-2">{(currentDimension * 4) + qi + 1}.</span>
                  {question}
                </p>
                <div className="space-y-2">
                  {scaleOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleResponse(qi, opt.value)}
                      className={`w-full text-left rounded-md px-4 py-3 text-sm font-medium transition ${
                        selectedValue === opt.value
                          ? 'bg-navy/10 border-l-[3px] border-l-gold border border-navy/20 text-navy'
                          : 'border border-gray-200 text-charcoal hover:border-navy/30 hover:bg-lightgray'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                  {/* Not sure â€” visually separated */}
                  <div className="pt-2 mt-2 border-t border-gray-100">
                    <button
                      onClick={() => handleResponse(qi, notSureOption.value)}
                      className={`w-full text-left rounded-md px-4 py-3 text-sm font-medium transition ${
                        selectedValue === notSureOption.value
                          ? 'bg-navy/10 border-l-[3px] border-l-gold border border-navy/20 text-navy'
                          : 'border border-gray-200 text-charcoal hover:border-navy/30 hover:bg-lightgray'
                      }`}
                    >
                      {notSureOption.label}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between items-center">
          <button
            onClick={() => { setCurrentDimension(d => d - 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            disabled={currentDimension === 0}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate hover:text-navy transition disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          {currentDimension < dimensions.length - 1 ? (
            <button
              onClick={() => { setCurrentDimension(d => d + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2"
            >
              Next Section <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => { setStage('results'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold/90 hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-gold/30 focus:ring-offset-2"
            >
              View My Results <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
