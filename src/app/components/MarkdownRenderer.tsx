// src/app/components/MarkdownRenderer.tsx
'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  // 마크다운 텍스트를 JSX로 변환하는 함수
  const renderMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let currentIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${currentIndex++}`} className="text-3xl font-bold mt-8 mb-4 first:mt-0 text-gray-900 dark:text-white">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
            {line.slice(4)}
          </h3>
        )
      } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
        elements.push(
          <h4 key={`h4-${currentIndex++}`} className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
            {line.slice(2, -2)}
          </h4>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${currentIndex++}`} className="ml-6 mb-2 list-disc text-gray-700 dark:text-gray-300">
            {processInlineFormatting(line.slice(2))}
          </li>
        )
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={`blockquote-${currentIndex++}`} className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800 rounded-r-lg italic text-gray-700 dark:text-gray-300">
            {processInlineFormatting(line.slice(2))}
          </blockquote>
        )
      } else if (line.trim() === '') {
        elements.push(<br key={`br-${currentIndex++}`} />)
      } else if (line.trim() !== '') {
        elements.push(
          <p key={`p-${currentIndex++}`} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {processInlineFormatting(line)}
          </p>
        )
      }
    }

    return elements
  }

  // 인라인 포맷팅 처리 (볼드, 이탤릭 등)
  const processInlineFormatting = (text: string): React.ReactNode => {
    // **볼드** 처리
    const boldRegex = /\*\*(.*?)\*\*/g
    let processedText: React.ReactNode = text

    // 볼드 텍스트 처리
    const parts = text.split(boldRegex)
    const formatted: React.ReactNode[] = []
    
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // 일반 텍스트
        if (parts[i]) {
          formatted.push(parts[i])
        }
      } else {
        // 볼드 텍스트
        formatted.push(
          <strong key={`bold-${i}`} className="font-semibold text-gray-900 dark:text-white">
            {parts[i]}
          </strong>
        )
      }
    }

    return formatted.length > 1 ? <>{formatted}</> : processedText
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {renderMarkdown(content)}
    </div>
  )
}