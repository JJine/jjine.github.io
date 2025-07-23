// 📍 파일 경로: src/app/article/[id]/page.tsx

'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ArticleDetailClient from './ArticleDetailClient'

export default function ArticleDetailPage() {
  const params = useParams()
  const articleId = params?.id as string
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        // public/content/articles/ 폴더에서 마크다운 파일 로드
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

    if (articleId) {
      loadContent()
    }
  }, [articleId])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spin w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-gray-100 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">아티클을 불러오는 중...</p>
        </div>
      </div>
    )
  }

  if (!articleId) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4 text-gray-900 dark:text-gray-100">아티클을 찾을 수 없습니다</h1>
          <a href="/article" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            아티클 목록으로 돌아가기
          </a>
        </div>
      </div>
    )
  }

  return <ArticleDetailClient articleId={articleId} content={content} />
}