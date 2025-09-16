import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyorix",
  description: "This page outlines the privacy policy for Zyorix.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-12 prose prose-slate dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Content to be filled later.</p>
    </main>
  );
}