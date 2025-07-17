// src/app/project/data/projects-content.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Project {
  id: string
  title: string
  description: string
  excerpt: string
  category: string
  year: string
  duration: string
  team: string[]
  tags: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  // content는 별도 파일에서 가져옴
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인 프로젝트',
    excerpt: '복잡한 이커머스 플랫폼을 사용자 중심으로 재설계하여 전환율을 35% 향상시킨 프로젝트입니다.',
    category: 'UX/UI Design',
    year: '2024',
    duration: '3개월',
    team: ['UX Designer', 'Frontend Developer', 'Product Manager'],
    tags: ['Figma', 'React', 'TypeScript', 'User Research', 'Prototyping'],
    images: ['/images/project-1-hero.jpg', '/images/project-1-process.jpg'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: '직관적이고 안전한 모바일 뱅킹 애플리케이션 디자인',
    excerpt: '복잡한 금융 서비스를 간단하고 안전하게 만든 차세대 모바일 뱅킹 앱입니다.',
    category: 'Mobile Design',
    year: '2024',
    duration: '4개월',
    team: ['Mobile Designer', 'iOS Developer', 'Android Developer', 'Security Expert'],
    tags: ['Mobile', 'Fintech', 'UX', 'Security', 'React Native'],
    images: ['/images/project-2-hero.jpg', '/images/project-2-screens.jpg'],
    liveUrl: 'https://app.example.com',
    githubUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description: '스타트업을 위한 일관성 있는 브랜드 아이덴티티 시스템 구축',
    excerpt: '브랜드의 핵심 가치를 시각적으로 표현한 포괄적인 아이덴티티 시스템입니다.',
    category: 'Branding',
    year: '2023',
    duration: '2개월',
    team: ['Brand Designer', 'Graphic Designer', 'Marketing Manager'],
    tags: ['Branding', 'Visual Identity', 'Guidelines', 'Logo Design'],
    images: ['/images/project-3-hero.jpg'],
    featured: false,
  },
  {
    id: '4',
    title: 'Design System Library',
    description: '확장 가능한 디자인 시스템과 컴포넌트 라이브러리 개발',
    excerpt: '개발 효율성과 디자인 일관성을 위한 포괄적인 디자인 시스템입니다.',
    category: 'Design System',
    year: '2023',
    duration: '5개월',
    team: ['Design System Lead', 'Frontend Developer', 'UX Designer'],
    tags: ['Design System', 'Storybook', 'Components', 'Documentation'],
    images: ['/images/project-4-hero.jpg'],
    featured: false,
  },
  {
    id: '5',
    title: 'Healthcare Dashboard',
    description: '의료진을 위한 직관적인 환자 관리 대시보드 설계',
    excerpt: '복잡한 의료 데이터를 한눈에 파악할 수 있는 직관적인 대시보드입니다.',
    category: 'Dashboard Design',
    year: '2023',
    duration: '3개월',
    team: ['UX Designer', 'Data Analyst', 'Healthcare Expert'],
    tags: ['Healthcare', 'Dashboard', 'Data Visualization', 'UX Research'],
    images: ['/images/project-5-hero.jpg'],
    featured: false,
  },
  {
    id: '6',
    title: 'Educational Platform',
    description: '온라인 학습을 위한 인터랙티브 교육 플랫폼 개발',
    excerpt: '학습자 중심의 맞춤형 교육 경험을 제공하는 온라인 플랫폼입니다.',
    category: 'EdTech',
    year: '2022',
    duration: '6개월',
    team: ['Product Designer', 'Full-stack Developer', 'Education Specialist'],
    tags: ['Education', 'Interactive', 'Learning', 'Gamification'],
    images: ['/images/project-6-hero.jpg'],
    featured: false,
  }
]

// 헬퍼 함수들
export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}

export function getAllCategories(): string[] {
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  return categories
}

// 정적 빌드를 위한 프로젝트 ID 목록 반환
export function getAllProjectIds() {
  return projects.map(project => ({ id: project.id }))
}

// 마크다운 파일에서 프로젝트 콘텐츠를 가져오는 함수
export function getProjectContent(id: string): string {
  try {
    const contentDir = path.join(process.cwd(), 'src/app/project/data/content')
    const filePath = path.join(contentDir, `project-${id}.md`)
    
    if (!fs.existsSync(filePath)) {
      return '프로젝트 내용을 찾을 수 없습니다.'
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContent)
    
    return content
  } catch (error) {
    console.error(`Error reading project ${id}:`, error)
    return '프로젝트 내용을 불러올 수 없습니다.'
  }
}

// 마크다운 파일에서 메타데이터도 함께 가져오는 함수 (옵션)
export function getProjectWithContent(id: string): (Project & { content: string }) | null {
  try {
    const project = getProject(id)
    if (!project) return null
    
    const content = getProjectContent(id)
    return { ...project, content }
  } catch (error) {
    console.error(`Error getting project with content ${id}:`, error)
    return null
  }
}