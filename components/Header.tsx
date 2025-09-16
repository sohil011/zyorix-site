"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;
  const next = current === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next!)}
      className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}

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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 rounded bg-blue-600 px-3 py-2 text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
          <Link href="/" aria-label="Zyorix — Home" className="block leading-none">
            <Image
              src="/zyorix-logo-embedded.svg"
              alt="Zyorix logo"
              width={200}
              height={40}
              priority
              className="block h-10 w-auto"
              sizes="(max-width: 640px) 132px, 200px"
            />
          </Link>

          <div className="flex items-center gap-3">
            <nav aria-label="Primary" className="hidden sm:flex flex-wrap items-center gap-1">
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
