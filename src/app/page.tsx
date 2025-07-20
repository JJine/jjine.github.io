'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function HomePage() {
  const portfolioItems = [
    {
      id: 'smileme',
      title: 'SmileMe',
      description: 'AI 감정분석을 활용한 이모티콘 제작 플랫폼으로 사용자 경험 혁신',
      category: 'Mobile App',
      status: 'LAUNCHED',
      tech: ['React Native', 'AI SDK', 'Firebase'],
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'remaker',
      title: 'Remaker',
      description: '명품 리폼 서비스와 전문 마스터를 연결하는 중개 플랫폼',
      category: 'Service Platform',
      status: 'LAUNCHED',
      tech: ['React', 'Node.js', 'API'],
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 'mildang365',
      title: '밀당365',
      description: '당뇨병 환자를 위한 혈당 관리 및 건강정보 제공 앱',
      category: 'Healthcare',
      status: 'LAUNCHED',
      tech: ['React Native', 'Analytics', 'API'],
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'tmf',
      title: 'TMF',
      description: 'GTD 방법론 기반의 개인 업무 스케줄링 도구',
      category: 'Productivity',
      status: 'CONCEPT',
      tech: ['Figma', 'UX Research', 'Design'],
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full">
        {/* Hero Section */}
        <section className="px-8 md:px-12 lg:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto space-y-16"
          >
            {/* Philosophy Statement */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
                제품 디자인에서의 사용성
                <sup className="text-lg">1</sup>
                과 효율성
                <sup className="text-lg">2</sup>
                을 모두 고려한<br />
                복합적 디자인
                <sup className="text-lg">3</sup>
              </h1>

              {/* Korean Translation */}
              <div className="space-y-4 text-sm text-gray-600">
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
                  className="group cursor-pointer"
                >
                  <a href={`/project/${project.id}`} className="block">
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
                        
                        {/* About>Skill 영역과 동일한 태그 디자인 */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <a
                href="/project"
                className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
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