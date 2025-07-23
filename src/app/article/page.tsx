// 📍 파일 경로: src/app/article/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { articles, getAllCategories } from './data/articles-content'
import CursorAnimation from '../components/CursorAnimation'

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  // 카테고리 가져오기
  const categories = getAllCategories().filter(cat => cat !== 'All')
  
  // 필터링된 아티클
  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeFilter)
  
  // 날짜순으로 정렬
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
              디자인과 개발에 대한 생각들을 글로 정리합니다.
            </p>
            
            {/* 필터 버튼들 - Project 리스트페이지와 동일한 디자인 */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <button
                onClick={() => setActiveFilter('All')}
                className={`transition-colors ${
                  activeFilter === 'All'
                    ? 'text-gray-900 dark:text-gray-100 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                All
              </button>
              {categories.map((category, index) => (
                <div key={category} className="flex items-center gap-1">
                  <span className="text-gray-400">/</span>
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`transition-colors ${
                      activeFilter === category
                        ? 'text-gray-900 dark:text-gray-100 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Articles List - Toss tech 스타일 (테두리 없음) */}
          <div className="space-y-12">
            {sortedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group hover-animate"
              >
                <a href={`/article/${article.id}`} className="block">
                  <div className="flex flex-col md:flex-row gap-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-300 -mx-4 px-4">
                    
                    {/* 썸네일 영역 */}
                    <div className="w-full md:w-1/3 aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-500 dark:text-gray-400 text-lg">
                          {article.title}
                        </span>
                      </div>
                    </div>

                    {/* 텍스트 영역 */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        
                        {/* 카테고리 */}
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                            {article.category}
                          </span>
                        </div>

                        {/* 제목과 화살표 */}
                        <div className="flex items-start justify-between">
                          <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            {article.title}
                          </h2>
                          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-4" />
                        </div>

                        {/* 요약 */}
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* 메타 정보 */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        {/* 태그들 */}
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                          {article.tags.length > 2 && (
                            <span className="px-2 py-1 text-gray-400 text-xs">
                              +{article.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* 빈 아티클이 있을 경우 메시지 */}
          {sortedArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 dark:text-gray-400">
                해당 카테고리에 아티클이 없습니다.
              </p>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  )
}