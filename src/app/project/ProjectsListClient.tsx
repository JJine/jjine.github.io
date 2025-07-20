// 📍 파일 경로: src/app/project/ProjectsListClient.tsx

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Projects
            </h1>
            
            {/* 필터명/필터명 스타일 */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
              <button
                onClick={() => setActiveFilter('All')}
                className={`transition-colors ${
                  activeFilter === 'All'
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
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
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {filter}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <Link href={`/project/${project.id}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Project Image */}
                    <div className="lg:col-span-7">
                      <div className="aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                          <span className="text-gray-500 text-xl font-light">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                {project.title}
                              </h2>
                              {project.featured && (
                                <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{project.category}</span>
                              <span>•</span>
                              <span>{project.year}</span>
                              <span>•</span>
                              <span>{project.duration}</span>
                            </div>
                          </div>
                          
                          <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags - About 스킬 스타일 적용 */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Spacing */}
          <div className="pb-32"></div>
        </motion.div>
      </div>
    </div>
  )
}