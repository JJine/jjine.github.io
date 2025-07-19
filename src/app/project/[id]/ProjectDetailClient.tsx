'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, ExternalLink, Github, Users, Clock } from 'lucide-react'

interface Project {
  id: string
  title: string
  excerpt: string
  year: string
  duration: string
  category: string
  team: string[]
  tags: string[]
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
}

interface ProjectDetailClientProps {
  project: Project
  content: string
}

export default function ProjectDetailClient({ project, content }: ProjectDetailClientProps) {
  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              프로젝트를 찾을 수 없습니다
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              요청하신 프로젝트가 존재하지 않습니다.
            </p>
            <a
              href="/project"
              className="inline-flex items-center text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              ← 프로젝트 목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    )
  }

  // 마크다운 스타일 콘텐츠를 JSX로 변환하는 함수
  const formatContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    
    let currentIndex = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${currentIndex++}`} className="text-3xl font-bold mt-8 mb-4 first:mt-0 text-gray-900 dark:text-gray-100">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
            {line.slice(4)}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${currentIndex++}`} className="ml-4 mb-1 list-disc text-gray-700 dark:text-gray-300">
            {line.slice(2)}
          </li>
        )
      } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
        elements.push(
          <h4 key={`h4-${currentIndex++}`} className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
            {line.slice(2, -2)}
          </h4>
        )
      } else if (line.trim() === '') {
        elements.push(<br key={`br-${currentIndex++}`} />)
      } else if (line.trim() !== '') {
        // **텍스트** 볼드 처리
        const boldRegex = /\*\*(.*?)\*\*/g
        const parts = line.split(boldRegex)
        const formattedLine = parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={`bold-${currentIndex}-${index}`} className="font-semibold text-gray-900 dark:text-gray-100">{part}</strong>
          }
          return part
        })
        
        elements.push(
          <p key={`p-${currentIndex++}`} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {formattedLine}
          </p>
        )
      }
    }
    
    return elements
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Back Button */}
          <a
            href="/project"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            프로젝트 목록으로 돌아가기
          </a>

          {/* Project Header */}
          <header className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500 dark:text-gray-500">{project.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-500">{project.year}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-500">{project.duration}</span>
                {project.featured && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                      Featured
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.excerpt}
              </p>
            </div>

            {/* Project Meta Grid - 영역별 구성 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-y border-gray-200 dark:border-gray-800">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">Strategy</h3>
                <p className="text-gray-900 dark:text-gray-100">Brand Strategy,</p>
                <p className="text-gray-900 dark:text-gray-100">UX Strategy</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">Design</h3>
                <p className="text-gray-900 dark:text-gray-100">UI/UX Design</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">Client</h3>
                <p className="text-gray-900 dark:text-gray-100">{project.client || 'Dacon Inc.'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">Next Project</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 dark:text-gray-100">Career Dive</span>
                  <div className="flex space-x-1">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">팀 구성</h3>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member) => (
                  <span
                    key={member}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Hero Image</span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <article className="space-y-6">
            {formatContent(content)}
          </article>

          {/* Project Summary */}
          <section className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">프로젝트 요약</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">기간</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.duration} ({project.year})</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">팀 구성</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.team.join(', ')}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">카테고리</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">주요 기술</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.tags.slice(0, 3).join(', ')}</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <a
                href="/project"
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                모든 프로젝트 보기
              </a>
              <div className="flex space-x-4">
                <a
                  href="/about"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  작업자 소개
                </a>
                <a
                  href="/info"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  연락하기
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </a>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </div>
  )
}