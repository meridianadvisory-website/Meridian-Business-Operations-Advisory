# Go-Live Guide â€” Meridian Solutions

Complete step-by-step instructions to take the site from local dev to live on the internet with a custom domain and professional email.

---

## Cost Summary

| Service | Cost | Purpose |
|---------|------|---------|
| Vercel (hosting) | Free | Hosts the Next.js site |
| Namecheap (domain) | ~$12/yr | `meridianadvisor.co` |
| Resend (email sending) | Free tier (100/day) | Sends calculator reports + lead magnet |
| Google Workspace (business email) | $7/mo | `kevin@meridianadvisor.co` inbox |

**Total: ~$96/yr to start**

---

## Step 1: Buy the Domain

1. Go to [namecheap.com](https://namecheap.com) (or your preferred registrar)
2. Search for `meridianadvisor.co`
3. Purchase it (~$12/yr for .com)
4. After purchase, go to Domain List â†’ click your domain â†’ **Advanced DNS** tab (you'll come back here)

---

## Step 2: Push Code to GitHub

Open your terminal in this project folder:

```bash
git add .
git commit -m "Brand consistency fixes + go-live prep"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meridian-website.git
git push -u origin main
```

If you already have a remote set up, just `git push origin main`.

---

## Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) â†’ Sign up with GitHub
2. Click **"Add New" â†’ Project**
3. Import `meridian-website` from your GitHub repos
4. Vercel auto-detects Next.js â€” accept defaults
5. **Before clicking Deploy**, expand "Environment Variables" and add:

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | (get this in Step 5) |
| `EMAIL_FROM` | `Meridian Solutions <onboarding@resend.dev>` |
| `RESEND_AUDIENCE_ID` | `9ea4d6c2-7349-4a79-bffb-8a7617545ac5` |

6. Click **Deploy** â€” takes ~60 seconds
7. You'll get a live URL like `meridian-website.vercel.app` â€” test it works

---

## Step 4: Connect Your Custom Domain

1. In Vercel â†’ your project â†’ **Settings â†’ Domains**
2. Add `meridianadvisor.co` and `www.meridianadvisor.co`
3. Vercel shows you DNS records. Go to Namecheap â†’ Advanced DNS and add:

| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

4. Delete any default "parking" records Namecheap adds
5. Wait 5â€“30 minutes for propagation
6. Vercel auto-provisions SSL (HTTPS) â€” no action needed

---

## Step 5: Set Up Resend (Email Sending)

This powers your calculator report emails and lead magnet delivery.

1. Go to [resend.com](https://resend.com) â†’ Sign up
2. Dashboard â†’ **API Keys** â†’ Create key â†’ Copy it
3. Paste it into Vercel as `RESEND_API_KEY` (Settings â†’ Environment Variables)
4. Now verify your sending domain:
   - Resend â†’ **Domains** â†’ Add Domain â†’ `meridianadvisor.co`
   - Resend gives you 3 DNS records. Add them in Namecheap â†’ Advanced DNS:

| Type | Host | Value |
|------|------|-------|
| MX | `bounces` | (Resend provides this) |
| TXT | @ | `v=spf1 include:...` (Resend provides this) |
| CNAME | `resend._domainkey` | (Resend provides this) |

5. Wait for verification (usually 5â€“15 min, click "Verify" in Resend)
6. Once verified, update your Vercel env var:
   - `EMAIL_FROM` â†’ `Meridian Solutions <hello@meridianadvisor.co>`
7. Redeploy (Vercel â†’ Deployments â†’ redeploy, or just push a commit)

---

## Step 6: Set Up Business Email (Inbox)

Resend only **sends** emails. You need an inbox to **receive** replies.

### Option A: Google Workspace ($7/mo) â€” recommended

1. Go to [workspace.google.com](https://workspace.google.com) â†’ Start free trial
2. Use your domain `meridianadvisor.co`
3. Google gives you DNS records (MX records). Add to Namecheap:

| Type | Host | Priority | Value |
|------|------|----------|-------|
| MX | @ | 1 | `ASPMX.L.GOOGLE.COM` |
| MX | @ | 5 | `ALT1.ASPMX.L.GOOGLE.COM` |
| MX | @ | 5 | `ALT2.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT3.ASPMX.L.GOOGLE.COM` |
| MX | @ | 10 | `ALT4.ASPMX.L.GOOGLE.COM` |

4. Verify domain ownership (Google walks you through it)
5. Create `kevin@meridianadvisor.co` as your mailbox
6. You now receive email via Gmail at that address

### Option B: Zoho Mail (free for 1 user)

Same concept, slightly clunkier UI, but $0/mo if budget is tight.

---

## Step 7: Set Up Calendly

Your CTAs link to `https://calendly.com/meridian_assessment/30min`.

1. Go to [calendly.com](https://calendly.com) â†’ Sign up (free tier works)
2. Create an event type: "AI Value Map â€” 30 min call"
3. Set your availability
4. Your URL will be something like `calendly.com/your-name/30min`
5. Update `lib/constants.ts` with your real Calendly URL:

```ts
export const CALENDLY_URL = 'https://calendly.com/YOUR_ACTUAL_URL'
```

6. Push the change â€” Vercel auto-deploys

---

## Step 8: Final DNS Records Summary

After all steps, your Namecheap Advanced DNS should look roughly like:

| Type | Host | Value |
|------|------|-------|
| A | @ | `76.76.21.21` (Vercel) |
| CNAME | www | `cname.vercel-dns.com` (Vercel) |
| MX | @ | Google Workspace MX records (5 entries) |
| MX | bounces | Resend bounce handler |
| TXT | @ | SPF record (includes both Google + Resend) |
| CNAME | resend._domainkey | Resend DKIM |

**SPF Note:** If you have both Google and Resend, combine them into one TXT record:
```
v=spf1 include:_spf.google.com include:send.resend.com ~all
```

---

## Step 9: Post-Launch Verification Checklist

- [ ] `meridianadvisor.co` loads the site with HTTPS
- [ ] `www.meridianadvisor.co` redirects to `meridianadvisor.co`
- [ ] Calculator at `/calculator` sends email successfully
- [ ] Email arrives from `hello@meridianadvisor.co` (not `onboarding@resend.dev`)
- [ ] Replies to that email land in your Google Workspace inbox
- [ ] Calendly link books a meeting on your calendar
- [ ] Test on mobile (looks good at 375px width)
- [ ] Logo shows in Nav, Footer, Calculator page, and emails
- [ ] OG image shows when sharing link on LinkedIn/Twitter

---

## Troubleshooting

**Build fails on Vercel:**
- Check that all env vars are set
- Run `npm run build` locally to reproduce

**Emails not sending:**
- Verify `RESEND_API_KEY` is set in Vercel env vars
- Check Resend dashboard â†’ Logs for errors
- Until domain is verified, Resend can only deliver to the email on your Resend account

**Calculator shows error on submit:**
- Check Vercel â†’ Functions logs for the `/api/calculator-lead` route
- Most common cause: missing env vars

**Domain not connecting:**
- DNS propagation can take up to 48 hours (usually 5â€“30 min)
- Delete any conflicting records (Namecheap parking page records)
- Use [dnschecker.org](https://dnschecker.org) to verify propagation

**Business email not receiving:**
- Confirm MX records are correct (no typos, correct priority)
- Check Google Workspace admin â†’ Users â†’ verify mailbox is active
- Test by sending from a personal Gmail account

---

## Update Checklist (things to change in code)

| File | What to update |
|------|----------------|
| `lib/constants.ts` | `CALENDLY_URL` â€” your real booking link |
| `lib/constants.ts` | `SITE_URL` â€” confirm it's `https://meridianadvisor.co` |
| `components/Footer.tsx` | Email address if different from `kevin@meridianadvisor.co` |
| Vercel env vars | `EMAIL_FROM` once domain is verified |

---

## Timeline Estimate

| Task | Time |
|------|------|
| Buy domain + DNS setup | 15 min |
| Push to GitHub + Vercel deploy | 15 min |
| Connect domain to Vercel | 5 min + wait |
| Resend setup + domain verification | 20 min |
| Google Workspace setup | 30 min |
| Calendly setup | 10 min |
| Testing + verification | 20 min |
| **Total** | **~2 hours** |
