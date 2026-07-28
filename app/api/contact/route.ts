import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, role, employees, challenge } = body

    if (!email || !firstName || !company || !role) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
    }

    const resend = new Resend(apiKey)
    const fromAddress = process.env.EMAIL_FROM || 'Meridian <onboarding@resend.dev>'

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

    // Notify Kevin
    await resend.emails.send({
      from: fromAddress,
      to: 'kevin@meridianadvisor.co',
      subject: `Contact Form: ${firstName} ${lastName} â€” ${company} (${role})`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Employees:</strong> ${employees || 'Not specified'}</p>
        <p><strong>Challenge:</strong> ${challenge || 'Not specified'}</p>
      `,
    })

    // Confirmation to prospect
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'We received your message â€” Meridian',
      html: `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#FAFAF8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF8;">
<tr><td align="center" style="padding:2.5rem 1rem;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<tr><td style="padding-bottom:24px;">
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" style="vertical-align:middle;margin-right:10px;">
    <line x1="6" y1="30" x2="6" y2="18" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
    <line x1="13" y1="30" x2="13" y2="14" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
    <line x1="20" y1="30" x2="20" y2="10" stroke="#866118" stroke-width="2.5" stroke-linecap="round" />
    <line x1="27" y1="30" x2="27" y2="6" stroke="#102A43" stroke-width="2" stroke-linecap="round" />
  </svg>
  <span style="font-weight:800;font-size:15px;color:#102A43;letter-spacing:-0.02em;vertical-align:middle;">MERIDIAN</span>
</td></tr>
<tr><td style="padding-bottom:16px;">
  <p style="color:#102A43;font-size:1rem;font-weight:700;margin:0;">Hi ${firstName},</p>
</td></tr>
<tr><td style="padding-bottom:24px;">
  <p style="color:#64748B;line-height:1.7;font-size:0.9rem;margin:0;">Thank you for reaching out. We received your message and will respond within one business day.</p>
</td></tr>
<tr><td style="padding-bottom:24px;">
  <p style="color:#64748B;line-height:1.7;font-size:0.9rem;margin:0;">If you would like to schedule a conversation sooner, you can <a href="https://calendly.com/meridian_assessment/15min" style="color:#866118;text-decoration:underline;">book an Executive Introduction directly</a>.</p>
</td></tr>
<tr><td style="border-top:1px solid #E5E7EB;padding-top:20px;">
  <p style="color:#94A3B8;font-size:0.7rem;margin:0;">Meridian Business Operations Advisory &middot; Business First. AI Enabled.</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
