// 📍 파일 경로: src/app/components/Footer.tsx

'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jjine',
      external: true
    },
    {
      name: 'Behance',
      href: 'https://behance.net/jjine',
      external: true
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jjine',
      external: true
    },
    {
      name: 'Brunch',
      href: 'https://brunch.co.kr/@jjine',
      external: true
    }
  ]

  const quickLinks = [
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Projects',
      href: '/project'
    },
    {
      name: 'Articles',
      href: '/article'
    },
    {
      name: 'Contact',
      href: '/info'
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full px-8 md:px-12 lg:px-16 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Jjine
            </Link>
            <p className="text-gray-600 leading-relaxed">
              사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어가는 프로덕트 매니저입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    {link.name}
                    {link.external && (
                      <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:jo.yejin121@gmail.com"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                jo.yejin121@gmail.com
              </a>
              <p className="text-gray-600">
                Seoul, South Korea
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {currentYear} Jjine. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}