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
      <p>This Privacy Policy describes how Zyorix (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information in connection with your use of our website (zyorix.com) and the services we provide. This policy is effective from 18th September 2025.</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> When you contact us, subscribe to our newsletter, or engage our services, you may provide us with personal information such as your name, email address, phone number, and job title.</li>
        <li><strong>Usage Data:</strong> We automatically collect information about your interaction with our website, such as your IP address, browser type, pages visited, and the time and date of your visit. We use this information to improve our website and services.</li>
        <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website. Please see our Cookie Policy for more details.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide, operate, and maintain our services.</li>
        <li>To improve, personalize, and expand our services.</li>
        <li>To understand and analyze how you use our services.</li>
        <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as website hosting, data analysis, and marketing services. These third parties are obligated to protect your information and are not authorized to use it for any other purpose.</p>

      <h2>4. Your Data Protection Rights</h2>
      <p>Under UK data protection law, you have rights including:</p>
      <ul>
        <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
        <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
      </ul>
      <p>To exercise any of these rights, please contact us at info@zyorix.com.</p>

      <hr />

      <p><strong>Independence Disclaimer:</strong> Zyorix is an independent FinOps consultancy. We do not resell cloud services; all optimisation work is advisory.</p>
    </main>
  );
}