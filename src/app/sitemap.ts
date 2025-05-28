import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gustavomurdiga.vercel.app/",
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://gustavomurdiga.vercel.app/daily-liturgy",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/setup",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/curr.pdf",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/about",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/skills",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/projects",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavomurdiga.vercel.app/contact",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
