'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Share2, X, Copy, Check } from 'lucide-react'

interface ProjectNavigationProps {
  currentProject: {
    id: string
    title: string
  }
  prevProject?: {
    id: string
    title: string
  }
  nextProject?: {
    id: string
    title: string
  }
}

export default function ProjectNavigation({ 
  currentProject, 
  prevProject, 
  nextProject 
}: ProjectNavigationProps) {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentProject.title,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
        handleCopyLink()
      }
    } else {
      handleCopyLink()
    }
    setIsShareOpen(false)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.log('Copy failed:', error)
    }
  }

  return (
    <>
      {/* Floating Navigation - 독특한 디자인 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {/* Share Button */}
          <div className="relative group">
            <button
              onClick={() => setIsShareOpen(true)}
              className="w-14 h-14 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-gray-50/90 dark:hover:bg-gray-900/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="공유하기"
            >
              <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                공유하기
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black dark:border-l-white"></div>
              </div>
            </div>
          </div>

          {/* Navigation Divider */}
          <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700 dark:to-transparent mx-auto"></div>

          {/* Previous Project */}
          {prevProject && (
            <div className="relative group">
              <a
                href={`/project/${prevProject.id}`}
                className="block w-14 h-14 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-gray-50/90 dark:hover:bg-gray-900/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label={`이전 프로젝트: ${prevProject.title}`}
              >
                <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:-translate-x-1 transition-transform duration-200" />
              </a>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-lg text-sm whitespace-nowrap max-w-48">
                  <div className="font-medium">{prevProject.title}</div>
                  <div className="text-xs opacity-75">이전 프로젝트</div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black dark:border-l-white"></div>
                </div>
              </div>
            </div>
          )}

          {/* Next Project */}
          {nextProject && (
            <div className="relative group">
              <a
                href={`/project/${nextProject.id}`}
                className="block w-14 h-14 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-gray-50/90 dark:hover:bg-gray-900/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label={`다음 프로젝트: ${nextProject.title}`}
              >
                <ArrowRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-lg text-sm whitespace-nowrap max-w-48">
                  <div className="font-medium">{nextProject.title}</div>
                  <div className="text-xs opacity-75">다음 프로젝트</div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black dark:border-l-white"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Share Modal - 개선된 디자인 */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                프로젝트 공유
              </h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              '{currentProject.title}' 프로젝트를 공유해보세요
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleShare}
                className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                {isCopied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>링크 복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>링크 복사</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => setIsShareOpen(false)}
                className="w-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}