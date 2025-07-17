/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fastRefresh: false,  // Fast Refresh 비활성화
  },
  reactStrictMode: false,  // React Strict Mode도 비활성화
}

module.exports = nextConfig