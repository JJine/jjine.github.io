import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jjine - Personal Blog',
  description: 'A modern personal blog and portfolio',
  keywords: ['blog', 'portfolio', 'design', 'development'],
  authors: [{ name: 'Jjine' }],
  creator: 'Jjine',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://jjine.github.io',
    title: 'Jjine - Personal Blog',
    description: 'A modern personal blog and portfolio',
    siteName: 'Jjine Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jjine - Personal Blog',
    description: 'A modern personal blog and portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout