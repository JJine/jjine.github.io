// src/app/article/[id]/ArticleDetailClient.tsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Share2, ArrowUp, Calendar, Clock } from 'lucide-react'
import { articles } from '../data/articles-content'
import CursorAnimation from '../../components/CursorAnimation'
import Link from 'next/link'

interface ArticleDetailProps {
  articleId: string
  content: string
}

export default function ArticleDetailClient({ articleId, content }: ArticleDetailProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showToast, setShowToast] = useState(false)
  
  const article = articles.find(a => a.id === articleId)
  if (!article) return <div>Article not found</div>

  const currentIndex = articles.findIndex(a => a.id === articleId)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    } catch (err) {
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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <CursorAnimation />
      
      {/* 전체 영역으로 설정 */}
      <div className="w-full">
        {/* 썸네일 영역 */}
        <div className="w-full h-[60vh] bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-2xl">
              {article.title}
            </span>
          </div>
          
          {/* 헤더 네비게이션 - 오른쪽 영역으로 이동 */}
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Share2 className="h-5 w-5 text-gray-900 dark:text-gray-100" />
            </button>
            
            {prevArticle && (
              <a
                href={`/article/${prevArticle.id}`}
                className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ArrowLeft className="h-5 w-5 text-gray-900 dark:text-gray-100" />
              </a>
            )}
            
            {nextArticle && (
              <a
                href={`/article/${nextArticle.id}`}
                className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ArrowRight className="h-5 w-5 text-gray-900 dark:text-gray-100" />
              </a>
            )}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="px-8 md:px-12 lg:px-16 py-16"> {/* Home 페이지와 동일한 여백 */}
          <div className="max-w-4xl mx-auto">
            {/* 아티클 헤더 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('ko-KR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                    {article.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
                  {article.title}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* 태그들 */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 아티클 상세 내용 (마크다운) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-20"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* 작성자 소개 영역 - 하단으로 이동 (Project 상세에서 가져온 디자인) */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-gray-200 dark:border-gray-800 pt-16 pb-16"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-lg font-medium">진</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    {article.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어가는 것을 좋아합니다.
                    기획부터 개발, 출시, 운영, 개선까지 프로젝트 전 과정을 직접 주도하며 실무 경험을 쌓아왔습니다.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/about"
                      className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors underline underline-offset-4"
                    >
                      더 알아보기 →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Related Articles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-t border-gray-200 dark:border-gray-800 pt-16"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">관련 글</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">다른 흥미로운 글들</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    더 많은 아티클을 준비 중입니다.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">추천 글</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    비슷한 주제의 글들을 곧 추가할 예정입니다.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* 맨 위로 스크롤 버튼 - 오른쪽 하단 */}
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

      {/* 토스트 메시지 - 투명 모달 형태 */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 px-6 py-4 rounded-lg shadow-xl"
          >
            <p className="text-gray-900 dark:text-gray-100 font-medium">
              링크 복사가 완료되었습니다
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}