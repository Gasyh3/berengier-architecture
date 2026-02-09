import type { MetadataRoute } from "next";

const baseUrl = "https://atelier-berengier.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/architecte-interieur-lyon`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/plans-3d-architecture`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/permis-de-construire-lyon`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/conception-video`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/a-propos`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 }
  ] satisfies MetadataRoute.Sitemap;

  return routes.map((route) => ({
    ...route,
    lastModified: new Date()
  }));
}
