// components/Header.tsx
import Link from "next/link";

const NAV = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
          {/* Brand — logo only; 40px height; CLS reserved; dark-mode via invert */}
          <Link href="/" aria-label="Zyorix — Home" className="block leading-none">
            {/* Light theme */}
            <img
              src="/zyorix-logo-embedded.svg"
              alt="Zyorix"
              width={220}
              height={40}
              className="block h-10 w-auto dark:hidden"
              decoding="async"
              fetchPriority="high"
            />
            {/* Dark theme (use same SVG but force it to white) */}
            <img
              src="/zyorix-logo-embedded.svg"
              alt="Zyorix"
              width={220}
              height={40}
              className="hidden h-10 w-auto brightness-0 invert contrast-125 dark:block"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* Nav */}
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
