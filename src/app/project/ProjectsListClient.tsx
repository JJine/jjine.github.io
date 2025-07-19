'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
              Projects
            </h1>
            
            {/* Modern Filter */}
            <div className="flex flex-wrap gap-3">
              {['All', ...categories].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/project/${project.id}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-b border-gray-100 dark:border-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    {/* Project Image */}
                    <div className="order-2 lg:order-1">
                      <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <span className="text-gray-500 dark:text-gray-400 text-lg">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                            {project.category} • {project.year}
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                          {project.title}
                        </h2>
                        
                        <div className="space-y-2">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-500 dark:text-gray-500">Duration: {project.duration}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500 dark:text-gray-500">Team: {project.team.length}명</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs"
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

          {/* Summary */}
          <div className="pt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              총 {filteredProjects.length}개의 프로젝트
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}