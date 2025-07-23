// 📍 파일 경로: src/app/article/data/articles-content.ts

export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'UX 디자인에서 사용자 리서치의 중요성',
    excerpt: '좋은 디자인의 출발점은 사용자를 이해하는 것입니다. 사용자 리서치를 통해 진짜 문제를 찾고 해결하는 방법에 대해 이야기합니다.',
    category: 'UX Design',
    date: '2024-07-15',
    readTime: '5분',
    tags: ['UX', 'User Research', 'Design Process'],
    featured: true,
  },
  {
    id: '2',
    title: 'React와 TypeScript로 컴포넌트 설계하기',
    excerpt: '재사용 가능하고 유지보수하기 쉬운 React 컴포넌트를 TypeScript와 함께 설계하는 모범 사례를 소개합니다.',
    category: 'Development',
    date: '2024-07-10',
    readTime: '8분',
    tags: ['React', 'TypeScript', 'Component Design'],
    featured: true,
  },
  {
    id: '3',
    title: '디자인 시스템 구축 경험기',
    excerpt: '스타트업에서 처음부터 디자인 시스템을 구축하며 겪은 시행착오와 배운 점들을 공유합니다.',
    category: 'Design System',
    date: '2024-07-05',
    readTime: '6분',
    tags: ['Design System', 'Figma', 'Collaboration'],
    featured: false,
  },
  {
    id: '4',
    title: 'Next.js 14와 App Router 실전 활용법',
    excerpt: 'Next.js 14의 새로운 App Router를 실제 프로젝트에 적용하며 배운 팁과 주의사항을 정리했습니다.',
    category: 'Development',
    date: '2024-06-28',
    readTime: '10분',
    tags: ['Next.js', 'App Router', 'React'],
    featured: false,
  },
  {
    id: '5',
    title: '모바일 퍼스트 디자인 원칙',
    excerpt: '모바일 환경을 우선으로 고려한 디자인 접근법과 실무에서 적용할 수 있는 구체적인 방법론을 소개합니다.',
    category: 'Mobile Design',
    date: '2024-06-20',
    readTime: '7분',
    tags: ['Mobile', 'Responsive Design', 'UX'],
    featured: false,
  },
  {
    id: '6',
    title: 'API 설계와 프론트엔드 협업',
    excerpt: '효율적인 API 설계를 통해 프론트엔드와 백엔드 간의 협업을 개선하는 방법에 대해 다룹니다.',
    category: 'Development',
    date: '2024-06-15',
    readTime: '9분',
    tags: ['API', 'Frontend', 'Backend', 'Collaboration'],
    featured: false,
  }
]

// 헬퍼 함수들
export function getArticle(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

export function getAllArticles(): Article[] {
  return articles
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles
  return articles.filter(article => article.category === category)
}

export function getAllCategories(): string[] {
  const uniqueCategories = new Set(articles.map(article => article.category))
  const categories = ['All', ...Array.from(uniqueCategories)]
  return categories
}

// 정적 빌드를 위한 아티클 ID 목록 반환
export function getAllArticleIds() {
  return articles.map(article => ({ id: article.id }))
}

// 마크다운 파일에서 아티클 콘텐츠를 가져오는 함수 (클라이언트용)
export async function getArticleContent(id: string): Promise<string> {
  try {
    // 클라이언트에서 public 폴더의 마크다운 파일을 fetch로 가져오기
    const response = await fetch(`/content/articles/article-${id}.md`)
    if (!response.ok) {
      return '아티클 내용을 찾을 수 없습니다.'
    }
    
    const content = await response.text()
    return content
  } catch (error) {
    console.error(`Error reading article ${id}:`, error)
    return '아티클 내용을 불러올 수 없습니다.'
  }
}

// 마크다운 파일에서 메타데이터도 함께 가져오는 함수 (옵션)
export async function getArticleWithContent(id: string): Promise<(Article & { content: string }) | null> {
  try {
    const article = getArticle(id)
    if (!article) return null
    
    const content = await getArticleContent(id)
    return { ...article, content }
  } catch (error) {
    console.error(`Error getting article with content ${id}:`, error)
    return null
  }
}