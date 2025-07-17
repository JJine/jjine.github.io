'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: '사용자 경험을 중심으로 설계된 이커머스 플랫폼',
      tech: 'React, Next.js, TypeScript',
      status: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '효율적인 업무 관리를 위한 협업 도구',
      tech: 'Vue.js, Node.js, MongoDB',
      status: '2024'
    },
    {
      id: 3,
      title: 'Design System',
      description: '일관된 디자인 언어를 위한 컴포넌트 시스템',
      tech: 'Figma, Storybook, React',
      status: '2023'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                안녕하세요,
                <br />
                <span className="font-normal">진</span>입니다
              </h1>
              
              <div className="space-y-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                <p>
                  사용자 중심의 디자인과 기술을 통해 의미 있는 경험을 만들어가는 
                  UX/UI Designer & Frontend Developer입니다.
                </p>
                <p>
                  복잡한 문제를 간단하고 직관적인 해결책으로 풀어내는 것을 좋아합니다.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <Link
                href="/project"
                className="inline-flex items-center text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                더 알아보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                Featured Work
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                최근 작업한 프로젝트들을 소개합니다
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link 
                    href={`/project/${project.id}`}
                    className="group block"
                  >
                    <div className="py-6 border-b border-gray-100 dark:border-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-4">
                            <h3 className="text-xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-500">
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {project.tech}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all ml-6 mt-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <Link
                href="/project"
                className="inline-flex items-center text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                모든 프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              함께 작업하고 싶으시다면
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든지 연락주세요.
            </p>
            <Link
              href="/info"
              className="inline-flex items-center text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              연락하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}