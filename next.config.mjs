/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable, no need for experimental.appDir
  // Enable optimizations for production builds
  swcMinify: true,
  images: {
    domains: ['github.com'],
  },
}

export default nextConfig
