// app/layout.tsx
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zyorix.com";
const IS_PROD =
  process.env.VERCEL_ENV === "production" &&
  SITE_URL.includes("zyorix.com");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: IS_PROD,
    follow: IS_PROD,
    // keeps previews clearly noindex for Googlebot too
    googleBot: {
      index: IS_PROD,
      follow: IS_PROD,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // (keep your existing title/description/openGraph/twitter/json-ld, etc.)
};
