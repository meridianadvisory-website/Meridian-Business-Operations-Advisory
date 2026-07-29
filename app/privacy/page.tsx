import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Meridian Solutions',
  description: 'How Meridian Solutions collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--teal)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            marginBottom: '2rem',
          }}
        >
          &larr; Back to Meridian
        </Link>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--gray-2)', fontSize: '0.85rem', marginBottom: '3rem' }}>
          Last updated: January 2025
        </p>

        <div className="legal-content">
          <section>
            <h2>Introduction</h2>
            <p>
              Meridian Solutions, LLC (&ldquo;Meridian,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what personal information we collect through meridianadvisor.co, how we use it, and your choices regarding that information.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect information you voluntarily provide through our forms, including:</p>
            <ul>
              <li>Name (first and last)</li>
              <li>Business email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title or role</li>
              <li>Industry</li>
              <li>Number of employees</li>
              <li>Description of operational challenges</li>
            </ul>
            <p>
              We also collect basic analytics data (page views, referral source, country) through Plausible Analytics, a privacy-focused analytics service that does not use cookies or track individuals.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiry or contact request</li>
              <li>Deliver requested resources (executive briefings, assessments)</li>
              <li>Schedule and prepare for consultations</li>
              <li>Send relevant follow-up communications about our services</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>We use the following third-party services to operate this website:</p>
            <ul>
              <li><strong>Resend</strong> — for sending transactional and follow-up emails</li>
              <li><strong>Plausible Analytics</strong> — for privacy-respecting website analytics (no cookies, no personal data collection)</li>
              <li><strong>Calendly</strong> — for scheduling meetings (subject to Calendly&rsquo;s own privacy policy)</li>
              <li><strong>Vercel</strong> — for website hosting</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes described above, or as required by law. If you request deletion of your data, we will comply within 30 days.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of future communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@meridianadvisor.co" style={{ color: 'var(--teal)' }}>
                info@meridianadvisor.co
              </a>.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              This website does not use cookies for tracking or advertising. Plausible Analytics operates without cookies. No consent banner is required.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:info@meridianadvisor.co" style={{ color: 'var(--teal)' }}>
                info@meridianadvisor.co
              </a>.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Meridian Solutions, LLC<br />
              Atlanta, GA
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .legal-content section {
          margin-bottom: 2.5rem;
        }
        .legal-content h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.75rem;
        }
        .legal-content p {
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 0.75rem;
        }
        .legal-content ul {
          color: var(--gray);
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .legal-content li {
          margin-bottom: 0.4rem;
          line-height: 1.7;
        }
        .legal-content strong {
          color: var(--white);
        }
        .legal-content a {
          text-decoration: none;
        }
        .legal-content a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  )
}
