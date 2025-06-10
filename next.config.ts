import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
    unoptimized: true // Disable image optimization for static export
  },
  // Remove or comment out the output export if you're using Vercel
  // output: 'export',
};

export default nextConfig;