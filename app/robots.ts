// app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zyorix.com";
const IS_PROD =
  process.env.VERCEL_ENV === "production" &&
  SITE_URL.includes("zyorix.com");

export default function robots(): MetadataRoute.Robots {
  return IS_PROD
    ? {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: "zyorix.com",
      }
    : {
        rules: [{ userAgent: "*", disallow: "/" }],
      };
}
