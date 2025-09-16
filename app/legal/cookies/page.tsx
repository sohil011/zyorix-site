import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Zyorix",
  description: "This page outlines the cookie policy for Zyorix.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-12 prose prose-slate dark:prose-invert">
      <h1>Cookie Policy</h1>
      <p>Content to be filled later.</p>
    </main>
  );
}