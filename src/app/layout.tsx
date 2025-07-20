// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from './components/Header'
import Footer from './components/Footer'
import CursorAnimation from './components/CursorAnimation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Jin - Portfolio',
  description: 'Personal Portfolio Website by Jin',
  openGraph: {
    title: 'Jin - Portfolio',
    description: 'Personal Portfolio Website by Jin',
    url: 'https://jjine.github.io',
    siteName: 'Jin Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 다크모드 완전 적용을 위한 컨테이너 */}
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
            <CursorAnimation />
            
            {/* 메인 레이아웃 */}
            <div className="flex flex-col min-h-screen">
              <Header />
              
              <main className="flex-1 bg-white dark:bg-black">
                {children}
              </main>
              
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}