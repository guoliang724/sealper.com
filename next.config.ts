import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Pumps and cradles live on the Accessories page; water coolers are Water Dispensers
    const moved: [string, string][] = [
      ['/pumps', '/accessories'],
      ['/cradles', '/accessories'],
      ['/water-coolers', '/water-dispensers'],
      ['/bottles/pet-series', '/bottles'],
      ['/bottles/pc-series', '/bottles'],
    ]
    return moved.map(([source, destination]) => ({ source, destination, permanent: true }))
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
