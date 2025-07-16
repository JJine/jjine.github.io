'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// Mock data - 실제로는 API나 파일 시스템에서 가져올 데이터
const allProjects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인 프로젝트',
    category: 'UX/UI Design',
    year: '2024',
    image: '/images/project-1.jpg',
    tags: ['Figma', 'React', 'TypeScript'],
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: '직관적이고 안전한 모바일 뱅킹 애플리케이션 디자인',
    category: 'Mobile Design',
    year: '2024',
    image: '/images/project-2.jpg',
    tags: ['Mobile', 'Fintech', 'UX'],
    featured: true,
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description: '스타트업을 위한 일관성 있는 브랜드 아이덴티티 시스템 구축',
    category: 'Branding',
    year: '2023',
    image: '/images/project-3.jpg',
    tags: ['Branding', 'Visual Identity', 'Guidelines'],
    featured: false,
  },
  {
    id: '4',
    title: 'Design System Library',
    description: '확장 가능한 디자인 시스템과 컴포넌트 라이브러리 개발',
    category: 'Design System',
    year: '2023',
    image: '/images/project-4.jpg',
    tags: ['Design System', 'Storybook', 'Components'],
    featured: false,
  },
  {
    id: '5',
    title: 'Healthcare Dashboard',
    description: '의료진을 위한 직관적인 환자 관리 대시보드 설계',
    category: 'Dashboard Design',
    year: '2023',
    image: '/images/project-5.jpg',
    tags: ['Healthcare', 'Dashboard', 'Data Visualization'],
    featured: false,
  },
  {
    id: '6',
    title: 'Educational Platform',
    description: '온라인 학습을 위한 인터랙티브 교육 플랫폼 개발',
    category: 'EdTech',
    year: '2022',
    image: '/images/project-6.jpg',
    tags: ['Education', 'Interactive', 'Learning'],
    featured: false,
  },
]

const categories = ['All', 'UX/UI Design', 'Mobile Design', 'Branding', 'Design System', 'Dashboard Design', 'EdTech']

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
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
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
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
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        +{project.tags.length - 3}
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
          <p className="text-muted-foreground">
            선택한 카테고리에 해당하는 프로젝트가 없습니다.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectsPage