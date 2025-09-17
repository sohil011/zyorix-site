/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FinOps Health Check | Zyorix",
  description: "A 2-3 week rapid assessment to baseline your cloud spend, identify savings, and create a 90-day optimization plan.",
  alternates: { canonical: "/services/health-check" },
  robots: { index: true, follow: true },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "FinOps Health Check",
  "serviceType": "FinOps Health Check",
  "provider": {
    "@type": "Organization",
    "name": "Zyorix"
  },
  "areaServed": "GB",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zyorix.com/services" },
    { "@type": "ListItem", "position": 3, "name": "FinOps Health Check", "item": "https://zyorix.com/services/health-check" }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="ld-service" type="application/ld+json">
        {JSON.stringify(service)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16 prose">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="underline underline-offset-2 hover:no-underline">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">Health Check</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">FinOps Health Check</h1>
        <p className="mt-4 text-lg text-neutral-700">
          Identify 15-25% in quick cloud savings with a rapid, 2-3 week assessment of your environment. We deliver a quantified backlog and a 90-day plan to kick-start your FinOps practice.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Key Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>A clear baseline of your current cloud spend and unit cost KPIs.</li>
            <li>A prioritized backlog of the top 10 savings opportunities, scored by confidence and impact.</li>
            <li>A 30/60/90-day roadmap for continuous optimization and governance.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Review of CUR/billing data and tagging coverage.</li>
            <li>Anomaly detection and cost allocation analysis.</li>
            <li>Findings deck and KPI snapshot presentation.</li>
          </ul>
        </section>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_health_check">Book a Health Check</Link>
          <Link href="/services" className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Back to Services</Link>
        </div>
      </main>
    </>
  );
}
