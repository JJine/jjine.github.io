// 📍 파일 경로: src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jjine - Product Manager & UX Designer',
  description: '프로덕트 매니저이자 UX/UI 디자이너 조예진의 포트폴리오입니다. 사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어갑니다.',
  keywords: ['Product Manager', 'UX Designer', 'UI Designer', '프로덕트 매니저', 'UX 디자이너'],
  authors: [{ name: 'Jjine', url: 'https://jjine.github.io' }],
  creator: 'Jjine',
  publisher: 'Jjine',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://jjine.github.io',
    title: 'Jjine - Product Manager & UX Designer',
    description: '프로덕트 매니저이자 UX/UI 디자이너 조예진의 포트폴리오입니다.',
    siteName: 'Jjine Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jjine - Product Manager & UX Designer',
    description: '프로덕트 매니저이자 UX/UI 디자이너 조예진의 포트폴리오입니다.',
    creator: '@jjine',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-inter antialiased bg-white text-gray-900 min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}