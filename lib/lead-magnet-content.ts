import { CALENDLY_URL } from '@/lib/constants'

export interface Opportunity {
  number: number
  title: string
  icon: string
  theLeak: string
  theAiOpportunity: string
  businessImpact: string
  whyOverlooked: string
  valueLeak: string
  potentialGain: string
}

export interface FrameworkStep {
  name: string
  description: string
}

export interface GuideContent {
  // Document metadata
  title: string
  subtitle: string
  author: string
  authorName: string
  authorEmail: string
  footerTagline: string

  // Page 2: Opening Insight
  openingHeadline: string
  openingBody: string

  // Page 3: The Pattern
  patternHeadline: string
  patternBody: string
  patternExamples: string[]

  // Pages 4-10: Opportunities
  opportunities: Opportunity[]

  // Page 11: Framework
  frameworkHeadline: string
  frameworkSubheadline: string
  frameworkSteps: FrameworkStep[]

  // Page 12: CTA
  ctaHeadline: string
  ctaBullets: string[]
  ctaAction: string
  ctaSupportingLine: string
  ctaButtonText: string
  ctaUrl: string
}

export const guideContent: GuideContent = {
  // Document metadata
  title: 'The 7 Operational Costs Professional Service Firms Overlook',
  subtitle: 'Where billable hours disappear â€” and what it takes to get them back.',
  author: 'Meridian Solutions, LLC',
  authorName: 'Kevin Barnett',
  authorEmail: 'kevin@meridianadvisor.co',
  footerTagline: 'Operations Consulting for Professional Service Firms',

  // Page 2: Opening Insight
  openingHeadline: 'Most firms are solving the wrong problem.',
  openingBody:
    'Ask most firm owners where their time goes, and you\'ll hear two answers: client work and business development.\n\nBoth matter. Neither is where the biggest cost hides.\n\nThe real cost is buried in operations â€” rekeyed data, manual reports, missed follow-ups, tribal knowledge, poor routing, and billing leaks.',

  // Page 3: The Pattern
  patternHeadline: 'The cost lives in the gaps between your tools, people, and processes.',
  patternBody: 'The biggest AI opportunities usually do not look like AI. They look like:',
  patternExamples: [
    'A quote that took three days instead of three minutes',
    'A missed call that never got returned',
    'A lead database no one works anymore',
    'A paper form someone retypes by hand',
    'An invoice that went out late',
    'A process only one employee understands',
  ],

  // Pages 4-10: Opportunities
  opportunities: [
    {
      number: 1,
      title: 'Speed-to-Quote',
      icon: 'stopwatch',
      theLeak:
        'When a prospect asks for a price, the first business to respond usually wins â€” not the cheapest. Most SMBs take hours or days to turn an inquiry into a quote because someone has to stop what they\'re doing and build it by hand.',
      theAiOpportunity:
        'AI can draft an accurate, on-brand estimate in minutes from the same inputs your team already collects â€” pulling from pricing history, job specs, and templates to generate a ready-to-send proposal.',
      businessImpact:
        'Faster close rate, fewer lost leads, more booked opportunities. Your team stops losing deals to whoever responded first.',
      whyOverlooked:
        'Owners see quoting as a sales problem, not an automation one.',
      valueLeak: 'Slow response time',
      potentialGain: 'Faster close rate, fewer lost leads, more booked opportunities',
    },
    {
      number: 2,
      title: 'Missed Calls',
      icon: 'phone',
      theLeak:
        'For home services, legal, and healthcare, a missed call is a lost customer â€” often a four- or five-figure one. Voicemail doesn\'t save it; the caller already dialed your competitor.',
      theAiOpportunity:
        'An AI assistant that answers, qualifies, and books 24/7 turns those leaks back into revenue â€” capturing caller intent, scheduling appointments, and routing urgent requests without human involvement.',
      businessImpact:
        'Recovered revenue from after-hours and overflow calls. No more lost customers to voicemail.',
      whyOverlooked:
        'Owners treat after-hours calls as "just how it is" instead of a recoverable loss.',
      valueLeak: 'Lost after-hours and overflow calls',
      potentialGain: 'Recovered revenue, 24/7 booking capability, fewer lost customers',
    },
    {
      number: 3,
      title: 'Database Reactivation',
      icon: 'database',
      theLeak:
        'Every business is sitting on a list of past customers and dead leads it never works again. These are people who already know you, trusted you once, and might need you again.',
      theAiOpportunity:
        'AI can personalize and run reactivation outreach at a scale no human team will â€” segmenting by recency, service history, and likelihood to convert, then delivering targeted messages across email, SMS, and direct mail.',
      businessImpact:
        'The cheapest revenue you\'ll ever make. Reactivation campaigns routinely generate 5-15% response rates from "dead" lists.',
      whyOverlooked:
        'It isn\'t shiny; the asset\'s been there the whole time.',
      valueLeak: 'Dormant customer and lead lists',
      potentialGain: 'Reactivated revenue from existing relationships at minimal acquisition cost',
    },
    {
      number: 4,
      title: 'Turning Paper into Data',
      icon: 'document-scan',
      theLeak:
        'Intake forms, invoices, contracts, records, applications â€” the unstructured documents your business runs on. Your team retypes them into systems by hand, and it\'s slow and error-prone.',
      theAiOpportunity:
        'AI extracts, structures, and routes that information automatically â€” reading handwritten forms, parsing invoices, pulling key terms from contracts, and feeding clean data directly into your systems.',
      businessImpact:
        'Hours of manual data entry eliminated weekly. Fewer errors, faster processing, and staff freed for higher-value work.',
      whyOverlooked:
        'It\'s invisible back-office drudgery, so no one champions fixing it.',
      valueLeak: 'Manual data entry and document processing',
      potentialGain: 'Hours reclaimed weekly, fewer errors, faster processing',
    },
    {
      number: 5,
      title: 'Capturing Tribal Knowledge',
      icon: 'brain',
      theLeak:
        'Your most experienced employee carries years of judgment in their head â€” and one day they retire, quit, or get sick. That knowledge walks out the door with them.',
      theAiOpportunity:
        'AI can codify how your top performers actually do the work into searchable, trainable systems â€” capturing decision logic, troubleshooting steps, and institutional knowledge that new hires can access immediately.',
      businessImpact:
        'Faster onboarding, consistent service quality, and reduced dependency on any single person. The business becomes more resilient.',
      whyOverlooked:
        'Owners don\'t see tribal knowledge as an asset until it walks out the door.',
      valueLeak: 'Knowledge trapped in individual employees',
      potentialGain: 'Faster onboarding, consistent quality, organizational resilience',
    },
    {
      number: 6,
      title: 'Triage and Intelligent Routing',
      icon: 'filter',
      theLeak:
        'Not every inquiry deserves the same attention, but most businesses treat them identically â€” burning your best people on low-value requests while high-value opportunities wait in the same queue.',
      theAiOpportunity:
        'AI can qualify, prioritize, and route so humans only touch what actually needs them â€” scoring leads by value, routing service requests by urgency, and auto-handling routine inquiries.',
      businessImpact:
        'Your best people work on your best opportunities. Response time drops for high-value requests. Low-value tasks get handled without human involvement.',
      whyOverlooked:
        '"We handle everything ourselves" feels like good service, not a bottleneck.',
      valueLeak: 'High-value staff time spent on low-value tasks',
      potentialGain: 'Better resource allocation, faster response to high-value opportunities',
    },
    {
      number: 7,
      title: 'Plugging Cash-Flow Leaks',
      icon: 'dollar',
      theLeak:
        'Unbilled work, invoices that went out late, payments that slipped through reconciliation. The revenue was earned â€” it just never got collected cleanly.',
      theAiOpportunity:
        'AI can flag the gaps in your billing and AR before they cost you â€” identifying unbilled time, surfacing overdue invoices, catching reconciliation mismatches, and automating follow-up sequences.',
      businessImpact:
        'Revenue that was already earned gets collected. Cash flow becomes more predictable. Finance stops being a source of silent loss.',
      whyOverlooked:
        'It\'s finance, not "tech," so it never makes the AI conversation.',
      valueLeak: 'Unbilled work, late invoices, missed collections',
      potentialGain: 'Recovered revenue, predictable cash flow, fewer write-offs',
    },
  ],

  // Page 11: Framework
  frameworkHeadline: 'The Meridian AI Value Map',
  frameworkSubheadline:
    'A practical way to find, size, and prioritize the AI opportunities already hiding inside your business.',
  frameworkSteps: [
    {
      name: 'Find',
      description:
        'Identify the workflow gaps, manual tasks, missed follow-ups, and operational bottlenecks.',
    },
    {
      name: 'Size',
      description: 'Estimate the dollar impact behind each opportunity.',
    },
    {
      name: 'Prioritize',
      description:
        'Rank the highest-ROI use cases based on effort, value, urgency, and feasibility.',
    },
    {
      name: 'Automate',
      description:
        'Create a practical implementation roadmap using AI and workflow automation tools.',
    },
  ],

  // Page 12: CTA
  ctaHeadline: 'Find the AI Opportunities Already Hiding Inside Your Business',
  ctaBullets: [
    'A clear view of where your business is leaking time, revenue, and follow-up',
    'A prioritized list of AI opportunities',
    'Estimated business impact for each opportunity',
    'A practical roadmap without jargon or unnecessary complexity',
  ],
  ctaAction: 'Start with a fixed-scope AI Value Map.',
  ctaSupportingLine:
    'No jargon. No science project. Just a clear picture of where the money is.',
  ctaButtonText: 'Book a 20-Minute AI Opportunity Call',
  ctaUrl: CALENDLY_URL,
}
