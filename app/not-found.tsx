/* app/not-found.tsx */
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-sm font-semibold tracking-wide text-blue-600">404</p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="max-w-prose text-neutral-600 dark:text-neutral-300">
        The page you’re looking for doesn’t exist or may have moved. Try the links below.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-label="Go to Zyorix home"
        >
          Go home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
          aria-label="View our Services"
        >
          View services
        </Link>
      </div>

      <nav aria-label="Sitemap" className="mt-4">
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          <li><Link className="hover:underline" href="/pricing">Pricing</Link></li>
          <li><Link className="hover:underline" href="/case-studies">Case Studies</Link></li>
          <li><Link className="hover:underline" href="/blog">Blog</Link></li>
          <li><Link className="hover:underline" href="/about">About</Link></li>
          <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
          <li><Link className="hover:underline" href="/terms">Terms</Link></li>
        </ul>
      </nav>
    </main>
  );
}
