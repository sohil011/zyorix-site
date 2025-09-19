// app/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Zyorix — FinOps Consulting",
  description:
    "Zyorix helps teams cut 20–40% cloud waste, align spend to value, and operationalize FinOps with clear deliverables and measurable outcomes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Zyorix — FinOps Consulting",
    description:
      "Outcomes-first FinOps consultancy: assessments, optimization sprints, allocation & governance, and managed FinOps.",
    url: "https://zyorix.com/about",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const certifications = [
  {
    src: "/img/certs/finops-focus-analyst-sohil-bhayani.jpg",
    alt: "FinOps Certified FOCUS Analyst — Certificate, Sohil Bhayani",
    caption: "Verify",
    href: "https://verify.skilljar.com/c/qhgq45czb2p2",
    width: 1200,
    height: 927,
  },
  {
    src: "/img/certs/focp-sohil-bhayani.png",
    alt: "FinOps Certified Practitioner (FOCP) — Certificate, Sohil Bhayani",
    caption: "Download",
    href: "/img/certs/focp-sohil-bhayani.pdf",
    width: 1200,
    height: 927,
  },
  {
    src: "/img/certs/coursera-cloud-finops-specialization.png",
    alt: "Coursera Cloud FinOps Specialization — Certificate, Sohil Bhayani",
    caption: "Verify",
    href: "https://coursera.org/verify/specialization/ZTVD4PGP0SCP",
    width: 1200,
    height: 927,
  },
  {
    src: "/img/certs/aws-cost-explorer-completion.png",
    alt: "AWS Cost Explorer — Completion Certificate, Sohil",
    caption: "View",
    href: "/img/certs/aws-cost-explorer-completion.pdf",
    width: 1200,
    height: 927,
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 text-sm text-neutral-600 dark:text-neutral-300"
      >
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/"
              className="underline underline-offset-2 hover:no-underline"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">
            About
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10 sm:mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Zyorix
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          We’re a FinOps consultancy focused on measurable outcomes. We help
          engineering, finance, and product teams reduce cloud waste by 20–40%,
          align spend to value, and operationalize FinOps practices with clear
          KPIs and guardrails.
        </p>
      </header>

      {/* Founder Bio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Founder</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Sohil Bhayani — FinOps Certified Practitioner (FOCP) and FinOps Certified FOCUS Analyst. Founder of Zyorix, with hands-on expertise in AWS cost optimisation, Azure/GCP labs, and cloud financial governance. Coursera Cloud FinOps Specialization and AWS Cost Explorer completion reinforce practical, tool-level proficiency.
        </p>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center">Certifications</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <figure key={cert.alt} className="text-center">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                loading="lazy"
                className="grayscale transition hover:grayscale-0"
              />
              <figcaption className="mt-4 text-sm">
                <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {cert.caption}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 3-up value props */}
      <section
        aria-labelledby="values-heading"
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        <h2 id="values-heading" className="sr-only">
          What we value
        </h2>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">Outcomes first</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            We start from impact, not tooling. Baselines, KPIs, savings
            confidence scores, and a 30/60/90 plan in every engagement.
          </p>
        </article>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">Operate with you</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            We use your stack—dashboards, tagging, showback, anomaly ops, and
            backlog delivery in your workflow. No vendor lock-in.
          </p>
        </article>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">Executive-ready</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Clear exec packs: KPI trends, savings realized & forecast,
            confidence, and risks. Value alignment you can present.
          </p>
        </article>
      </section>

      {/* Approach */}
      <section
        aria-labelledby="approach-heading"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <h2 id="approach-heading" className="sr-only">
          Our approach
        </h2>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">How we work</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Health Check to baseline and prioritize.</li>
            <li>Optimization Sprint for hands-on savings.</li>
            <li>Allocation &amp; governance to scale.</li>
            <li>Managed FinOps cadence if you want ongoing delivery.</li>
          </ul>
        </article>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">What’s included</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
            <li>KPI snapshot and findings deck.</li>
            <li>Top savings actions with impact &amp; confidence.</li>
            <li>30/60/90 roadmap and guardrails.</li>
            <li>Backlog items delivered in your tools.</li>
          </ul>
        </article>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/40 dark:bg-blue-950/30"
      >
        <h2 id="cta-heading" className="sr-only">
          Work with Zyorix
        </h2>
        <p className="text-neutral-900 dark:text-white">
          Ready to cut waste and align spend to value? Start with a{" "}
          <Link
            href="/services/health-check"
            className="underline underline-offset-2 hover:no-underline"
          >
            FinOps Health Check
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label="Book a discovery call with Zyorix"
          >
            Book a discovery call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
            aria-label="Browse Zyorix services"
          >
            Explore services
          </Link>
        </div>
      </section>

      {/* JSON-LD Organization */}
      <Script id="ld-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zyorix",
          url: "https://zyorix.com",
          email: "info@zyorix.com",
          sameAs: [],
        })}
      </Script>
    </main>
  );
}
