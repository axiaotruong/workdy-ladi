import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // AVIF encoding hangs in this Next build's image optimizer, which stalls
    // every next/image request (browsers request AVIF first). WebP only.
    formats: ["image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
