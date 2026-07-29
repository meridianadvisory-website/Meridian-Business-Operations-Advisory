import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Meridian Solutions',
  description: 'Terms and conditions for using the Meridian Solutions website and services.',
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: 'var(--gray-2)', fontSize: '0.85rem', marginBottom: '3rem' }}>
          Last updated: January 2025
        </p>

        <div className="legal-content">
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using meridianadvisor.co (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site. These terms are between you and Meridian Solutions, LLC (&ldquo;Meridian,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
            </p>
          </section>

          <section>
            <h2>Use of the Site</h2>
            <p>
              This Site is provided for informational and lead-generation purposes. You may browse the Site, submit inquiries, download resources, and schedule consultations. You agree not to:
            </p>
            <ul>
              <li>Use the Site for any unlawful purpose</li>
              <li>Submit false or misleading information through our forms</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or otherwise extract data from the Site in bulk without written permission</li>
              <li>Interfere with or disrupt the Site&rsquo;s operation</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, the ALIGN™ framework, and downloadable resources — is the property of Meridian Solutions, LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
            </p>
          </section>

          <section>
            <h2>Consulting Services</h2>
            <p>
              Information on this Site describes our services in general terms. Actual engagement scope, deliverables, timelines, and fees are governed by separate written agreements (statements of work, proposals, or engagement letters) executed between you and Meridian.
            </p>
            <p>
              Nothing on this Site constitutes a binding offer or guarantee of specific outcomes.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.
            </p>
            <p>
              Any business results, ROI projections, or performance metrics referenced on the Site are illustrative and based on past engagements. Individual outcomes vary based on business context, implementation quality, and other factors.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Meridian Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this Site, including loss of revenue, data, or business opportunities.
            </p>
            <p>
              Our total liability for any claim related to the Site shall not exceed $100.
            </p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites (such as Calendly for scheduling). We are not responsible for the content, privacy practices, or availability of those sites.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Fulton County, Georgia.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect when posted on this page. Continued use of the Site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Reach us at{' '}
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
