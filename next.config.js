/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com', 'malawiplus.com'],
  },
}

module.exports = nextConfig
