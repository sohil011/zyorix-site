import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = req.headers.get("host") || "";
  const isPreview = !host.endsWith("zyorix.com");
  if (isPreview) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
export const config = {
  matcher: ["/((?!_next/|favicon.ico|robots.txt|sitemap.xml|rss.xml|downloads/).*)"],
};
