/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  experimental: {
    // typedRoutes: true,
  },
}

module.exports = nextConfig