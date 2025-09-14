"use client";
import { useEffect, useState } from "react";

const GA_ID = "G-F7ED6CW82G"; // your real GA4 ID

export default function CookieConsent() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide banner if consent was already given
    if (typeof window !== "undefined" && localStorage.getItem("analytics-consent") === "accepted") {
      setShow(false);
    }
  }, []);

  function enableAnalytics() {
    // Define dataLayer/gtag BEFORE loading the script
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(){ window.dataLayer.push(arguments); }
    // @ts-ignore
    gtag("js", new Date());
    // @ts-ignore
    gtag("config", GA_ID, { anonymize_ip: true });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  function accept() {
    localStorage.setItem("analytics-consent", "accepted");
    enableAnalytics();
    setShow(false);
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
      <button onClick={accept} aria-label="Accept analytics cookies">Accept</button>
    </div>
  );
}
