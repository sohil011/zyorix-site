import { NextResponse } from "next/server";

const site = "https://zyorix.com";

// Add more posts here when you publish new ones
const posts = [
  {
    slug: "finops-health-check",
    title: "Why a FinOps Health Check is Your Best First Step",
    description:
      "How a baseline across KPIs, tagging, and anomalies unlocks confident, prioritized savings.",
    pubDate: "2025-09-14T12:00:00.000Z",
  },
];

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function GET() {
  const items = posts
    .map((p) => {
      const link = `${site}/blog/${p.slug}`;
      return `
        <item>
          <title>${escape(p.title)}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${new Date(p.pubDate).toUTCString()}</pubDate>
          <description><![CDATA[${p.description}]]></description>
        </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zyorix Blog</title>
    <link>${site}/blog</link>
    <description>FinOps insights, guides, and case studies from Zyorix.</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`.trim();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
