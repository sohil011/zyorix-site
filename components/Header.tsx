'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type NavItem = { name: string; href: string };

const NAV: NavItem[] = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change (prevents stale open state)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      {/* Skip link (a11y) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
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

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="ml-6 hidden items-center gap-1 sm:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={[
                'rounded-xl px-3 py-2 text-sm font-medium transition',
                isActive(item.href)
                  ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white',
              ].join(' ')}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-xl border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            <span className="relative block h-3.5 w-4">
              {/* simple hamburger / close icon */}
              <span
                aria-hidden="true"
                className={[
                  'absolute left-0 block h-0.5 w-4 transform rounded bg-current transition',
                  open ? 'top-1.5 rotate-45' : 'top-0 rotate-0',
                ].join(' ')}
              />
              <span
                aria-hidden="true"
                className={[
                  'absolute left-0 block h-0.5 w-4 transform rounded bg-current transition',
                  open ? 'opacity-0' : 'top-1.5',
                ].join(' ')}
              />
              <span
                aria-hidden="true"
                className={[
                  'absolute left-0 block h-0.5 w-4 transform rounded bg-current transition',
                  open ? 'top-1.5 -rotate-45' : 'top-3 rotate-0',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={[
          'sm:hidden',
          open ? 'block' : 'hidden',
        ].join(' ')}
      >
        <ul className="mx-auto grid max-w-6xl gap-1 px-4 pb-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={[
                  'block rounded-xl px-3 py-2 text-sm font-medium transition',
                  isActive(item.href)
                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white',
                ].join(' ')}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
