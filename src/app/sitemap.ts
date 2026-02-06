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
      images: [
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800&h=400&auto=format&fit=crop",
      ],
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/how-to-study-nodejs`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&h=400&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/my-history`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1591262184859-dd20d214b52a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      url: `https://gustavo-murdiga.vercel.app/blog/resume-of-my-last-five-months`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=800&h=400&auto=format&fit=crop",
      ],
    },
  ];
}
