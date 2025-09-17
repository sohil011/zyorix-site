import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Why a FinOps Health Check is Your Best First Step | Zyorix",
  description: "Get a baseline across spend, tagging, KPIs and anomalies. See top savings with impact & confidence, and a 30/60/90 plan to execute.",
  alternates: { canonical: "/blog/finops-health-check" },
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why a FinOps Health Check is Your Best First Step",
  "url": "https://zyorix.com/blog/finops-health-check",
  "datePublished": "2025-09-14",
  "author": { "@type": "Organization", "name": "Zyorix" },
  "publisher": { "@type": "Organization", "name": "Zyorix", "url": "https://zyorix.com" },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://zyorix.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "FinOps Health Check", "item": "https://zyorix.com/blog/finops-health-check" }
  ]
};

export default function ArticlePage() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json">
        {JSON.stringify(article)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 prose">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600">
          <ol className="flex gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="underline underline-offset-2 hover:no-underline">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-neutral-900">FinOps Health Check</li>
          </ol>
        </nav>

        <header className="mb-4">
          <h1>Why a FinOps Health Check is Your Best First Step</h1>
          <p className="mt-2 text-neutral-600">
            Get a baseline across spend, tagging, KPIs and anomalies. See top savings with impact &amp;
            confidence, plus a 30/60/90 plan your teams can execute.
          </p>
        </header>

        <p>
          Most teams jump straight to rightsizing and schedules. Those matter, but without a clear baseline,
          KPI targets, and anomaly hygiene, savings stall. A focused Health Check creates shared visibility,
          aligns stakeholders, and prioritizes work with confidence scores.
        </p>

        <h2>What you get</h2>
        <ul>
          <li>Findings deck: spend shape, hotspots, and anomalies</li>
          <li>KPI snapshot: coverage, unit economics, savings runway</li>
          <li>Top 10 savings with impact &amp; confidence</li>
          <li>30/60/90 plan with owners and guardrails</li>
        </ul>

        <h2>Why it works</h2>
        <p>
          It’s <em>time-boxed</em> and <em>outcomes-first</em>. We use your existing tools (no vendor lock-in),
          read-only access where possible, and we operate transparently. You get clarity within 2–3 weeks.
        </p>

        <div className="not-prose mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label="Book a Health Check call"
          >
            Book a call
          </Link>
          <Link
            href="/services/health-check"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label="See Health Check scope"
          >
            See scope
          </Link>
        </div>
      </main>
    </>
  );
}
