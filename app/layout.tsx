import type { Metadata } from "next";
import { Sora, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meridianadvisor.co'),
  title: 'Meridian | Business Operations Advisory',
  description:
    "Meridian helps growing service businesses eliminate operational bottlenecks, streamline workflows, and strategically implement practical AI. Business First. AI Enabled.",
  alternates: {
    canonical: 'https://meridianadvisor.co',
  },
  openGraph: {
    title: 'Meridian | Business Operations Advisory',
    description:
      "Meridian helps growing service businesses eliminate operational bottlenecks and build organizations that scale. Business First. AI Enabled.",
    url: 'https://meridianadvisor.co',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Meridian â€” Operations Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian | Business Operations Advisory',
    description:
      "Meridian helps growing service businesses eliminate operational bottlenecks and build organizations that scale. Business First. AI Enabled.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmMono.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body
        className="antialiased"
        style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          position: 'relative',
        }}
      >
        {/* Fixed background decoration layer */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          {/* Teal grid pattern */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(rgba(0,212,180,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,180,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* 700px teal orb â€” top-right */}
          <div
            style={{
              position: 'absolute',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(0,212,180,0.07) 0%, transparent 70%)',
              filter: 'blur(90px)',
              top: '-200px',
              right: '-200px',
            }}
          />
          {/* 500px blue orb â€” bottom-left */}
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(0,100,255,0.14) 0%, transparent 70%)',
              filter: 'blur(90px)',
              bottom: '-150px',
              left: '-150px',
            }}
          />
        </div>

        {children}
        <Script defer data-domain="meridianadvisor.co" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do you know what we're dealing with without logging into our systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We don't need your systems. We talk to the people doing the work. The bottlenecks live in their calendars and workarounds, not your software."
                  }
                },
                {
                  "@type": "Question",
                  "name": "We've tried consultants before. They leave a deck and nothing changes.",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We don't leave a deck. Step three is us building the fix, training your team, and measuring the same hours ninety days later."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if the answer is just buy better software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sometimes it is. But most of what we find is process, not tooling. A $200/month tool doesn't help if nobody changed the workflow around it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How big is the typical engagement?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The diagnostic is a fixed $4,500-$6,500. Implementation is project-based, usually $25K-$75K depending on scope. No retainers unless you want ongoing support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much of my team's time will this take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimal. A few interviews with the people doing the work, then we handle the rest."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast will we see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The diagnostic takes 2-3 weeks. Fixes start immediately after. Ninety days later we measure the same hours again."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Meridian Solutions",
              "legalName": "Meridian Solutions, LLC",
              "description": "Operations consulting for professional service firms. We find where your hours go, price them, and fix the expensive ones. No new headcount.",
              "url": "https://meridianadvisor.co",
              "logo": "https://meridianadvisor.co/og-image.png",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.749,
                "longitude": -84.388
              },
              "areaServed": "US",
              "serviceType": ["Operations Consulting", "Process Improvement", "Workflow Optimization", "Operational Efficiency"],
              "knowsAbout": ["Business Operations", "Process Improvement", "Workflow Design", "Professional Services", "Operational Efficiency"],
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  );
}
