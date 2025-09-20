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

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Inputs</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Existing tagging or labeling policy documentation.</li>
            <li>List of business units, cost centers, and product lines for showback.</li>
            <li>Access to key stakeholders for defining requirements.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Actions</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Develop and document a comprehensive tagging strategy.</li>
            <li>Implement tools and processes for tracking tag coverage.</li>
            <li>Build showback/chargeback dashboards and reports.</li>
            <li>Configure budgets, alerts, and anomaly detection thresholds.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>A formal tagging policy document and implementation guide.</li>
            <li>Automated reports for tracking tag coverage and compliance.</li>
            <li>Dashboards for showback/chargeback tailored to business units.</li>
            <li>A runbook for handling budget alerts and cost anomalies.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>Improved cost allocation accuracy and accountability.</li>
            <li>Empowered teams with visibility into their own spend.</li>
            <li>Proactive cost control through automated alerts and governance.</li>
            <li>A solid foundation for calculating unit economics.</li>
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
