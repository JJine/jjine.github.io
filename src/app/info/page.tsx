'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function InfoPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('hello@jjine.dev')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Contact
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              다양한 관련 프로젝트 및 협업 제의는 언제든지 환영합니다. 
              커피챗도 언제든 편하게 연락 주세요.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-medium mb-6">E-mail</h2>
              <div className="flex items-center justify-between">
                <a 
                  href="mailto:hello@jjine.dev"
                  className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  hello@jjine.dev
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-medium mb-6">LinkedIn</h2>
              <a 
                href="https://linkedin.com/in/jjine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                linkedin.com/in/jjine
              </a>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-medium mb-6">Behance</h2>
              <a 
                href="https://behance.net/jjine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                behance.net/jjine
              </a>
            </div>

            <div className="pb-8">
              <h2 className="text-lg font-medium mb-6">brunch</h2>
              <a 
                href="https://brunch.co.kr/@jjine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                brunch.co.kr/@jjine
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-16 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Copyright 2025. Jjine All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}