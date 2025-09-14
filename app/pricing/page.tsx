export const dynamic = "force-static";

const faqLd = {
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How fast can results be delivered?","acceptedAnswer":{"@type":"Answer","text":"Most clients see 15–35% savings opportunities identified within 2 weeks and realise savings within 6 weeks."}},
    {"@type":"Question","name":"Do we need to buy new tools?","acceptedAnswer":{"@type":"Answer","text":"No. We use your existing AWS/Azure/GCP data (e.g., CUR/Billing exports) to drive actionable changes."}}
  ]
};

export default function Page(){
  return (
    <>
      {/* YOUR PRICING UI HERE */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
