'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Mobile App', 'Web Platform', 'UX/UI Design', 'Service Design']

  const projects = [
    {
      id: 'smileme',
      title: 'SmileMe',
      description: 'AI 감정분석 기술을 활용한 이모티콘 제작 및 판매 플랫폼',
      category: 'Mobile App',
      year: '2023',
      client: '다날엔터테인먼트',
      image: '/images/project-1.jpg',
      tags: ['React Native', 'AI', 'SDK Integration'],
      featured: true,
    },
    {
      id: 'remaker',
      title: 'Remaker',
      description: '프리미엄 중고 명품 리폼 서비스와 전문 마스터를 연결하는 중개 플랫폼',
      category: 'Web Platform',
      year: '2023',
      client: '브릭메이트',
      image: '/images/project-2.jpg',
      tags: ['React', 'Node.js', 'API Integration'],
      featured: true,
    },
    {
      id: 'mildang365',
      title: '밀당365',
      description: '당뇨병 환자를 위한 혈당 관리 및 건강 정보 제공 모바일 앱',
      category: 'Mobile App',
      year: '2022',
      client: '브릭메이트',
      image: '/images/project-3.jpg',
      tags: ['React Native', 'Healthcare', 'Analytics'],
      featured: false,
    },
    {
      id: 'tmf',
      title: 'TMF (Time Management Framework)',
      description: 'GTD 방법론을 기반으로 한 개인 업무 스케줄링 및 관리 도구',
      category: 'UX/UI Design',
      year: '2024',
      client: 'Personal Project',
      image: '/images/project-4.jpg',
      tags: ['Figma', 'UX Research', 'Design System'],
      featured: false,
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Projects
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어가는 프로젝트들입니다.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
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
                <a href={`/project/${project.id}`} className="block">
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
                              <span>{project.client}</span>
                            </div>
                          </div>
                          
                          <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
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