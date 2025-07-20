// 📍 파일 경로: src/app/project/[id]/ProjectDetailClient.tsx

'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Share2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { getProject, getProjectContent } from '../data/projects-content'

interface ProjectDetailClientProps {
  params: {
    id: string
  }
}

export default function ProjectDetailClient({ params }: ProjectDetailClientProps) {
  const [isCopied, setIsCopied] = useState(false)
  
  // 기존 데이터에서 프로젝트 정보 가져오기
  const project = getProject(params.id)
  const content = getProjectContent(params.id)
  
  if (!project) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/project" className="text-gray-600 hover:text-gray-900 transition-colors">
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  // 이전/다음 프로젝트 (실제로는 데이터에서 가져와야 함)
  const prevProject = { id: '2', title: 'Mobile Banking App' }
  const nextProject = { id: '4', title: 'Design System Library' }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    } catch (error) {
      console.log('Error sharing:', error)
    }
  }

  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements = []
    let currentIndex = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line === '') {
        continue
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mb-6 mt-12 text-gray-900">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mb-4 mt-8 text-gray-900">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        const listItems = []
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(lines[i].trim().replace('- ', ''))
          i++
        }
        i-- // 마지막 증가를 되돌림
        
        elements.push(
          <ul key={`ul-${currentIndex++}`} className="mb-6 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-gray-400 mt-2">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )
      } else {
        const boldRegex = /\*\*(.*?)\*\*/g
        const parts = line.split(boldRegex)
        const formattedLine = parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={`bold-${currentIndex}-${index}`} className="font-semibold text-gray-900">{part}</strong>
          }
          return part
        })
        
        elements.push(
          <p key={`p-${currentIndex++}`} className="mb-4 leading-relaxed text-gray-700">
            {formattedLine}
          </p>
        )
      }
    }
    
    return elements
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Back Button */}
              <Link
                href="/project"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                프로젝트 목록으로 돌아가기
              </Link>

              {/* Project Header */}
              <header className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">{project.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{project.year}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{project.duration}</span>
                    {project.featured && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                          Featured
                        </span>
                      </>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-light text-gray-900">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags - About 스킬 스타일 적용 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Hero Image */}
              <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Hero Image</span>
                </div>
              </div>

              {/* Content */}
              <article className="space-y-6">
                {formatContent(content)}
              </article>
            </motion.div>
          </div>

          {/* Right Sidebar Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Share Button */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-gray-900">프로젝트 공유</h3>
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  <span>{isCopied ? '링크 복사됨!' : '공유하기'}</span>
                </button>
              </div>

              {/* Previous Project */}
              {prevProject && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-gray-900">이전 프로젝트</h3>
                  <Link
                    href={`/project/${prevProject.id}`}
                    className="group flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <ArrowLeft className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      <span className="font-medium text-gray-900">{prevProject.title}</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Next Project */}
              {nextProject && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-gray-900">다음 프로젝트</h3>
                  <Link
                    href={`/project/${nextProject.id}`}
                    className="group flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">{nextProject.title}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </Link>
                </div>
              )}

              {/* Project Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-gray-900">프로젝트 정보</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">카테고리:</span>
                    <span className="ml-2 text-gray-900">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">연도:</span>
                    <span className="ml-2 text-gray-900">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">기간:</span>
                    <span className="ml-2 text-gray-900">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">팀:</span>
                    <span className="ml-2 text-gray-900">{project.team.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}