// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteName = "Zyorix";
const siteUrl = "https://zyorix.com";
const title = "Zyorix | FinOps Consulting for Cloud Cost Optimization";
const description =
  "Cut 20–40% of your cloud spend in weeks. Independent UK FinOps consulting for AWS, Azure, and GCP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Zyorix | FinOps Consulting",
    description: "Independent FinOps consultancy helping teams cut cloud waste fast.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyorix | FinOps Consulting",
    description: "Independent FinOps consultancy helping teams cut cloud waste fast.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="__className_f367f3">
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-blue-700 px-3 py-2 text-white"
        >
          Skip to main content
        </a>

        <header className="site-header">
          <nav className="container flex items-center justify-between py-4">
            <a className="text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" href="/">
              Zyorix
            </a>
            <div className="flex gap-6">
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/pricing">Pricing</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="site-footer py-6 text-center text-sm text-gray-500">
          <p>© 2025 Zyorix. All rights reserved.</p>
          <p>
            <a className="underline" href="/privacy">Privacy</a> ·{" "}
            <a className="underline" href="/legal/cookies">Cookies</a> ·{" "}
            <a className="underline" href="/terms">Terms</a>
          </p>
        </footer>

        {/* JSON-LD (additive, non-destructive to GA4) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Zyorix",
              url: siteUrl,
              sameAs: [],
              description,
              areaServed: "GB",
              logo: `${siteUrl}/og-image.png`,
              serviceType: "FinOps Consulting",
              offers: {
                "@type": "Offer",
                url: `${siteUrl}/services`,
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
