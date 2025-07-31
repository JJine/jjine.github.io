// src/app/article/page.tsx

import { getAllArticles, getAllCategories } from './data/articles-content'
import ArticlesListClient from './ArticlesListClient'

export default function ArticlePage() {
  const allArticles = getAllArticles()
  const categories = getAllCategories().filter(cat => cat !== 'All')

  return (
    <ArticlesListClient 
      allArticles={allArticles} 
      categories={categories}
    />
  )
}