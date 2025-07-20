// 📍 파일 경로: src/app/info/page.tsx

'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function InfoPage() {
  const contactItems = [
    {
      title: 'E-mail',
      value: 'jo.yejin121@gmail.com',
      href: 'mailto:jo.yejin121@gmail.com',
      type: 'email'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/jjine',
      href: 'https://linkedin.com/in/jjine',
      type: 'link'
    },
    {
      title: 'Behance',
      value: 'behance.net/jjine',
      href: 'https://behance.net/jjine',
      type: 'link'
    },
    {
      title: 'brunch',
      value: 'brunch.co.kr/@jjine',
      href: 'https://brunch.co.kr/@jjine',
      type: 'link'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Contact
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              다양한 관련 프로젝트 및 협업 제의는 언제든지 환영합니다. 
              커피챗도 언제든 편하게 연락 주세요.
            </p>
          </div>

          {/* Contact Information - 양쪽 끝 배치, 선 삭제 */}
          <div className="space-y-8">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group"
              >
                <div className="flex items-center justify-between py-6">
                  <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={item.href}
                      target={item.type === 'link' ? '_blank' : undefined}
                      rel={item.type === 'link' ? 'noopener noreferrer' : undefined}
                      className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {item.value}
                    </a>
                    
                    <a
                      href={item.href}
                      target={item.type === 'link' ? '_blank' : undefined}
                      rel={item.type === 'link' ? 'noopener noreferrer' : undefined}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label={`${item.title} 링크 열기`}
                    >
                      <ArrowUpRight className="h-4 w-4 text-gray-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Spacing */}
          <div className="pb-32"></div>
        </motion.div>
      </div>
    </div>
  )
}