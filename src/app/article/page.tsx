'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Calendar } from 'lucide-react'

export default function ArticlePage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'UX/UI', 'Product Management', 'Development']

  const articles = [
    {
      id: 1,
      title: '사용자 중심 프로덕트 기획의 중요성',
      category: 'Product Management',
      date: '2024.01.15',
      readTime: '5분',
      excerpt: '프로덕트 매니저로서 사용자 중심의 기획이 어떻게 서비스 성공에 기여하는지에 대한 경험과 인사이트를 공유합니다.',
      tags: ['PM', 'User Research', 'Product Strategy'],
      featured: true
    },
    {
      id: 2,
      title: 'AI 감정분석을 활용한 UX 개선 사례',
      category: 'UX/UI',
      date: '2023.12.20',
      readTime: '7분',
      excerpt: 'SmileMe 프로젝트에서 AI 감정분석 기술을 도입하여 사용자 경험을 개선한 과정과 결과를 상세히 분석합니다.',
      tags: ['AI/ML', 'UX Design', 'Case Study']
    },
    {
      id: 3,
      title: '글로벌 개발팀과의 효과적인 협업 방법',
      category: 'Product Management',
      date: '2023.11.10',
      readTime: '6분',
      excerpt: '베트남 개발팀과의 원격 협업 경험을 통해 얻은 커뮤니케이션 개선 방법과 프로세스 최적화 전략을 소개합니다.',
      tags: ['Remote Work', 'Team Management', 'Communication']
    },
    {
      id: 4,
      title: 'React Native를 활용한 모바일 앱 개발 팁',
      category: 'Development',
      date: '2023.10.05',
      readTime: '8분',
      excerpt: '실제 프로젝트에서 React Native를 사용하며 겪은 문제들과 해결 방법, 그리고 성능 최적화 경험을 공유합니다.',
      tags: ['React Native', 'Mobile Development', 'Performance']
    }
  ]

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeFilter)

  const handleTagClick = (tag: string) => {
    // 태그 클릭 시 해당 태그로 필터링
    console.log('Filter by tag:', tag)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="w-full">
        <div className="px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
                Articles
              </h1>
              
              {/* Modern Filter */}
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter
                        ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-12">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <a href={`/article/${article.id}`} className="block">
                    <div className="py-8 border-b border-gray-100 dark:border-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </span>
                            <span>{article.readTime} 읽기</span>
                            <span>{article.category}</span>
                            {article.featured && (
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                            {article.title}
                          </h2>
                          
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {article.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, tagIndex) => (
                              <button
                                key={tagIndex}
                                onClick={(e) => {
                                  e.preventDefault()
                                  handleTagClick(tag)
                                }}
                                className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-lg text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-6 mt-1" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="pt-16 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                총 {filteredArticles.length}개의 아티클
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-32"></div>
      </div>
    </div>
  )
}