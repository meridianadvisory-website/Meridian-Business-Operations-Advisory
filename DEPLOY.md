# Deployment Guide — Meridian Business Operations Advisory

## Cost Summary

| Service | Cost | Purpose |
|---------|------|---------|
| Vercel (hosting) | Free | Hosts the Next.js site |
| Namecheap (domain) | ~$12/yr | `meridianops.com` |
| Resend (email sending) | Free tier (100/day) | Sends briefing downloads, contact confirmations, notifications |
| Google Workspace (business email) | $7/mo | `kevin@meridianops.com` inbox |

**Total: ~$96/yr to start**

---

## Step 1: Buy the Domain

1. Go to [namecheap.com](https://namecheap.com)
2. Search for `meridianops.com`
3. Purchase (~$12/yr for .com)
4. After purchase: Domain List → click domain → **Advanced DNS** tab

---

## Step 2: Push to GitHub

```bash
git add .
git commit -m "Meridian Business Operations Advisory - launch ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meridian-website.git
git push -u origin main
```

If remote already exists: `git push origin main`

---

## Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New" → Project**
3. Import `meridian-website` from GitHub
4. Vercel auto-detects Next.js — accept defaults
5. **Before deploying**, add environment variables:

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | Your Resend API key (get in Step 5) |
| `EMAIL_FROM` | `Meridian <onboarding@resend.dev>` (temporary) |
| `RESEND_AUDIENCE_ID` | Your audience ID from Resend |
| `NEXT_PUBLIC_SITE_URL` | `https://meridianops.com` |

6. Click **Deploy** (~60 seconds)
7. Test at your Vercel URL (e.g., `meridian-website.vercel.app`)

---

## Step 4: Connect Custom Domain

1. Vercel → Project → **Settings → Domains**
2. Add `meridianops.com` and `www.meridianops.com`
3. Go to Namecheap → Advanced DNS, add:

| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

4. Delete any default "parking" records
5. Wait 5–30 min for DNS propagation
6. Vercel auto-provisions SSL (HTTPS)

---

## Step 5: Set Up Resend (Email Sending)

Resend powers: Executive Briefing delivery, contact form confirmations, and lead notifications.

1. Go to [resend.com](https://resend.com) → Sign up
2. Dashboard → **API Keys** → Create key → Copy it
3. Paste into Vercel env vars as `RESEND_API_KEY`
4. Dashboard → **Audiences** → Create audience → Copy the ID
5. Paste into Vercel as `RESEND_AUDIENCE_ID`
6. **Verify your sending domain:**
   - Resend → **Domains** → Add `meridianops.com`
   - Add the DNS records Resend provides:

| Type | Host | Value |
|------|------|-------|
| MX | `bounces` | (Resend provides) |
| TXT | @ | SPF record (Resend provides) |
| CNAME | `resend._domainkey` | DKIM (Resend provides) |

7. Wait for verification (5–15 min)
8. Update Vercel env var: `EMAIL_FROM` → `Meridian <hello@meridianops.com>`
9. Redeploy

---

## Step 6: Set Up Business Email (Inbox)

Resend only **sends**. You need an inbox to **receive** replies.

### Google Workspace ($7/mo) — Recommended

1. Go to [workspace.google.com](https://workspace.google.com)
2. Use domain `meridianops.com`
3. Add MX records to Namecheap:

| Type | Host | Priority | Value |
|------|------|----------|-------|
| MX | @ | 1 | `ASPMX.L.GOOGLE.COM` |
| MX | @ | 5 | `ALT1.ASPMX.L.GOOGLE.COM` |
| MX | @ | 5 | `ALT2.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT3.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT4.ASPMX.L.GOOGLE.COM` |

4. Verify domain ownership
5. Create `kevin@meridianops.com`
6. You now receive email via Gmail

---

## Step 7: Set Up Calendly

1. Go to [calendly.com](https://calendly.com) → Sign up
2. Create event: "Executive Introduction — 15 min"
3. Upload logo (`public/assets/meridian-logo-calendly.svg` converted to PNG)
4. Set availability
5. Your current URL is already configured: `calendly.com/meridian_assessment/15min`
6. If you change the slug, update `BOOKING_HREF` in `app/page.tsx` and all other pages

---

## Step 8: Final DNS Summary

After all steps, your Namecheap DNS should have:

| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` (Vercel) |
| CNAME | www | `cname.vercel-dns.com` (Vercel) |
| MX | @ | Google Workspace MX records (5 entries) |
| MX | bounces | Resend bounce handler |
| TXT | @ | SPF: `v=spf1 include:_spf.google.com include:send.resend.com ~all` |
| CNAME | resend._domainkey | Resend DKIM |

**SPF Note:** Combine Google + Resend into one TXT record:
```
v=spf1 include:_spf.google.com include:send.resend.com ~all
```

---

## Step 9: Post-Launch Verification

- [ ] `meridianops.com` loads with HTTPS
- [ ] `www.meridianops.com` redirects to `meridianops.com`
- [ ] Homepage renders correctly (nav, sections, CTAs)
- [ ] "Schedule Introduction" buttons open Calendly
- [ ] Executive Briefing form submits → email arrives → download works
- [ ] Operational Health Scorecard completes → results display
- [ ] Contact form submits → you receive notification email
- [ ] Prospect receives confirmation email
- [ ] Logo displays correctly in nav, footer, and sub-pages
- [ ] Favicon shows Meridian mark in browser tab
- [ ] Mobile responsive — test at 375px width
- [ ] OG image shows correctly when sharing on LinkedIn

---

## Live Pages

| URL | Purpose |
|-----|---------|
| `/` | Homepage — full advisory positioning |
| `/executive-overview` | Executive Briefing gated download |
| `/operational-health-assessment` | Operational Health Scorecard (24 questions) |
| `/contact` | Contact form |

---

## Environment Variables Reference

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for sending emails |
| `EMAIL_FROM` | Sender address (verified domain) |
| `RESEND_AUDIENCE_ID` | Resend Audience for contact collection |
| `NEXT_PUBLIC_SITE_URL` | Production URL for email links |

---

## Files That Matter

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage |
| `app/executive-overview/page.tsx` | Briefing lead capture form |
| `app/operational-health-assessment/page.tsx` | Scorecard |
| `app/contact/page.tsx` | Contact form |
| `app/api/executive-overview-lead/route.ts` | Briefing email + notification |
| `app/api/assessment-lead/route.ts` | Scorecard lead capture |
| `app/api/contact/route.ts` | Contact form handler |
| `public/assets/meridian-executive-briefing.html` | The downloadable Executive Briefing |
| `public/assets/meridian-logo-full.svg` | Full logo (mark + wordmark) |
| `public/assets/meridian-logo-calendly.svg` | Square mark for profiles |
| `tailwind.config.ts` | Brand colors and fonts |

---

## Troubleshooting

**Build fails on Vercel:**
- Run `npm run build` locally to reproduce
- Check all env vars are set

**Emails not sending:**
- Verify `RESEND_API_KEY` in Vercel env vars
- Check Resend dashboard → Logs
- Until domain verified, emails only deliver to your Resend account email

**Briefing not downloading:**
- Verify `public/assets/meridian-executive-briefing.html` exists
- Check the file is committed to git

**Domain not connecting:**
- DNS propagation takes up to 48 hours (usually 5–30 min)
- Delete conflicting records
- Use [dnschecker.org](https://dnschecker.org) to check

---

## Timeline

| Task | Time |
|------|------|
| Buy domain + DNS | 15 min |
| Push to GitHub + Deploy | 15 min |
| Connect domain | 5 min + wait |
| Resend setup + verification | 20 min |
| Google Workspace | 30 min |
| Calendly setup | 10 min |
| Testing | 20 min |
| **Total** | **~2 hours** |
