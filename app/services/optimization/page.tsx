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

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold">Focus Areas</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>EC2/VM rightsizing, schedules</li>
          <li>EBS/S3/Blob tiers and lifecycle</li>
          <li>SP/RI/Commitment strategy</li>
          <li>Guardrails and alerts</li>
        </ul>
      </section>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book a call</Link>
        <Link href="/services" className="rounded-xl border px-4 py-2 text-sm">Back to Services</Link>
      </div>
    </main>
  );
}
