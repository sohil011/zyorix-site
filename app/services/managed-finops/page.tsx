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

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Inputs</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Defined FinOps goals and success metrics.</li>
            <li>Access to your cloud and observability tools.</li>
            <li>Integration with your ticketing system (e.g., Jira, Asana).</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Actions</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Conduct monthly business reviews to track KPIs and progress.</li>
            <li>Continuously identify and prioritize new optimization opportunities.</li>
            <li>Manage the optimization backlog and coordinate implementation with engineering teams.</li>
            <li>Provide executive-level reporting on a regular cadence.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Monthly KPI pack and performance analysis.</li>
            <li>A managed backlog of optimization tasks.</li>
            <li>Regular executive summaries and roadmap updates.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>A mature and scalable FinOps practice without the need for a large in-house team.</li>
            <li>Continuous improvement in cloud cost efficiency and value.</li>
            <li>Stronger alignment between finance, engineering, and business leadership.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book a call</Link>
        <Link href="/services" className="rounded-xl border px-4 py-2 text-sm">Back to Services</Link>
      </div>
    </main>
  );
}
