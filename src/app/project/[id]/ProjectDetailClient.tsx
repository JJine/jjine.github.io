'use client'

// src/app/project/[id]/ProjectDetailClient.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, ExternalLink, Github, Users, Clock } from 'lucide-react'
import { Project } from '../data/projects-content'

interface ProjectDetailClientProps {
  project: Project
  content: string
}

export default function ProjectDetailClient({ project, content }: ProjectDetailClientProps) {
  // 마크다운 스타일 콘텐츠를 JSX로 변환하는 함수
  const formatContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    
    let currentIndex = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${currentIndex++}`} className="text-3xl font-bold mt-8 mb-4 first:mt-0 text-gray-900 dark:text-white">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
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
          <h4 key={`h4-${currentIndex++}`} className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
            {line.slice(2, -2)}
          </h4>
        )
      } else if (line.startsWith('*') && line.endsWith('*') && line.length > 2) {
        elements.push(
          <p key={`italic-${currentIndex++}`} className="text-sm text-gray-500 dark:text-gray-400 italic text-center my-6">
            {line.slice(1, -1)}
          </p>
        )
      } else if (line.startsWith('---')) {
        elements.push(
          <hr key={`hr-${currentIndex++}`} className="border-gray-200 dark:border-gray-700 my-8" />
        )
      } else if (line.trim() === '') {
        elements.push(<br key={`br-${currentIndex++}`} />)
      } else if (line.trim() !== '') {
        elements.push(
          <p key={`p-${currentIndex++}`} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {line}
          </p>
        )
      }
    }
    
    return elements
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
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
        <div className="mb-4 flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {project.excerpt}
        </p>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span>{project.team.length}명 팀</span>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">팀 구성</h3>
          <div className="flex flex-wrap gap-2">
            {project.team.map((member) => (
              <span
                key={member}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Project Hero Image</span>
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
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">기술 스택</h3>
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
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        {formatContent(content)}
      </motion.article>

      {/* Project Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">프로젝트 요약</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">기간</h4>
            <p className="text-gray-600 dark:text-gray-400">{project.duration} ({project.year})</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">팀 구성</h4>
            <p className="text-gray-600 dark:text-gray-400">{project.team.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">카테고리</h4>
            <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">주요 기술</h4>
            <p className="text-gray-600 dark:text-gray-400">{project.tags.slice(0, 3).join(', ')}</p>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/project"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 프로젝트 보기
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              작업자 소개
            </Link>
            <Link
              href="/info"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              연락하기
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}