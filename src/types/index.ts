// 공통 타입 정의

export interface Project {
  id: string
  title: string
  description: string
  category: string
  year: string
  duration?: string
  team?: string[]
  image?: string
  images?: string[]
  tags: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  content?: string
}

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
  content?: string
  coverImage?: string
}

export interface ContactInfo {
  icon: any // Lucide icon component
  label: string
  value: string
  href: string | null
}

export interface SocialLink {
  icon: any // Lucide icon component
  label: string
  href: string
  username: string
}

export interface Experience {
  period: string
  position: string
  company: string
  description: string
  achievements: string[]
}

export interface Education {
  period: string
  degree: string
  school: string
  description: string
}

export interface Award {
  year: string
  title: string
  organization: string
  project: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface NavigationItem {
  name: string
  href: string
}

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  author?: string
  image?: string
  url?: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ThemeConfig {
  colors: {
    background: string
    foreground: string
    muted: string
    'muted-foreground': string
    accent: string
    'accent-foreground': string
    border: string
  }
}

// 컴포넌트 Props 타입들
export interface HeaderProps {
  className?: string
}

export interface FooterProps {
  className?: string
}

export interface ProjectCardProps {
  project: Project
  index?: number
}

export interface ArticleCardProps {
  article: Article
  index?: number
}

export interface TagProps {
  tag: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export interface ToastProps {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  onClose: () => void
}

// API 응답 타입들
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

// 유틸리티 타입들
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type WithId<T> = T & { id: string }

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// 상수 타입들
export const CATEGORIES = {
  PROJECT: ['UX/UI Design', 'Mobile Design', 'Branding', 'Design System', 'Dashboard Design', 'EdTech'] as const,
  ARTICLE: ['Design System', 'UX Research', 'Development', 'Thoughts', 'Collaboration'] as const,
} as const

export type ProjectCategory = typeof CATEGORIES.PROJECT[number]
export type ArticleCategory = typeof CATEGORIES.ARTICLE[number]

export const SOCIAL_PLATFORMS = ['github', 'linkedin', 'twitter', 'instagram', 'dribbble', 'behance'] as const
export type SocialPlatform = typeof SOCIAL_PLATFORMS[number]

// 애니메이션 타입들
export interface AnimationConfig {
  initial: object
  animate: object
  transition?: object
  delay?: number
}

export interface MotionProps {
  initial?: object
  animate?: object
  exit?: object
  transition?: object
  delay?: number
  duration?: number
  ease?: string | number[]
}

// 검색/필터 타입들
export interface SearchFilters {
  query: string
  category: string
  tags: string[]
  dateRange?: {
    start: Date
    end: Date
  }
}

export interface SortOptions {
  field: 'date' | 'title' | 'category'
  direction: 'asc' | 'desc'
}

// 페이지네이션 타입들
export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  showPrevNext?: boolean
}

export interface PaginatedData<T> {
  items: T[]
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

// 에러 타입들
export interface AppError {
  code: string
  message: string
  details?: any
}

export interface ValidationError {
  field: string
  message: string
}

// 이벤트 타입들
export interface ShareOptions {
  title: string
  text: string
  url: string
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// 설정 타입들
export interface SiteConfig {
  name: string
  description: string
  url: string
  author: {
    name: string
    email: string
    social: Record<SocialPlatform, string>
  }
  navigation: NavigationItem[]
  footer: {
    copyright: string
    links: NavigationItem[]
  }
}

export interface BuildConfig {
  static: boolean
  trailingSlash: boolean
  images: {
    unoptimized: boolean
  }
}

// 환경 변수 타입들
export interface EnvironmentConfig {
  NEXT_PUBLIC_SITE_URL: string
  NEXT_PUBLIC_CONTACT_EMAIL: string
  NEXT_PUBLIC_GITHUB_URL: string
  NEXT_PUBLIC_LINKEDIN_URL: string
  NEXT_PUBLIC_TWITTER_URL?: string
  NEXT_PUBLIC_GA_ID?: string
}