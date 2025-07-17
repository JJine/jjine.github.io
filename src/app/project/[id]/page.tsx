// src/app/project/[id]/page.tsx (서버 컴포넌트)
import { notFound } from 'next/navigation'
import { getProject, getProjectContent, getAllProjectIds } from '../data/projects-content'
import ProjectDetailClient from './ProjectDetailClient'

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
  }>
}

// 정적 빌드를 위한 generateStaticParams 함수 - 자동으로 모든 프로젝트 ID 반환
export async function generateStaticParams() {
  return getAllProjectIds()
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params
  
  const project = getProject(id)
  if (!project) {
    notFound()
  }

  const content = getProjectContent(id)

  return <ProjectDetailClient project={project} content={content} />
}