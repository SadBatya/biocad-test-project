import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bcdless-s3-api.biocad.ru",
      },
    ],
  },
};

export default nextConfig;
