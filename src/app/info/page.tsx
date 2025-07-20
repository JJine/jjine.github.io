// src/app/info/page.tsx
import { ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    label: 'Email',
    value: 'jin@example.com',
    href: 'mailto:jin@example.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jin',
    href: 'https://linkedin.com/in/jin',
  },
  {
    label: 'GitHub',
    value: 'github.com/jin',
    href: 'https://github.com/jin',
  },
  {
    label: 'Behance',
    value: 'behance.net/jin',
    href: 'https://behance.net/jin',
  },
  {
    label: 'Instagram',
    value: '@jin_design',
    href: 'https://instagram.com/jin_design',
  },
]

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요. 
              함께 의미 있는 결과를 만들어보아요.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="pb-16">
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between py-6 border-b border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <div className="space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {contact.label}
                  </div>
                  <div className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {contact.value}
                  </div>
                </div>
                
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="pb-20">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              함께 일하고 싶으시다면
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              UX/UI 디자인, 사용자 리서치, 디자인 시스템 구축 등<br />
              다양한 프로젝트에서 협업할 수 있습니다.
            </p>
            
            <a
              href="mailto:jin@example.com"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors font-medium group"
            >
              <span>이메일 보내기</span>
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}