// components/home/LeadMagnet.tsx
export default function LeadMagnet() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-xl font-bold text-gray-900">Not ready for a call?</h2>
        <p className="mt-2 text-gray-700">
          Get our free FinOps Health Check Template and start optimizing today.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" aria-label="Download health check template">
          <input
            type="email"
            inputMode="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full max-w-xs rounded-md border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Email address"
          />
          <a
            href="/downloads/finops-health-check-template.xlsx"
            download
            className="rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Download Free Template
          </a>
        </form>
        <p className="mt-3 text-xs text-gray-500">We’ll never share your email. One tip per week.</p>
      </div>
    </section>
  );
}
