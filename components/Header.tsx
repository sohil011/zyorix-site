// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <>
      {/* Skip link (appears only when focused) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[9999] focus:rounded-md focus:bg-blue-700 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header
        role="banner"
        className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo: decorative inside an already-labeled link (avoid redundant alt) */}
          <Link href="/" aria-label="Zyorix Home" className="flex items-center">
            <Image
              src="/zyorix-logo.svg"
              alt=""                // decorative – link already has accessible name
              width={112}
              height={24}
              priority
              aria-hidden="true"
            />
          </Link>

          {/* Nav: touch targets ≥44px via px-3 py-2 (no visual change) */}
          <nav role="navigation" aria-label="Main navigation" className="flex gap-1 text-sm font-medium">
            <Link href="/services" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">Services</Link>
            <Link href="/pricing" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">Pricing</Link>
            <Link href="/case-studies" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">Case Studies</Link>
            <Link href="/about" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">About</Link>
            <Link href="/blog" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">Blog</Link>
            <Link href="/contact" className="rounded-md px-3 py-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
