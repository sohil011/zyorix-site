import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const siteUrl = 'https://zyorix.com';
const siteName = 'Zyorix';
const siteTitle = 'Zyorix | FinOps Consulting for Cloud Cost Optimization';
const siteDescription =
  'Independent UK FinOps consultancy. Cut 20–40% cloud spend without buying new tools. AWS • Azure • GCP. FOCP & FOCUS certified.';

export const viewport: Viewport = {
  themeColor: '#102f63',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Zyorix' },
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og/og-home.jpg', width: 1200, height: 630, alt: 'Zyorix FinOps Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og/og-home.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#102f63' }],
  },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
