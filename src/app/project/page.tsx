// src/app/project/page.tsx (서버 컴포넌트)
import { getAllProjects, getAllCategories } from './data/projects-content'
import ProjectsListClient from './ProjectsListClient'

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const categories = getAllCategories()

  return (
    <ProjectsListClient 
      allProjects={allProjects}
      categories={categories}
    />
  )
}