import createMDX from "@next/mdx";
import { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.(mdx|md)$/,
});

const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  cacheComponents: true,
  pageExtensions: ["ts", "tsx", "mdx", "md"],
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
} satisfies NextConfig;

export default withMDX(nextConfig);
