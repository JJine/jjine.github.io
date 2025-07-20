// 📍 파일 경로: src/app/article/[id]/ArticleDetailClient.tsx

'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getArticle, getArticleContent } from '../data/articles-content'

export default function ArticleDetailClient() {
  const params = useParams()
  const id = params?.id as string
  const [article, setArticle] = useState<any>(null)
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const loadArticle = async () => {
      if (id) {
        const articleData = getArticle(id)
        if (articleData) {
          setArticle(articleData)
          try {
            const articleContent = await getArticleContent(id)
            setContent(articleContent)
          } catch (error) {
            console.error('Error loading content:', error)
            setContent('콘텐츠를 불러올 수 없습니다.')
          }
        }
      }
      setLoading(false)
    }

    loadArticle()
  }, [id])

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    } catch (error) {
      console.log('Error sharing:', error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements = []
    let currentIndex = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line === '') {
        continue
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mb-6 mt-12 text-gray-900">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mb-4 mt-8 text-gray-900">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        const listItems = []
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(lines[i].trim().replace('- ', ''))
          i++
        }
        i-- // 마지막 증가를 되돌림
        
        elements.push(
          <ul key={`ul-${currentIndex++}`} className="mb-6 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-gray-400 mt-2">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )
      } else {
        const boldRegex = /\*\*(.*?)\*\*/g
        const parts = line.split(boldRegex)
        const formattedLine = parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={`bold-${currentIndex}-${index}`} className="font-semibold text-gray-900">{part}</strong>
          }
          return part
        })
        
        elements.push(
          <p key={`p-${currentIndex++}`} className="mb-4 leading-relaxed text-gray-700">
            {formattedLine}
          </p>
        )
      }
    }
    
    return elements
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>로딩 중...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">아티클을 찾을 수 없습니다</h1>
          <Link href="/article" className="text-gray-600 hover:text-gray-900 transition-colors">
            아티클 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Back Button */}
          <Link
            href="/article"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            아티클 목록으로 돌아가기
          </Link>

          {/* Article Header */}
          <header className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">{article.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{formatDate(article.date)}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{article.readTime}</span>
                {article.featured && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                      Featured
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light text-gray-900">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">작성자: {article.author}</span>
              </div>
              
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <Share2 className="h-4 w-4" />
                <span>{isCopied ? '복사됨!' : '공유'}</span>
              </button>
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Article Hero Image</span>
            </div>
          </div>

          {/* Tags - About 스킬 스타일 적용 */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <article className="space-y-6">
            {formatContent(content)}
          </article>

          {/* Author Bio */}
          <section className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-gray-500">Photo</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">작성자: {article.author}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  프로덕트 매니저이자 UX/UI 디자이너입니다. 사용자 중심의 디자인과 
                  기술을 통해 의미 있는 경험을 만들어가는 것을 좋아합니다.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                href="/article"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                모든 아티클 보기
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  작성자 소개
                </Link>
                <Link
                  href="/info"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  연락하기
                </Link>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </div>
  )
}