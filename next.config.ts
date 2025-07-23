// 📍 파일 경로: next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',        // GitHub Pages용 정적 사이트 생성
  distDir: 'out',         // 'docs' 대신 'out' 사용 (GitHub Pages 기본값)
  trailingSlash: true,    // URL 끝에 슬래시 추가
  images: {
    unoptimized: true     // GitHub Pages에서 이미지 최적화 비활성화
  },
  // GitHub Pages의 basePath 설정 (저장소명이 username.github.io가 아닌 경우만)
  // basePath: '/repository-name',  // 필요시 주석 해제
  
  webpack: (config, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,           // 클라이언트에서 fs 모듈 비활성화
      }
    }
    return config
  }
}

export default nextConfig