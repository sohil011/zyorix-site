import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pricing | Zyorix",
  description: "Transparent pricing for FinOps consulting services. Understand our engagement models and typical investment.",
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

export default function Page() {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h1>
        <div className="mt-8 space-y-4 text-neutral-700 dark:text-neutral-300">
          <p>Most of our work is with SaaS and digital-first companies spending £30k+ monthly on cloud.</p>
          <p>Pricing depends on spend tier and engagement model. Most clients invest between £5k–£20k per engagement. Typical optimisation sprints for our target market range £8k–£15k.</p>
          <p>For smaller teams (£2k–£10k/month cloud spend), we occasionally run selective starter engagements. These are designed as training wheels — tightly scoped, fixed-fee projects to build momentum and case studies — not as a long-term model.</p>
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
            See engagement models and deliverables →
          </Link>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
