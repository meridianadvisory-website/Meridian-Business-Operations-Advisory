# Go-Live Steps — Lead Magnet Email Delivery

## Environment Variables

Set these in `.env.local` (never commit this file):

```
RESEND_API_KEY=re_your_actual_key_here
EMAIL_FROM=hello@meridianops.com
```

## Steps

1. **Sign up at [resend.com](https://resend.com)** — free tier sends 100 emails/day
2. **Verify your domain** (meridianops.com) in the Resend dashboard, or use their test domain for local dev
3. **Copy your API key** into `.env.local` as `RESEND_API_KEY`
4. **Export the HTML guide to PDF:**
   - Open `public/assets/7-ai-opportunities-smbs-overlook.html` in Chrome
   - Print → Save as PDF
   - Save to `public/assets/7-ai-opportunities-smbs-overlook.pdf`
   - (The `LEAD_MAGNET_URL` constant in `lib/constants.ts` already points to this path)
5. **Deploy** — the API route (`app/api/lead/route.ts`) works on Vercel out of the box with env vars set in Project Settings → Environment Variables

## Vercel Environment Variables

In your Vercel project dashboard → Settings → Environment Variables, add:
- `RESEND_API_KEY` = your Resend key
- `EMAIL_FROM` = your verified sender address

## Post-Deploy Verification

- Submit the lead-capture form with a test email
- Confirm the email arrives with the download link
- Confirm the success state renders ("Check your inbox — your guide is on the way")
- Confirm the hero width looks correct (headline doesn't wrap awkwardly)
