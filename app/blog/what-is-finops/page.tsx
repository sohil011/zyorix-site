/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "What is FinOps? Complete Guide for SaaS & Digital-First Companies | Zyorix",
  description: "Learn what FinOps is and how it helps SaaS companies optimize cloud costs across AWS, Azure, and GCP. A complete guide to FinOps consulting services.",
  alternates: { canonical: "/blog/what-is-finops" },
};

const faqItems = [
    {
        q: "What is the first step in a FinOps journey?",
        a: "The first step is typically a Health Check to gain visibility into your cloud spending, establish baselines, and identify quick wins for cost optimization."
    },
    {
        q: "How long does it take to see results from FinOps?",
        a: "With a focused Optimization Sprint, most companies can realize significant savings (15-35%) within 4-8 weeks. The goal is to build momentum quickly."
    },
    {
        q: "Is FinOps just about saving money?",
        a: "No, it&apos;s about making money. FinOps is about driving business value from the cloud. This includes cost savings, but also improving speed, quality, and accountability."
    }
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
};

export default function Page() {
    return (
        <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16 prose dark:prose-invert">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">What is FinOps? A Complete Guide for SaaS & Digital-First Companies</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Published on 2025-09-19 | Updated on 2025-09-19</p>

            <section>
                <h2>Overview</h2>
                <p>FinOps is a cultural practice that brings financial accountability to the variable spend model of cloud, enabling distributed teams to make business trade-offs between speed, cost, and quality. For SaaS and digital-first companies, where cloud is a primary driver of cost of goods sold (COGS), FinOps consulting services are essential for sustainable growth.</p>
            </section>

            <section>
                <h2>Common Challenges</h2>
                <p>Without a FinOps practice, companies often face challenges like budget overruns, lack of visibility into cloud spend, low engineering velocity due to cost concerns, and an inability to attribute costs to specific products or features. This is where AWS FinOps, Azure FinOps, and GCP FinOps expertise becomes critical.</p>
            </section>

            <section>
                <h2>Maturity (Crawl/Walk/Run)</h2>
                <p>The FinOps journey is a crawl, walk, run process. In the 'crawl' phase, the focus is on visibility and basic cost optimization. The 'walk' phase involves building automated processes and governance. The 'run' phase is about continuous optimization and aligning cloud spend with business value.</p>
            </section>

            <section>
                <h2>Benefits (Cost, Speed, Accountability)</h2>
                <p>Effective cloud cost optimisation through FinOps delivers more than just savings. It boosts developer velocity by providing cost guardrails, improves accountability by assigning ownership of cloud spend, and ultimately enhances business value by ensuring every dollar spent on the cloud is driving a return.</p>
            </section>

            <section>
                <h2>The Zyorix Method</h2>
                <p>At Zyorix, we follow a proven method to accelerate your FinOps journey:</p>
                <ul>
                    <li><strong>Health Check:</strong> A rapid assessment to baseline your environment.</li>
                    <li><strong>Optimization Sprint:</strong> Hands-on implementation of savings opportunities.</li>
                    <li><strong>Managed FinOps:</strong> Ongoing support to maintain and improve your FinOps practice.</li>
                    <li><strong>Allocation & Governance:</strong> Building the foundation for long-term success.</li>
                </ul>
            </section>

            <hr className="!my-8" />

            <section>
                <h3 className="text-xl font-semibold">About the Author</h3>
                <p className="text-sm">Written by Sohil Bhayani — FinOps Certified Practitioner (FOCP) and FOCUS Analyst.</p>
            </section>

            <section className="mt-8">
                <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <details key={i} className="group">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h4 className="text-lg font-medium">{item.q}</h4>
                                <span className="relative ml-4 h-5 w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                 <Link href="/#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Download our free FinOps Maturity Checklist →
                </Link>
            </section>

            <Script id="faq-ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </main>
    )
}
