import type { MetadataRoute } from "next";
export const revalidate = 0;

const base = "https://zyorix.com";
const pages: Array<{ loc: string; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }> = [
  { loc: "/", changeFrequency: "weekly", priority: 1.0 },
  { loc: "/about", changeFrequency: "yearly", priority: 0.6 },
  { loc: "/services", changeFrequency: "monthly", priority: 0.9 },
  { loc: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { loc: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { loc: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { loc: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { loc: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { loc: "/services/health-check", changeFrequency: "monthly", priority: 0.7 },
  { loc: "/services/optimization", changeFrequency: "monthly", priority: 0.7 },
  { loc: "/services/managed-finops", changeFrequency: "monthly", priority: 0.7 },
  { loc: "/services/allocation-governance", changeFrequency: "monthly", priority: 0.7 },
  { loc: "/case-studies/saas-scaleup-28-savings", changeFrequency: "yearly", priority: 0.6 },
  { loc: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { loc: "/blog/finops-health-check", changeFrequency: "yearly", priority: 0.6 },
  { loc: "/blog/finops-health-check-90-day-plan", changeFrequency: "yearly", priority: 0.6 },
  { loc: "/blog/cloud-cost-myths-busted", changeFrequency: "yearly", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map(p => ({
    url: `${base}${p.loc}`,
    lastModified: now,
    changeFrequency: p.changeFrequency ?? "monthly",
    priority: p.priority ?? 0.5
  }));
}
