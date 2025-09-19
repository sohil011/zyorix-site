import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allocation & Governance | Zyorix",
  description:
    "Tagging standards, showback/chargeback, unit economics, budgets and anomaly response for reliable allocation.",
  alternates: { canonical: "/services/allocation-governance" },
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
          <li className="font-medium text-neutral-900 dark:text-white">Allocation & Governance</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Allocation & Governance</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        Build trustworthy allocation with consistent tags, showback/chargeback, budgets and anomaly ops.
      </p>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold">What we implement</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Tag/label standards + coverage tracking</li>
          <li>Showback/chargeback & unit economics</li>
          <li>Budgets, alerts and anomaly response</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">How this engagement works</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Inputs:</strong> Chart of accounts; cost centers; project taxonomy; env/owner tags.</li>
          <li><strong>Actions:</strong> Normalize keys; activate cost allocation tags; backfill where possible; UNTAGGED report; showback/chargeback pilot.</li>
          <li><strong>Deliverables:</strong> Allocation policy; dashboard; coverage reports; data dictionary.</li>
          <li><strong>Results:</strong> Allocated spend &gt;90%; UNTAGGED &lt;10%; reduced disputes; clearer ownership.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        Allocation clarity accelerates <Link href="/services/optimization" className="underline hover:no-underline">Optimization decisions</Link>.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Book a discovery call</Link>
        <Link href="/services" className="rounded-xl border px-4 py-2 text-sm">Back to Services</Link>
      </div>
    </main>
  );
}
