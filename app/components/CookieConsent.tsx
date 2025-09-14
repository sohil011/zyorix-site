"use client";
import { useEffect, useState } from "react";

const GA_ID = "G-F7ED6CW82G"; // your real GA4 ID

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  // On mount, respect prior consent
  useEffect(() => {
    const consent = typeof window !== "undefined" ? localStorage.getItem("ga_consent") : null;
    setShow(consent !== "accepted");
    if (consent === "accepted") loadGA();
  }, []);

  function loadGA() {
    // guard against double init
    // @ts-ignore
    if (typeof window === "undefined" || (window as any).__gaLoaded) return;
    // @ts-ignore
    (window as any).__gaLoaded = true;

    // insert GA loader
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    // wire gtag
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    }

    // Consent Mode v2: default deny
    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function accept() {
    localStorage.setItem("ga_consent", "accepted");
    setShow(false);

    // ensure dataLayer exists then grant
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    }
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    loadGA();
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: "auto 16px 16px 16px",
        background: "#0b132b",
        color: "#fff",
        padding: "12px",
        borderRadius: "12px",
        zIndex: 9999,
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <span>We use analytics only with your consent.</span>
      <button
        onClick={accept}
        aria-label="Accept analytics cookies"
        style={{
          background: "#1abc9c",
          border: "none",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        Accept
      </button>
    </div>
  );
}
