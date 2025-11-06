import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gustavo-murdiga.vercel.app/",
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/daily-liturgy",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/setup",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/curr.pdf",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/about",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/skills",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/projects",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/contact",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/blog",
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/privacy-policy",
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://gustavo-murdiga.vercel.app/terms-of-service",
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
