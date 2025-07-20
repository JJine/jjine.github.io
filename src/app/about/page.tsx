// src/app/about/page.tsx
import { ArrowUpRight } from 'lucide-react'

const experience = [
  {
    company: '스타트업 A',
    position: 'Senior UX Designer',
    period: '2023 - Present',
    description: 'AI 기반 서비스의 사용자 경험 설계 및 디자인 시스템 구축',
  },
  {
    company: '디자인 에이전시 B',
    position: 'UX Designer',
    period: '2021 - 2023',
    description: '다양한 클라이언트 프로젝트의 UX/UI 디자인 및 사용자 리서치',
  },
  {
    company: '테크 회사 C',
    position: 'Junior Designer',
    period: '2020 - 2021',
    description: '모바일 앱 디자인 및 프로토타이핑',
  },
]

const skills = [
  { category: 'Design Tools', items: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle'] },
  { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js'] },
  { category: 'Research', items: ['User Interview', 'Usability Testing', 'Analytics', 'A/B Testing'] },
  { category: 'Collaboration', items: ['Agile', 'Design Thinking', 'Workshop', 'Presentation'] },
]

const education = [
  {
    school: '○○ 대학교',
    degree: '시각디자인학과',
    period: '2016 - 2020',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
                About Me
              </h1>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  안녕하세요! 사용자 경험을 중시하는 UX 디자이너 진입니다. 
                  복잡한 문제를 간단하고 직관적인 솔루션으로 해결하는 것을 좋아합니다.
                </p>
                
                <p>
                  5년간 다양한 프로젝트를 통해 사용자 중심의 디자인을 실현해왔습니다. 
                  특히 데이터 기반의 의사결정과 반복적인 테스트를 통해 
                  지속적으로 개선하는 디자인 프로세스를 추구합니다.
                </p>
                
                <p>
                  현재는 AI 기반 서비스의 UX 설계에 집중하고 있으며, 
                  기술과 인간의 상호작용에서 새로운 가능성을 찾는 것에 관심이 많습니다.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
                    <p className="text-gray-600 dark:text-gray-400">jin@example.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Seoul, Korea</p>
                  </div>
                  
                  {/* 이력서 다운로드 - 아이콘 스타일 */}
                  <div className="pt-4">
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                    >
                      <span className="font-medium">이력서 다운로드</span>
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="pb-20">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}