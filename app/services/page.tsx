// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Services | Zyorix — FinOps Consulting for Cloud Cost Optimization",
  description:
    "Explore Zyorix FinOps services: Rapid Health Check, Cost Optimization Sprint, Allocation & Governance, and Managed FinOps.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Zyorix — FinOps Consulting",
    description:
      "Health Check, Optimization, Allocation & Governance, Managed FinOps. Clear deliverables and measurable outcomes.",
    url: "https://zyorix.com/services",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    name: "FinOps Health Check (2–3 weeks)",
    slug: "health-check",
    summary:
      "Rapid baseline on spend, tagging, KPIs and anomalies. Deliverables: findings deck, 30/60/90 plan, top 10 savings with confidence.",
    highlights: ["Baseline & KPIs", "Top 10 savings", "30/60/90 roadmap"],
  },
  {
    name: "Cost Optimization Sprint",
    slug: "optimization",
    summary:
      "Hands-on rightsizing, schedules, storage tiers, purchase strategy and guardrails. Measurable impact within one sprint.",
    highlights: ["Compute & storage", "Purchase strategy", "Guardrails"],
  },
  {
    name: "Allocation & Governance",
    slug: "allocation-governance",
    summary:
      "Standards for tags/labels, showback/chargeback, unit economics, budgets and anomaly response. Reliable allocation and reporting.",
    highlights: ["Tags & coverage", "Showback/chargeback", "Anomaly ops"],
  },
  {
    name: "Managed FinOps (Ongoing)",
    slug: "managed-finops",
    summary:
      "Monthly cadence with KPIs, reviews, proactive backlog and exec-ready reporting. Scale FinOps without hiring.",
    highlights: ["Monthly KPIs", "Backlog & reviews", "Exec reporting"],
  },
];

export default function ServicesPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline underline-offset-2 hover:no-underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900">Services</li>
        </ol>
      </nav>

      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">FinOps Services</h1>
        <p className="mt-3 max-w-3xl text-neutral-700">
          Practical engagements that start fast and pay back quickly.
        </p>
      </header>

      {/* Grid */}
      <section aria-labelledby="services-heading" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <h2 id="services-heading" className="sr-only">Service offerings</h2>

        {services.map((s) => (
          <article
            key={s.slug}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">
              <Link
                href={`/services/${s.slug}`}
                className="relative after:absolute after:inset-0"
                aria-label={`${s.name} — view details`}
                data-evt="nav_service_card"
              >
                {s.name}
              </Link>
            </h3>
            <p className="mt-3 text-neutral-700">{s.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.highlights.map((h) => (
                <li key={h} className="rounded-full border border-neutral-300 px-3 py-1 text-sm">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              {/* Descriptive link text to satisfy Lighthouse SEO */}
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={`Learn more about ${s.name}`}
                data-evt="cta_learn_more"
              >
                {`Learn more`}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={`Book a call about ${s.name}`}
                data-evt="cta_book_call"
              >
                {`Book a call`}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <FinalCTA />

      {/* Structured Data */}
      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://zyorix.com/services" },
          ],
        })}
      </Script>
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            name: s.name,
            url: `https://zyorix.com/services/${s.slug}`,
            position: i + 1,
            description: s.summary,
            areaServed: "GB",
            provider: { "@type": "Organization", name: "Zyorix" },
          })),
        })}
      </Script>
    </main>
  );
}
