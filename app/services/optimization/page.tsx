import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cost Optimization Sprint | Zyorix",
  description:
    "Hands-on sprint: rightsizing, schedules, storage tiers, purchase strategy and guardrails for measurable savings.",
  alternates: { canonical: "/services/optimization" },
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
          <li className="font-medium text-neutral-900 dark:text-white">Optimization Sprint</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cost Optimization Sprint</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        A focused sprint to reduce waste across compute, storage and data—plus smart purchase strategy and guardrails.
      </p>

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Inputs</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Prioritized list of optimization targets from Health Check or internal analysis.</li>
            <li>Access to performance monitoring tools (e.g., CloudWatch, Datadog).</li>
            <li>Defined success metrics (e.g., target % savings, specific services to address).</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Actions</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Execute rightsizing plans for compute and database resources.</li>
            <li>Implement storage lifecycle policies and tiering strategies.</li>
            <li>Model and purchase Savings Plans, RIs, or other commitments.</li>
            <li>Deploy cost control guardrails and anomaly alerts.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Pull Requests or change sets implementing optimizations.</li>
            <li>Savings tracker to measure realized vs. forecast impact.</li>
            <li>Updated documentation on new purchase plans and guardrails.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Measurable reduction in cloud spend within the sprint period.</li>
            <li>Increased efficiency and performance of targeted workloads.</li>
            <li>Long-term savings locked in through commitments and automated policies.</li>
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
