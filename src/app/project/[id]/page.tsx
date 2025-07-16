'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from 'lucide-react'
import { notFound } from 'next/navigation'

// Mock data - 실제로는 API나 파일 시스템에서 가져올 데이터
const projectsData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인 프로젝트',
    category: 'UX/UI Design',
    year: '2024',
    duration: '3개월',
    team: ['UX Designer', 'Frontend Developer', 'Product Manager'],
    tags: ['Figma', 'React', 'TypeScript', 'User Research', 'Prototyping'],
    images: ['/images/project-1-hero.jpg', '/images/project-1-process.jpg'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    content: `
# 프로젝트 개요

기존 이커머스 플랫폼의 사용자 경험을 분석하고, 고객의 구매 여정을 개선하기 위한 전면적인 리디자인 프로젝트였습니다.

## 문제 정의

기존 플랫폼의 주요 문제점들을 식별했습니다:

- 복잡한 네비게이션 구조로 인한 높은 이탈률
- 모바일 환경에서의 낮은 사용성
- 일관성 없는 디자인 시스템

## 해결 과정

### 1. 사용자 리서치

기존 사용자들과의 인터뷰와 사용성 테스트를 통해 실제 pain point를 파악했습니다.

### 2. 정보 구조 재설계

사용자의 멘탈 모델에 맞는 새로운 정보 구조를 설계했습니다.

### 3. 프로토타이핑 및 테스트

Figma를 활용한 고해상도 프로토타입을 제작하고 반복적인 사용자 테스트를 진행했습니다.

## 주요 성과

- **전환율 35% 향상**: 새로운 구매 플로우 도입
- **모바일 사용성 45% 개선**: 반응형 디자인 최적화
- **고객 만족도 25% 증가**: 사용자 피드백 반영

## 배운 점

이 프로젝트를 통해 데이터 기반 디자인 결정의 중요성을 깊이 이해하게 되었습니다. 또한 개발팀과의 긴밀한 협업이 최종 결과물의 품질에 미치는 영향을 체감할 수 있었습니다.
    `
  },
  '2': {
    id: '2',
    title: 'Mobile Banking App',
    description: '직관적이고 안전한 모바일 뱅킹 애플리케이션 디자인',
    category: 'Mobile Design',
    year: '2024',
    duration: '4개월',
    team: ['Mobile Designer', 'iOS Developer', 'Android Developer', 'Security Expert'],
    tags: ['Mobile', 'Fintech', 'UX', 'Security', 'React Native'],
    images: ['/images/project-2-hero.jpg', '/images/project-2-screens.jpg'],
    liveUrl: 'https://app.example.com',
    content: `
# 모바일 뱅킹 앱 디자인

사용자의 금융 라이프스타일을 혁신하는 직관적인 모바일 뱅킹 애플리케이션을 디자인했습니다.

## 프로젝트 목표

- 복잡한 금융 서비스를 간단하고 직관적으로 만들기
- 높은 보안 수준을 유지하면서도 편리한 사용성 제공
- 다양한 연령대의 사용자를 고려한 접근성 확보

## 디자인 원칙

### 1. 단순함 (Simplicity)
복잡한 금융 정보를 이해하기 쉽게 시각화했습니다.

### 2. 신뢰성 (Trust)
사용자가 안심하고 사용할 수 있는 신뢰감 있는 인터페이스를 구현했습니다.

### 3. 접근성 (Accessibility)
모든 사용자가 쉽게 접근할 수 있도록 WCAG 가이드라인을 준수했습니다.

## 주요 기능

- **간편 송금**: 연락처에서 바로 송금할 수 있는 직관적인 UX
- **가계부 자동 분류**: AI 기반 자동 카테고리 분류
- **맞춤형 대시보드**: 개인 금융 패턴 분석 및 인사이트 제공

## 보안 고려사항

금융 앱의 특성상 보안이 최우선이었습니다:
- 생체 인증 통합
- 화면 캡처 방지
- 세션 타임아웃 최적화
    `
  }
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const project = projectsData[params.id]

  if (!project) {
    notFound()
  }

  // 마크다운 스타일 콘텐츠를 간단한 HTML로 변환하는 함수 (실제로는 remark 등을 사용)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        if (line.includes('**') && line.includes('**:')) {
          const parts = line.split('**')
          return (
            <p key={index} className="mb-4">
              <strong>{parts[1]}</strong>: {parts[2]}
            </p>
          )
        }
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>
      })
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/project"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          프로젝트 목록으로 돌아가기
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-4">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {project.year} · {project.duration}
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4" />
            {project.team.join(', ')}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              라이브 보기
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
            <span className="text-muted-foreground">Project Hero Image</span>
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        {formatContent(project.content)}
      </motion.article>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-8 border-t border-border"
      >
        <div className="flex justify-between">
          <Link
            href="/project"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 프로젝트 보기
          </Link>
          <Link
            href="/info"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            연락하기
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}

export default ProjectDetailPage