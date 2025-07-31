// 📍 파일 경로: src/app/article/[id]/page.tsx

import { getAllArticleIds } from '../data/articles-content'
import ArticleDetailClient from './ArticleDetailClient'

// 정적 생성을 위한 함수 (서버 컴포넌트에서만 사용 가능)
export async function generateStaticParams() {
  const articleIds = getAllArticleIds()
  
  return articleIds.map((article) => ({
    id: article.id,
  }))
}

// 서버 컴포넌트 - generateStaticParams와 함께 사용
export default async function ArticleDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Next.js 15에서는 params가 Promise이므로 await 필요
  const { id } = await params
    
  // 현재 ArticleDetailClient가 기대하는 props: articleId, content
  // content는 빈 문자열로 전달하고, 클라이언트에서 로드하도록 함
  return <ArticleDetailClient articleId={id} content="" />
}