// src/app/article/page.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { articles } from './data/articles-content'
import CursorAnimation from '../components/CursorAnimation'

export default function ArticlesPage() {
  // Featured 태그 제거하고 날짜순으로 정렬
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <CursorAnimation />
      
      <div className="px-8 md:px-12 lg:px-16 py-32"> {/* Home 페이지와 동일한 컨테이너 여백 */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
              Articles
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              디자인과 개발에 대한 생각들을 글로 정리합니다.
            </p>
          </motion.div>

          {/* Articles List - Toss tech 스타일 */}
          <div className="space-y-8">
            {sortedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group hover-animate" // 호버 애니메이션 효과
              >
                <a href={`/article/${article.id}`} className="block">
                  <div className="flex flex-col md:flex-row gap-8 p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300">
                    
                    {/* 썸네일 영역 */}
                    <div className="w-full md:w-1/3 aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-500 dark:text-gray-400 text-lg">
                          {article.title}
                        </span>
                      </div>
                    </div>

                    {/* 텍스트 정보 영역 */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(article.date).toLocaleDateString('ko-KR')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                            {article.category}
                          </span>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      {/* 태그들 */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* 로딩 더미 또는 페이지네이션 영역 */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-500">
              더 많은 아티클을 준비 중입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}