import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zyorix.com";
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/pricing`, lastModified: now },
    { url: `${base}/case-studies`, lastModified: now },
    { url: `${base}/case-studies/saas-scaleup-28-savings`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
    { url: `${base}/blog/finops-health-check`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/privacy`, lastModified: now },
    { url: `${base}/terms`, lastModified: now }
  ];
  return urls;
}
