import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LabExamples from "./LabExamples";

export const metadata: Metadata = {
  title: "Case Studies | Zyorix — FinOps Outcomes",
  description:
    "Real FinOps outcomes: cost reductions, improved allocation, and governance at scale. Explore results and approaches.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Zyorix — FinOps Outcomes",
    description:
      "See how Zyorix delivers measurable savings and reliable allocation with Health Checks, Sprints, and Managed FinOps.",
    url: "https://zyorix.com/case-studies",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const studies = [
  {
    title: "SaaS scale-up: 28% cloud savings in 60 days",
    slug: "saas-scaleup-28-savings",
    summary:
      "Rightsizing + commitment strategy + storage tiering. Baseline to backlog, then sprint delivery.",
    tags: ["AWS", "EC2/EKS", "SP/RI", "Storage tiering"],
  },
  {
    title: "FinServ: Allocation you can trust",
    slug: "finserv-allocation-trust",
    summary:
      "Tagging standards, showback, unit economics, and anomaly response raising coverage to 92%.",
    tags: ["Tags", "Showback", "Unit economics"],
  },
  {
    title: "Data platform: Managed FinOps cadence",
    slug: "data-platform-managed-finops",
    summary:
      "Monthly KPI pack, anomaly ops, and rolling optimization backlog keeping spend aligned to value.",
    tags: ["Managed FinOps", "KPIs", "Anomalies"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Case Studies</li>
        </ol>
      </nav>

      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h1>
        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          These case studies are based on real FinOps lab work and anonymised scenarios to demonstrate typical savings and methods. Client-specific case studies will be published as partnerships grow.
        </p>
      </header>

      <section aria-labelledby="studies-heading" className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <h2 id="studies-heading" className="sr-only">Customer stories</h2>
        {studies.map((c) => (
          <article
            key={c.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 className="text-xl font-semibold">
              <Link
                href={`/case-studies/${c.slug}`}
                className="relative after:absolute after:inset-0"
                aria-label={`${c.title} — read case study`}
              >
                {c.title}
              </Link>
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">{c.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <li key={t} className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/case-studies/${c.slug}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
                aria-label={`Read case study: ${c.title}`}
              >
                {`Read case study — ${c.title}`}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label={`Book a call to discuss: ${c.title}`}
              >
                Book a discovery call
              </Link>
            </div>
          </article>
        ))}
      </section>

      <LabExamples />

      {/* future: client logos/testimonials here */}

      <section aria-labelledby="cta-heading" className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/40 dark:bg-blue-950/30">
        <h2 id="cta-heading" className="text-lg font-semibold">Want similar results?</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Start with a <strong>FinOps Health Check</strong> to baseline KPIs and prioritize savings with confidence.
        </p>
        <div className="mt-4">
          <Link
            href="/services/health-check"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Start Health Check
          </Link>
        </div>
      </section>

      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://zyorix.com/case-studies" },
          ],
        })}
      </Script>
      <Script id="ld-cases" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: studies.map((c, i) => ({
            "@type": "CreativeWork",
            name: c.title,
            url: `https://zyorix.com/case-studies/${c.slug}`,
            position: i + 1,
            description: c.summary,
          })),
        })}
      </Script>
    </main>
  );
}
