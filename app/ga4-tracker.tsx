"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { gaEvent } from "@/lib/ga";

// This component uses usePathname and useSearchParams, so it must be
// wrapped in a <Suspense> boundary in the layout file.
export default function GA4Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    gaEvent("page_view", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleCTAClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const ctaElement = target.closest<HTMLElement>("[data-ga-event]");

      if (ctaElement) {
        const eventName = ctaElement.dataset.gaEvent;
        if (!eventName) return;

        const params: { [key: string]: string | undefined } = {};
        for (const key in ctaElement.dataset) {
          if (key.startsWith("ga") && key !== "gaEvent") {
            const paramKey = key.substring(2).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
            params[paramKey] = ctaElement.dataset[key];
          }
        }
        gaEvent(eventName, params);
      }
    };

    document.addEventListener("click", handleCTAClick);

    return () => {
      document.removeEventListener("click", handleCTAClick);
    };
  }, []);

  return null;
}
