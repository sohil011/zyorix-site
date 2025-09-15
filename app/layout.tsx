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

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="__className_f367f3">
        <Header />

        {children}

        <Footer />

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
