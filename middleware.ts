// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Preview safety: non-zyorix hosts get noindex,nofollow via header. */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = req.headers.get("host") || "";
  const isPreview = !host.endsWith("zyorix.com");
  if (isPreview) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

/** Apply to all routes except Next internals and static/SEO assets. */
export const config = {
  matcher: ["/((?!_next/|favicon.ico|robots.txt|sitemap.xml|downloads/).*)"],
};
