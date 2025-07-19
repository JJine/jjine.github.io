'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Calendar, Users, ExternalLink } from 'lucide-react'

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
      role: 'Product Manager',
      team: ['PM', 'Designer', 'Developer 3명'],
      description: '이모티콘 제작 플랫폼 - 뷰티카메라 SDK와 AI 감정분석을 활용한 이모티콘 제작 및 마켓 플랫폼',
      tags: ['React Native', 'AI', 'SDK Integration', 'E-commerce'],
      status: 'Live',
      featured: true,
      liveUrl: '#',
      results: ['사용자 전환율 22.1% 향상', 'MOU 체결 성공']
    },
    {
      id: 2,
      title: 'Remaker',
      category: 'Mobile App',
      year: '2022-2024',
      client: '원스모어',
      role: 'PM & UX Design',
      team: ['PM', 'Designer', 'Developer 2명'],
      description: '명품 리폼/수선 중개 플랫폼 - 전문 리폼 마스터와 고객을 연결하는 모바일 중개 서비스',
      tags: ['Mobile App', 'Payment System', 'Marketplace'],
      status: 'Live',
      results: ['재의뢰율 12.3% 향상', '2천회 다운로드 달성']
    },
    {
      id: 3,
      title: '밀당365',
      category: 'Mobile App',
      year: '2023',
      client: '헬스조선',
      role: 'Product Manager',
      team: ['PM', 'Designer', 'Developer 2명'],
      description: '혈당 관리 및 건강 정보 플랫폼 - 당뇨병 환자를 위한 혈당 관리 및 건강 정보 제공 모바일 앱',
      tags: ['Health Data', 'Push Notification', 'Analytics'],
      status: 'Live',
      results: ['이벤트 참여율 6%→48% 개선', 'MAU 1천명 달성']
    },
    {
      id: 4,
      title: 'TMF Framework',
      category: 'Web Platform',
      year: '2024',
      client: 'Personal Project',
      role: 'PM & Developer',
      team: ['Solo Project'],
      description: '개인 업무스케줄링 툴 - GTD 기반 개인 생산성 향상을 위한 시간 관리 시스템',
      tags: ['Productivity', 'GTD', 'Time Management'],
      status: 'Development',
      githubUrl: '#'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleTagClick = (tag: string) => {
    // 태그 클릭 시 해당 태그로 필터링
    console.log('Filter by tag:', tag)
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

            {/* Projects List */}
            <div className="space-y-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <a href={`/project/${project.id}`} className="block">
                    <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl">
                      <div className="flex items-start justify-between mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h2 className="text-2xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                              {project.title}
                            </h2>
                            {project.featured && (
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                                Featured
                              </span>
                            )}
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              project.status === 'Live' 
                                ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                                : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-500 text-sm">
                            {project.category} • {project.year}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Project Meta Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Client</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Role</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Team</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.team.join(', ')}</p>
                        </div>
                      </div>

                      {/* Results */}
                      {project.results && (
                        <div className="mb-6">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm">Key Results</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.results.map((result, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs">
                                {result}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <button
                            key={tagIndex}
                            onClick={(e) => {
                              e.preventDefault()
                              handleTagClick(tag)
                            }}
                            className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-lg text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center space-x-4 mt-6">
                        {project.liveUrl && (
                          <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live Project
                          </span>
                        )}
                        {project.githubUrl && (
                          <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="mr-1 h-3 w-3" />
                            GitHub
                          </span>
                        )}
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