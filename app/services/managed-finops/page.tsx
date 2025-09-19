import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed FinOps (Ongoing) | Zyorix",
  description:
    "Monthly cadence with KPIs, reviews, proactive backlog and exec-ready reporting. Scale FinOps without hiring.",
  alternates: { canonical: "/services/managed-finops" },
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
          <li className="font-medium text-neutral-900 dark:text-white">Managed FinOps</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Managed FinOps</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        We operate FinOps as a service: KPIs, reviews, optimization backlog and exec reporting—continuously.
      </p>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold">Cadence</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Monthly KPI pack + anomaly review</li>
          <li>Optimization backlog grooming & delivery</li>
          <li>Executive summary & roadmap updates</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">How this engagement works</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Inputs:</strong> Monthly cadence; access to billing and tagging; stakeholders (Finance, Eng, DevOps).</li>
          <li><strong>Actions:</strong> Monthly runbook; savings backlog grooming; forecast and budgets; anomaly triage; executive reporting; enablement.</li>
          <li><strong>Deliverables:</strong> Monthly KPI pack; variance analysis; optimization tickets; quarterly strategy review.</li>
          <li><strong>Results:</strong> Sustained savings &gt;20% YoY; variance within ±10% forecast; tag coverage &gt;90%.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        New to FinOps? Start with a <Link href="/services/health-check" className="underline hover:no-underline">Health Check</Link>.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book a discovery call</Link>
        <Link href="/services" className="rounded-xl border px-4 py-2 text-sm">Back to Services</Link>
      </div>
    </main>
  );
}
