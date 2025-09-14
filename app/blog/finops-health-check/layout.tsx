export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zyorix.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://zyorix.com/blog" },
      { "@type": "ListItem", position: 3, name: "FinOps Health Check", item: "https://zyorix.com/blog/finops-health-check" }
    ]
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
