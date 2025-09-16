// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GA4Tracker from "./ga4-tracker";
import { Suspense } from "react";

// Force server-render at request time (avoid SSG errors around useSearchParams)
export const dynamic = "force-dynamic";
export const revalidate = 0;

const SITE_NAME = "Zyorix";
const SITE_URL = "https://zyorix.com";
const TITLE = "Zyorix | FinOps Consulting for Cloud Cost Optimization";
const DESCRIPTION =
  "Cut 20–40% of your cloud spend in weeks. Independent UK FinOps consulting for AWS, Azure, and GCP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Zyorix | FinOps Consulting",
    description:
      "Independent FinOps consultancy helping teams cut cloud waste fast.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyorix | FinOps Consulting",
    description:
      "Independent FinOps consultancy helping teams cut cloud waste fast.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true }, // prod is indexable
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GA4 base tag only if ID exists */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: SITE_NAME,
              url: SITE_URL,
              sameAs: [],
              description: DESCRIPTION,
              areaServed: "GB",
              logo: `${SITE_URL}/og-image.png`,
              serviceType: "FinOps Consulting",
              offers: {
                "@type": "Offer",
                url: `${SITE_URL}/services`,
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="__className_f367f3">
        <Header />

        {/* Track SPA navigations & CTA clicks; wrapped in Suspense to satisfy Next */}
        {GA_ID && (
          <Suspense fallback={null}>
            <GA4Tracker />
          </Suspense>
        )}

        {children}

        <Footer />
      </body>
    </html>
  );
}
