// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GA4Tracker from "@/app/ga4-tracker";

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

// If you ever need edge runtime for this segment, use:
// export const runtime = "edge" as const;
// Do NOT use `export const config = ...` in the App Router.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="__className_f367f3">
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        ) : null}

        {/* SPA route page_view + delegated click tracking */}
        <GA4Tracker />

        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* JSON-LD (Organization + ProfessionalService) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: siteName,
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
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
