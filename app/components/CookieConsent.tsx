"use client";
import { useEffect, useState } from "react";

const GA_ID = "G-F7ED6CW82G"; // your GA4 ID

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(localStorage.getItem("ga_consent") !== "accepted");
  }, []);

  function loadGA() {
    if ((window as any).__gaLoaded) return; // prevent double init
    (window as any).__gaLoaded = true;

    // Consent Mode v2: default deny until user accepts
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    }
    // @ts-ignore
    gtag("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    // @ts-ignore
    gtag("js", new Date());
    // @ts-ignore
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function accept() {
    localStorage.setItem("ga_consent", "accepted");
    setShow(false);
    // @ts-ignore
    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    }
    // grant on click (Consent Mode update)
    // @ts-ignore
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    loadGA();
  }

  useEffect(() => {
    // If already accepted previously, auto-load GA on mount
    if (!show) loadGA();
  }, [show]);

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
      <button onClick={accept} aria-label="Accept analytics cookies">
        Accept
      </button>
    </div>
  );
}
