'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Heart, Bookmark } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useState } from 'react'

// 데이터 import
import { getArticle } from '../data/articles-content'

interface ArticleDetailPageProps {
  params: {
    id: string
  }
}

const ArticleDetailPage = ({ params }: ArticleDetailPageProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const article = getArticle(params.id)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async () => {
    setIsSharing(true)
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      alert('링크가 클립보드에 복사되었습니다!')
    }
    
    setIsSharing(false)
  }

  // 마크다운 스타일 콘텐츠를 JSX로 변환하는 함수 (수정된 버전)
const formatContent = (content: string): React.ReactNode[] => {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  
  let currentIndex = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${currentIndex++}`} className="text-3xl font-bold mt-8 mb-4 first:mt-0">
          {line.slice(2)}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mt-8 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <h4 key={`h4-${currentIndex++}`} className="text-lg font-semibold mt-4 mb-2">
          {line.slice(2, -2)}
        </h4>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={`li-${currentIndex++}`} className="ml-4 mb-1 list-disc">
          {line.slice(2)}
        </li>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={`blockquote-${currentIndex++}`} className="border-l-4 border-accent pl-4 py-2 my-4 bg-muted/50 rounded-r-lg italic">
          {line.slice(2)}
        </blockquote>
      )
    } else if (line.startsWith('*') && line.endsWith('*') && line.length > 2) {
      elements.push(
        <p key={`italic-${currentIndex++}`} className="text-sm text-muted-foreground italic text-center my-6">
          {line.slice(1, -1)}
        </p>
      )
    } else if (line.startsWith('---')) {
      elements.push(
        <hr key={`hr-${currentIndex++}`} className="border-border my-8" />
      )
    } else if (line.trim() === '') {
      elements.push(<br key={`br-${currentIndex++}`} />)
    } else if (line.trim() !== '') {
      // 코드 블록 처리
      if (line.startsWith('```')) {
        elements.push(
          <div key={`code-${currentIndex++}`} className="bg-muted p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
            {line.slice(3)}
          </div>
        )
      } else if (line.startsWith('**') && line.includes(':**')) {
        const parts = line.split(':**')
        elements.push(
          <p key={`bold-${currentIndex++}`} className="mb-4 leading-relaxed">
            <strong>{parts[0].slice(2)}:</strong>{parts[1]}
          </p>
        )
      } else {
        elements.push(
          <p key={`p-${currentIndex++}`} className="mb-4 leading-relaxed">
            {line}
          </p>
        )
      }
    }
  }
    
    return elements
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/article"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          아티클 목록으로 돌아가기
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-4">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {article.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          {article.excerpt}
        </p>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(article.date)}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {article.readTime}
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4" />
            {article.author}
          </div>
        </div>

        {/* Article Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
              isLiked 
                ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm">좋아요</span>
          </button>
          
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
              isBookmarked 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="text-sm">북마크</span>
          </button>
          
          <button
            onClick={handleShare}
            disabled={isSharing}
            className="flex items-center space-x-2 px-3 py-2 rounded-md bg-muted text-muted-foreground hover:bg-muted-foreground/10 transition-colors disabled:opacity-50"
          >
            <Share2 className="h-4 w-4" />
            <span className="text-sm">{isSharing ? '공유 중...' : '공유'}</span>
          </button>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
            <span className="text-muted-foreground">Article Hero Image</span>
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        {formatContent(article.content)}
      </motion.article>

      {/* Author Bio */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 p-6 bg-muted/50 rounded-lg"
      >
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm text-muted-foreground">Photo</span>
          </div>
          <div>
            <h3 className="font-semibold mb-2">작성자: {article.author}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UX/UI 디자이너이자 프론트엔드 개발자입니다. 사용자 중심의 디자인과 
              기술을 통해 의미 있는 경험을 만들어가는 것을 좋아합니다.
            </p>
            <div className="mt-3">
              <Link
                href="/about"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
              >
                더 알아보기 →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Articles (optional) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16"
      >
        <h3 className="text-xl font-semibold mb-6">관련 글</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Related articles would go here - for now just placeholder */}
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-medium mb-2">다른 흥미로운 글들</h4>
            <p className="text-sm text-muted-foreground">
              더 많은 아티클을 준비 중입니다.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-medium mb-2">추천 글</h4>
            <p className="text-sm text-muted-foreground">
              비슷한 주제의 글들을 곧 추가할 예정입니다.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16 pt-8 border-t border-border"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/article"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 아티클 보기
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              작성자 소개
            </Link>
            <Link
              href="/info"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              연락하기
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Comments Section (placeholder) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 pt-8 border-t border-border"
      >
        <h3 className="text-xl font-semibold mb-6">댓글</h3>
        <div className="bg-muted/50 rounded-lg p-6 text-center">
          <p className="text-muted-foreground">
            댓글 시스템을 준비 중입니다. 
            <br />
            의견이나 질문이 있으시면 <Link href="/info" className="underline underline-offset-4">연락처</Link>를 통해 문의해주세요.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default ArticleDetailPage