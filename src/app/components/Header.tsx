// 📍 파일 경로: src/app/components/Header.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PRODUCTS', href: '/project' },
    { name: 'ARTICLE', href: '/article' },
    { name: 'INFO', href: '/info' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/20">
      <div className="w-full">
        <div className="flex justify-center items-center h-16 px-8 md:px-12 lg:px-16">
          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center border border-gray-200/30 rounded-full px-6 py-2 bg-white/50 backdrop-blur-sm">
              {navigation.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className={`text-xs font-medium transition-colors hover:text-gray-600 ${
                      isActive(item.href)
                        ? 'text-black'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {index < navigation.length - 1 && (
                    <div className="w-px h-4 bg-gray-200/50 mx-6" />
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Logo - Mobile */}
          <Link href="/" className="md:hidden font-medium text-xl text-black">
            Jjine
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-8 p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20 bg-white/80 backdrop-blur-xl">
            <nav className="flex flex-col items-center space-y-4 px-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                    isActive(item.href)
                      ? 'text-black'
                      : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}