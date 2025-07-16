/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // 이 줄을 주석 처리
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath와 assetPrefix도 주석 처리
  // basePath: process.env.NODE_ENV === 'production' ? '/jjine.github.io' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/jjine.github.io/' : '',
}

module.exports = nextConfig