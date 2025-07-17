/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  fastRefresh: false,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // headers 설정 주석 처리 또는 제거
  // async headers() {
  //   return [...]
  // }
}

module.exports = nextConfig