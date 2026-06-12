import type { MetadataRoute } from "next";

const baseUrl = "https://www.nuisicontrole.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/deratisation",
    "/desinsectisation",
    "/desinfection",
    "/zones-intervention",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
