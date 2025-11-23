import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/daily-liturgy`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/setup`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/curr.pdf`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/skills`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service`,
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
