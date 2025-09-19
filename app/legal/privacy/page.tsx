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

      <hr className="!mt-8 !mb-4" />
      <p className="!text-sm !text-neutral-600 dark:!text-neutral-400">
        Zyorix is an independent FinOps consultancy. We do not resell cloud services; all optimisation work is advisory.
      </p>
    </main>
  );
}