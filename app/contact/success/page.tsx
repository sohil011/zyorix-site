import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks — We’ve got your message | Zyorix",
  description: "We’ll reply shortly. Meanwhile, explore our Services and Case Studies.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/success" },
};

export default function ContactSuccessPage() {
  return (
    <main id="main" className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Thanks — we’ve got it</h1>
      <p className="text-neutral-600 dark:text-neutral-300">
        We’ll get back to you shortly. In the meantime, you can explore our services and real-world results.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/services"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View Services
        </Link>
        <Link
          href="/case-studies"
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          Case Studies
        </Link>
      </div>
    </main>
  );
}
