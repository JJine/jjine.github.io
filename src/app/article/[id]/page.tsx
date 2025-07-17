// src/app/article/[id]/page.tsx (서버 컴포넌트)
import { notFound } from 'next/navigation'
import { getArticle, getArticleContent, getAllArticleIds } from '../data/articles-content'
import ArticleDetailClient from './ArticleDetailClient'

interface ArticleDetailPageProps {
  params: Promise<{
    id: string
  }>
}

// 정적 빌드를 위한 generateStaticParams 함수 - 자동으로 모든 아티클 ID 반환
export async function generateStaticParams() {
  return getAllArticleIds()
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { id } = await params
  
  const article = getArticle(id)
  if (!article) {
    notFound()
  }

  const content = getArticleContent(id)

  return <ArticleDetailClient article={article} content={content} />
}