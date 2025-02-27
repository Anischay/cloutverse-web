/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Disable turbopack in production
  experimental: {
    turbo: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig
