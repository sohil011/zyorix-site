import type { MetadataRoute } from "next";

const base = "https://zyorix.com";

/**
 * Keep this list in sync with your public routes.
 * Do NOT include feeds or non-HTML endpoints (e.g., /rss.xml).
 */
const pages: Array<{ loc: string; priority?: number; changefreq?: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { loc: "/", priority: 1.0, changefreq: "weekly" },

  // Top-level pages
  { loc: "/services", priority: 0.9, changefreq: "monthly" },
  { loc: "/pricing", priority: 0.9, changefreq: "monthly" },
  { loc: "/case-studies", priority: 0.8, changefreq: "monthly" },
  { loc: "/blog", priority: 0.7, changefreq: "weekly" },
  { loc: "/about", priority: 0.6, changefreq: "yearly" },
  { loc: "/contact", priority: 0.8, changefreq: "yearly" },
  { loc: "/privacy", priority: 0.3, changefreq: "yearly" },
  { loc: "/terms", priority: 0.3, changefreq: "yearly" },

  // Service detail pages
  { loc: "/services/health-check", priority: 0.7, changefreq: "monthly" },
  { loc: "/services/optimization", priority: 0.7, changefreq: "monthly" },
  { loc: "/services/managed-finops", priority: 0.7, changefreq: "monthly" },

  // Case studies (add more as you publish)
  { loc: "/case-studies/saas-scaleup-28-savings", priority: 0.6, changefreq: "yearly" },

  // Blog posts (add more as you publish)
  { loc: "/blog/finops-health-check", priority: 0.6, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((p) => ({
    url: `${base}${p.loc}`,
    lastModified: now,
    changeFrequency: p.changefreq ?? "monthly",
    priority: p.priority ?? 0.5,
  }));
}
