'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  const experiences = [
    {
      period: '2024.04 - 2025.05',
      title: 'Product Builder',
      company: 'Startup Inc.',
      description: '[1] 커뮤니티와 후기 데이터를 스크래핑하여 연예 유무와 구매 목적을 기준으로 백엔드 고객관을 분류하고, 이를 바탕으로 대표 페르소나 설계',
      tasks: [
        '[2] 정성적 데이터 기반으로 사용자 블린 요소 파악 및 UX 개선',
        '"구매 전 정보 부족에 상황 신뢰성 어려움이라는 반복적인 사용자 Pain Point를 도출',
        '이를 개선하기 위해 입점사 가이드 콘텐츠 리뉴얼과 제품 상세 정보를 담은 MD\'Note를 도입',
        '제품 브랜딩 구조 개선하여 분류 체계를 정의하여 매출상승 반영'
      ]
    },
    {
      period: '2024.06',
      title: 'TMF(Time Management Framework) 개인 업무스케줄링 툴',
      company: 'Personal Project',
      description: '[1] GTD(Getting Things Done) 기반 UX 플로우 및 UI 구조 설계',
      tasks: [
        '사용자의 사고 흐름(Brain Dump → Categories → Do & Review) use-case를 기반으로, Inbox – Planning Desk – Calendar – Archive 단계로 서비스 플로우 정의',
        '[2] 외디즈 선세대이저 기획 및 기능(사진의 가치 개선)요소 제안, 디자인 단안',
        '[3] 회고 문화 도입 및 프로세스 정의',
        '프로젝트 내 회고를 지속 기능하여 안물건 위에 힌컨 플룹뭇을 구축하고, 주간 회고 회의의 주도'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                Resume
              </h1>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500 dark:text-gray-500">KR</span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-medium mb-1">
                      {exp.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>{exp.description}</p>
                  
                  {exp.tasks && (
                    <div className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start space-x-2">
                          <span className="text-gray-400 mt-1.5 text-xs">•</span>
                          <span className="flex-1">{task}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {index < experiences.length - 1 && (
                  <div className="pt-8 border-b border-gray-200 dark:border-gray-800" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-xl font-medium">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-600 dark:text-gray-400">Design</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>UI/UX Design</p>
                  <p>Design System</p>
                  <p>User Research</p>
                  <p>Prototyping</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-gray-600 dark:text-gray-400">Development</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Frontend Development</p>
                  <p>React / Next.js</p>
                  <p>TypeScript</p>
                  <p>Responsive Web Design</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-xl font-medium">Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-600 dark:text-gray-400">Design</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Figma</p>
                  <p>Adobe Creative Suite</p>
                  <p>Principle</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-gray-600 dark:text-gray-400">Development</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>VS Code</p>
                  <p>Git/GitHub</p>
                  <p>Vercel</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-gray-600 dark:text-gray-400">Collaboration</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Notion</p>
                  <p>Slack</p>
                  <p>Linear</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}