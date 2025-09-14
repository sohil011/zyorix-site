import { NextResponse } from "next/server";

const pages = [
  "",
  "services",
  "pricing",
  "case-studies",
  "blog",
  "about",
  "contact",
  "privacy",
  "terms",
  "blog/finops-health-check",
];

export async function GET() {
  const urls = pages
    .map(
      (p) => `<url><loc>https://zyorix.com/${p}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
