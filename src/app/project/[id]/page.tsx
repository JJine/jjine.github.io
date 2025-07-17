// src/app/project/[id]/page.tsx (서버 컴포넌트)
import { notFound } from 'next/navigation'
import { getProject, getProjectContent } from '../data/projects-content'
import ProjectDetailClient from './ProjectDetailClient'

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
  }>
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