import Link from "next/link";
import Script from "next/script";

const title = "What is a FinOps Health Check?";
const description =
  "A fast baseline across spend, tagging, KPIs, and anomalies. Deliverables: findings deck, KPI snapshot, and a prioritized savings plan with confidence scores.";

export const metadata = {
  title: `${title} | Zyorix — FinOps Consulting`,
  description,
  alternates: { canonical: "/blog/finops-health-check" },
  openGraph: {
    title,
    description,
    url: "https://zyorix.com/blog/finops-health-check",
    siteName: "Zyorix",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PostPage() {
  return (
    <main id="main" className="prose prose-neutral mx-auto max-w-3xl px-4 py-12 dark:prose-invert sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm not-prose text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="underline underline-offset-2 hover:no-underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">{title}</li>
        </ol>
      </nav>

      <header className="not-prose">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">{description}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          <time dateTime="2025-09-14">Sep 14, 2025</time>
        </p>
      </header>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800 not-prose" />

      <section>
        <h2>Why start with a Health Check?</h2>
        <p>
          It de-risks optimization by creating a shared baseline and a ranked backlog. You see KPIs,
          savings potential, and confidence before committing engineering time.
        </p>

        <h3>What you get</h3>
        <ul>
          <li>Findings deck and KPI snapshot (spend, unit economics, anomalies)</li>
          <li>Top 10 savings with impact & confidence scores</li>
          <li>30/60/90 optimization plan and guardrails</li>
        </ul>

        <h3>How long it takes</h3>
        <p>Typically 2–3 weeks, depending on account size and access.</p>
      </section>

      <aside className="not-prose mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/40 dark:bg-blue-950/30">
        <p className="text-neutral-900 dark:text-white">
          Ready to baseline and prioritize savings?{" "}
          <Link href="/services/health-check" className="underline underline-offset-2 hover:no-underline">
            Start a FinOps Health Check
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
            book a call
          </Link>
          .
        </p>
      </aside>

      <Script id="ld-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          datePublished: "2025-09-14",
          author: { "@type": "Organization", name: "Zyorix" },
          publisher: { "@type": "Organization", name: "Zyorix" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://zyorix.com/blog/finops-health-check" },
        })}
      </Script>
    </main>
  );
}
