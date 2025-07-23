// 📍 파일 경로: src/app/project/ProjectsListClient.tsx
// 이 파일로 기존 ProjectsListClient.tsx를 교체하세요

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Calendar } from 'lucide-react'
import CursorAnimation from '../components/CursorAnimation'

interface Project {
  id: string
  title: string
  description: string
  excerpt: string
  category: string
  year: string
  duration: string
  team: string[]
  tags: string[]
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
}

interface ProjectsListClientProps {
  allProjects: Project[]
  categories: string[]
}

export default function ProjectsListClient({ 
  allProjects, 
  categories 
}: ProjectsListClientProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter)

  // 최신순으로 정렬
  const sortedProjects = [...filteredProjects].sort((a, b) => parseInt(b.year) - parseInt(a.year))

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <CursorAnimation />
      
      {/* Home 페이지와 동일한 컨테이너 여백 */}
      <div className="px-8 md:px-12 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
              Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              기획부터 출시까지 주도한 프로젝트들입니다. 각 프로젝트의 배경과 과정, 그리고 결과를 확인해보세요.
            </p>
            
            {/* 필터 버튼들 */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-8">
              <button
                onClick={() => setActiveFilter('All')}
                className={`transition-colors ${
                  activeFilter === 'All'
                    ? 'text-gray-900 dark:text-gray-100 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                All
              </button>
              {categories.map((filter, index) => (
                <div key={filter} className="flex items-center gap-1">
                  <span className="text-gray-400">/</span>
                  <button
                    onClick={() => setActiveFilter(filter)}
                    className={`transition-colors ${
                      activeFilter === filter
                        ? 'text-gray-900 dark:text-gray-100 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {filter}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid - artisd.studio & fficial.naver.com 스타일 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group hover-animate"
              >
                <Link href={`/project/${project.id}`} className="block">
                  <div className="space-y-4">
                    
                    {/* 썸네일 이미지 */}
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-500 dark:text-gray-400 text-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    {/* 프로젝트 정보 */}
                    <div className="space-y-3">
                      
                      {/* 카테고리와 년도 */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {/* 제목과 화살표 */}
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-2" />
                      </div>

                      {/* 설명 */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.excerpt}
                      </p>

                      {/* 태그들 - About>Skill 영역과 동일한 디자인 */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* 빈 프로젝트가 있을 경우 메시지 */}
          {sortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 dark:text-gray-400">
                해당 카테고리에 프로젝트가 없습니다.
              </p>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  )
}