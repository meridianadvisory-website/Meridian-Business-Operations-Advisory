import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SITE_URL, LEAD_MAGNET_URL, CALENDLY_URL } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please try again later.' },
        { status: 503 }
      )
    }

    // TODO: add your own RESEND_API_KEY in .env.local
    const resend = new Resend(apiKey)
    const body = await request.json()
    const { firstName, email } = body

    // Server-side validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    const name = typeof firstName === 'string' ? firstName.trim() : ''
    const downloadUrl = `${SITE_URL}${LEAD_MAGNET_URL}`

    // Send the lead magnet email
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Meridian Solutions <hello@meridianadvisor.co>',
      to: email,
      subject: 'Your guide: The 7 Operational Costs Firms Overlook',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin: 0; padding: 0; background-color: #050C18;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #050C18;">
            <tr>
              <td align="center" style="padding: 2rem 1rem;">
                <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <img src="${SITE_URL}/logo-new.png" alt="Meridian Solutions" width="140" style="display:block;height:auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 12px;">
                      <p style="color: #E8EDF5; font-size: 1rem; margin: 0;">Hi${name ? ` ${name}` : ''},</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <p style="color: #B0BACA; line-height: 1.7; font-size: 0.95rem; margin: 0;">Thanks for requesting the guide. Here's your copy:</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <a href="${downloadUrl}" style="display: inline-block; background-color: #00D4B4; color: #050C18; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 0.95rem;">
                        Download the Guide
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 12px;">
                      <p style="color: #B0BACA; line-height: 1.7; font-size: 0.9rem; margin: 0;">
                        Inside you'll find the 7 hidden cost areas we see professional service firms overlook â€” and what to do about each one.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <p style="color: #B0BACA; line-height: 1.7; font-size: 0.9rem; margin: 0;">
                        When you're ready to find your specific opportunities, <a href="${CALENDLY_URL}" style="color: #00D4B4; text-decoration: underline;">book a 20-minute call</a> â€” eight questions, no system access, no pitch.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top: 1px solid #1F2933; padding-top: 24px;">
                      <p style="color: #8A97AB; font-size: 0.75rem; margin: 0;">
                        Meridian Solutions, LLC â€” Operations consulting for professional service firms.<br/>
                        <a href="${SITE_URL}" style="color: #8A97AB;">meridianadvisor.co</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    // TODO: connect to your CRM/mailing list (e.g., HubSpot, ConvertKit, Airtable)
    // Example: await addToCRM({ email, firstName: name, source: 'lead-magnet' })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
