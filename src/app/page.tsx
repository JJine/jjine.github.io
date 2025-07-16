'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

// Mock data - 실제로는 CMS나 마크다운 파일에서 가져올 데이터
const projects = [
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
]

const HomePage = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = projects.filter(project => !project.featured)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            안녕하세요,
            <br />
            <span className="text-muted-foreground">디자이너</span> Jjine입니다.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어갑니다. 
            UX/UI 디자인부터 프론트엔드 개발까지, 아이디어를 현실로 만드는 과정을 즐깁니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/project"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
            >
              프로젝트 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/project"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            모든 프로젝트 보기
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <Link href={`/project/${project.id}`} className="block">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-muted mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
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
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent Projects Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <Link href={`/project/${project.id}`} className="block">
                <div className="aspect-[3/2] relative overflow-hidden rounded-lg bg-muted mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-semibold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center py-16 border-t border-border"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          함께 작업하고 싶으신가요?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요. 
          좋은 아이디어를 현실로 만드는 과정을 함께 할 수 있기를 기대합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/info"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
          >
            연락하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            이메일 보내기
          </a>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage