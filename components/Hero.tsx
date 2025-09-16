// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate bg-gradient-to-r from-white via-gray-50 to-blue-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
        {/* Badge */}
        <span
          aria-label="Certified in FinOps (FOCP & FOCUS)"
          className="inline-block rounded-full bg-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-900 shadow-sm dark:bg-emerald-800 dark:text-emerald-100"
        >
          FOCP & FOCUS Certified
        </span>

        {/* Headline */}
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:mt-6 sm:text-5xl dark:text-gray-50">
          Cut <span className="text-blue-700 dark:text-blue-400">15–35%</span> cloud spend in 6 weeks — no new tools.
        </h1>

        {/* Subcopy */}
        <p className="mt-5 max-w-2xl text-base text-gray-700 sm:text-lg dark:text-gray-300">
          Zyorix helps engineering and finance teams reduce cloud waste, improve allocation, and
          scale governance across AWS, Azure, and GCP.
        </p>
        <p className="mt-2 max-w-2xl text-base text-gray-700 sm:text-lg dark:text-gray-300">
          We turn CUR and billing data into actions tied directly to unit economics.
        </p>

        {/* CTAs (prefetch disabled) */}
        <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8">
          <Link prefetch={false}
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 min-w-[180px]"
          >
            Book a discovery call
          </Link>
          <Link prefetch={false}
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:border-neutral-700 dark:text-gray-100 dark:hover:bg-neutral-800 min-w-[180px]"
          >
            See case studies
          </Link>
        </div>

        {/* Typical wins */}
        <p className="mt-4 max-w-2xl text-sm leading-snug text-gray-600 sm:mt-5 dark:text-gray-400">
          Typical wins: rightsizing & scheduling, gp2→gp3, S3 lifecycle, SP/RI coverage, anomaly guardrails.
        </p>

        {/* Services */}
        <h2 className="sr-only">Our Services</h2>
        <div className="mt-6 sm:mt-10 lg:mt-14">
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-3 shadow-sm backdrop-blur-sm sm:p-5 lg:p-8 dark:border-neutral-800 dark:bg-neutral-900/70">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href="/services/health-check"
                className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Health Check</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  2–3 week assessment with quantified backlog.
                </p>
              </a>

              <a
                href="/services/allocation-governance"
                className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Allocation & KPIs</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Owner/Project/Env tags, untagged %, unit cost.
                </p>
              </a>

              <a
                href="/services/optimization"
                className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Optimization Sprint</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Compute, storage, data transfer focus.
                </p>
              </a>

              <a
                href="/services/managed"
                className="rounded-xl bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 sm:p-4 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">vFinOps</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Budgets/alerts and governance cadence.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
