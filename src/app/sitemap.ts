import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://gustavomurdiga.vercel.app/",
			changeFrequency: "weekly",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://gustavomurdiga.vercel.app/daily-liturgy",
			changeFrequency: "weekly",
			lastModified: new Date(),
			priority: 1,
		},
	];
}
