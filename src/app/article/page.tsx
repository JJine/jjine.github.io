// src/app/article/page.tsx (서버 컴포넌트)
import { getAllArticles, getAllCategories, getFeaturedArticles } from './data/articles-content'
import ArticlesListClient from './ArticlesListClient'

export default function ArticlesPage() {
  const allArticles = getAllArticles()
  const categories = getAllCategories()
  const featuredArticles = getFeaturedArticles()

  return (
    <ArticlesListClient 
      allArticles={allArticles}
      categories={categories}
      featuredArticles={featuredArticles}
    />
  )
}