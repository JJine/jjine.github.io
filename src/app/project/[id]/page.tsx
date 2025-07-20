// src/app/project/[id]/page.tsx (서버 컴포넌트)
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
  }>
}

// 정적 빌드를 위한 generateStaticParams 함수
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ]
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params
  
  // 유효한 프로젝트 ID인지 확인
  const validIds = ['1', '2', '3', '4', '5', '6']
  if (!validIds.includes(id)) {
    notFound()
  }

  return <ProjectDetailClient params={{ id }} />
}