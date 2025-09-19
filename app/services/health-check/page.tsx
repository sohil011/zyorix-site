import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FinOps Health Check | Zyorix",
  description:
    "2–3 week rapid assessment: baseline, KPIs, anomalies and top 10 savings with a 30/60/90 plan.",
  alternates: { canonical: "/services/health-check" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services" className="underline underline-offset-2">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Health Check</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">FinOps Health Check</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        In 2–3 weeks we baseline spend, tagging, KPIs and anomalies, then deliver a prioritized savings plan with confidence scores.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Deliverables</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Findings deck + KPI snapshot</li>
          <li>Top 10 savings with % impact & confidence</li>
          <li>30/60/90 optimization plan</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">How this engagement works</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Inputs:</strong> Last 60–90 days CUR/Exports; tagging map; budgets and anomaly settings; key accounts and services; target % save; constraints.</li>
          <li><strong>Actions:</strong> Baseline by service/account/owner; tag coverage; idle/under-used discovery; quick-wins; risk and blast-radius checks; governance gaps.</li>
          <li><strong>Deliverables:</strong> Findings deck; prioritized backlog (now/next/later); 2-week action plan; KPI sheet (coverage %, unit cost, alerting).</li>
          <li><strong>Results:</strong> Typical 15–25% addressable savings identified; tag coverage ↑ to 80–95%; anomaly MTTR ↓ to &lt;24h.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        Often uncovers idle storage and over-provisioning — see <Link href="/services/optimization" className="underline hover:no-underline">Optimisation Sprint</Link>.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book a discovery call</Link>
        <Link href="/services" className="rounded-xl border px-4 py-2 text-sm">Back to Services</Link>
      </div>
    </main>
  );
}
