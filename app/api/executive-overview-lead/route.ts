import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, role, industry, employees } = body

    if (!email || !firstName || !company || !role) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
    }

    const resend = new Resend(apiKey)
    const fromAddress = process.env.EMAIL_FROM || 'Meridian <onboarding@resend.dev>'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://meridianadvisor.co'

    // Add to Resend Audience
    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (audienceId) {
      try {
        await resend.contacts.create({
          audienceId,
          email,
          firstName,
          lastName,
          unsubscribed: false,
        })
      } catch (e) { console.log('Contact note:', e) }
    }

    // Send the Executive Briefing email
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'Your Meridian Executive Briefing',
      html: `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#FAFAF8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF8;">
<tr><td align="center" style="padding:2.5rem 1rem;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<tr><td style="padding-bottom:24px;">
  <img src="https://meridianadvisor.co/assets/meridian-logo-full.svg" alt="Meridian Business Operations Advisory" width="220" style="display:block;height:auto;" />
</td></tr>
<tr><td style="padding-bottom:16px;">
  <p style="color:#102A43;font-size:1.1rem;font-weight:700;margin:0;">Hi ${firstName},</p>
</td></tr>
<tr><td style="padding-bottom:24px;">
  <p style="color:#64748B;line-height:1.7;font-size:0.95rem;margin:0;">Thank you for requesting the Meridian Executive Briefing. Here is your copy:</p>
</td></tr>
<tr><td style="padding-bottom:24px;">
  <a href="${siteUrl}/assets/meridian-executive-briefing.html" style="display:inline-block;background-color:#102A43;color:#FAFAF8;font-weight:600;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:0.9rem;">
    Download the Executive Briefing
  </a>
</td></tr>
<tr><td style="padding-bottom:16px;">
  <p style="color:#64748B;line-height:1.7;font-size:0.85rem;margin:0;">
    Inside you will find an explanation of how Meridian helps growing service businesses improve operations, the ALIGN\u2122 Framework, and our three engagement paths.
  </p>
</td></tr>
<tr><td style="padding-bottom:24px;">
  <p style="color:#64748B;line-height:1.7;font-size:0.85rem;margin:0;">
    When you are ready to discuss your operational priorities, <a href="https://calendly.com/meridian_assessment/15min" style="color:#B08D57;text-decoration:underline;">schedule an Executive Introduction</a>. No pitch. A focused conversation about what is possible.
  </p>
</td></tr>
<tr><td style="border-top:1px solid #E5E7EB;padding-top:20px;">
  <p style="color:#94A3B8;font-size:0.7rem;margin:0;">Meridian Business Operations Advisory &middot; Business First. AI Enabled.</p>
  <p style="color:#94A3B8;font-size:0.7rem;margin:4px 0 0;"><a href="${siteUrl}" style="color:#94A3B8;">meridianadvisor.co</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`,
    })

    // Notify Kevin
    await resend.emails.send({
      from: fromAddress,
      to: 'kevin@meridiansolutions.com',
      subject: `Executive Briefing Lead: ${firstName} ${lastName} â€” ${company} (${role})`,
      html: `
        <h2>New Executive Briefing Download</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
        <p><strong>Employees:</strong> ${employees || 'Not specified'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Executive Briefing lead error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
