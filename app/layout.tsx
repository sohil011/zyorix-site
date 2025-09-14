import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://zyorix.com"),
  title: "Zyorix | FinOps Consulting for Cloud Cost Optimization",
  description: "Cut 15–35% cloud spend in 6 weeks without new tools. FOCP & FOCUS certified.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://zyorix.com/",
    title: "Zyorix | FinOps Consulting",
    description: "Reduce cloud waste, improve allocation, scale governance.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630, alt: "Zyorix" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyorix | FinOps Consulting",
    description: "Cut 15–35% cloud spend in 6 weeks.",
    images: ["/og/og-default.jpg"]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Zyorix Blog RSS" href="/rss.xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
