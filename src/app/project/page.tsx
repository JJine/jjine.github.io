// 📍 파일 경로: src/app/project/page.tsx

import { getAllProjects, getAllCategories } from './data/projects-content'
import ProjectsListClient from './ProjectsListClient'

export default function ProjectPage() {
  const allProjects = getAllProjects()
  const categories = getAllCategories()

  return (
    <ProjectsListClient 
      allProjects={allProjects} 
      categories={categories.filter(cat => cat !== 'All')} // 'All' 제외하고 전달
    />
  )
}