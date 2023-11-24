import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: "https://gustavomurdiga.vercel.app/sitemap.xml",
	};
}
