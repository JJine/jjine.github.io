// src/app/project/[id]/page.tsx
import { notFound } from 'next/navigation'
import { getProjectData, getAllProjects } from '../../lib/markdown'
import ProjectDetailClient from './ProjectDetailClient'

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  const projects = getAllProjects() // async 제거
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params
  
  const project = getProjectData(id) // async 제거
  
  if (!project) {
    notFound()
  }

  // 이전/다음 프로젝트 찾기
  const allProjects = getAllProjects() // async 제거
  const currentIndex = allProjects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <ProjectDetailClient 
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}