import createMDX from "@next/mdx";

const withMDX = createMDX({
	extension: /\.(mdx|md)$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		viewTransition: true,
	},
	pageExtensions: ["ts", "tsx", "mdx", "md"],
	async rewrites() {
		return [
			{
				destination: "/#home",
				source: "/",
			},
		];
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default withMDX(nextConfig);