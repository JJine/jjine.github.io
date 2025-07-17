// src/app/article/[id]/page.tsx (서버 컴포넌트)
import { notFound } from 'next/navigation'
import { getArticle, getArticleContent } from '../data/articles-content'
import ArticleDetailClient from './ArticleDetailClient'

interface ArticleDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { id } = await params
  
  const article = getArticle(id)
  const content = getArticleContent(id)

  // 둘 다 확인
  if (!article) {
    notFound()
  }

  console.log('Article data:', article) // 디버깅용
  console.log('Content:', content.slice(0, 100)) // 디버깅용

  return <ArticleDetailClient article={article} content={content} />
}