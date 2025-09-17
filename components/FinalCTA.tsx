import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Want a quantified savings backlog?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Start with a Health Check. In 2-3 weeks you&apos;ll have a clear, actionable plan.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            data-evt="cta_final_band_contact"
          >
            Start a Health Check
          </Link>
          <Link
            href="/downloads/finops-health-check-template.xlsx"
            download
            className="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-2 hover:no-underline"
            data-evt="cta_final_band_download"
          >
            or download the template <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
