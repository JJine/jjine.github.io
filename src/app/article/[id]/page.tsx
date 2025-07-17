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
  if (!article) {
    notFound()
  }

  const content = getArticleContent(id)

  return <ArticleDetailClient article={article} content={content} />
}