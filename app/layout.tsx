// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import GA4Tracker from "./ga4-tracker";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookieConsent from "./components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zyorix.com";
const IS_PROD =
  process.env.VERCEL_ENV === "production" &&
  SITE_URL.includes("zyorix.com");
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: IS_PROD,
    follow: IS_PROD,
    googleBot: {
      index: IS_PROD,
      follow: IS_PROD,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  title: {
    default: "Zyorix",
    template: "%s | Zyorix",
  },
  description: "Helping you master cloud costs.",
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://zyorix.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-gray-900">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen">
        <Script id="json-ld-org" type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Zyorix",
            "url": "https://zyorix.com",
            "logo": "https://zyorix.com/zyorix-logo-embedded.svg",
            "description": "Helping engineering and finance teams master cloud costs across AWS, Azure, and GCP.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            }
          }`}
        </Script>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
        <Suspense fallback={null}>
          <GA4Tracker />
        </Suspense>

        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
