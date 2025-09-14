import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zyorix.com";
  const now = new Date();

  const paths = [
    "",

    // Services
    "services",
    "services/health-check",
    "services/optimization",
    "services/allocation-governance",
    "services/managed-finops",

    // Core
    "pricing",
    "case-studies",
    "case-studies/saas-scaleup-28-savings",
    "about",
    "contact",
    "contact/success",

    // Blog
    "blog",
    "blog/finops-health-check",

    // Legal
    "privacy",
    "terms",
  ];

  return paths.map((p) => {
    const url = p ? `${base}/${p}` : base;
    return {
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p === "" ? 1 : 0.7,
    };
  });
}
