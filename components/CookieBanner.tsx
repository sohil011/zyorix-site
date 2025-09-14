"use client";

import { useEffect, useState } from "react";

type Consent = "granted" | "denied" | null;
const STORAGE_KEY = "cookie-consent";

function loadAnalyticsOnce() {
  if (typeof window === "undefined") return;

  // Prevent duplicate loads
  if (document.querySelector('script[data-zyorix-analytics="plausible"]')) return;

  // --- Plausible (simple, privacy-friendly) ---
  const s = document.createElement("script");
  s.setAttribute("data-domain", "zyorix.com");
  s.setAttribute("data-zyorix-analytics", "plausible");
  s.defer = true;
  s.src = "https://plausible.io/js/script.tagged-events.js";
  document.head.appendChild(s);

  // --- If you ever switch to GA4, use this instead (and remove Plausible above) ---
  // const s = document.createElement("script");
  // s.setAttribute("data-zyorix-analytics", "ga4");
  // s.async = true;
  // s.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  // document.head.appendChild(s);
  // const inline = document.createElement("script");
  // inline.text = `
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'G-XXXXXXXXXX');
  // `;
  // document.head.appendChild(inline);
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (saved === "granted") {
        setConsent("granted");
        loadAnalyticsOnce();
        setVisible(false);
      } else if (saved === "denied") {
        setConsent("denied");
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      // If storage is blocked, just show banner
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "granted"); } catch {}
    setConsent("granted");
    setVisible(false);
    loadAnalyticsOnce();
  };

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "denied"); } catch {}
    setConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-6xl px-4 pb-4"
    >
      <div className="rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            We use a lightweight, privacy-friendly analytics tool to understand site usage.{" "}
            We’ll only enable it if you click <span className="font-medium">Accept</span>. You can change your choice later by clearing site data.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={decline}
              className="rounded-xl border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              autoFocus
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
