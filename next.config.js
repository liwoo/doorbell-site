/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    // Doorbell for Business is now the home page.
    return [{ source: '/business', destination: '/', permanent: true }]
  },
  images: {
    domains: ['images.unsplash.com', 'malawiplus.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
