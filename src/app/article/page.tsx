'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import { useState } from 'react'

// Mock data - 실제로는 CMS나 마크다운 파일에서 가져올 데이터
const articles = [
  {
    id: '1',
    title: '디자인 시스템을 구축하며 배운 것들',
    excerpt: '스타트업에서 디자인 시스템을 처음부터 구축하면서 겪었던 시행착오와 교훈들을 공유합니다.',
    category: 'Design System',
    date: '2024-07-10',
    readTime: '5분',
    tags: ['Design System', 'Figma', 'Component', 'Startup'],
    featured: true,
  },
  {
    id: '2',
    title: 'AI 시대의 UX 디자이너 역할 변화',
    excerpt: 'ChatGPT와 같은 AI 도구들이 디자인 프로세스에 미치는 영향과 디자이너가 준비해야 할 것들에 대해 생각해봅니다.',
    category: 'Thoughts',
    date: '2024-07-05',
    readTime: '7분',
    tags: ['AI', 'UX Design', 'Future', 'Career'],
    featured: true,
  },
  {
    id: '3',
    title: '사용자 리서치 방법론 정리',
    excerpt: '프로젝트 상황별로 적합한 사용자 리서치 방법론을 정리하고, 실무에서 활용할 수 있는 팁을 공유합니다.',
    category: 'UX Research',
    date: '2024-06-28',
    readTime: '8분',
    tags: ['User Research', 'Interview', 'Survey', 'Usability Testing'],
    featured: false,
  },
  {
    id: '4',
    title: 'Next.js 14로 포트폴리오 만들기',
    excerpt: 'App Router와 Server Components를 활용한 개인 포트폴리오 웹사이트 구축 과정을 단계별로 설명합니다.',
    category: 'Development',
    date: '2024-06-20',
    readTime: '12분',
    tags: ['Next.js', 'React', 'TypeScript', 'Portfolio'],
    featured: false,
  },
  {
    id: '5',
    title: '디자이너를 위한 프론트엔드 기초',
    excerpt: 'HTML, CSS, JavaScript의 기본 개념부터 React까지, 디자이너가 알아두면 좋은 개발 지식을 정리했습니다.',
    category: 'Development',
    date: '2024-06-15',
    readTime: '10분',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Designer'],
    featured: false,
  },
  {
    id: '6',
    title: '좋은 피드백을 주고받는 방법',
    excerpt: '디자인 작업에서 건설적인 피드백을 주고받기 위한 커뮤니케이션 방법과 실무 경험을 공유합니다.',
    category: 'Collaboration',
    date: '2024-06-10',
    readTime: '6분',
    tags: ['Feedback', 'Communication', 'Collaboration', 'Team'],
    featured: false,
  },
]

const categories = ['All', 'Design System', 'UX Research', 'Development', 'Thoughts', 'Collaboration']

const ArticlePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Articles
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          디자인, 개발, 그리고 일상에서의 경험과 생각들을 글로 정리합니다. 
          배움을 나누고 함께 성장하는 것을 목표로 합니다.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 space-y-6"
      >
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="글 검색하기..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/article/${article.id}`} className="block">
                  <div className="space-y-4">
                    {/* Article Image Placeholder */}
                    <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                        <span className="text-muted-foreground">Article Cover</span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Article Info */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="font-medium uppercase tracking-wide">{article.category}</span>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold group-hover:text-muted-foreground transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
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
        </motion.section>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {featuredArticles.length > 0 ? 'More Articles' : 'All Articles'}
          </h2>
          <div className="space-y-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/article/${article.id}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    {/* Article Thumbnail */}
                    <div className="md:col-span-1">
                      <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Cover</span>
                        </div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="md:col-span-3 space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="font-medium uppercase tracking-wide">{article.category}</span>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-muted-foreground mb-4">
            {searchQuery ? '검색 결과가 없습니다.' : '선택한 카테고리에 글이 없습니다.'}
          </p>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="text-sm text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
            >
              모든 글 보기
            </button>
          )}
        </motion.div>
      )}

      {/* Newsletter Signup */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-16 border-t border-border text-center"
      >
        <h2 className="text-2xl font-bold mb-4">새 글 알림 받기</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          새로운 글이 발행될 때마다 이메일로 알림을 받아보세요. 
          디자인과 개발에 관한 유용한 인사이트를 정기적으로 공유합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소"
            className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
          />
          <button className="px-6 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors whitespace-nowrap">
            구독하기
          </button>
        </div>
      </motion.section>
    </div>
  )
}

export default ArticlePage