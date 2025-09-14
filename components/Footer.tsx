// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Zyorix. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-3">
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/pricing" className="hover:underline">Pricing</Link>
            <Link href="/case-studies" className="hover:underline">Case Studies</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
