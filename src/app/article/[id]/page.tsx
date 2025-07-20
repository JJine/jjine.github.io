// src/app/article/[id]/page.tsx
import { notFound } from 'next/navigation'
import { getArticleData, getAllArticles } from '../../lib/markdown'
import ArticleDetailClient from './ArticleDetailClient'

interface ArticleDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  const articles = getAllArticles() // async 제거
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { id } = await params
  
  const article = getArticleData(id) // async 제거
  
  if (!article) {
    notFound()
  }

  // 이전/다음 아티클 찾기
  const allArticles = getAllArticles() // async 제거
  const currentIndex = allArticles.findIndex(a => a.id === id)
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  return (
    <ArticleDetailClient 
      article={article}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
    />
  )
}