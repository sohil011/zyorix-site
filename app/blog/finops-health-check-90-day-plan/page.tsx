import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FinOps Health Check, Part 2: From Findings to a 90-Day Savings Plan | Zyorix",
  description:
    "Turn baseline findings into a prioritized 30/60/90 roadmap with quantified impact, confidence, and owners. A practical template you can use tomorrow.",
  alternates: { canonical: "/blog/finops-health-check-90-day-plan" },
  openGraph: {
    title: "FinOps Health Check, Part 2: From Findings to a 90-Day Savings Plan",
    description:
      "Structure findings into a 30/60/90 plan, assign owners, and ship measurable cloud savings—without new tools.",
    url: "https://zyorix.com/blog/finops-health-check-90-day-plan",
    siteName: "Zyorix",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Post() {
  return (
    <main id="main" className="prose prose-neutral mx-auto max-w-3xl px-4 py-12 dark:prose-invert">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="underline underline-offset-2 hover:no-underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">
            Health Check → 90-Day Plan
          </li>
        </ol>
      </nav>

      <article>
        <header>
          <h1>FinOps Health Check, Part 2: From Findings to a 90-Day Savings Plan</h1>
          <p className="mt-1">
            <time dateTime="2025-09-14">14 Sep 2025</time> • 7 min read
          </p>
          <p className="lead">
            In Part 1 we baseline KPIs, tagging, and anomalies. Here, we turn those insights
            into a prioritized <strong>30/60/90 plan</strong> with quantified impact, confidence, owners,
            and guardrails—so savings actually land.
          </p>
        </header>

        <h2>1) Shape findings into candidate actions</h2>
        <p>
          Pull from four streams: <em>rightsizing/scheduling</em>, <em>storage lifecycle &amp; tiers</em>,
          <em>purchase strategy (SP/RI/commit)</em>, and <em>governance guardrails</em>. Each action should have:
        </p>
        <ul>
          <li><strong>Impact</strong> (monthly \$ or %)</li>
          <li><strong>Confidence</strong> (High/Med/Low with why)</li>
          <li><strong>Owner</strong> (team + person)</li>
          <li><strong>Prereqs</strong> (tag coverage, dashboards, approvals)</li>
        </ul>

        <h2>2) Score &amp; rank</h2>
        <p>
          We use a simple model: <code>Score = Impact × Confidence ÷ Effort</code>. Keep the math boring and the
          rationale explicit. The top 10 candidates usually explain 70–80% of near-term savings.
        </p>

        <h2>3) Build your 30/60/90</h2>
        <ul>
          <li><strong>30 days:</strong> Low-risk rightsizing, schedules, obvious tiering, guardrail alerts.</li>
          <li><strong>60 days:</strong> Purchase strategy (SP/RI/commit) with staged coverage. Update budgets &amp; KPIs.</li>
          <li><strong>90 days:</strong> Tagging standard rollout, anomaly process, dashboards for unit economics.</li>
        </ul>

        <h2>4) Prove it monthly</h2>
        <p>
          Publish a one-pager: actions shipped, realized \$, KPI deltas, and the next month’s plan. Executives want
          <em> trajectory</em>, not a one-off.
        </p>

        <h2>A lightweight template</h2>
        <pre>{`Action: EBS gp2 -> gp3
Owner: Platform (Alex)
Impact: $22k/mo | Confidence: High | Effort: Low
Prereqs: None
Guardrail: Alert if gp3 price > gp2 by 15% on any account`}</pre>

        <hr />
        <p>
          Want a guided 2–3 week baseline with a ready-to-ship 90-day plan? Start with a{" "}
          <Link href="/services/health-check" className="underline underline-offset-2 hover:no-underline">
            FinOps Health Check
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
            book a call
          </Link>.
        </p>
      </article>

      {/* JSON-LD: Breadcrumb + Article */}
      <Script id="ld-hc-90-plan-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://zyorix.com/blog" },
            {
              "@type": "ListItem",
              position: 3,
              name: "FinOps Health Check → 90-Day Plan",
              item: "https://zyorix.com/blog/finops-health-check-90-day-plan",
            },
          ],
        })}
      </Script>

      <Script id="ld-hc-90-plan-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "FinOps Health Check, Part 2: From Findings to a 90-Day Savings Plan",
          datePublished: "2025-09-14",
          author: { "@type": "Organization", name: "Zyorix" },
          publisher: { "@type": "Organization", name: "Zyorix", url: "https://zyorix.com" },
          mainEntityOfPage: "https://zyorix.com/blog/finops-health-check-90-day-plan",
        })}
      </Script>
    </main>
  );
}
