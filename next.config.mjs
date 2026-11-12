/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
