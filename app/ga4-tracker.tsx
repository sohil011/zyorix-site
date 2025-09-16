'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gaEvent } from '@/lib/ga';

export default function GA4Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Fire page_view on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
      window.gtag('event', 'page_view', { page_path: url });
    }
  }, [pathname, searchParams]);

  // Delegate click events for any element with data-ga-*
  useEffect(() => {
    const handler = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>('[data-ga-event]');
      if (!el) return;
      const action = el.getAttribute('data-ga-event') || '';
      if (!action) return;

      const params: Record<string, any> = {};
      for (const attr of Array.from(el.attributes)) {
        if (attr.name.startsWith('data-ga-') && attr.name !== 'data-ga-event') {
          const key = attr.name.replace('data-ga-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          params[key] = attr.value;
        }
      }
      gaEvent(action, params);
    };

    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true } as any);
  }, []);

  return null;
}
