import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing | Zyorix — FinOps Consulting",
  description: "Transparent pricing for FinOps services. We offer fixed-fee engagements and monthly retainers to suit your needs.",
  alternates: { canonical: "/pricing" },
};

const faqLd = {
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How fast can results be delivered?","acceptedAnswer":{"@type":"Answer","text":"Most clients see 15–35% savings opportunities identified within 2 weeks and realise savings within 6 weeks."}},
    {"@type":"Question","name":"Do we need to buy new tools?","acceptedAnswer":{"@type":"Answer","text":"No. We use your existing AWS/Azure/GCP data (e.g., CUR/Billing exports) to drive actionable changes."}}
  ]
};

export default function Page(){
  return (
    <>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">Pricing</li>
          </ol>
        </nav>

        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h1>
        </header>

        <div className="prose prose-neutral max-w-none">
            <p>Most of our work is with SaaS and digital-first companies spending £30k+ monthly on cloud.</p>
            <p>Pricing depends on spend tier and engagement model. Most clients invest between £5k–£20k per engagement. Typical optimisation sprints for our target market range £8k–£15k.</p>
            <p>For smaller teams (£2k–£10k/month cloud spend), we occasionally run selective starter engagements. These are designed as training wheels — tightly scoped, fixed-fee projects to build momentum and case studies — not as a long-term model.</p>
            <p>For more details on what&apos;s included in each engagement, please see our <Link href="/services">Services page</Link>.</p>
        </div>

        {/* YOUR PRICING UI HERE */}

      </main>
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
