import type { MetadataRoute } from "next";

export const revalidate = 0; // no cache for sitemap

const base = "https://zyorix.com";

const pages: Array<{ loc: string; lastModified?: string | Date; priority?: number; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  // Core
  { loc: "/", priority: 1.0, changeFrequency: "weekly" },
  { loc: "/about", priority: 0.6, changeFrequency: "yearly" },
  { loc: "/services", priority: 0.9, changeFrequency: "monthly" },
  { loc: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { loc: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { loc: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { loc: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { loc: "/terms", priority: 0.3, changeFrequency: "yearly" },

  // Services detail
  { loc: "/services/health-check", priority: 0.7, changeFrequency: "monthly" },
  { loc: "/services/optimization", priority: 0.7, changeFrequency: "monthly" },
  { loc: "/services/managed-finops", priority: 0.7, changeFrequency: "monthly" },
  { loc: "/services/allocation-governance", priority: 0.7, changeFrequency: "monthly" },

  // Case studies
  { loc: "/case-studies/saas-scaleup-28-savings", priority: 0.6, changeFrequency: "yearly" },

  // Blog hub + posts
  { loc: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { loc: "/blog/finops-health-check", priority: 0.6, changeFrequency: "yearly" },
  { loc: "/blog/finops-health-check-90-day-plan", priority: 0.6, changeFrequency: "yearly" },
  { loc: "/blog/cloud-cost-myths-busted", priority: 0.6, changeFrequency: "yearly" },

  // Legal (Next build surfaced /legal/* too)
  { loc: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
  { loc: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map(p => ({
    url: `${base}${p.loc}`,
    lastModified: p.lastModified ?? now,
    changeFrequency: p.changeFrequency ?? "monthly",
    priority: p.priority ?? 0.5
  }));
}
