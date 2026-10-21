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
      {
        // Removed duplicate data entry (was identical to /mutation/enchanted).
        // Keeps the old URL working for anything that indexed or linked it.
        source: "/mutation/enchanted_2",
        destination: "/mutation/enchanted",
        permanent: true,
      },
      {
        // Stray URL showing as 404 in GSC (last crawled Sep 3, 2026).
        // No matching content exists — send to homepage.
        source: "/kg",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
