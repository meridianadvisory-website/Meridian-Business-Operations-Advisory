import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, inputs, results } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
    }

    const resend = new Resend(apiKey)
    const fromAddress = process.env.EMAIL_FROM || 'Meridian <onboarding@resend.dev>'

    // 0. Add contact to Resend Audience
    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (audienceId) {
      try {
        await resend.contacts.create({ audienceId, email, unsubscribed: false })
      } catch (e) { console.log('Contact note:', e) }
    }

    // 1. Send the user their detailed report
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'Your Operational Efficiency Breakdown - Meridian',
      html: `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#f9fafb;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;">
<tr><td align="center" style="padding:2rem 1rem;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

<!-- HEADER -->
<tr><td style="background-color:#0C3D5C;padding:1.5rem 2rem;border-radius:8px 8px 0 0;">
  <img src="https://meridianadvisor.co/logo-new.png" alt="Meridian Solutions" width="140" style="display:block;height:auto;margin-bottom:0.5rem;" />
  <p style="margin:0;color:rgba(255,255,255,0.7);font-size:0.75rem;">Operational Efficiency Analysis</p>
</td></tr>

<!-- TOTAL COST -->
<tr><td style="background-color:#fff;padding:2rem;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
  <p style="margin:0 0 0.25rem;color:#6b7280;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;">Estimated Annual Cost of Operational Inefficiency</p>
  <p style="margin:0;color:#0c6e6b;font-size:2.25rem;font-weight:800;letter-spacing:-0.02em;">${formatCurrency(results?.totalCost || 0)}<span style="font-size:0.9rem;font-weight:400;color:#6b7280;">/year</span></p>
  <p style="margin:0.5rem 0 0;color:#9ca3af;font-size:0.75rem;">Based on your inputs: ${inputs?.employees || '--'} employees, ${formatCurrency(inputs?.revenue || 0)} revenue</p>
</td></tr>

<!-- BREAKDOWN -->
<tr><td style="background-color:#fff;padding:0 2rem 1.5rem;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid #f3f4f6;">
    <tr>
      <td style="padding:0.85rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;color:#374151;">Manual work &amp; administrative overhead</td>
      <td style="padding:0.85rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;font-weight:700;text-align:right;color:#111827;">${formatCurrency(results?.manualWorkCost || 0)}</td>
    </tr>
    <tr>
      <td style="padding:0.85rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;color:#374151;">Missed leads &amp; slow response times</td>
      <td style="padding:0.85rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;font-weight:700;text-align:right;color:#111827;">${formatCurrency(results?.missedRevenue || 0)}</td>
    </tr>
    <tr>
      <td style="padding:0.85rem 0;font-size:0.85rem;color:#374151;">Customer churn &amp; inconsistent experience</td>
      <td style="padding:0.85rem 0;font-size:0.85rem;font-weight:700;text-align:right;color:#111827;">${formatCurrency(results?.churnCost || 0)}</td>
    </tr>
  </table>
</td></tr>

<!-- TOP AREA -->
<tr><td style="background-color:#fff;padding:0 2rem 2rem;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdfa;border:1px solid #ccfbf1;border-radius:6px;">
    <tr><td style="padding:0.85rem 1rem;">
      <p style="margin:0;font-size:0.8rem;font-weight:700;color:#0c6e6b;">&#9656; Your biggest cost area: ${results?.topArea || '--'}</p>
    </td></tr>
  </table>
</td></tr>

<!-- ANALYSIS -->
<tr><td style="background-color:#f9fafb;padding:2rem;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
  <p style="margin:0 0 1rem;font-size:0.9rem;font-weight:700;color:#111827;">What This Means For Your Business</p>
  <p style="margin:0 0 0.75rem;font-size:0.8rem;color:#374151;line-height:1.7;"><strong>Manual work:</strong> At ~$35/hr loaded cost, ${inputs?.manualHours || '--'} hrs/week of administrative tasks = ${formatCurrency(results?.manualWorkCost || 0)}/yr in staff time that could be eliminated or automated.</p>
  <p style="margin:0 0 0.75rem;font-size:0.8rem;color:#374151;line-height:1.7;"><strong>Missed leads:</strong> ${inputs?.missedLeadsPerWeek || '--'} leads/week going unanswered or getting slow responses. At a 20% close rate, that's ${formatCurrency(results?.missedRevenue || 0)}/yr in lost revenue from deals that went to competitors who responded faster.</p>
  <p style="margin:0;font-size:0.8rem;color:#374151;line-height:1.7;"><strong>Customer churn:</strong> Losing ${inputs?.clientsLost || '--'} clients/year costs approximately ${formatCurrency(results?.churnCost || 0)} in lost revenue and replacement costs. Better operational consistency and follow-up typically reduces churn by 15---30%.</p>
</td></tr>

<!-- CTA -->
<tr><td style="background-color:#fff;padding:2rem;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;text-align:center;">
  <p style="margin:0 0 0.5rem;font-size:0.9rem;font-weight:700;color:#111827;">Want to know exactly where these hours are going?</p>
  <p style="margin:0 0 1.25rem;font-size:0.8rem;color:#6b7280;line-height:1.6;">A 20-minute call, eight questions, and we can tell you which processes are costing the most and whether they're fixable without new headcount.</p>
  <a href="https://calendly.com/meridian_assessment/15min" style="display:inline-block;background-color:#0c6e6b;color:#fff;font-weight:600;padding:0.75rem 1.5rem;border-radius:6px;text-decoration:none;font-size:0.85rem;">Book a Free 20-Minute Call</a>
</td></tr>

<!-- FOOTER -->
<tr><td style="padding:1.5rem 2rem;border-top:1px solid #e5e7eb;border-radius:0 0 8px 8px;background-color:#fff;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;">
  <p style="margin:0;color:#9ca3af;font-size:0.7rem;text-align:center;">Meridian &middot; Operations Consulting &middot; Atlanta, GA</p>
  <p style="margin:0.25rem 0 0;color:#9ca3af;font-size:0.7rem;text-align:center;">These estimates use industry benchmarks for professional service firms. Your actual numbers may differ &mdash; that's what the diagnostic measures.</p>
</td></tr>

</table>
</td></tr>
</table>
</body></html>`,
    })

    // 2. Notify Kevin
    await resend.emails.send({
      from: fromAddress,
      to: 'kevin@meridianadvisor.co',
      subject: `Calculator Lead: ${email} (${inputs?.employees || '?'} employees, est. ${formatCurrency(results?.totalCost || 0)}/yr)`,
      html: `
        <h2>New Operational Efficiency Calculator Lead</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Inputs</h3>
        <ul>
          <li>Employees: ${inputs?.employees}</li>
          <li>Revenue: ${formatCurrency(inputs?.revenue || 0)}</li>
          <li>Manual hours/week: ${inputs?.manualHours}</li>
          <li>Missed leads/week: ${inputs?.missedLeadsPerWeek}</li>
          <li>Clients lost (12mo): ${inputs?.clientsLost}</li>
        </ul>
        <h3>Results</h3>
        <ul>
          <li>Manual work cost: ${formatCurrency(results?.manualWorkCost || 0)}/yr</li>
          <li>Missed revenue: ${formatCurrency(results?.missedRevenue || 0)}/yr</li>
          <li>Churn cost: ${formatCurrency(results?.churnCost || 0)}/yr</li>
          <li><strong>Total: ${formatCurrency(results?.totalCost || 0)}/yr</strong></li>
          <li>Top area: ${results?.topArea}</li>
        </ul>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Calculator lead error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
