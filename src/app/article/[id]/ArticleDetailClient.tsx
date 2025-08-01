// 📍 파일 경로: src/app/article/[id]/ArticleDetailClient.tsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Share2, ArrowUp, Calendar, Clock, User } from 'lucide-react'
import { articles } from '../data/articles-content'
import Link from 'next/link'

interface ArticleDetailProps {
  articleId: string
  content: string
}

export default function ArticleDetailClient({ articleId, content: initialContent }: ArticleDetailProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [loading, setLoading] = useState(!initialContent)
  
  // useEffect를 early return 이전에 호출
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 마크다운 콘텐츠 로드
  useEffect(() => {
    if (!initialContent) {
      const loadContent = async () => {
        try {
          const response = await fetch(`/content/articles/article-${articleId}.md`)
          if (response.ok) {
            const markdownContent = await response.text()
            setContent(markdownContent)
          } else {
            setContent('아티클 내용을 찾을 수 없습니다.')
          }
        } catch (error) {
          console.error('Error loading article content:', error)
          setContent('아티클 내용을 불러올 수 없습니다.')
        } finally {
          setLoading(false)
        }
      }
      loadContent()
    }
  }, [articleId, initialContent])

  const article = articles.find(a => a.id === articleId)
  
  // 로딩 상태 처리
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-gray-100 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">아티클을 불러오는 중...</p>
        </div>
      </div>
    )
  }
  
  // early return은 useEffect 이후에
  if (!article) return <div>Article not found</div>

  const currentIndex = articles.findIndex(a => a.id === articleId)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  // 스크롤 맨 위로
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 공유 기능 (링크 복사)
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch {
      // 폴백: 텍스트 선택
      const textArea = document.createElement('textarea')
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  // 초간단 마크다운 파싱 함수 (HTML 주석 지원)
  const formatContent = (content: string) => {
    return (
      <div 
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300"
        dangerouslySetInnerHTML={{ 
          __html: content
            // HTML 주석제거 (<!-- 내용 -->)
            .replace(/<!--[\s\S]*?-->/g, '')
            // YAML frontmatter도 제거 (혹시 모르니)
            .replace(/^---[\s\S]*?---\n?/g, '')
            // 빈 줄 정리
            .replace(/^\s*\n/gm, '')
            // 기본 마크다운 파싱
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-8 mt-12 text-gray-900 dark:text-gray-100 first:mt-0">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-6 mt-12 text-gray-900 dark:text-gray-100">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100">$1</h3>')
            .replace(/^- (.*$)/gim, '<li class="mb-2 pl-4 text-gray-700 dark:text-gray-300 list-disc list-inside">$1</li>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em class="italic text-gray-600 dark:text-gray-400">$1</em>')
            .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-6 mb-6 italic text-gray-700 dark:text-gray-300">$1</blockquote>')
            // 줄바꿈을 문단으로 변환
            .split('\n\n')
            .map(paragraph => {
              if (paragraph.trim() === '') return ''
              if (paragraph.includes('<h1') || paragraph.includes('<h2') || paragraph.includes('<h3') || 
                  paragraph.includes('<li') || paragraph.includes('<blockquote')) {
                return paragraph
              }
              return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${paragraph}</p>`
            })
            .join('')
            // 빈 p 태그 제거
            .replace(/<p[^>]*>\s*<\/p>/g, '')
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">      
      {/* 전체 영역으로 설정 */}
      <div className="w-full">

        {/* 메인 콘텐츠 영역 */}
        <div className="px-8 md:px-12 lg:px-16 py-32">
          <div className="max-w-4xl mx-auto">
            
            {/* 아티클 헤더 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              
              {/* 뒤로가기 */}
              <Link 
                href="/article" 
                className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                아티클 목록으로
              </Link>

              {/* 제목과 기본 정보 */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                      {article.title}
                    </h1>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* 오른쪽 영역 - 공유 버튼 */}
                  <div className="flex items-center gap-2 ml-8">
                    <button
                      onClick={handleShare}
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      title="링크 공유"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 썸네일 영역 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full h-[400px] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mb-12"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-xl">
                  {article.title} 썸네일
                </span>
              </div>
            </motion.div>

            {/* 아티클 상세 내용 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              {formatContent(content)}
            </motion.div>

            {/* 작성자 소개 영역 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-16"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">진</h3>
                    <p className="text-gray-600 dark:text-gray-400">Product Designer & Developer</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    기획부터 개발, 출시, 운영, 개선까지 프로젝트 전 과정을 직접 주도하며 실무 경험을 쌓아왔습니다. 
                    사용자 경험과 클라이언트 요구를 균형있게 고려한 프로젝트를 성공적으로 수행해왔습니다.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 네비게이션 - 이전/다음 아티클 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700 mb-16"
            >
              {prevArticle ? (
                <Link 
                  href={`/article/${prevArticle.id}`}
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="text-sm">{prevArticle.title}</span>
                </Link>
              ) : (
                <div></div>
              )}

              {nextArticle ? (
                <Link 
                  href={`/article/${nextArticle.id}`}
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <span className="text-sm">{nextArticle.title}</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              ) : (
                <div></div>
              )}
            </motion.div>

            {/* 추천 섹션 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">관련 글</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">추천 글</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    비슷한 주제의 글들을 곧 추가할 예정입니다.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">인기 글</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    많이 읽힌 글들을 곧 추가할 예정입니다.
                  </p>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>

      {/* 맨 위로 스크롤 버튼 */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* 토스트 메시지 */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow-lg">
            <p className="font-medium">
              링크 복사가 완료되었습니다
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}