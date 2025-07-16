'use client'

import { motion } from 'framer-motion'
import { Download, Award, Calendar, MapPin } from 'lucide-react'

const AboutPage = () => {
  const experience = [
    {
      period: '2023 - Present',
      position: 'Senior UX/UI Designer',
      company: 'Tech Company',
      description: '사용자 중심의 디자인 방법론을 통해 제품의 사용성을 개선하고, 디자인 시스템을 구축하여 일관된 사용자 경험을 제공합니다.',
      achievements: [
        '주요 서비스 전환율 40% 향상',
        '디자인 시스템 구축 및 운영',
        '크로스 플랫폼 일관성 확보'
      ]
    },
    {
      period: '2021 - 2023',
      position: 'Product Designer',
      company: 'Startup Inc.',
      description: '초기 스타트업에서 제품 기획부터 디자인, 개발까지 전 과정에 참여하며 빠른 실행력과 문제 해결 능력을 기를 수 있었습니다.',
      achievements: [
        '0에서 1까지 제품 런칭',
        'MVP 개발 및 사용자 피드백 반영',
        '애자일 방법론 도입 및 운영'
      ]
    },
    {
      period: '2020 - 2021',
      position: 'Junior Designer',
      company: 'Design Studio',
      description: '다양한 클라이언트의 브랜딩과 웹 디자인 프로젝트를 통해 디자인의 기초를 다지고 실무 경험을 쌓았습니다.',
      achievements: [
        '20+ 브랜딩 프로젝트 완료',
        '웹사이트 리뉴얼 프로젝트 주도',
        '클라이언트 만족도 95% 달성'
      ]
    }
  ]

  const skills = [
    {
      category: 'Design Tools',
      items: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'ProtoPie']
    },
    {
      category: 'Development',
      items: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js']
    },
    {
      category: 'Research & Analysis',
      items: ['User Research', 'Usability Testing', 'Analytics', 'A/B Testing', 'Heuristic Evaluation']
    },
    {
      category: 'Collaboration',
      items: ['Design Systems', 'Agile/Scrum', 'Project Management', 'Stakeholder Management', 'Team Leadership']
    }
  ]

  const education = [
    {
      period: '2018 - 2020',
      degree: '디자인학 석사',
      school: '한국예술대학교',
      description: 'HCI(Human-Computer Interaction) 전공'
    },
    {
      period: '2014 - 2018',
      degree: '시각디자인학 학사',
      school: '서울대학교',
      description: '디지털 미디어 디자인 전공'
    }
  ]

  const awards = [
    {
      year: '2024',
      title: 'Best UX Design Award',
      organization: 'Design Awards Korea',
      project: 'Mobile Banking App'
    },
    {
      year: '2023',
      title: 'Innovation in Design',
      organization: 'UX Korea',
      project: 'E-commerce Platform Redesign'
    },
    {
      year: '2022',
      title: 'Rising Designer',
      organization: 'Creative Awards',
      project: 'Healthcare Dashboard'
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                <span className="text-muted-foreground">Profile Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              안녕하세요, 디자이너 Jjine입니다.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                사용자 중심의 디자인을 통해 실질적인 문제를 해결하는 것을 좋아합니다. 
                복잡한 문제를 단순하고 직관적인 솔루션으로 풀어내는 과정에서 큰 보람을 느끼며, 
                항상 사용자의 관점에서 생각하려고 노력합니다.
              </p>
              <p>
                디자인뿐만 아니라 프론트엔드 개발까지 가능한 T-shaped 인재로, 
                아이디어를 실제 구현 가능한 형태로 만들어내는 것을 즐깁니다. 
                팀과의 협업을 통해 더 나은 결과를 만들어내는 것을 중요하게 생각합니다.
              </p>
              <p>
                현재는 AI와 디자인의 접점에서 새로운 가능성을 모색하고 있으며, 
                지속 가능한 디자인과 접근성에 대해서도 깊은 관심을 가지고 있습니다.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                Seoul, South Korea
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                5+ years experience
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors">
                <Download className="mr-2 h-4 w-4" />
                이력서 다운로드
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border-l-2 border-muted pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-2 top-0"></div>
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="font-medium text-muted-foreground">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <ul className="mt-3 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 mt-2 w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border-l-2 border-muted pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-2 top-0"></div>
              <div className="space-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="font-medium text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-6 border border-border rounded-lg space-y-3"
            >
              <div className="flex items-start justify-between">
                <Award className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground">{award.year}</span>
              </div>
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
              <p className="text-sm text-muted-foreground italic">{award.project}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage