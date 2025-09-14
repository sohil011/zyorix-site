// components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-neutral-900 hover:opacity-90 dark:text-white"
              aria-label="Zyorix — Home"
            >
              Zyorix
            </Link>
            <span className="hidden text-xs text-neutral-500 sm:inline dark:text-neutral-400">
              FinOps Consulting
            </span>
          </div>

          {/* Primary Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/pricing" className="hover:underline">
              Pricing
            </Link>
            <Link href="/case-studies" className="hover:underline">
              Case Studies
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Zyorix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
