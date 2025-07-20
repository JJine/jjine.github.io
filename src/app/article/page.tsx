// src/app/article/page.tsx
import Link from 'next/link'
import { getAllArticles } from '../lib/markdown'

const categories = ['전체', '개발', '데이터/ML', '디자인', '프로덕트']

export default function ArticlePage() {
  const articles = getAllArticles() // async 제거

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="pt-20 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            디자인과 개발에 관한 생각들을 기록합니다.
          </p>
          
          {/* Filter */}
          <div className="flex items-center space-x-6 border-b border-gray-200 dark:border-gray-800">
            {categories.map((category, index) => (
              <button 
                key={category}
                className={`pb-3 text-sm transition-colors relative ${
                  index === 0 
                    ? 'text-gray-900 dark:text-white font-medium' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
                {index === 0 && (
                  <span className="absolute -bottom-px left-0 w-full h-0.5 bg-gray-900 dark:bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Articles List */}
        <section className="pb-20">
          <div className="space-y-12">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.id}`}
                className="group block"
              >
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Thumbnail - 왼쪽 */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[16/10] bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 text-2xl">
                          📝
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content - 오른쪽 */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-tight">
                        {article.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}