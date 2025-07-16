'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const InfoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제로는 이메일 전송 로직 구현
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('메시지가 전송되었습니다. 곧 답변드리겠습니다!')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@jjine.dev',
      href: 'mailto:hello@jjine.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+82 10-1234-5678',
      href: 'tel:+821012345678'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seoul, South Korea',
      href: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '보통 24시간 이내',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jjine',
      username: '@jjine'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jjine',
      username: 'linkedin.com/in/jjine'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/jjine',
      username: '@jjine'
    }
  ]

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          새로운 프로젝트, 협업 기회, 또는 단순한 안부 인사까지 언제든 환영합니다. 
          함께 의미 있는 것을 만들어보는 것은 어떨까요?
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">메시지 보내기</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  placeholder="hong@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                제목 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                placeholder="프로젝트 협업 제안"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                메시지 *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent resize-vertical"
                placeholder="안녕하세요, 저는..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>전송 중...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  메시지 전송
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Direct Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 rounded-md bg-muted">
                    <info.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">소셜 미디어</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-3 rounded-md border border-border hover:bg-muted transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-foreground transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-xl font-semibold mb-4">현재 상태</h3>
            <div className="p-4 rounded-lg bg-muted">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">새로운 프로젝트 모집 중</span>
              </div>
              <p className="text-sm text-muted-foreground">
                현재 2025년 하반기 프로젝트를 위한 협업 파트너를 찾고 있습니다. 
                UX/UI 디자인, 프론트엔드 개발, 또는 제품 기획 관련 프로젝트에 관심이 있습니다.
              </p>
            </div>
          </div>

          {/* Quick Response */}
          <div>
            <h3 className="text-xl font-semibold mb-4">빠른 연락</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:hello@jjine.dev"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                이메일
              </a>
              <a
                href="https://linkedin.com/in/jjine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                링크드인
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-16 border-t border-border"
      >
        <h2 className="text-2xl font-bold mb-8">자주 묻는 질문</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">프로젝트 진행 방식은 어떻게 되나요?</h3>
            <p className="text-sm text-muted-foreground">
              보통 킥오프 미팅 → 리서치 → 디자인 → 프로토타이핑 → 개발 지원 순으로 진행합니다. 
              프로젝트 특성에 따라 유연하게 조정 가능합니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">협업 가능한 프로젝트 규모는?</h3>
            <p className="text-sm text-muted-foreground">
              개인 프로젝트부터 대기업 프로젝트까지 다양한 규모의 작업이 가능합니다. 
              프로젝트 기간은 보통 2주에서 6개월 정도입니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">원격 근무가 가능한가요?</h3>
            <p className="text-sm text-muted-foreground">
              네, 원격 근무를 선호하지만 필요시 서울 지역 오프라인 미팅도 가능합니다. 
              해외 프로젝트도 시차를 고려하여 진행할 수 있습니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">디자인 시스템 구축도 가능한가요?</h3>
            <p className="text-sm text-muted-foreground">
              네, 디자인 시스템 구축과 운영 경험이 있습니다. 
              Figma 라이브러리부터 코드 컴포넌트까지 전체적인 시스템 구축이 가능합니다.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default InfoPage