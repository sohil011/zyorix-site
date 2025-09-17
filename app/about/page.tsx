import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Zyorix | FinOps Consulting",
  description: "Zyorix is a practitioner-led FinOps consultancy, helping teams master cloud costs with proven methods like the 6-Week FinOps Sprint™.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
};

const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sohil",
    "jobTitle": "FinOps Principal",
    "worksFor": {
        "@type": "Organization",
        "name": "Zyorix"
    }
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://zyorix.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <Script id="ld-person" type="application/ld+json">
        {JSON.stringify(person)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16 prose prose-slate">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium">About</li>
          </ol>
        </nav>

        <h1>About Zyorix</h1>
        <p className="lead">
          Zyorix is an independent, practitioner-led FinOps consultancy. We don&apos;t sell software; we deliver outcomes.
        </p>

        <p>
          Founded by a FinOps principal with FOCP and FOCUS Analyst credentials, our approach is built on battle-tested methods that work in the real world. We use your existing tools and data to find savings and build capabilities, turning recommendations into reality.
        </p>

        <h2>Our Method</h2>
        <p>
          We use two core frameworks to deliver results fast:
        </p>
        <ul>
          <li><strong>3-Step Health Check™:</strong> A rapid assessment to baseline your environment, find quick wins, and build a 90-day plan.</li>
          <li><strong>6-Week FinOps Sprint™:</strong> A hands-on engagement to aggressively cut waste and implement lasting governance.</li>
        </ul>
        <p>
            We are UK-based and work with teams across AWS, Azure, and GCP.
        </p>

        <div className="not-prose mt-10 flex gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_about">Book a call</Link>
          <Link href="/downloads/finops-health-check-template.xlsx" download className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="download_template_about">Download Template</Link>
        </div>
      </main>
    </>
  );
}
