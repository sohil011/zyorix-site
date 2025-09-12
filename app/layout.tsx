import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://zyorix.com'),
  title: { default: 'Zyorix | FinOps Consulting for Cloud Cost Optimization', template: '%s | Zyorix' },
  description: 'FOCP & FOCUS-aligned FinOps consultancy helping AWS, Azure, and GCP teams cut cloud waste, improve allocation, and grow margin—without new tools.',
  openGraph: { title: 'Zyorix | FinOps Consulting', description: 'FOCP & FOCUS-aligned FinOps consultancy helping AWS, Azure, and GCP teams cut cloud waste and grow margin.', url: 'https://zyorix.com', siteName: 'Zyorix', type: 'website' },
  robots: { index: true, follow: true }, icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"Organization","name":"Zyorix","url":"https://zyorix.com","logo":"https://zyorix.com/zyorix-logo.svg","sameAs":[] }) }}
        />
      </body>
    </html>
  )
}
