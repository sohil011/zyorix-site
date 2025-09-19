import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms of Service | Zyorix — FinOps Consulting",
  description:
    "Zyorix Terms of Service covering engagement scope, fees, confidentiality, liability, and governing law (England & Wales).",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | Zyorix — FinOps Consulting",
    description:
      "Engagement terms for Zyorix FinOps services: scope, fees, confidentiality, liability, termination, and governing law.",
    url: "https://zyorix.com/terms",
    siteName: "Zyorix",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main id="main" className="prose prose-neutral mx-auto max-w-3xl px-4 py-12 dark:prose-invert">
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service (“Terms”) govern your use of the website and the professional services
        provided by Zyorix (“we”, “us”). By engaging Zyorix or using this website, you agree to these Terms.
      </p>

      <h2>1. Services &amp; Engagement</h2>
      <p>
        We provide FinOps consulting and related services. Scope and deliverables are defined in an
        agreed Statement of Work (SOW) or written proposal. In case of conflict, the SOW prevails.
      </p>

      <h2>2. Fees &amp; Payment</h2>
      <ul>
        <li>Fees may be fixed, sprint-based, or monthly retainers as specified in the SOW.</li>
        <li>Invoices are due within 14 days unless otherwise stated. Late payments may incur interest at the statutory rate.</li>
        <li>Taxes, duties, and bank fees (if any) are your responsibility.</li>
      </ul>

      <h2>3. Client Responsibilities</h2>
      <ul>
        <li>Provide timely access to relevant information, systems, and stakeholders.</li>
        <li>Ensure appropriate permissions and security policies for read-only or agreed access.</li>
        <li>Make decisions and approvals promptly to avoid delays to delivery.</li>
      </ul>

      <h2>4. Confidentiality</h2>
      <p>
        Both parties will keep confidential information private and use it only for the engagement.
        Confidentiality obligations survive termination. We may reference your company name/logo as a client
        only with prior written consent.
      </p>

      <h2>5. Data Protection</h2>
      <p>
        We process personal data in accordance with UK GDPR and the Data Protection Act 2018. For details,
        see our <Link href="/privacy">Privacy Policy</Link>. Where required, a separate Data Processing Agreement (DPA)
        can be executed.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        Pre-existing IP of each party remains that party’s property. Unless otherwise agreed, deliverables
        produced under the SOW are licensed to you for internal business use. Third-party tools remain governed by their licenses.
      </p>

      <h2>7. Warranties &amp; Disclaimers</h2>
      <p>
        We provide services with reasonable skill and care. We do not warrant uninterrupted operation or specific financial outcomes.
        Savings depend on your usage, risk appetite, and implementation of recommendations.
      </p>

      <h2>8. Liability</h2>
      <p>
        To the maximum extent permitted by law, neither party is liable for indirect or consequential loss.
        Our aggregate liability under an engagement is limited to the fees paid in the 12 months preceding the claim.
        Nothing limits liability for fraud or wilful misconduct.
      </p>

      <h2>9. Term &amp; Termination</h2>
      <ul>
        <li>These Terms apply for the duration of website use and any SOW.</li>
        <li>Either party may terminate an SOW for material breach if not cured within 14 days of written notice.</li>
        <li>On termination, you will pay for work performed and reasonable non-cancelable commitments.</li>
      </ul>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these Terms from time to time. The latest version will be posted here with the effective date.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions? Email <a href="mailto:info@zyorix.com">info@zyorix.com</a> or use our <Link href="/contact">Contact</Link> page.
      </p>

      <Script id="ld-terms" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          url: "https://zyorix.com/terms",
          publisher: { "@type": "Organization", name: "Zyorix", url: "https://zyorix.com" }
        })}
      </Script>

      <hr className="!mt-8 !mb-4" />
      <p className="!text-sm !text-neutral-600 dark:!text-neutral-400">
        Zyorix is an independent FinOps consultancy. We do not resell cloud services; all optimisation work is advisory.
      </p>
    </main>
  );
}
