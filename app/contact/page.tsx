import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | Zyorix — FinOps Consulting",
  description: "Book a call with Zyorix to reduce 20–40% cloud waste, align spend to value, and operationalize FinOps. Quick form, we reply within 1 business day.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

const FORM_ACTION = "https://formspree.io/f/xxxxxxxx"; // TODO: Replace with a real endpoint

export default function ContactPage() {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">Contact</li>
          </ol>
        </nav>

        <header className="mb-10 sm:mb-14">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Zyorix</h1>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Tell us a bit about your cloud and goals. We respond within 1 business day. Prefer email?{" "}
            <a href="mailto:info@zyorix.com" className="underline underline-offset-2 hover:no-underline">info@zyorix.com</a>.
          </p>
        </header>

        <section aria-labelledby="contact-heading" className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h2 id="contact-heading" className="sr-only">Contact form</h2>
          <form action={FORM_ACTION} method="POST" className="grid grid-cols-1 gap-y-6">
            <input type="hidden" name="_subject" value="Zyorix Contact" />
            <div className="hidden">
                <label htmlFor="company_website">Company Website</label>
                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">Your name</label>
              <input id="name" name="name" required autoComplete="name" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">Work email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">What would you like to achieve?</label>
              <textarea id="message" name="message" required rows={6} className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-600" />
            </div>
            <div className="pt-2">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" data-evt="cta_contact_submit">
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Script id="ld-contact" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://zyorix.com/contact",
        })}
      </Script>
    </>
  );
}
