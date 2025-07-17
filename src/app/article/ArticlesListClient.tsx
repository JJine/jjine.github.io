'use client'

// src/app/article/ArticlesListClient.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Clock } from 'lucide-react'
import { Article } from './data/articles-content'

interface ArticlesListClientProps {
  allArticles: Article[]
  categories: string[]
  featuredArticles: Article[]
}

export default function ArticlesListClient({ 
  allArticles, 
  categories, 
  featuredArticles 
}: ArticlesListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // 클라이언트에서 필터링
  const filteredArticles = selectedCategory === 'All' 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
          Articles
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          디자인과 개발에 대한 인사이트와 경험을 공유합니다. 
          실무에서 얻은 교훈들과 새로운 트렌드에 대한 생각들을 담았습니다.
        </p>
      </motion.div>

      {/* Featured Articles */}
      {selectedCategory === 'All' && featuredArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">주요 글</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/article/${article.id}`} className="block">
                  <div className="space-y-4">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Article Image</span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium uppercase tracking-wide">{article.category}</span>
                        <span>•</span>
                        <span>{formatDate(article.date)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {filteredArticles.length}개의 아티클
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="group"
          >
            <Link href={`/article/${article.id}`} className="block">
              <div className="space-y-4">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Article Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {article.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium uppercase tracking-wide">{article.category}</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="flex gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-600 dark:text-gray-400">
            선택한 카테고리에 해당하는 아티클이 없습니다.
          </p>
        </motion.div>
      )}

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          새로운 글이 궁금하시나요?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          새로운 아티클과 인사이트를 가장 먼저 받아보세요. 
          디자인과 개발 트렌드에 대한 최신 정보를 전해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            구독하기
          </button>
        </div>
      </motion.section>
    </div>
  )
}