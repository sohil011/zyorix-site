// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zyorix | FinOps Consulting for Cloud Cost Optimization",
  description:
    "Cut 20–40% of your cloud spend in weeks. Zyorix provides independent UK FinOps consulting for AWS, Azure, and GCP.",
  metadataBase: new URL("https://zyorix.com"),
  openGraph: {
    title: "Zyorix | FinOps Consulting",
    description: "Independent FinOps consultancy helping teams cut cloud waste fast.",
    url: "https://zyorix.com",
    siteName: "Zyorix",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyorix | FinOps Consulting",
    description: "Independent FinOps consultancy helping teams cut cloud waste fast.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <nav className="container flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold">
              Zyorix
            </Link>
            <div className="flex gap-6">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zyorix. All rights reserved.</p>
          <p>
            <Link href="/privacy" className="underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/legal/cookies" className="underline">
              Cookies
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>
          </p>
        </footer>

        {/* Mount consent banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
