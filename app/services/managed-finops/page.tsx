/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Managed FinOps Service | Zyorix",
  description: "An ongoing partnership to manage your cloud costs, with monthly reporting, savings cadence, and proactive governance.",
  alternates: { canonical: "/services/managed-finops" },
  robots: { index: true, follow: true },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed FinOps Service",
  "serviceType": "Managed FinOps Service",
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
    { "@type": "ListItem", "position": 3, "name": "Managed FinOps", "item": "https://zyorix.com/services/managed-finops" }
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
            <li className="font-medium text-neutral-900">Managed FinOps</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Managed FinOps Service</h1>
        <p className="mt-4 text-lg text-neutral-700">
          Scale your FinOps practice without the headcount. We provide an ongoing partnership to manage your cloud costs, delivering continuous savings and proactive governance.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Key Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>A predictable monthly cadence for cost reviews and reporting.</li>
            <li>Proactive implementation of savings opportunities.</li>
            <li>Robust governance with budgets, alerts, and anomaly guardrails.</li>
            <li>Executive-ready reporting to demonstrate value and progress.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li>Monthly performance review and planning sessions.</li>
            <li>Continuous backlog grooming and savings implementation.</li>
            <li>Management of budgets, alerts, and commitment portfolios.</li>
          </ul>
        </section>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_managed">Enquire About Managed Service</Link>
          <Link href="/services" className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Back to Services</Link>
        </div>
      </main>
    </>
  );
}
