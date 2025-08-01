// 📍 파일 경로: src/app/project/[id]/page.tsx

import { getAllProjectIds } from '../data/projects-content'
import ProjectDetailClient from './ProjectDetailClient'

// 정적 생성을 위한 함수 (서버 컴포넌트에서만 사용 가능)
export async function generateStaticParams() {
  const projectIds = getAllProjectIds()
  
  return projectIds.map((project) => ({
    id: project.id,
  }))
}

// 서버 컴포넌트 - generateStaticParams와 함께 사용함
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Next.js 15에서는 params가 Promise이므로 await 필요
  const { id } = await params
  
  // 현재 ProjectDetailClient가 기대하는 props: projectId, content
  // content는 빈 문자열로 전달하고, 클라이언트에서 로드하도록 함
  return <ProjectDetailClient projectId={id} content="" />
}