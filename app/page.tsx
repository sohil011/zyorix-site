// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative isolate bg-gradient-to-r from-white via-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
          <span
            aria-label="Certified in FinOps (FOCP & FOCUS)"
            className="inline-block rounded-full bg-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-900 shadow-sm"
          >
            FOCP & FOCUS Certified
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:mt-6 sm:text-5xl">
            Cut <span className="text-blue-700">15–35%</span> cloud spend in 6 weeks — no new tools.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-700 sm:text-lg">
            Zyorix helps engineering and finance teams reduce cloud waste, improve allocation, and scale governance across AWS, Azure, and GCP.
          </p>
          <p className="mt-2 max-w-2xl text-base text-gray-700 sm:text-lg">
            We turn CUR and billing data into actions tied directly to unit economics.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <Link
              prefetch={false}
              href="/contact"
              aria-label="Book a discovery call"
              className="inline-flex items-center rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              Book a discovery call
            </Link>
            <Link
              prefetch={false}
              href="/case-studies"
              aria-label="See case studies"
              className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              See case studies
            </Link>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-snug text-gray-600 sm:mt-5">
            Typical wins: rightsizing &amp; scheduling, gp2→gp3, S3 lifecycle, SP/RI coverage, anomaly guardrails.
          </p>

          <h2 className="sr-only">Our Services</h2>
          <div className="mt-6 sm:mt-10 lg:mt-14">
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-3 shadow-sm backdrop-blur-sm sm:p-5 lg:p-8">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <Link
                  href="/services/health-check"
                  className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4"
                >
                  <h3 className="font-semibold text-gray-900">Health Check</h3>
                  <p className="mt-1 text-sm text-gray-600">2–3 week assessment with quantified backlog.</p>
                </Link>

                <Link
                  href="/services/allocation-governance"
                  className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4"
                >
                  <h3 className="font-semibold text-gray-900">Allocation &amp; KPIs</h3>
                  <p className="mt-1 text-sm text-gray-600">Owner/Project/Env tags, untagged %, unit cost.</p>
                </Link>

                <Link
                  href="/services/optimization"
                  className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4"
                >
                  <h3 className="font-semibold text-gray-900">Optimization Sprint</h3>
                  <p className="mt-1 text-sm text-gray-600">Compute, storage, data transfer focus.</p>
                </Link>

                <Link
                  href="/services/managed"
                  className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4"
                >
                  <h3 className="font-semibold text-gray-900">vFinOps</h3>
                  <p className="mt-1 text-sm text-gray-600">Budgets/alerts and governance cadence.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </
