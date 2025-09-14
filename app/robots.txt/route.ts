import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /
Sitemap: https://zyorix.com/sitemap.xml`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
