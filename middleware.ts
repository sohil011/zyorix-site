@'
// middleware.ts (repo root)
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const isPreview = !host.endsWith("zyorix.com"); // anything not prod

  const res = NextResponse.next();
  if (isPreview) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  // run on all HTML routes; skip static assets/_next
  matcher: ["/((?!_next|static|favicon.ico|manifest.webmanifest|.*\\.(?:png|jpg|jpeg|svg|gif|webp|css|js|map)$).*)"],
};
'@ | Set-Content .\middleware.ts -Encoding utf8
