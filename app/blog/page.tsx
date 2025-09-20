import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog | Zyorix — FinOps Insights",
  description:
    "Guides, case studies, and practical playbooks on cloud cost optimization and FinOps maturity from Zyorix consultants.",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blog | Zyorix — FinOps Insights",
    description:
      "Practical FinOps guidance: baselines, 30/60/90 plans, rightsizing, SP/RI/commit strategy, anomalies, and unit economics.",
    url: "https://zyorix.com/blog",
    siteName: "Zyorix",
    type: "website",
  },
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  reading: string;
};

const POSTS: Post[] = [
  {
    slug: "what-is-finops",
    title: "What is FinOps? A Practical Guide for Engineers and Leaders",
    description:
      "A primer on the FinOps framework, lifecycle, and core principles for managing cloud costs effectively.",
    date: "2025-09-18",
    reading: "8 min read",
  },
  {
    slug: "finops-for-cfos",
    title: "FinOps for CFOs: A Finance Leader’s Guide to Cloud Value",
    description:
      "How to translate cloud cost data into financial KPIs, improve forecasting, and build a culture of accountability.",
    date: "2025-09-17",
    reading: "7 min read",
  },
  {
    slug: "finops-for-engineering-leads",
    title: "FinOps for Engineering Leads: Empowering Teams to Own Their Costs",
    description:
      "Practical strategies for integrating cost awareness into the development lifecycle without slowing down innovation.",
    date: "2025-09-16",
    reading: "9 min read",
  },
  {
    slug: "finops-health-check",
    title: "Why a FinOps Health Check is Your Best First Step",
    description:
      "How a baseline across KPIs, tagging, and anomalies unlocks confident, prioritized savings.",
    date: "2025-09-14",
    reading: "6 min read",
  },
  {
    slug: "finops-health-check-90-day-plan",
    title: "FinOps Health Check, Part 2: From Findings to a 90-Day Savings Plan",
    description:
      "Turn findings into a prioritized 30/60/90 roadmap with quantified impact, confidence, owners, and guardrails.",
    date: "2025-09-14",
    reading: "7 min read",
  },
  {
    slug: "cloud-cost-myths-busted",
    title: "7 Cloud Cost Myths That Quietly Burn Your Budget (Busted)",
    description:
      "Rightsizing isn’t a one-time sprint and SP/RI isn’t set-and-forget. Bust the myths that stall savings.",
    date: "2025-09-14",
    reading: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-neutral-600 dark:text-neutral-300"
      >
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/"
              className="underline underline-offset-2 hover:no-underline"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Blog</li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
          Insights, case studies, and playbooks to help your team cut cloud
          waste and scale FinOps maturity with confidence.
        </p>
      </header>

      {/* List */}
      <ul className="space-y-5">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <article className="rounded-2xl border border-neutral-200 p-6 transition hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
              <h2 className="text-xl font-semibold">
                <Link
                  href={`/blog/${p.slug}`}
                  className="underline underline-offset-2 hover:no-underline"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {p.description}
              </p>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </time>{" "}
                • {p.reading}
              </p>
              <div className="mt-3">
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-flex items-center rounded-xl border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
                  aria-label={`Read: ${p.title}`}
                >
                  Read post
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* JSON-LD: Breadcrumb + Blog */}
      <Script id="ld-blog-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://zyorix.com/blog" },
          ],
        })}
      </Script>

      <Script id="ld-blog" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Zyorix Blog",
          url: "https://zyorix.com/blog",
        })}
      </Script>
    </main>
  );
}
