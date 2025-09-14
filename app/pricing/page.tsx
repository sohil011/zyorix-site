// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing | Zyorix — FinOps Consulting",
  description:
    "Clear, no-surprise pricing for FinOps: Health Check, Optimization Sprint, and Managed FinOps. Outcomes-first, month-to-month, cancel anytime.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Zyorix — FinOps Consulting",
    description:
      "Health Check, Optimization Sprint, and Managed FinOps with transparent deliverables and simple terms.",
    url: "https://zyorix.com/pricing",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const plans = [
  {
    name: "Health Check",
    slug: "health-check",
    caption: "2–3 weeks • fixed-scope",
    price: "Fixed fee",
    blurb:
      "Rapid baseline across spend, tagging, KPIs, anomalies. Prioritized savings plan with confidence scores.",
    bullets: [
      "Findings deck + KPI snapshot",
      "Top 10 savings with impact & confidence",
      "30/60/90 optimization plan",
    ],
    ctaHref: "/services/health-check",
    ctaText: "View scope",
  },
  {
    name: "Optimization Sprint",
    slug: "optimization",
    caption: "3–4 weeks • outcome-focused",
    price: "Sprint fee",
    blurb:
      "Hands-on rightsizing, schedules, storage tiers, purchase strategy, and guardrails. Measurable savings.",
    bullets: [
      "Compute & storage actions",
      "SP/RI/commit strategy",
      "Guardrails & alerts",
    ],
    ctaHref: "/services/optimization",
    ctaText: "View scope",
    featured: true,
  },
  {
    name: "Managed FinOps",
    slug: "managed-finops",
    caption: "Monthly • cancel anytime",
    price: "Monthly retainer",
    blurb:
      "Operate FinOps as a service: KPIs, reviews, optimization backlog, and exec-ready reporting.",
    bullets: [
      "Monthly KPI pack & anomaly review",
      "Backlog grooming & delivery",
      "Executive summary & roadmap",
    ],
    ctaHref: "/services/managed-finops",
    ctaText: "View scope",
  },
];

export default function PricingPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Pricing</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10 sm:mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h1>
        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          Transparent, outcomes-first. Month-to-month terms on managed work. No lock-in. We’ll match scope to impact before we start.
        </p>
      </header>

      {/* Plans */}
      <section aria-labelledby="plans-heading" className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <h2 id="plans-heading" className="sr-only">Plans</h2>
        {plans.map((p) => (
          <article
            key={p.slug}
            className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 ${
              p.featured ? "border-blue-300 bg-blue-50 dark:border-blue-900/40 dark:bg-blue-950/30" : "border-neutral-200 bg-white"
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">{p.caption}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{p.price}</p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">{p.blurb}</p>
            <ul className="mt-4 space-y-2">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={`Book a pricing call for ${p.name}`}
              >
                Book pricing call
              </Link>
              <Link
                href={p.ctaHref}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
                aria-label={`See detailed scope for ${p.name}`}
              >
                {p.ctaText} — {p.name}
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mt-12">
        <h2 id="faq-heading" className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <summary className="cursor-pointer text-base font-medium">How do you price work?</summary>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Health Check and sprints are fixed-scope. Managed FinOps is monthly, cancel anytime. We confirm scope,
              deliverables, and expected impact before kickoff.
            </p>
          </details>
          <details className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <summary className="cursor-pointer text-base font-medium">What access do you need?</summary>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Read-only access to billing/cost data, tagging standards, and a sponsor for decisions. We use your tools — no vendor lock-in.
            </p>
          </details>
          <details className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
            <summary className="cursor-pointer text-base font-medium">Do you guarantee savings?</summary>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              We prioritize actions by impact and confidence, show measurable results, and operate transparently.
              Actual savings depend on usage and risk appetite.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "https://zyorix.com/pricing" },
          ],
        })}
      </Script>
      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How do you price work?", acceptedAnswer: { "@type": "Answer", text:
              "Health Check and sprints are fixed-scope. Managed FinOps is monthly, cancel anytime. We confirm scope, deliverables, and expected impact before kickoff." } },
            { "@type": "Question", name: "What access do you need?", acceptedAnswer: { "@type": "Answer", text:
              "Read-only access to billing/cost data, tagging standards, and a sponsor for decisions. We use your tools — no vendor lock-in." } },
            { "@type": "Question", name: "Do you guarantee savings?", acceptedAnswer: { "@type": "Answer", text:
              "We prioritize actions by impact and confidence, show measurable results, and operate transparently. Actual savings depend on usage and risk appetite." } },
          ],
        })}
      </Script>
    </main>
  );
}
