/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Allocation & Governance | Zyorix",
  description: "Establish a robust cost allocation strategy with clear ownership, unit cost KPIs, and readiness for showback/chargeback.",
  alternates: { canonical: "/services/allocation-governance" },
  robots: { index: true, follow: true },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Allocation & Governance",
  "serviceType": "Allocation & Governance",
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
    { "@type": "ListItem", "position": 3, "name": "Allocation & Governance", "item": "https://zyorix.com/services/allocation-governance" }
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
            <li className="font-medium text-neutral-900">Allocation & Governance</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cost Allocation & Governance</h1>
        <p className="mt-4 text-lg text-neutral-700">
          Build a foundation for accountability. We help you define and implement a tagging strategy that connects cloud spend to business value.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Key Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>A clear taxonomy for Owner, Project, and Environment tags.</li>
            <li>Increased tagging coverage and a plan to address untagged resources.</li>
            <li>Defined unit cost KPIs to measure efficiency (e.g., cost per customer).</li>
            <li>Readiness for showback and chargeback processes.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Tagging policy workshop and documentation.</li>
            <li>Implementation of automated tagging health checks.</li>
            <li>Dashboard setup for tracking allocation coverage and unit costs.</li>
          </ul>
        </section>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_allocation">Discuss Governance</Link>
          <Link href="/services" className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Back to Services</Link>
        </div>
      </main>
    </>
  );
}
