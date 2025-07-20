'use client'

import { useEffect, useState } from 'react'

export default function CursorAnimation() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 모바일 디바이스 체크
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      return mobile
    }

    if (checkMobile()) return

    const cursor = document.createElement('div')
    cursor.className = 'cursor-effect'
    document.body.appendChild(cursor)

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      
      cursorX += dx * 0.1
      cursorY += dy * 0.1
      
      cursor.style.left = cursorX - 10 + 'px'
      cursor.style.top = cursorY - 10 + 'px'
      
      requestAnimationFrame(animateCursor)
    }

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)'
      cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    }

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)'
      cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    }

    const handleTextEnter = () => {
      cursor.style.transform = 'scale(0.5)'
      cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    }

    // 마우스 이벤트 리스너
    document.addEventListener('mousemove', moveCursor)
    
    // 호버 가능한 요소들에 이벤트 추가
    const hoverElements = document.querySelectorAll('a, button, [role="button"], .hover-cursor')
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div[contenteditable]')
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleTextEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // 애니메이션 시작
    requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      textElements.forEach(el => {
        el.removeEventListener('mouseenter', handleTextEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  // 모바일에서는 커서 효과 비활성화
  if (isMobile) return null

  return null
}