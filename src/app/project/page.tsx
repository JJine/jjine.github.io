'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Mobile App', 'Web Platform', 'PM/Planning']

  const projects = [
    {
      id: 1,
      title: 'SmileMe',
      category: 'Mobile App',
      year: '2022-2024',
      client: '다날엔터테인먼트',
      description: '이모티콘 제작 플랫폼 - 뷰티카메라 SDK와 AI 감정분석을 활용한 이모티콘 제작 및 마켓 플랫폼',
      tags: ['React Native', 'AI', 'SDK Integration'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Remaker',
      category: 'Mobile App',
      year: '2022-2024',
      client: '원스모어',
      description: '명품 리폼/수선 중개 플랫폼 - 전문 리폼 마스터와 고객을 연결하는 모바일 중개 서비스',
      tags: ['Mobile App', 'Payment System'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: '밀당365',
      category: 'Mobile App', 
      year: '2023',
      client: '헬스조선',
      description: '혈당 관리 및 건강 정보 플랫폼 - 당뇨병 환자를 위한 혈당 관리 및 건강 정보 제공 모바일 앱',
      tags: ['Health Data', 'Analytics'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'TMF Framework',
      category: 'Web Platform',
      year: '2024',
      client: 'Personal Project',
      description: '개인 업무스케줄링 툴 - GTD 기반 개인 생산성 향상을 위한 시간 관리 시스템',
      tags: ['Productivity', 'GTD'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Healthcare Dashboard',
      category: 'Web Platform',
      year: '2023',
      client: 'Medical Corp',
      description: '의료진을 위한 환자 데이터 관리 대시보드 - 실시간 모니터링 및 분석 시스템',
      tags: ['Dashboard', 'Medical', 'Analytics'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Event Planning App',
      category: 'PM/Planning',
      year: '2023-2024',
      client: 'Event Co.',
      description: '이벤트 기획 및 관리 플랫폼 - 기획부터 실행까지 전체 프로세스 관리',
      tags: ['Project Management', 'Planning'],
      image: '/api/placeholder/600/400'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleTagClick = (tag: string) => {
    // 태그 클릭 시 해당 카테고리로 필터링
    const categoryMap: { [key: string]: string } = {
      'React Native': 'Mobile App',
      'AI': 'Mobile App',
      'SDK Integration': 'Mobile App',
      'Mobile App': 'Mobile App',
      'Payment System': 'Mobile App',
      'Health Data': 'Mobile App',
      'Analytics': 'Web Platform',
      'Dashboard': 'Web Platform',
      'Medical': 'Web Platform',
      'Productivity': 'Web Platform',
      'GTD': 'Web Platform',
      'Project Management': 'PM/Planning',
      'Planning': 'PM/Planning'
    }
    
    const category = categoryMap[tag] || 'All'
    setActiveFilter(category)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="w-full">
        <div className="px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
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
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter
                        ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects List - artisd.studio style */}
            <div className="space-y-16">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <a href={`/project/${project.id}`} className="block">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      {/* Project Image */}
                      <div className="lg:col-span-7">
                        <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <span className="text-gray-500 dark:text-gray-400 text-2xl font-light">
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
                                <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                                  {project.title}
                                </h2>
                                {project.featured && (
                                  <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-medium">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                                <span>{project.category}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                                <span>•</span>
                                <span>{project.client}</span>
                              </div>
                            </div>
                            
                            <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <button
                                key={tagIndex}
                                onClick={(e) => {
                                  e.preventDefault()
                                  handleTagClick(tag)
                                }}
                                className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
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

        {/* Bottom Spacing */}
        <div className="pb-32"></div>
      </div>
    </div>
  )
}