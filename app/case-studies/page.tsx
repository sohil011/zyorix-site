import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Case Studies | Zyorix — FinOps Outcomes",
  description: "Real FinOps outcomes: cost reductions, improved allocation, and governance at scale. Explore results and approaches.",
  alternates: { canonical: "/case-studies" },
  robots: { index: true, follow: true },
};

const studies = [
  {
    title: "AWS Lab: EC2 Rightsizing",
    slug: "aws-lab-ec2-rightsizing-22",
    result: "Reduced EC2 costs by 22% via rightsizing and gp2→gp3 migration.",
    isPlaceholder: false,
  },
  {
    title: "Azure Lab: Orphaned Disks",
    slug: "azure-lab-orphaned-disks-35",
    result: "Identified 35% orphaned disk waste with a tagging coverage audit.",
    isPlaceholder: true,
  },
  {
    title: "GCP Lab: Anomaly Guardrails",
    slug: "gcp-lab-anomaly-guardrails-80",
    result: "Forecast anomaly guardrails prevented 80% overspend in a test project.",
    isPlaceholder: true,
  },
];

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://zyorix.com/case-studies" }
  ]
};

export default function CaseStudiesPage() {
  return (
    <>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">Case Studies</li>
          </ol>
        </nav>

        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h1>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Measurable outcomes from our FinOps labs and client engagements.
          </p>
        </header>

        <section aria-labelledby="studies-heading" className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <h2 id="studies-heading" className="sr-only">Customer stories</h2>
          {studies.map((c) => (
            <article
              key={c.slug}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-neutral-700">{c.result}</p>
              <div className="mt-6">
                {c.isPlaceholder ? (
                  <span className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-500">
                    Coming soon
                  </span>
                ) : (
                  <Link
                    href={`/case-studies/${c.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-label={`Read case study: ${c.title}`}
                    data-evt="cta_case_view"
                  >
                    View case study
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
