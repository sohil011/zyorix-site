export const dynamic = "force-static";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://zyorix.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "SaaS scaleup – 28% savings", item: "https://zyorix.com/case-studies/saas-scaleup-28-savings" }
  ]
};

export default function Page(){
  return (
    <>
      {/* YOUR CASE STUDY UI HERE */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
