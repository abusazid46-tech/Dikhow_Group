import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/divisions/eri-firm",
        destination: "/divisions/erinest",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
