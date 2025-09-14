import Link from "next/link";

const NAV = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-neutral-800 dark:bg-neutral-950/70"
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          © {year} Zyorix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
