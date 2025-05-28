/** @type {import('next').NextConfig} */
const nextConfig = {

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

module.exports = nextConfig;
