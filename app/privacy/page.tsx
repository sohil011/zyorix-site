import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyorix — FinOps Consulting",
  description:
    "Read Zyorix's Privacy Policy to understand how we handle your data in compliance with UK GDPR and Data Protection Act 2018.",
  alternates: { canonical: "https://zyorix.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>
        Zyorix is committed to protecting your privacy. This policy explains how we
        collect, use, and safeguard your personal information in accordance with
        the UK GDPR and Data Protection Act 2018.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect contact details, account information, and usage data when
        you interact with our website or services.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your data to provide services, communicate with you, improve our
        website, and comply with legal obligations.
      </p>

      <h2>3. Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes
        described in this policy.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You have the right to access, rectify, erase, or restrict processing of
        your personal data. Contact us at{" "}
        <a href="mailto:info@zyorix.com">info@zyorix.com</a>.
      </p>

      <h2>5. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:info@zyorix.com">info@zyorix.com</a>.
      </p>

      {/* JSON-LD for SEO */}
      <Script id="ld-privacy" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://zyorix.com/privacy",
          publisher: {
            "@type": "Organization",
            name: "Zyorix",
            url: "https://zyorix.com",
          },
        })}
      </Script>
    </main>
  );
}
