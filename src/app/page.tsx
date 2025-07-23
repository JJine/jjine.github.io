// 📍 파일 경로: src/app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import CursorAnimation from './components/CursorAnimation'

// Portfolio data - Featured projects
const portfolioItems = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    category: 'UX/UI Design',
    description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인',
    status: '완료 • 2024',
    tech: ['Figma', 'React', 'TypeScript', 'User Research', 'Prototyping']
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'Mobile Design',
    description: '직관적이고 안전한 모바일 뱅킹 애플리케이션',
    status: '완료 • 2024',
    tech: ['Mobile', 'Fintech', 'UX', 'Security', 'React Native']
  },
  {
    id: '3',
    title: 'Brand Identity System',
    category: 'Branding',
    description: '스타트업을 위한 브랜드 아이덴티티 시스템',
    status: '완료 • 2023',
    tech: ['Branding', 'Visual Identity', 'Guidelines', 'Logo Design']
  },
  {
    id: '4',
    title: 'Design System Library',
    category: 'Design System',
    description: '확장 가능한 디자인 시스템과 컴포넌트 라이브러리',
    status: '완료 • 2023',
    tech: ['Design System', 'Storybook', 'Components', 'Documentation']
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <CursorAnimation />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="px-8 md:px-12 lg:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto space-y-16"
          >
            {/* Main Title */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm text-gray-500 tracking-wide">
                  ¹ 현재는 여러 개의 프로젝트가 진행 중이며, 각각의 프로젝트는 독립적으로 개발되고 있습니다.
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
                  여러 프로젝트를<br />
                  기획부터 출시까지<br />
                  주도하고 있습니다
                </h1>
                <p>
                  ² 기획, 디자인, 개발, 출시, 운영의 전체 과정을 다룰 수 있는 역량을 가지고 있습니다.
                </p>
                <p>
                  ³ 복합적 디자인의 궁극적 목표는 사용자로부터 불편함이나 기능적인 제약 없이 효율적인 경험을 제공하는 것입니다.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                안녕하세요, 진입니다
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                기획부터 개발, 출시, 운영, 개선까지 프로젝트 전 과정을 직접 주도하며 실무 경험을 쌓아왔습니다.
                사용자 경험과 클라이언트 요구를 균형있게 고려한 프로젝트를 성공적으로 수행해왔습니다.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Featured Projects - 일정한 양옆 정렬 */}
        <section className="px-8 md:px-12 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-7xl mx-auto space-y-16"
          >
            <h2 className="text-2xl font-light text-gray-900">Recent Projects</h2>
            
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {portfolioItems.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group cursor-pointer hover-animate"
                >
                  <Link href={`/project/${project.id}`} className="block">
                    {/* Project Image */}
                    <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-8">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-500 text-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    {/* Project Info - 텍스트 간격 다양화 */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {project.status}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      
                      {/* 제목과 소제목 간격 줄이기 */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-500 text-sm">
                          {project.category}
                        </p>
                      </div>
                      
                      {/* 설명과 기술 스택은 간격 넓게 */}
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {project.description}
                        </p>
                        
                        {/* About>Skill 영역과 동일한 태그 디자인 - 흰색 배경, 회색 테두리 */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <Link
                href="/project"
                className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                모든 프로젝트 보기
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Bottom Spacing */}
        <div className="pb-32"></div>
      </div>
    </div>
  )
}