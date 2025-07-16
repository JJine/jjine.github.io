'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false) // 이 줄 추가
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // 이 useEffect 추가
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Project', href: '/project' },
    { name: 'About', href: '/about' },
    { name: 'Info', href: '/info' },
    { name: 'Article', href: '/article' },
  ]
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => {
    console.log('Theme toggle clicked, current theme:', theme) // 디버깅용
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // mounted가 false일 때는 테마 아이콘을 보여주지 않음
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/40 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Jjine
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/40 dark:border-gray-700/40 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          Jjine
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                pathname === item.href 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-700" />
            )}
          </button> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-700" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
           {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200/40 dark:border-gray-700/40 bg-white/95 dark:bg-gray-900/95 backdrop-blur"
          >
            <nav className="container mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white py-2 ${
                      pathname === item.href 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header