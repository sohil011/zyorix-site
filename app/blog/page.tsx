import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Blog | Zyorix — FinOps Consulting",
  description:
    "Practical FinOps posts: baselines, KPIs, optimization sprints, allocation & governance, and operating cadences.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Zyorix — FinOps Consulting",
    description:
      "Practical FinOps notes: how to baseline, prioritize savings, and align spend to value.",
    url: "https://zyorix.com/blog",
    siteName: "Zyorix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-600 dark:text-neutral-300">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline underline-offset-2 hover:no-underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-neutral-900 dark:text-white">Blog</li>
        </ol>
      </nav>

      <header className="mb-10 sm:mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          Practical FinOps notes—clear, short, and focused on measurable outcomes.
        </p>
      </header>

      <section aria-labelledby="posts-heading" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <h2 id="posts-heading" className="sr-only">Posts</h2>

        <article className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
          <h3 className="text-lg font-semibold">
            <Link
              href="/blog/finops-health-check"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Read blog post: What is a FinOps Health Check?"
            >
              What is a FinOps Health Check?
            </Link>
          </h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            <time dateTime="2025-09-14">Sep 14, 2025</time>
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            A 2–3 week baseline across spend, tagging, KPIs, and anomalies—ending with a prioritized savings plan.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/finops-health-check"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
              aria-label="Read: What is a FinOps Health Check?"
            >
              Read post
            </Link>
          </div>
        </article>
      </section>

      <Script id="ld-blog" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Zyorix Blog",
          url: "https://zyorix.com/blog",
        })}
      </Script>
    </main>
  );
}
