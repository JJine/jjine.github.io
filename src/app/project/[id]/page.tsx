// 📍 파일 경로: src/app/project/[id]/page.tsx

'use client'

import ProjectDetailClient from './ProjectDetailClient'
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params?.id as string

  return <ProjectDetailClient params={{ id }} />
}