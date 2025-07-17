// src/app/article/data/articles-content.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tags: string[]
  author: string
  featured: boolean
  // content는 별도 파일에서 가져옴
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'AI와 함께하는 UX 디자인의 미래',
    excerpt: 'AI 도구들이 UX 디자인 프로세스를 어떻게 변화시키고 있는지, 그리고 디자이너가 준비해야 할 것들에 대해 이야기합니다.',
    category: 'AI & Design',
    date: '2024-07-15',
    readTime: '8분',
    tags: ['AI', 'UX Design', 'Future', 'Technology'],
    author: 'Jjine',
    featured: true,
  },
  {
    id: '2',
    title: '디자인 시스템을 구축하며 배운 것들',
    excerpt: '스타트업에서 디자인 시스템을 처음부터 구축하면서 겪었던 시행착오와 교훈들을 공유합니다.',
    category: 'Design System',
    date: '2024-07-10',
    readTime: '5분',
    tags: ['Design System', 'Figma', 'Component', 'Startup'],
    author: 'Jjine',
    featured: true,
  },
  {
    id: '3',
    title: '사용자 리서치가 제품을 구했던 순간',
    excerpt: '정량적 데이터만으로는 알 수 없었던 사용자의 진짜 문제를 발견하고, 제품 방향을 완전히 바꾼 경험을 공유합니다.',
    category: 'User Research',
    date: '2024-07-05',
    readTime: '6분',
    tags: ['User Research', 'Product Strategy', 'Data Analysis'],
    author: 'Jjine',
    featured: false,
  },
  {
    id: '4',
    title: '모바일 퍼스트 디자인 실전 가이드',
    excerpt: '모바일 환경을 우선으로 고려한 디자인 접근법과 실제 프로젝트에서 적용한 방법론을 소개합니다.',
    category: 'Mobile Design',
    date: '2024-06-28',
    readTime: '7분',
    tags: ['Mobile Design', 'Responsive', 'UX Strategy'],
    author: 'Jjine',
    featured: false,
  },
  {
    id: '5',
    title: '디자이너를 위한 코드 기초 지식',
    excerpt: '개발자와 더 나은 협업을 위해 디자이너가 알아두면 좋은 기본적인 코드 지식들을 정리했습니다.',
    category: 'Design & Development',
    date: '2024-06-20',
    readTime: '4분',
    tags: ['HTML', 'CSS', 'Collaboration', 'Frontend'],
    author: 'Jjine',
    featured: false,
  },
  {
    id: '6',
    title: '원격 근무 환경에서의 디자인 협업',
    excerpt: '팬데믹 이후 변화한 원격 근무 환경에서 효과적인 디자인 협업 방법과 도구들을 소개합니다.',
    category: 'Remote Work',
    date: '2024-06-15',
    readTime: '5분',
    tags: ['Remote Work', 'Collaboration', 'Design Tools', 'Productivity'],
    author: 'Jjine',
    featured: false,
  }
]

// 헬퍼 함수들
export function getArticle(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return getAllArticles()
  return articles.filter(article => article.category === category)
}

export function getAllCategories(): string[] {
  const categories = ['All', ...new Set(articles.map(article => article.category))]
  return categories
}

export function getRecentArticles(limit: number = 3): Article[] {
  return getAllArticles().slice(0, limit)
}

// 정적 빌드를 위한 아티클 ID 목록 반환
export function getAllArticleIds() {
  return articles.map(article => ({ id: article.id }))
}

// 마크다운 파일에서 아티클 콘텐츠를 가져오는 함수
export function getArticleContent(id: string): string {
  try {
    const contentDir = path.join(process.cwd(), 'src/app/article/data/content')
    const filePath = path.join(contentDir, `article-${id}.md`)
    
    if (!fs.existsSync(filePath)) {
      return '아티클 내용을 찾을 수 없습니다.'
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContent)
    
    return content
  } catch (error) {
    console.error(`Error reading article ${id}:`, error)
    return '아티클 내용을 불러올 수 없습니다.'
  }
}

// 마크다운 파일에서 메타데이터도 함께 가져오는 함수 (옵션)
export function getArticleWithContent(id: string): (Article & { content: string }) | null {
  try {
    const article = getArticle(id)
    if (!article) return null
    
    const content = getArticleContent(id)
    return { ...article, content }
  } catch (error) {
    console.error(`Error getting article with content ${id}:`, error)
    return null
  }
}