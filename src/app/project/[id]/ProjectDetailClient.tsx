// src/app/project/[id]/ProjectDetailClient.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Share2, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import type { ProjectData } from '../../lib/markdown'

interface ProjectDetailClientProps {
  project: ProjectData
  prevProject: ProjectData | null
  nextProject: ProjectData | null
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: ProjectDetailClientProps) {
  const [isSharing, setIsSharing] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = async () => {
    setIsSharing(true)
    
    if (navigator.share && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Share cancelled')
      }
    } else {
      // 링크 복사
      try {
        await navigator.clipboard.writeText(window.location.href)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (error) {
        console.log('Copy failed')
      }
    }
    
    setIsSharing(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <div className="pt-8 pb-6">
          <Link
            href="/project"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <section className="pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h1>
                    {project.featured && (
                      <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                    {project.client && (
                      <>
                        <span>•</span>
                        <span>{project.client}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Project Meta */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 space-y-6">
                {project.role && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">역할</div>
                    <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                )}
                
                {project.team && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">팀 구성</div>
                    <p className="font-medium text-gray-900 dark:text-white">{project.team}</p>
                  </div>
                )}
                
                {project.duration && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">기간</div>
                    <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                  </div>
                )}
                
                {project.tech && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">기술 스택</div>
                    <p className="font-medium text-gray-900 dark:text-white">{project.tech}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="pb-16">
          <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-3xl font-light">
                {project.title}
              </span>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="pb-16">
          <MarkdownRenderer content={project.content} />
        </section>

        {/* Navigation */}
        <section className="pb-16">
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-8">
            {/* Previous Project */}
            <div className="flex-1">
              {prevProject && (
                <Link
                  href={`/project/${prevProject.id}`}
                  className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-sm">Previous</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Link>
              )}
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </>
              )}
            </button>

            {/* Next Project */}
            <div className="flex-1 flex justify-end">
              {nextProject && (
                <Link
                  href={`/project/${nextProject.id}`}
                  className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <div className="text-right">
                    <div className="text-sm">Next</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}