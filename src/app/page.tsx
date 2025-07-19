'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function HomePage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'SmileMe',
      category: '이모티콘 제작 플랫폼',
      description: '뷰티카메라 SDK와 AI 감정분석을 활용한 이모티콘 제작 및 마켓 플랫폼',
      tech: 'React Native, AI, SDK Integration',
      status: '2022-2024',
      role: 'Product Manager',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Remaker',
      category: '명품 리폼/수선 중개 플랫폼',
      description: '전문 리폼 마스터와 고객을 연결하는 모바일 중개 서비스',
      tech: 'Mobile App, Payment System',
      status: '2022-2024',
      role: 'PM & UX Design',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: '밀당365',
      category: '혈당 관리 및 건강 정보 플랫폼',
      description: '당뇨병 환자를 위한 혈당 관리 및 건강 정보 제공 모바일 앱',
      tech: 'Health Data, Push Notification',
      status: '2023',
      role: 'Product Manager',
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* 커서 애니메이션 효과 */}
      <div className="cursor-effect"></div>
      
      <div className="w-full">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-6xl mx-auto"
          >
            {/* Philosophy Quote */}
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-gray-900 dark:text-gray-100">
                A well-designed product should be both visually appealing and highly functional, prioritizing usability
                <sup className="text-lg">1</sup> and efficiency<sup className="text-lg">2</sup>. The ultimate goal of design is to create
                a seamless experience for the user, meeting their needs and expectations without complication or frustration.
                <sup className="text-lg">3</sup>
              </h1>

              {/* Korean Translation */}
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  ¹ 제품 디자인에서 사용성은 제품이 얼마나 사용하기 쉽고자, 사용자가 목표를 달성하는 데 얼마나 도움이 되는지를 측정하는 척도입니다.
                </p>
                <p>
                  ² 제품 디자인에서 효율성은 사용하는 노력이나 비용을 최소화하면서 최대의 성과를 달성하는 능력입니다.
                </p>
                <p>
                  ³ 복합적 디자인의 궁극적 목표는 사용자로부터 불편함이나 기능적인 제약 없이 효율적인 경험을 제공하는 것입니다.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100">
                안녕하세요, 진입니다
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                기획부터 개발, 출시, 운영, 개선까지 프로젝트 전 과정을 직접 주도하며 실무 경험을 쌓아왔습니다.
                사용자 경험과 클라이언트 요구를 균형있게 고려한 프로젝트를 성공적으로 수행해왔습니다.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Featured Projects - 3 Column Grid */}
        <section className="py-20 px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-16 max-w-7xl mx-auto"
          >
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100">Featured Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group cursor-pointer"
                >
                  <a href={`/project/${project.id}`} className="block">
                    {/* Project Image */}
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mb-6">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-500 dark:text-gray-400 text-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {project.status}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      
                      <h3 className="text-xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 dark:text-gray-500 text-sm">
                        {project.category}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="text-sm">
                        <span className="text-gray-500 dark:text-gray-500">{project.tech}</span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <a
                href="/project"
                className="inline-flex items-center text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                모든 프로젝트 보기
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Bottom Spacing */}
        <div className="pb-32"></div>
      </div>
    </div>
  )
}