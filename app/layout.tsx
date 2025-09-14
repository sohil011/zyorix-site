// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zyorix — FinOps Consulting",
    template: "%s | Zyorix",
  },
  description:
    "Zyorix helps teams cut cloud waste, align spend to value, and operationalize FinOps.",
  metadataBase: new URL("https://zyorix.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Zyorix — FinOps Consulting",
    description:
      "Zyorix helps teams cut cloud waste, align spend to value, and operationalize FinOps.",
    url: "https://zyorix.com",
    siteName: "Zyorix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* RSS feed discovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Zyorix Blog RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
        <Header />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
