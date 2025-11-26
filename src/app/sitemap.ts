import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://gustavo-murdiga.vercel.app/`,
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/daily-liturgy`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/setup`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/curr.pdf`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/about`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/skills`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/projects`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/contact`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/privacy-policy`,
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/terms-of-service`,
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/how-the-challenges-at-my-current-company-help-me-become-a-better-developer`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/how-to-study-nodejs`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/my-history`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
