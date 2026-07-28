// Feature: meridian-website, Property 4: No emoji characters in rendered page content
import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'

// Collect all static text strings from the site
const allStaticTextStrings: string[] = [
  // Hero
  "You built a business.",
  "Not a second job.",
  "Most service businesses hit $1M and stall — not because the work isn't there, but because the systems can't keep up. We fix that.",
  "For service businesses with 5–20 people generating $500K–$5M in revenue.",
  "Book Free Assessment",
  "See How It Works",
  "$30K+", "Revenue Recovered", "$1,600", "Capacity/Week", "30 Days", "To ROI",
  // Problem Section
  "Sound Familiar?",
  "Your business isn't broken. Your systems are.",
  "Leads fall through the cracks",
  "Your team is juggling follow-ups in their heads, on sticky notes, and in three different apps. Nothing is tracked. Nothing is consistent.",
  "You're losing $30K+ in recoverable revenue every year to slow or missed follow-up.",
  "You can't see what's actually happening",
  "No real-time view of pipeline, capacity, or team performance. You're making decisions based on gut feel and last week's numbers.",
  "Blind spots cost you 15–20% of potential capacity every week.",
  "Onboarding is a fire drill every time",
  "Every new client kicks off a scramble. Checklists live in someone's head. Handoffs get dropped. The client experience suffers.",
  "Poor onboarding is the #1 driver of early churn in service businesses.",
  "Your team runs on tribal knowledge",
  "Processes exist only in people's heads. When someone leaves or gets sick, everything slows down or breaks.",
  "One key person out = $5K–$15K in lost productivity and client trust.",
  "Ready to fix your systems?",
  "See NEXUS Lead Intelligence",
  "See NEXUS Operations Hub",
  "See NEXUS Client Success",
  "See NEXUS Knowledge Base",
  // NEXUS Modules
  "The Solution",
  "NEXUS — AI Operations Intelligence Platform",
  "Lead Intelligence", "Operations Hub", "Client Success Engine", "Knowledge Architecture",
  "CRM Automation", "Follow-up Sequences", "Pipeline Visibility",
  "Capacity Planning", "Team Performance", "Real-time Dashboards",
  "Onboarding Automation", "Milestone Tracking", "Churn Prevention",
  "SOPs", "Process Documentation", "Team Enablement",
  "3-minute average lead response time",
  "Zero leads fall through the cracks",
  "Full pipeline visibility in real time",
  "Avg. $30K+ recovered revenue",
  "$1,600+ capacity unlocked per week",
  "Live operational dashboard",
  "Bottleneck identification in 48 hours",
  "Avg. 38% capacity increase",
  "Consistent onboarding every time",
  "Automated milestone check-ins",
  "Early churn signals surfaced automatically",
  "Critical knowledge captured and searchable",
  "New hire ramp time cut by 60%",
  "Business runs without you in the room",
  // Results Strip
  "$30K+", "Revenue Recovered", "$1,600", "Capacity Unlocked/Week", "3 min", "Lead Response", "30 days", "To Positive ROI",
  // Social Proof
  "Client Results",
  "What changes when the systems actually work.",
  "Within 30 days of working with Meridian, we recovered $28K in revenue we didn't even know we were losing. The lead follow-up system alone paid for everything.",
  "Sarah M.", "Owner, Apex Home Services", "$28K recovered in 30 days",
  "I used to spend 3 hours every Monday morning just trying to figure out where everything stood. Now I open the dashboard and I know in 5 minutes. It's changed how I run the business.",
  "James T.", "Founder, Clearwater Consulting", "3 hrs/week saved on reporting",
  "Case study coming soon",
  "We're documenting results from our current client engagements.",
  // Journey Section
  "How We Work Together",
  "One clear path. Four steps forward.",
  "Free Operations Assessment",
  "We spend 60 minutes mapping your current operations, identifying your biggest bottlenecks, and showing you exactly where revenue is leaking. No pitch. Just clarity.",
  "NEXUS Implementation",
  "We build and configure your NEXUS platform in 30 days. Custom to your business, integrated with your existing tools, and trained on your processes.",
  "Optimization Sprint",
  "30 days of hands-on optimization. We tune the system, train your team, and make sure everything is running at full capacity before we hand off.",
  "Fractional COO (Optional)",
  "For businesses ready to scale, we offer ongoing fractional COO support — strategic oversight, quarterly planning, and continuous system improvement.",
  "Book Your Free Assessment",
  // How It Works
  "The Process",
  "From conversation to running systems in 30 days.",
  "Discovery Call", "60-minute deep dive into your operations, goals, and current bottlenecks.",
  "System Design", "We map your custom NEXUS configuration and integration plan.",
  "Build & Configure", "Your NEXUS platform is built, integrated, and tested.",
  "Launch & Train", "Go live with full team training and 30-day optimization support.",
  "Day 1", "Days 2–5", "Days 6–25", "Days 26–30",
  // Why Meridian
  "Why Meridian",
  "We're not another agency. We're operators.",
  "Most consultants hand you a report and disappear. We build the systems, configure the platform, and stay until the numbers move. Our incentive is your outcome — not your retainer.",
  "NEXUS isn't a product you buy and figure out. It's a platform we configure, deploy, and optimize alongside you — because we've been in your seat and we know what actually works.",
  "Built for your business, not a template",
  "Every NEXUS implementation is custom-configured to your specific workflows, team structure, and growth goals.",
  "We measure outcomes, not outputs",
  "We don't count deliverables. We track revenue recovered, capacity unlocked, and time saved — and we show you the numbers.",
  "No long-term contracts",
  "We earn your continued engagement by delivering results. Start with the Assessment and see for yourself.",
  "Operators, not consultants",
  "We've built and run service businesses. We know what it feels like when the systems break — and we know how to fix them.",
  // CTA Section
  "Get Your Free Operations Assessment",
  "In 60 minutes, we'll show you exactly where your business is leaking revenue and capacity — and what it would take to fix it.",
  "No pitch. No pressure. Just clarity.",
  // Footer
  "Ready to stop guessing and start growing?",
  "AI Operations Intelligence for growing service businesses. We build the systems that let you scale without chaos.",
  "Navigate",
  "The Problem", "NEXUS Platform", "Work With Us", "Why Meridian", "Book Assessment",
  "Meridian Operations Intelligence. All rights reserved.",
  // Nav
  "Meridian", "Book Assessment", "NEXUS", "The Problem", "Work With Us",
]

// Emoji regex covering major emoji Unicode blocks
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}]/u

describe('Property 4: No emoji characters in rendered page content', () => {
  /**
   * **Validates: Requirements 19.1**
   */
  it('no static text string contains emoji characters', () => {
    fc.assert(
      fc.property(fc.constantFrom(...allStaticTextStrings), (text) => {
        expect(text).not.toMatch(emojiRegex)
      }),
      { numRuns: 100 }
    )
  })
})
