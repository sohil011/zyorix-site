import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing | Zyorix",
  description: "Transparent pricing for FinOps services: Health Check, Optimization Sprint, and Managed FinOps.",
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
};

const offers = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "Offer", "name": "FinOps Health Check", "price": "2500", "priceCurrency": "GBP" },
    { "@type": "Offer", "name": "Cost Optimization Sprint", "price": "5000", "priceCurrency": "GBP" },
    { "@type": "Offer", "name": "Managed FinOps Service", "price": "3000", "priceCurrency": "GBP", "unitText": "per month" }
  ]
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://zyorix.com/pricing" }
  ]
};

const tiers = [
    {
        name: 'Health Check',
        price: '£2,500',
        duration: '2-3 weeks',
        description: 'A rapid, fixed-scope assessment to baseline your environment and build a savings backlog.',
        features: ['KPI & spend baseline', 'Top 10 savings backlog', '30/60/90-day plan'],
        cta: 'Start a Health Check',
        cta_evt: 'cta_pricing_health_check'
    },
    {
        name: 'Optimization Sprint',
        price: '£5,000',
        duration: '4 weeks',
        description: 'A hands-on sprint to aggressively reduce spend on compute, storage, and data transfer.',
        features: ['Rightsizing & scheduling', 'Storage modernization', 'Commitment strategy uplift'],
        cta: 'Start a Sprint',
        cta_evt: 'cta_pricing_sprint'
    },
    {
        name: 'Managed FinOps',
        price: '£3,000',
        duration: 'per month',
        description: 'An ongoing partnership to manage costs, drive accountability, and report on value.',
        features: ['Monthly KPI reporting', 'Continuous savings backlog', 'Budget & anomaly governance'],
        cta: 'Enquire about Managed Service',
        cta_evt: 'cta_pricing_managed'
    },
]

export default function PricingPage() {
  return (
    <>
      <Script id="ld-offers" type="application/ld+json">
        {JSON.stringify(offers)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">Pricing</li>
          </ol>
        </nav>

        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h1>
          <p className="mt-3 max-w-3xl mx-auto text-neutral-700">
            Choose the engagement that fits your needs. Prices are indicative and will be confirmed on discovery.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
                    <h2 className="text-lg font-semibold">{tier.name}</h2>
                    <p className="mt-4">
                        <span className="text-4xl font-bold tracking-tight text-neutral-900">{tier.price}</span>
                        <span className="text-sm font-semibold text-neutral-600">/{tier.duration}</span>
                    </p>
                    <p className="mt-4 text-neutral-600">{tier.description}</p>
                    <ul role="list" className="mt-6 space-y-4">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" /></svg>
                                <span className="text-neutral-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact" className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" data-evt={tier.cta_evt}>{tier.cta}</Link>
                </div>
            ))}
        </div>
      </main>
    </>
  );
}
