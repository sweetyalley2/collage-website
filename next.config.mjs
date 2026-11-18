/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cimsgroup.org',
      },
      {
        protocol: 'http',
        hostname: 'cimsgroup.org',
      },
      {
        protocol: 'https',
        hostname: 'www.ishm.co.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
