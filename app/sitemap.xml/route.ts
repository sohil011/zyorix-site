import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // never cache on edge
export const revalidate = 0;

const base = "https://zyorix.com";

// Keep this list in sync with live routes
const paths = [
  "/", "/about", "/services", "/pricing", "/case-studies", "/contact",
  "/privacy", "/terms",
  "/services/health-check", "/services/optimization", "/services/managed-finops", "/services/allocation-governance",
  "/case-studies/saas-scaleup-28-savings",
  "/blog", "/blog/finops-health-check", "/blog/finops-health-check-90-day-plan", "/blog/cloud-cost-myths-busted"
];

function xmlEscape(s: string) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}

export async function GET() {
  const now = new Date().toISOString();
  const urls = paths.map(p => {
    const loc = `${base}${p}`;
    // reasonable defaults; adjust if needed
    const changefreq =
      p === "/" ? "weekly" :
      p.startsWith("/blog") ? "weekly" :
      p.startsWith("/services") ? "monthly" :
      "monthly";
    const priority =
      p === "/" ? "1.0" :
      ["/services","/pricing","/case-studies","/contact"].includes(p) ? "0.9" :
      p.startsWith("/blog") ? "0.7" :
      p.startsWith("/services/") ? "0.7" :
      "0.5";
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "no-store, max-age=0"
    }
  });
}
