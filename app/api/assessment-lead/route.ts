import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, email, source } = body

    if (!email || !firstName) {
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
          unsubscribed: false,
        })
      } catch (e) { console.log('Contact note:', e) }
    }

    // Notify Kevin
    await resend.emails.send({
      from: fromAddress,
      to: 'kevin@meridiansolutions.com',
      subject: `Assessment Started: ${firstName} (${email})`,
      html: `
        <h2>New Assessment Lead</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source || 'assessment'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Assessment lead error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
