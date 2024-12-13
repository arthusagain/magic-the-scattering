import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    }
  
};

export default nextConfig;
