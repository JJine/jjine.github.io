'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Project', href: '/project' },
    { name: 'About', href: '/about' },
    { name: 'Info', href: '/info' },
    { name: 'Article', href: '/article' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-medium text-xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Jjine
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400 ${
                  isActive(item.href)
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="다크모드 토글"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="메뉴 토글"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-400 ${
                    isActive(item.href)
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400'
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