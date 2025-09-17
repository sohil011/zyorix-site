/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cost Optimization Sprint | Zyorix",
  description: "A 4-week sprint to tackle compute, storage, and data transfer costs through rightsizing, scheduling, and modernizing resources.",
  alternates: { canonical: "/services/optimization" },
  robots: { index: true, follow: true },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cost Optimization Sprint",
  "serviceType": "Cost Optimization Sprint",
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
    { "@type": "ListItem", "position": 3, "name": "Cost Optimization Sprint", "item": "https://zyorix.com/services/optimization" }
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
            <li className="font-medium text-neutral-900">Optimization Sprint</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cost Optimization Sprint</h1>
        <p className="mt-4 text-lg text-neutral-700">
          A hands-on, 4-week engagement to aggressively reduce your cloud spend. We focus on compute, storage, and data transfer costs, implementing changes with your team.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Key Optimization Levers</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Rightsizing and scheduling for EC2, VMs, and other compute resources.</li>
            <li>Storage modernization including gp2 to gp3 migration and S3 lifecycle policies.</li>
            <li>Improving Savings Plans / Reserved Instance coverage and utilization.</li>
            <li>Optimizing data transfer patterns and using lower-cost endpoints.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Weekly sprint planning and review sessions.</li>
            <li>Paired engineering sessions to implement changes safely.</li>
            <li>A final report quantifying the savings achieved.</li>
          </ul>
        </section>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_optimization">Book an Optimization Sprint</Link>
          <Link href="/services" className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Back to Services</Link>
        </div>
      </main>
    </>
  );
}
