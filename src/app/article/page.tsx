// 📍 파일 경로: src/app/article/page.tsx

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { getAllArticles, getAllCategories } from './data/articles-content'

export default function ArticlePage() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const allArticles = getAllArticles()
  const categories = getAllCategories()

  const filteredArticles = activeFilter === 'All' 
    ? allArticles 
    : allArticles.filter(article => article.category === activeFilter)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Articles
            </h1>
            
            {/* 필터명/필터명 스타일 - Project와 동일 */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
              <button
                onClick={() => setActiveFilter('All')}
                className={`transition-colors ${
                  activeFilter === 'All'
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All
              </button>
              {categories.filter(cat => cat !== 'All').map((filter) => (
                <div key={filter} className="flex items-center gap-1">
                  <span className="text-gray-400">/</span>
                  <button
                    onClick={() => setActiveFilter(filter)}
                    className={`transition-colors ${
                      activeFilter === filter
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {filter}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="space-y-16">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <a href={`/article/${article.id}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Article Thumbnail */}
                    <div className="lg:col-span-4">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                          <span className="text-gray-500 text-lg font-light">
                            {article.title.slice(0, 10)}...
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Article Info */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-4 flex-1">
                            <div className="flex items-center space-x-4">
                              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                {article.title}
                              </h2>
                              {article.featured && (
                                <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{article.category}</span>
                              <span>•</span>
                              <span>{formatDate(article.date)}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed">
                              {article.excerpt}
                            </p>
                          </div>
                          
                          <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-6" />
                        </div>

                        {/* Tags - About 스킬 스타일 적용 */}
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Divider - 마지막 아이템이 아닐 때만 표시 */}
                      {index < filteredArticles.length - 1 && (
                        <div className="pt-8 border-b border-gray-200"></div>
                      )}
                    </div>
                  </div>
                </a>
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