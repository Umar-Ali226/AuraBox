/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Replace with the domain for your Sanity images
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Replace with the domain for placeholder images
        pathname: '/**',
      },
      // Add other domains or patterns as needed
    ],
  },
};

export default nextConfig;

