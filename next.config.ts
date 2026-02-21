import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // Hidden via global CSS for maximum reliability across versions
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'unload=(self "https://www.youtube.com" "https://www.youtube-nocookie.com")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
