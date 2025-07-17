'use client'

// src/app/project/ProjectsListClient.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Project } from './data/projects-content'

interface ProjectsListClientProps {
  allProjects: Project[]
  categories: string[]
}

export default function ProjectsListClient({ 
  allProjects, 
  categories 
}: ProjectsListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // 클라이언트에서 필터링
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          다양한 분야에서 진행한 프로젝트들을 소개합니다. 
          각 프로젝트는 사용자 중심의 접근 방식과 창의적인 문제 해결을 통해 완성되었습니다.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {filteredProjects.length}개의 프로젝트
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="group"
          >
            <Link href={`/project/${project.id}`} className="block">
              <div className="space-y-4">
                {/* Project Image */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.excerpt}
                  </p>
                  
                  {/* Duration & Team Size */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>{project.duration}</span>
                    <span>•</span>
                    <span>{project.team.length}명 팀</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-2">
                    {project.liveUrl && (
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                        Live
                      </span>
                    )}
                    {project.githubUrl && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-600 dark:text-gray-400">
            선택한 카테고리에 해당하는 프로젝트가 없습니다.
          </p>
        </motion.div>
      )}

      {/* Featured Projects Section */}
      {selectedCategory === 'All' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              주요 프로젝트
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              특별히 주목할 만한 성과를 거둔 프로젝트들을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={`featured-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Link href={`/project/${project.id}`} className="block">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                            Live
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
}