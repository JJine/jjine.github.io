'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function ArticlePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Design', 'Development', 'UX Research', 'Product Management']

  const articles = [
    {
      id: 'ai-ux-designer',
      title: '디자인 시스템을 구축하며 배운 것들',
      excerpt: '스타트업에서 디자인 시스템을 처음부터 구축하면서 겪었던 시행착오와 교훈들을 공유합니다.',
      category: 'Design',
      date: '2024-07-16',
      readTime: '5분',
      tags: ['Design System', 'Figma', 'Component'],
      featured: true,
    },
    {
      id: 'product-thinking',
      title: '프로덕트 매니저가 되기까지의 여정',
      excerpt: '기획자에서 프로덕트 매니저로 성장하면서 깨달은 것들과 앞으로의 계획에 대해 이야기합니다.',
      category: 'Product Management',
      date: '2024-07-10',
      readTime: '7분',
      tags: ['Career', 'Product Management', 'Growth'],
      featured: true,
    },
    {
      id: 'user-research-methods',
      title: '효과적인 사용자 리서치 방법론',
      excerpt: '한정된 리소스로 최대의 인사이트를 얻기 위한 사용자 리서치 방법들을 소개합니다.',
      category: 'UX Research',
      date: '2024-06-28',
      readTime: '6분',
      tags: ['User Research', 'UX', 'Methodology'],
      featured: false,
    },
    {
      id: 'react-native-tips',
      title: 'React Native 개발 시 알아두면 좋은 팁들',
      excerpt: '모바일 앱 개발을 하면서 경험한 React Native의 유용한 팁과 트릭들을 정리했습니다.',
      category: 'Development',
      date: '2024-06-15',
      readTime: '4분',
      tags: ['React Native', 'Mobile', 'Development'],
      featured: false,
    }
  ]

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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
          className="space-y-20"
        >
          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Articles
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              프로덕트 개발과 디자인에 대한 경험과 생각들을 글로 정리하고 있습니다.
            </p>
          </div>

          {/* Filter Buttons - Project와 동일한 디자인 */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles List */}
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
                  <div className="space-y-6">
                    {/* Article Header */}
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
                        
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                          {article.excerpt}
                        </p>
                      </div>
                      
                      <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-6" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider - 마지막 아이템이 아닐 때만 표시 */}
                    {index < filteredArticles.length - 1 && (
                      <div className="pt-8 border-b border-gray-200"></div>
                    )}
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