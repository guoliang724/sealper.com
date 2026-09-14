import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Pumps, cradles and water coolers now live on the Accessories page
    return ['/pumps', '/cradles', '/water-coolers'].map((source) => ({
      source,
      destination: '/accessories',
      permanent: true,
    }))
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
      },
    ],
  },
};

export default nextConfig;
