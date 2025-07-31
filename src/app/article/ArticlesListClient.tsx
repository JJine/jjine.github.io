'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import CursorAnimation from '../components/CursorAnimation'
import type { Article } from './data/articles-content'

interface ArticlesListClientProps {
  allArticles: Article[]
  categories: string[]
}

export default function ArticlesListClient({ allArticles, categories }: ArticlesListClientProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  // 필터링된 아티클
  const filteredArticles = activeFilter === 'All' 
    ? allArticles 
    : allArticles.filter(article => article.category === activeFilter)
  
  // 날짜순으로 정렬
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // 날짜 포맷팅 - 이미지와 동일하게
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}. ${month}. ${day}.`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <CursorAnimation />
      
      <div className="px-8 md:px-12 lg:px-16 py-32">
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
            
            {/* 필터 버튼들 */}
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
              {categories.map((category) => (
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

          {/* Articles List - 이미지와 정확히 동일한 스타일 */}
          <div className="space-y-12">
            {sortedArticles.map((article, _index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * _index }}
                className="group"
              >
                <Link href={`/article/${article.id}`} className="block">
                  <div className="flex flex-col md:flex-row gap-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-300 -mx-4 px-4">
                    
                    {/* 썸네일 영역 - Project와 동일한 크기 */}
                    <div className="w-full md:w-1/3 aspect-[16/10] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 px-4">
                        <span className="text-gray-500 dark:text-gray-400 text-center text-lg">
                          {article.title}
                        </span>
                      </div>
                    </div>

                    {/* 텍스트 영역 - Project와 동일한 폰트 크기 */}
                    <div className="flex-1 space-y-4">
                      
                      {/* 상단: 날짜, 시간 + 카테고리(회색 태그) + 화살표 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          {/* 카테고리를 Project와 동일한 크기로 */}
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                            {article.category}
                          </span>
                        </div>
                        
                        {/* 화살표 아이콘 */}
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      {/* 제목 - 이전 크기로 복원 */}
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-tight">
                        {article.title}
                      </h2>

                      {/* 본문 미리보기 - 이전 크기로 복원 */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* 하단 태그들 - Project와 정확히 동일한 스타일 */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{article.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* 빈 아티클 메시지 */}
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
     {/* Home 페이지처럼 하단 여백 추가 */}
      <div className="pb-16"></div>
    </div>
  )
}