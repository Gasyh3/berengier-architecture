import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    ...seoPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.href === "/a-propos" || page.href === "/contact" ? 0.7 : 0.8
    }))
  ];
}
