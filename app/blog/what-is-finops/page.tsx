import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "What is FinOps? A Practical Guide | Zyorix",
  description: "A primer on the FinOps framework, lifecycle, and core principles for managing cloud costs effectively.",
  alternates: { canonical: "/blog/what-is-finops" },
};

const faqs = [
  {
    q: "Is FinOps just for large enterprises?",
    a: "No, FinOps principles can be applied by any organization using cloud services, regardless of size. The goal is to maximize business value, which is relevant for everyone.",
  },
  {
    q: "Does FinOps replace DevOps?",
    a: "Not at all. FinOps is a cultural practice that complements DevOps, integrating financial accountability into the development lifecycle. It's about collaboration, not replacement.",
  },
  {
    q: "How long does it take to see results from FinOps?",
    a: "Initial savings and efficiency gains can often be seen in the first few weeks of adopting basic FinOps practices like cost monitoring and anomaly detection. Deeper, sustained value comes from maturing your practice over time.",
  },
];

export default function BlogPost() {
  return (
    <>
      <main id="main" className="prose prose-neutral mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="underline hover:no-underline">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900">What is FinOps?</li>
          </ol>
        </nav>

        <header>
          <h1 className="text-3xl font-bold tracking-tight">What is FinOps? A Practical Guide</h1>
          <p className="mt-4 text-neutral-600">Published on 18 Sep 2025. Last updated on 18 Sep 2025.</p>
        </header>

        <article>
          <p>FinOps, short for Cloud Financial Operations, is a cultural practice and operational model that brings financial accountability to the variable spend model of cloud, enabling distributed teams to make business trade-offs between speed, cost, and quality.</p>

          <h2 className="text-2xl font-bold tracking-tight">The FinOps Lifecycle</h2>
          <p>The FinOps journey is an iterative process, typically broken down into three phases:</p>
          <ul>
            <li><strong>Inform:</strong> Gaining visibility into cloud spending. This involves accurate allocation, benchmarking, and forecasting.</li>
            <li><strong>Optimize:</strong> Taking action to reduce waste and improve efficiency. This includes rightsizing resources and leveraging commitment-based discounts.</li>
            <li><strong>Operate:</strong> Defining and scaling operational processes. This phase is about continuous improvement and aligning cloud operations with business objectives.</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight">Core Principles of FinOps</h2>
          <p>The FinOps Foundation outlines several core principles, including:</p>
          <ul>
            <li>Teams need to collaborate.</li>
            <li>Everyone takes ownership of their cloud usage.</li>
            <li>A centralized team drives the FinOps practice.</li>
            <li>Decisions are driven by the business value of cloud.</li>
          </ul>
        </article>

        <aside className="mt-12 rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold">About the Author</h3>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <p className="font-medium">Sohil Bhayani</p>
              <p className="text-sm text-neutral-600">FOCP & FOCUS Certified FinOps Practitioner</p>
            </div>
          </div>
        </aside>

        <div className="mt-12 text-center">
            <Link href="/#" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Download the Maturity Checklist
            </Link>
        </div>
      </main>

      <FAQ qa={faqs} title="Frequently Asked Questions about FinOps" />

      <Script id="faq-json-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}
      </Script>
    </>
  );
}
