import Link from "next/link";
export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center shadow-lg">
          <h2 id="cta-title" className="text-xl font-semibold text-white">Ready to cut cloud waste?</h2>
          <p className="mt-1 text-blue-100">Book a 20-minute discovery call and get a quantified savings outlook.</p>
          <div className="mt-4">
            <Link prefetch={false} href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
