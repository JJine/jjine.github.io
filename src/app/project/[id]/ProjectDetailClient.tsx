'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Github, User, Clock, Target, Users } from 'lucide-react'
import ProjectNavigation from '../../components/ProjectNavigation'
import CommentSection from '../../components/CommentSection'

interface ProjectDetailClientProps {
  params: {
    id: string
  }
}

export default function ProjectDetailClient({ params }: ProjectDetailClientProps) {
  // 실제로는 API나 데이터베이스에서 가져올 데이터
  const project = {
    id: params.id,
    title: 'SmileMe',
    subtitle: '이모티콘 제작 플랫폼',
    description: '뷰티카메라 SDK와 AI 감정분석을 활용한 이모티콘 제작 및 마켓 플랫폼',
    client: '다날엔터테인먼트',
    year: '2022-2024',
    category: 'Mobile App',
    role: 'Product Manager & UX Designer',
    duration: '24개월',
    team: '5명 (PM 1, 디자이너 1, 개발자 3)',
    status: 'Live',
    technologies: ['React Native', 'AI/ML', 'SDK Integration', 'Firebase', 'REST API'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    content: {
      overview: `SmileMe는 사용자가 자신만의 개성있는 이모티콘을 쉽게 제작할 수 있는 모바일 플랫폼입니다. 뷰티카메라 SDK를 활용하여 사진을 촬영하고, AI 감정분석 기술을 통해 자동으로 감정에 맞는 이모티콘을 생성합니다.`,
      
      challenge: `기존 이모티콘 제작 도구들은 복잡한 편집 과정을 거쳐야 했고, 전문적인 디자인 지식이 필요했습니다. 또한 개인화된 이모티콘을 만들기 어려워 사용자들이 만족할 만한 결과물을 얻기 힘들었습니다.`,
      
      solution: `1. **간편한 제작 과정**: 뷰티카메라로 촬영한 사진을 바탕으로 원클릭으로 이모티콘 생성
      2. **AI 기반 감정 분석**: 표정을 자동으로 인식하여 적절한 이모티콘 스타일 제안
      3. **개인화 옵션**: 다양한 스타일과 효과를 통한 개성있는 이모티콘 커스터마이징
      4. **마켓플레이스**: 제작한 이모티콘을 다른 사용자들과 공유하고 수익화`,
      
      result: `• 출시 후 6개월 내 10만 다운로드 달성
      • 월간 활성 사용자 3만 명 유지
      • 평균 앱 평점 4.3/5.0
      • 이모티콘 제작 완료율 85% (업계 평균 대비 40% 향상)`
    }
  }

  // 네비게이션을 위한 이전/다음 프로젝트 (실제로는 API에서 가져올 데이터)
  const prevProject = {
    id: '2',
    title: 'Remaker'
  }

  const nextProject = {
    id: '3',
    title: '밀당365'
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* 프로젝트 네비게이션 */}
      <ProjectNavigation 
        currentProject={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />

      <div className="w-full">
        <div className="px-8 md:px-12 lg:px-16 py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* 프로젝트 헤더 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-100">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                  {project.subtitle}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 프로젝트 메타 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <User className="h-4 w-4" />
                    <span className="text-sm">클라이언트</span>
                  </div>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">기간</span>
                  </div>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Target className="h-4 w-4" />
                    <span className="text-sm">역할</span>
                  </div>
                  <p className="font-medium">{project.role}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">팀 구성</span>
                  </div>
                  <p className="font-medium">{project.team}</p>
                </div>
              </div>
            </div>

            {/* 메인 이미지 */}
            <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-3xl font-light">
                  {project.title}
                </span>
              </div>
            </div>

            {/* 프로젝트 개요 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100">
                프로젝트 개요
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.content.overview}
              </p>
            </div>

            {/* 기술 스택 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                기술 스택
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 문제 정의 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                해결하고자 한 문제
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.content.challenge}
              </p>
            </div>

            {/* 솔루션 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                솔루션
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.content.solution.replace(/\n/g, '<br>') }} />
              </div>
            </div>

            {/* 추가 이미지들 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-xl">
                      Detail {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 결과 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                프로젝트 결과
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.content.result.replace(/\n/g, '<br>') }} />
              </div>
            </div>

            {/* 링크 */}
            {(project.links.live || project.links.github) && (
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                  프로젝트 링크
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>라이브 사이트</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* 댓글 섹션 */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50">
          <CommentSection projectId={project.id} />
        </div>

        {/* Bottom Spacing */}
        <div className="pb-32"></div>
      </div>
    </div>
  )
}