// src/app/lib/markdown.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectData {
  id: string
  title: string
  category: string
  year: string
  description: string
  tech: string
  status: string
  featured: boolean
  client: string
  role: string
  team: string
  duration: string
  content: string
  excerpt: string
}

export interface ArticleData {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  excerpt: string
  content: string
  author: string
  coverImage: string
}

// 프로젝트 마크다운 파일 읽기 (서버 사이드만)
export function getProjectData(id: string): ProjectData | null {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/app/project/data/content')
    const fullPath = path.join(projectsDirectory, `project-${id}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`Project file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title || `Project ${id}`,
      category: data.category || 'UX/UI Design',
      year: data.year || '2024',
      description: data.description || '',
      tech: data.tech || '',
      status: data.status || 'Completed',
      featured: data.featured || false,
      client: data.client || '',
      role: data.role || '',
      team: data.team || '',
      duration: data.duration || '',
      content,
      excerpt: data.excerpt || content.substring(0, 150) + '...',
    }
  } catch (error) {
    console.error(`Error reading project ${id}:`, error)
    return null
  }
}

// 모든 프로젝트 데이터 가져오기 (서버 사이드만)
export function getAllProjects(): ProjectData[] {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/app/project/data/content')
    
    if (!fs.existsSync(projectsDirectory)) {
      console.log('Projects directory not found, returning default projects')
      return getDefaultProjects()
    }
    
    const fileNames = fs.readdirSync(projectsDirectory)
    const projects: ProjectData[] = []

    for (const fileName of fileNames) {
      if (fileName.endsWith('.md') && fileName.startsWith('project-')) {
        const id = fileName.replace('project-', '').replace('.md', '')
        const projectData = getProjectData(id)
        if (projectData) {
          projects.push(projectData)
        }
      }
    }

    // 마크다운 파일이 없으면 기본 프로젝트 반환
    if (projects.length === 0) {
      return getDefaultProjects()
    }

    // 연도 기준 정렬 (최신순)
    return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year))
  } catch (error) {
    console.error('Error reading projects:', error)
    return getDefaultProjects()
  }
}

// 아티클 마크다운 파일 읽기 (서버 사이드만)
export function getArticleData(id: string): ArticleData | null {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src/app/article/data/content')
    const fullPath = path.join(articlesDirectory, `article-${id}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`Article file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title || `Article ${id}`,
      category: data.category || '디자인',
      date: data.date || '2025-01-01',
      readTime: data.readTime || '5분',
      tags: data.tags || [],
      featured: data.featured || false,
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content,
      author: data.author || 'Jin',
      coverImage: data.coverImage || '',
    }
  } catch (error) {
    console.error(`Error reading article ${id}:`, error)
    return null
  }
}

// 모든 아티클 데이터 가져오기 (서버 사이드만)
export function getAllArticles(): ArticleData[] {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src/app/article/data/content')
    
    if (!fs.existsSync(articlesDirectory)) {
      console.log('Articles directory not found, returning default articles')
      return getDefaultArticles()
    }
    
    const fileNames = fs.readdirSync(articlesDirectory)
    const articles: ArticleData[] = []

    for (const fileName of fileNames) {
      if (fileName.endsWith('.md') && fileName.startsWith('article-')) {
        const id = fileName.replace('article-', '').replace('.md', '')
        const articleData = getArticleData(id)
        if (articleData) {
          articles.push(articleData)
        }
      }
    }

    // 마크다운 파일이 없으면 기본 아티클 반환
    if (articles.length === 0) {
      return getDefaultArticles()
    }

    // 날짜 기준 정렬 (최신순)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading articles:', error)
    return getDefaultArticles()
  }
}

// 기본 프로젝트 데이터 (마크다운 파일이 없을 때 사용)
function getDefaultProjects(): ProjectData[] {
  return [
    {
      id: '1',
      title: 'Dacon Inc.',
      category: 'UI/UX',
      year: '2024',
      description: 'AI 데이터 사이언스 대회 플랫폼의 사용자 경험을 개선한 프로젝트',
      tech: 'React, TypeScript, Figma',
      status: 'Completed',
      featured: true,
      client: 'Dacon Inc.',
      role: 'Lead UX Designer',
      team: 'UX Designer, Frontend Developer, Product Manager',
      duration: '3개월',
      content: `# 프로젝트 개요

Dacon은 국내 최대 AI 데이터 사이언스 대회 플랫폼으로, 다양한 데이터 분석 경진대회를 개최하는 서비스입니다.

## 주요 성과

**참여율 35% 향상**: 새로운 대회 참여 플로우 도입

**모바일 사용성 45% 개선**: 반응형 디자인 최적화

**신규 사용자 유입 25% 증가**: 온보딩 프로세스 개선`,
      excerpt: 'AI 데이터 사이언스 대회 플랫폼의 사용자 경험을 개선하여 참여율을 35% 향상시킨 프로젝트입니다.',
    },
    {
      id: '2',
      title: 'Pick & Play',
      category: 'Branding, UI/UX',
      year: '2024',
      description: '모바일 게임 큐레이션 서비스의 브랜딩과 앱 디자인',
      tech: 'React Native, Node.js',
      status: 'In Progress',
      featured: true,
      client: '스타트업',
      role: 'Brand Designer, UX Designer',
      team: 'Brand Designer, UX Designer, Developer',
      duration: '4개월',
      content: `# 프로젝트 개요

Pick & Play는 사용자의 취향에 맞는 모바일 게임을 추천해주는 큐레이션 서비스입니다.

## 브랜딩 전략

### 핵심 컨셉
- **발견의 즐거움**: 새로운 게임을 찾는 재미
- **개인화**: 나만을 위한 추천
- **커뮤니티**: 게이머들과의 소통`,
      excerpt: '게임 발견의 새로운 경험을 제공하는 모바일 큐레이션 서비스입니다.',
    },
    {
      id: '3',
      title: 'Employee ID Cards',
      category: 'Editorial',
      year: '2023',
      description: '회사 직원증 디자인 시스템 구축 프로젝트',
      tech: 'Figma, Illustrator',
      status: 'Completed',
      featured: true,
      client: '회사 A',
      role: 'Graphic Designer',
      team: 'Design Team',
      duration: '2개월',
      content: `# 프로젝트 개요

회사 직원증의 디자인 시스템을 구축하여 일관성 있는 브랜딩을 구현한 프로젝트입니다.

## 디자인 시스템

체계적인 디자인 가이드라인을 통해 확장 가능한 시스템을 구축했습니다.`,
      excerpt: '일관성 있는 브랜딩을 위한 직원증 디자인 시스템입니다.',
    },
    {
      id: '4',
      title: 'Dolbomgil',
      category: 'UI/UX',
      year: '2023',
      description: '육아 도우미 매칭 플랫폼의 전체적인 사용자 경험 설계',
      tech: 'Flutter, Firebase',
      status: 'Completed',
      featured: true,
      client: '스타트업 B',
      role: 'UX Designer',
      team: 'UX Designer, Developer, PM',
      duration: '5개월',
      content: `# 프로젝트 개요

육아 도우미와 부모를 연결하는 매칭 플랫폼의 UX/UI를 설계한 프로젝트입니다.

## 주요 기능

- 도우미 매칭 시스템
- 리뷰 및 평점 시스템
- 실시간 채팅`,
      excerpt: '신뢰할 수 있는 육아 도우미 매칭 서비스입니다.',
    },
  ]
}

// 기본 아티클 데이터 (마크다운 파일이 없을 때 사용)
function getDefaultArticles(): ArticleData[] {
  return [
    {
      id: '1',
      title: '시각 정보를 소리로 번역하는 법 - 시각장애인을 위한 음성 인증',
      category: '디자인',
      date: '2025-07-18',
      readTime: '5분',
      tags: ['접근성', 'UX', '음성인증', '포용적디자인'],
      featured: true,
      author: '유니버셜디자인팀',
      coverImage: '/images/article-covers/voice-auth.jpg',
      excerpt: '프로그래스 바 같은 시각적인 정보를 어떻게 소리로 잘 전달할 수 있을까요? 시각장애인을 위한 사용 경험을 설계할 때 고려해야 할 지점을 알려드릴게요.',
      content: `# 시각 정보를 소리로 번역하는 법

프로그래스 바 같은 시각적인 정보를 어떻게 소리로 잘 전달할 수 있을까요?

## 접근성의 중요성

웹과 모바일 애플리케이션에서 시각적 정보는 대부분의 사용자에게 직관적이고 빠른 이해를 제공합니다.

### 주요 고려사항

**진행률 표시**: 단순히 "50%" 라고 말하는 것보다 "절반 정도 완료되었습니다"와 같은 자연스러운 표현이 더 이해하기 쉽습니다.

## 마무리

포용적 디자인은 특정 그룹만을 위한 것이 아닙니다. 모든 사용자가 더 나은 경험을 할 수 있도록 도와주는 설계 철학입니다.`,
    },
    {
      id: '2',
      title: 'UX 디자인 시 고려해야 할 5가지 접근성 원칙',
      category: '디자인',
      date: '2025-07-15',
      readTime: '7분',
      tags: ['접근성', 'UX', '디자인원칙'],
      featured: true,
      author: 'Jin',
      coverImage: '/images/article-covers/accessibility.jpg',
      excerpt: '모든 사용자가 동등하게 사용할 수 있는 디자인을 위한 핵심 원칙들을 소개합니다.',
      content: `# UX 디자인 시 고려해야 할 5가지 접근성 원칙

모든 사용자가 동등하게 사용할 수 있는 디자인을 위한 핵심 원칙들을 소개합니다.

## 1. 인식 가능성

사용자가 정보를 감지할 수 있어야 합니다.

## 2. 운용 가능성

모든 사용자가 인터페이스를 조작할 수 있어야 합니다.`,
    },
  ]
}