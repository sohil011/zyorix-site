import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  // treat anything that isn’t your production host as a preview
  const isPreview = !host.endsWith("zyorix.com");

  const res = NextResponse.next();
  if (isPreview) {
    // belt-and-braces: tell crawlers not to index preview deployments
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

// exclude static assets and common files from middleware
export const config = {
  matcher: ["/((?!_next|static|favicon.ico|og|api/health|images|public).*)"],
};
