// src/app/project/page.tsx
import Link from 'next/link'
import { getAllProjects } from '../lib/markdown'

const categories = ['All', 'UI/UX', 'Branding', 'Editorial', 'Poster']

export default function ProjectPage() {
  const projects = getAllProjects() // async 제거

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="pt-20 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            From UI to posters and beyond!
          </p>
          
          {/* Filter */}
          <div className="flex items-center space-x-1 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Filter by</span>
            {categories.map((category, index) => (
              <div key={category} className="flex items-center">
                <button className={`px-3 py-1 rounded-md transition-colors ${
                  index === 0 
                    ? 'text-gray-900 dark:text-white font-medium' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}>
                  {category}
                  {index === 0 && (
                    <sup className="text-xs ml-1 text-blue-500">
                      {projects.length.toString().padStart(2, '0')}
                    </sup>
                  )}
                </button>
                {index < categories.length - 1 && (
                  <span className="text-gray-300 dark:text-gray-600 mx-1">/</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group block"
              >
                <article className="space-y-6">
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-lg font-light">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.category}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}