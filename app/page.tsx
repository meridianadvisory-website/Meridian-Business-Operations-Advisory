'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react'

const BOOKING_HREF = 'https://calendly.com/meridian_assessment/15min'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const phases = [
    { letter: 'A', name: 'Assess', desc: 'Understand how your business actually operates today. Map workflows, interview teams, identify friction points and their root causes.' },
    { letter: 'L', name: 'Locate', desc: 'Pinpoint the specific operational gaps costing you time, money, and growth capacity. Size each one in dollars.' },
    { letter: 'I', name: 'Improve', desc: 'Design better workflows and implement changes that produce measurable results. Process first, technology second.' },
    { letter: 'G', name: 'Guide', desc: 'Train your team, embed new systems into daily operations, and ensure adoption sticks beyond the engagement.' },
    { letter: 'N', name: 'Navigate', desc: 'Ongoing advisory support as your business evolves. Strategic guidance on operations, growth, and technology decisions.' },
  ]

  return (
    <main className="bg-ivory text-charcoal antialiased font-inter">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          <a href="/" className="flex items-center">
            <img src="/assets/meridian-logo-full.svg" alt="Meridian Business Operations Advisory" className="h-14" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#problem" className="text-[13px] font-medium text-slate hover:text-navy relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all transition">The Problem</a>
            <a href="#framework" className="text-[13px] font-medium text-slate hover:text-navy relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all transition">ALIGN&trade; Framework</a>
            <a href="#services" className="text-[13px] font-medium text-slate hover:text-navy relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all transition">Services</a>
            <a href="#why" className="text-[13px] font-medium text-slate hover:text-navy relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all transition">Why Meridian</a>
            <Link href={BOOKING_HREF} className="inline-block rounded-md bg-navy px-5 py-2.5 text-[13px] font-semibold text-ivory hover:bg-navy-light transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
              Schedule Introduction
            </Link>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-navy" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-ivory/100 px-6 pt-24 pb-8 lg:hidden flex flex-col gap-8" style={{ backgroundColor: '#FAFAF8' }}>
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-navy" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
          <span className="font-manrope text-lg font-extrabold text-navy mb-4">MERIDIAN</span>
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal">The Problem</a>
          <a href="#framework" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal">ALIGN&trade; Framework</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal">Services</a>
          <a href="#why" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-charcoal">Why Meridian</a>
          <Link href={BOOKING_HREF} onClick={() => setMobileMenuOpen(false)} className="mt-4 rounded-md bg-navy text-ivory text-center px-6 py-3.5 text-sm font-semibold">
            Schedule Introduction
          </Link>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="relative px-6 pt-24 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        {/* Subtle geometric accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="280" stroke="#102A43" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="#102A43" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="120" stroke="#102A43" strokeWidth="0.5" />
            <line x1="300" y1="0" x2="300" y2="600" stroke="#102A43" strokeWidth="0.5" />
            <line x1="0" y1="300" x2="600" y2="300" stroke="#102A43" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="mx-auto max-w-4xl relative">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">Business Operations Advisory &middot; For service businesses with 20&ndash;150 employees</p>
          <h1 className="font-manrope text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-navy md:text-[3.75rem]">
            Growth shouldn&rsquo;t make your<br className="hidden md:inline" /> business harder to run.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate">
            As you add people and customers, operations get heavier and leadership gets pulled into the day-to-day. Meridian helps growing service businesses fix how work actually gets done&mdash;and applies technology only where it produces measurable results.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={BOOKING_HREF} className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
              Schedule an Executive Introduction <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#framework" className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition">
              Explore the ALIGN&trade; Framework <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (moved up — hook before credibility) */}
      <section id="problem" className="scroll-mt-20 border-y border-gray-200/60 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">The Problem</p>
          <h2 className="font-manrope text-2xl font-bold text-navy md:text-[2rem]">
            Growth compounds every operational weakness.
          </h2>
          <div className="mt-8 space-y-3 text-base leading-relaxed text-slate border-l-2 border-gray-200 pl-5">
            <p>&mdash; Processes become inconsistent as you add people.</p>
            <p>&mdash; Employees spend too much time on repetitive work.</p>
            <p>&mdash; Managers become bottlenecks for every decision.</p>
            <p>&mdash; Customers experience delays and inconsistency.</p>
            <p>&mdash; Technology investments underperform.</p>
          </div>
          <p className="mt-8 text-base text-slate">The result is operational chaos.</p>
          <p className="mt-4 font-semibold text-navy">Most companies buy more software. Few improve the way the business actually operates.</p>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY — with atmospheric visual */}
      <section className="relative bg-navy px-6 py-24 md:py-32 overflow-hidden">
        {/* Subtle atmospheric gradient */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(176,141,87,0.3) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(16,42,67,0.5) 0%, transparent 50%)' }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">Our Philosophy</p>
          <h2 className="font-manrope text-2xl font-bold text-ivory md:text-[2.25rem] leading-tight">
            Technology Doesn&rsquo;t Transform Businesses.<br />Better Operations Do.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-gray-400 max-w-xl mx-auto">
            AI creates value only when built on strong operational foundations. Meridian helps organizations understand how work gets done, find where it breaks down, and apply technology where it produces measurable business results.
          </p>
          <p className="mt-8 text-sm font-semibold text-gold tracking-wide">Business first. Technology second.</p>
        </div>
      </section>

      {/* SECTION 4: EXECUTIVE CREDIBILITY — editorial layout instead of cards */}
      <section id="why" className="scroll-mt-20 bg-lightgray px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-4">Why Leadership Teams Choose Meridian</p>
          <h2 className="font-manrope text-2xl font-bold text-navy md:text-3xl">
            Operations advisors for companies built to scale.
          </h2>
          <p className="mt-4 text-base text-slate leading-relaxed">
            We partner with leadership teams to improve operational performance, align technology with business strategy, and build organizations that scale.
          </p>
          <div className="mt-10 grid gap-0 divide-y divide-gray-200">
            {[
              { title: 'Enterprise Operational Experience', desc: '15+ years diagnosing and fixing the systems that run Fortune 500 operations.' },
              { title: 'Business-First Advisory', desc: 'We improve how the business runs before we recommend a single tool. Always.' },
              { title: 'Vendor-Neutral Guidance', desc: 'No platform partnerships. No software commissions. Only what works for you.' },
              { title: 'Structured Methodology', desc: 'The ALIGN\u2122 Framework turns diagnosis into repeatable, measurable outcomes.' },
              { title: 'Executive Communication', desc: 'We speak in ROI, capacity, and growth \u2014 not technical jargon.' },
              { title: 'Measurable Business Outcomes', desc: 'Every engagement produces quantified results you can track.' },
            ].map((item) => (
              <div key={item.title} className="py-4 md:grid md:grid-cols-[200px_1fr] md:gap-6 md:items-baseline">
                <h3 className="font-manrope text-sm font-bold text-navy">{item.title}</h3>
                <p className="mt-1 md:mt-0 text-sm leading-relaxed text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ALIGN FRAMEWORK — static editorial timeline */}
      <section id="framework" className="scroll-mt-20 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">The ALIGN&trade; Framework</p>
          <h2 className="font-manrope text-2xl font-bold text-navy md:text-[2rem]">
            A structured path to better business performance.
          </h2>
          <div className="mt-12 space-y-0">
            {phases.map((phase, i) => (
              <div key={phase.letter} className="relative pl-12 pb-10 border-l-2 border-gray-200 last:border-l-0 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold border-2 border-ivory" />
                <div className="pt-[-2px]">
                  <p className="font-manrope text-xs font-bold text-gold uppercase tracking-wider">Phase {i + 1}</p>
                  <h3 className="font-manrope text-lg font-bold text-navy mt-1">{phase.letter} &mdash; {phase.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA (after framework — natural "now I get it" moment) */}
      <section className="border-y border-gray-200/60 bg-lightgray px-6 py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-slate">A focused conversation about your operational priorities and whether Meridian is the right fit.</p>
          <div className="mt-4">
            <Link href={BOOKING_HREF} className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-navy-light hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-navy/30 focus:ring-offset-2">
              Schedule an Executive Introduction <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES */}
      <section id="services" className="scroll-mt-20 border-y border-gray-200/60 bg-lightgray px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">Services</p>
          <h2 className="font-manrope text-2xl font-bold text-navy md:text-[2rem]">How We Help</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Meridian ALIGN\u2122',
                subtitle: 'Business Performance Assessment',
                challenge: 'You know something is off but can\u2019t pinpoint exactly where the hours and dollars are going.',
                outcome: 'A clear, prioritized map of every operational gap\u2014sized in dollars and ranked by impact.',
                deliverables: 'Stakeholder interviews, process mapping, opportunity scoring, executive readout.',
              },
              {
                name: 'Meridian Growth Blueprint\u2122',
                subtitle: 'Transformation Blueprint',
                challenge: 'You have the diagnosis but need a structured plan to fix the top problems without disrupting the business.',
                outcome: 'A phased implementation roadmap with timelines, owners, and measurable milestones.',
                deliverables: 'Workflow redesign, technology recommendations, change management plan, ROI projections.',
              },
              {
                name: 'Meridian Executive Advisory\u2122',
                subtitle: 'Executive Advisory Partnership',
                challenge: 'You need ongoing strategic guidance as you grow\u2014someone who thinks like a COO without the full-time cost.',
                outcome: 'Continuous operational improvement, sound technology decisions, and measurable performance gains.',
                deliverables: 'Fractional advisory, quarterly reviews, implementation support, team training.',
              },
            ].map((svc) => (
              <div key={svc.name} className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm p-7">
                <p className="text-[11px] font-semibold text-gold uppercase tracking-wider">{svc.name}</p>
                <h3 className="mt-2 font-manrope text-base font-bold text-navy">{svc.subtitle}</h3>
                <div className="mt-6 space-y-4 text-sm flex-1">
                  <div>
                    <p className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-charcoal leading-relaxed">{svc.challenge}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[11px] font-semibold text-navy uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm font-medium text-navy leading-relaxed">{svc.outcome}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[11px] font-semibold text-slate uppercase tracking-wider mb-1">Deliverables</p>
                    <p className="text-xs text-slate leading-relaxed">{svc.deliverables}</p>
                  </div>
                </div>
                <Link href={BOOKING_HREF} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold hover:underline underline-offset-4 transition">
                  Discuss this option <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INDUSTRIES */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">Industries</p>
          <h2 className="font-manrope text-2xl font-bold text-navy md:text-[2rem]">Built for Growing Service Businesses</h2>
          <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
            {[
              { name: 'Healthcare', challenge: 'Patient scheduling gaps, documentation overhead, compliance bottlenecks.', outcome: 'Streamlined intake, reduced admin burden, improved patient throughput.' },
              { name: 'Property Management', challenge: 'Maintenance backlogs, tenant communication delays, vendor coordination failures.', outcome: 'Faster response times, lower vacancy, predictable operations.' },
              { name: 'Professional Services', challenge: 'Unbilled hours, report duplication, status chasing across siloed systems.', outcome: 'Higher realization rates, recovered capacity, consistent delivery.' },
              { name: 'Home Services', challenge: 'Missed leads, slow quoting, scheduling conflicts, paper-based processes.', outcome: 'Faster close rates, automated scheduling, reduced admin time.' },
              { name: 'Transportation & Logistics', challenge: 'Route inefficiency, driver communication gaps, manual dispatching.', outcome: 'Optimized routing, real-time visibility, reduced operational costs.' },
            ].map((ind) => (
              <div key={ind.name} className="rounded-lg border border-gray-200 bg-ivory p-6">
                <h3 className="font-manrope text-sm font-bold text-navy">{ind.name}</h3>
                <p className="mt-2 text-xs text-slate leading-relaxed">{ind.challenge}</p>
                <p className="mt-2 text-xs font-medium text-navy">&rarr; {ind.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-manrope text-2xl font-bold text-ivory md:text-[2.25rem] leading-tight">
            Ready to Build a Business<br className="hidden md:inline" /> That Runs Better?
          </h2>
          <p className="mt-4 text-base text-slate max-w-xl mx-auto">
            Every successful transformation starts with understanding how your business operates today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={BOOKING_HREF} className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold/90 hover:shadow-md hover:-translate-y-[1px] transition-all focus:ring-2 focus:ring-gold/30 focus:ring-offset-2">
              Schedule an Executive Introduction <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate/60">A focused conversation about your operational priorities and whether Meridian is the right fit.</p>
        </div>
      </section>

      {/* EXECUTIVE RESOURCES — for visitors not ready to book */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.2em] text-gold mb-3">Not ready to schedule?</p>
          <h2 className="text-center font-manrope text-xl font-bold text-navy md:text-2xl">Two ways to start.</h2>
          <p className="mt-3 text-center text-sm text-slate max-w-lg mx-auto">Whether you need to share Meridian with your leadership team or evaluate your own operations first.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-lightgray p-7">
              <h3 className="font-manrope text-base font-bold text-navy">Meridian Executive Briefing</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                Understand Meridian&rsquo;s approach, the ALIGN&trade; Framework, and our engagement paths. Built to share with your leadership team or business partner.
              </p>
              <Link href="/executive-overview" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold hover:underline underline-offset-4 transition">
                Download the Overview <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="rounded-lg border border-gray-200 bg-lightgray p-7">
              <h3 className="font-manrope text-base font-bold text-navy">Operational Health Scorecard</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                Evaluate your operational maturity across 6 dimensions. Takes 6&ndash;8 minutes. You&rsquo;ll receive an immediate score with priority improvement areas.
              </p>
              <Link href="/operational-health-assessment" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold hover:underline underline-offset-4 transition">
                Begin the Scorecard <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200/60 bg-ivory px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <img src="/assets/meridian-logo-full.svg" alt="Meridian" className="h-10" />
            </div>
            <p className="text-xs text-slate">Business First. AI Enabled.</p>
            <div className="flex gap-4 text-xs text-slate">
              <a href="https://www.linkedin.com/in/barnettkevin/" className="hover:text-navy transition" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/privacy" className="hover:text-navy transition">Privacy</a>
              <a href="/terms" className="hover:text-navy transition">Terms</a>
              <a href="/contact" className="hover:text-navy transition">Contact</a>
            </div>
            <p className="text-xs text-slate/50">&copy; 2026 Meridian Business Operations Advisory. Atlanta, GA.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
