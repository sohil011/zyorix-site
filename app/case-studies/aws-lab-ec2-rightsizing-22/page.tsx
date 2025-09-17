import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AWS Lab: EC2 Rightsizing Case Study | Zyorix",
  description: "A lab-based case study on reducing EC2 costs by 22% through rightsizing and gp2 to gp3 migration.",
  alternates: { canonical: "/case-studies/aws-lab-ec2-rightsizing-22" },
  robots: { index: true, follow: true },
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AWS Lab: 22% EC2 Savings via Rightsizing & gp2→gp3 Migration",
  "description": "A lab-based case study on reducing EC2 costs by 22% through rightsizing and gp2 to gp3 migration.",
  "author": {
    "@type": "Organization",
    "name": "Zyorix"
  }
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zyorix.com/" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://zyorix.com/case-studies" },
    { "@type": "ListItem", "position": 3, "name": "AWS EC2 Rightsizing", "item": "https://zyorix.com/case-studies/aws-lab-ec2-rightsizing-22" }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="ld-article" type="application/ld+json">
        {JSON.stringify(article)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16 prose prose-slate">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/case-studies" className="underline underline-offset-2 hover:no-underline">Case Studies</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium">AWS EC2 Rightsizing</li>
          </ol>
        </nav>

        <h1>AWS Lab: 22% EC2 Savings</h1>

        <section>
          <h2>Outcome</h2>
          <p>This lab demonstrated a <strong>22% cost reduction</strong> in a sample EC2 environment by applying two common rightsizing techniques.</p>
        </section>

        <section>
          <h2>Method</h2>
          <ol>
            <li><strong>Rightsizing:</strong> Instances were analyzed for CPU and memory utilization over a 14-day period. Over-provisioned instances were downsized to a more appropriate instance type (e.g., from `t3.large` to `t3.medium`).</li>
            <li><strong>Storage Modernization:</strong> EBS volumes were migrated from the older `gp2` generation to the more cost-effective `gp3` generation, providing better performance at a lower price point.</li>
          </ol>
        </section>

        <section>
          <h2>Artifacts</h2>
          <ul>
            <li>AWS Cost Explorer analysis for utilization metrics.</li>
            <li>A simple script to identify and resize instances based on utilization thresholds.</li>
            <li>Anomaly thresholds in AWS Cost Anomaly Detection to guard against unexpected spend spikes post-change.</li>
          </ul>
        </section>

        <section className="mt-10 not-prose">
          <h2>What to do next</h2>
          <div className="flex gap-4">
            <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2" data-evt="cta_contact_case_study">Discuss your use case</Link>
            <Link href="/services/health-check" className="rounded-xl border px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">Start a Health Check</Link>
          </div>
        </section>
      </main>
    </>
  );
}
