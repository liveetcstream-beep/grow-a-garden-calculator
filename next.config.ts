import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/mutation/aurora",
        destination: "/aurora-mutation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
