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
      <p>This site uses cookies to store information on your computer.</p>
      <p>Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.</p>

      <h2>Necessary Cookies</h2>
      <p>Necessary cookies enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.</p>

      <h2>Analytical Cookies</h2>
      <p>Analytical cookies help us to improve our website by collecting and reporting information on its usage.</p>

      <hr />

      <p><strong>Independence Disclaimer:</strong> Zyorix is an independent FinOps consultancy. We do not resell cloud services; all optimisation work is advisory.</p>
    </main>
  );
}