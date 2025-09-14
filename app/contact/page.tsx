import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Zyorix — FinOps Consulting",
  description:
    "Book a call with Zyorix to reduce 20–40% cloud waste, align spend to value, and operationalize FinOps. Quick form, we reply within 1 business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Zyorix — FinOps Consulting",
    description:
      "Book a call with Zyorix to reduce 20–40% cloud waste, align spend to value, and operationalize FinOps.",
    url: "https://zyorix.com/contact",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const FORM_ACTION =
  // TODO: replace with your Formspree endpoint (e.g., https://formspree.io/f/abcd1234)
  "https://formspree.io/f/xxxxxxxx";

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Contact</li>
        </ol>
      </nav>

      <header className="mb-10 sm:mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Zyorix</h1>
        <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">
          Tell us a bit about your cloud and goals. We respond within 1 business day. Prefer email?{" "}
          <a href="mailto:info@zyorix.com" className="underline underline-offset-2 hover:no-underline">
            info@zyorix.com
          </a>.
        </p>
      </header>

      <section aria-labelledby="contact-heading" className="rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
        <h2 id="contact-heading" className="sr-only">Contact form</h2>

        <form action={FORM_ACTION} method="POST" className="grid grid-cols-1 gap-4">
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Zyorix Contact" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">Your name</label>
              <input id="name" name="name" required autoComplete="name" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">Work email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium">Company</label>
            <input id="company" name="company" autoComplete="organization" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="budget" className="mb-1 block text-sm font-medium">Monthly cloud spend</label>
              <select id="budget" name="cloud_spend" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                <option value="">Select…</option>
                <option>Under $50k</option>
                <option>$50k–$200k</option>
                <option>$200k–$1M</option>
                <option>$1M–$5M</option>
                <option>$5M+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="mb-1 block text-sm font-medium">Timeline</label>
              <select id="timeline" name="timeline" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                <option value="">Select…</option>
                <option>Exploring</option>
                <option>Next 30 days</option>
                <option>Next quarter</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">What would you like to achieve?</label>
            <textarea id="message" name="message" required rows={6} className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-600 dark:border-neutral-700" />
            <label htmlFor="consent" className="text-sm text-neutral-700 dark:text-neutral-300">
              I agree to be contacted about this inquiry and accept the{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:no-underline">Privacy Policy</Link>.
            </label>
          </div>

          <div className="pt-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" aria-label="Send message to Zyorix">
              Send message
            </button>
          </div>
        </form>
      </section>

      <Script id="ld-contact" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zyorix",
          url: "https://zyorix.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Zyorix",
            email: "info@zyorix.com",
            url: "https://zyorix.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@zyorix.com",
            },
          },
        })}
      </Script>
    </main>
  );
}
