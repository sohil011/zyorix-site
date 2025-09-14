import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study — SaaS scale-up: 28% cloud savings in 60 days | Zyorix",
  description:
    "Rightsizing, commitment strategy, and storage tiering delivering 28% savings in 60 days for a SaaS scale-up.",
  alternates: { canonical: "/case-studies/saas-scaleup-28-savings" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/case-studies" className="underline underline-offset-2">Case Studies</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">SaaS scale-up</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">SaaS scale-up: 28% cloud savings in 60 days</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        Summary: Health Check to baseline, followed by an Optimization Sprint focusing on rightsizing, commitment strategy,
        and storage tiering.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>28% total savings; 0 downtime</li>
          <li>95% tag coverage on top accounts</li>
          <li>Commitment plan aligned to growth scenarios</li>
        </ul>
      </section>

      <div className="mt-8 flex gap-4">
        <Link href="/contact" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Book a call
        </Link>
        <Link href="/case-studies" className="rounded-xl border px-4 py-2 text-sm">Back to Case Studies</Link>
      </div>
    </main>
  );
}
