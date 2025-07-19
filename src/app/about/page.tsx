'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  const experience = [
    {
      period: '2022.06 - 2024.01',
      company: '(주) 브릭메이트',
      position: 'Project Manager',
      summary: 'B2B 서비스 기획 및 고객사 커뮤니케이션 총괄, 모바일 서비스 정책 수립 및 사용자 플로우 설계',
      projects: [
        {
          name: 'SmileMe (이모티콘 제작 플랫폼)',
          description: '다날엔터테인먼트와의 협업으로 진행된 이모티콘 제작 및 판매 플랫폼',
          achievements: [
            '뷰티카메라 SDK와 AI 감정분석 기술을 활용한 차별화된 UX 구현',
            '베트남 개발팀과의 글로벌 협업 체계 구축 및 Jira 기반 프로세스 정립',
            '사용자 전환율 22.1% 향상 및 클라이언트 MOU 체결 성공'
          ]
        },
        {
          name: 'Remaker (명품 리폼/수선 중개 플랫폼)',
          description: '프리미엄 중고 명품 리폼 서비스와 전문 마스터를 연결하는 모바일 플랫폼',
          achievements: [
            '카카오 알림톡 API 연동을 통한 실시간 알림 시스템 구축',
            '사용자 의뢰 후 재의뢰율 12.3% 향상',
            '구글/애플 스토어 총 2천회 다운로드 수 달성'
          ]
        },
        {
          name: '밀당365 (혈당 관리 플랫폼)',
          description: '당뇨병 환자를 위한 혈당 관리 및 건강 정보 제공 모바일 앱',
          achievements: [
            '사용자 맞춤형 타이머 알림 기능 기획 및 구현',
            '이벤트 참여율 6%에서 48%로 대폭 개선',
            'Google Analytics 기반 MAU 1천 명 이상, 누적 다운로드 1만 회 달성'
          ]
        }
      ]
    }
  ]

  const personalProjects = [
    {
      name: 'TMF(Time Management Framework)',
      period: '2024.06',
      description: '개인 업무스케줄링 툴',
      details: [
        'GTD(Getting Things Done) 기반 UX 플로우 및 UI 구조 설계',
        'Inbox – Planning Desk – Calendar – Archive 단계로 서비스 플로우 정의',
        '회고 문화 도입 및 프로세스 정의로 프로젝트 효율성 향상'
      ]
    }
  ]

  const skills = {
    planning: ['서비스 기획', '프로젝트 관리', '사용자 리서치', 'UX/UI 설계', '데이터 분석'],
    tools: ['Figma', 'Notion', 'Jira', 'Slack', 'Google Analytics', 'Adobe XD'],
    development: ['HTML', 'CSS', 'JavaScript(React.js)', 'MySQL', 'Git/GitHub']
  }

  const education = {
    school: '수원정보과학고등학교',
    major: 'IT소프트웨어과',
    period: '2019.03 - 2022.02'
  }

  const awards = [
    {
      name: '전기·에너지 분야 국민 아이디어 공모전 대회 금상',
      organization: '한국전력공사',
      date: '2020.11'
    },
    {
      name: '2020-2 Ajou SOFTCON 고등부문 인기상',
      organization: '아주대학교 SW중심대학사업단',
      date: '2020.12'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="w-full px-8 md:px-12 lg:px-16 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">Resume</h1>
            <button 
              onClick={() => {
                // 이력서 다운로드 로직
                const link = document.createElement('a')
                link.href = '/resume.pdf' // 실제 이력서 파일 경로
                link.download = '조예진_이력서.pdf'
                link.click()
              }}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              이력서 다운로드
            </button>
          </div>

          {/* 회사 경력 */}
          <section className="space-y-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
              Experience
            </h2>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="space-y-8"
              >
                <div className="flex items-start justify-between border-b border-gray-100 dark:border-gray-900 pb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.company}
                    </h3>
                    <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                      {exp.position}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                      {exp.summary}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* 프로젝트들 */}
                <div className="space-y-8 ml-4">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {project.name}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <span className="text-gray-400 mt-2">•</span>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          {/* 개인 프로젝트 */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
              Personal Projects
            </h2>
            
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2}}
                className="space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {project.period}
                  </span>
                </div>
                <ul className="space-y-2 ml-4">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>

          {/* Skills */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
              Skills & Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">기획 및 협업</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.planning.map((skill, index) => (
                    <span key={index} className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">도구</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">개발</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((dev, index) => (
                    <span key={index} className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      {dev}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education & Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
                학력
              </h2>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {education.school}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{education.major}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{education.period}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
                수상 및 활동
              </h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      {award.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{award.organization}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{award.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Spacing */}
          <div className="pb-32"></div>
        </motion.div>
      </div>
    </div>
  )
}