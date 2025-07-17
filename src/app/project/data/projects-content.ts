// src/app/project/data/projects-content.ts

export interface Project {
  id: string
  title: string
  description: string
  excerpt: string
  category: string
  year: string
  duration: string
  team: string[]
  tags: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  // content는 별도 파일에서 가져옴
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: '사용자 경험을 개선한 이커머스 플랫폼 리디자인 프로젝트',
    excerpt: '복잡한 이커머스 플랫폼을 사용자 중심으로 재설계하여 전환율을 35% 향상시킨 프로젝트입니다.',
    category: 'UX/UI Design',
    year: '2024',
    duration: '3개월',
    team: ['UX Designer', 'Frontend Developer', 'Product Manager'],
    tags: ['Figma', 'React', 'TypeScript', 'User Research', 'Prototyping'],
    images: ['/images/project-1-hero.jpg', '/images/project-1-process.jpg'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: '직관적이고 안전한 모바일 뱅킹 애플리케이션 디자인',
    excerpt: '복잡한 금융 서비스를 간단하고 안전하게 만든 차세대 모바일 뱅킹 앱입니다.',
    category: 'Mobile Design',
    year: '2024',
    duration: '4개월',
    team: ['Mobile Designer', 'iOS Developer', 'Android Developer', 'Security Expert'],
    tags: ['Mobile', 'Fintech', 'UX', 'Security', 'React Native'],
    images: ['/images/project-2-hero.jpg', '/images/project-2-screens.jpg'],
    liveUrl: 'https://app.example.com',
    githubUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description: '스타트업을 위한 일관성 있는 브랜드 아이덴티티 시스템 구축',
    excerpt: '브랜드의 핵심 가치를 시각적으로 표현한 포괄적인 아이덴티티 시스템입니다.',
    category: 'Branding',
    year: '2023',
    duration: '2개월',
    team: ['Brand Designer', 'Graphic Designer', 'Marketing Manager'],
    tags: ['Branding', 'Visual Identity', 'Guidelines', 'Logo Design'],
    images: ['/images/project-3-hero.jpg'],
    featured: false,
  },
  {
    id: '4',
    title: 'Design System Library',
    description: '확장 가능한 디자인 시스템과 컴포넌트 라이브러리 개발',
    excerpt: '개발 효율성과 디자인 일관성을 위한 포괄적인 디자인 시스템입니다.',
    category: 'Design System',
    year: '2023',
    duration: '5개월',
    team: ['Design System Lead', 'Frontend Developer', 'UX Designer'],
    tags: ['Design System', 'Storybook', 'Components', 'Documentation'],
    images: ['/images/project-4-hero.jpg'],
    featured: false,
  },
  {
    id: '5',
    title: 'Healthcare Dashboard',
    description: '의료진을 위한 직관적인 환자 관리 대시보드 설계',
    excerpt: '복잡한 의료 데이터를 한눈에 파악할 수 있는 직관적인 대시보드입니다.',
    category: 'Dashboard Design',
    year: '2023',
    duration: '3개월',
    team: ['UX Designer', 'Data Analyst', 'Healthcare Expert'],
    tags: ['Healthcare', 'Dashboard', 'Data Visualization', 'UX Research'],
    images: ['/images/project-5-hero.jpg'],
    featured: false,
  },
  {
    id: '6',
    title: 'Educational Platform',
    description: '온라인 학습을 위한 인터랙티브 교육 플랫폼 개발',
    excerpt: '학습자 중심의 맞춤형 교육 경험을 제공하는 온라인 플랫폼입니다.',
    category: 'EdTech',
    year: '2022',
    duration: '6개월',
    team: ['Product Designer', 'Full-stack Developer', 'Education Specialist'],
    tags: ['Education', 'Interactive', 'Learning', 'Gamification'],
    images: ['/images/project-6-hero.jpg'],
    featured: false,
  }
]

// 헬퍼 함수들
export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}

export function getAllCategories(): string[] {
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  return categories
}

// 프로젝트 콘텐츠를 가져오는 함수
export function getProjectContent(id: string): string {
  // 실제로는 content 폴더에서 마크다운 파일을 읽어와야 하지만,
  // 클라이언트 사이드에서는 직접 import를 사용
  const contentMap: Record<string, string> = {
    '1': `# 프로젝트 개요

기존 이커머스 플랫폼의 사용자 경험을 분석하고, 고객의 구매 여정을 개선하기 위한 전면적인 리디자인 프로젝트였습니다.

## 문제 정의

기존 플랫폼의 주요 문제점들을 식별했습니다:

- 복잡한 네비게이션 구조로 인한 높은 이탈률
- 모바일 환경에서의 낮은 사용성
- 일관성 없는 디자인 시스템

## 해결 과정

### 1. 사용자 리서치

기존 사용자들과의 인터뷰와 사용성 테스트를 통해 실제 pain point를 파악했습니다.

### 2. 정보 구조 재설계

사용자의 멘탈 모델에 맞는 새로운 정보 구조를 설계했습니다.

### 3. 프로토타이핑 및 테스트

Figma를 활용한 고해상도 프로토타입을 제작하고 반복적인 사용자 테스트를 진행했습니다.

## 주요 성과

**전환율 35% 향상**: 새로운 구매 플로우 도입

**모바일 사용성 45% 개선**: 반응형 디자인 최적화

**고객 만족도 25% 증가**: 사용자 피드백 반영

## 기술적 도전

이 프로젝트에서 가장 큰 도전은 기존 시스템과의 호환성을 유지하면서도 완전히 새로운 사용자 경험을 구현하는 것이었습니다.

## 배운 점

이 프로젝트를 통해 데이터 기반 디자인 결정의 중요성을 깊이 이해하게 되었습니다. 또한 개발팀과의 긴밀한 협업이 최종 결과물의 품질에 미치는 영향을 체감할 수 있었습니다.

---

*"사용자 중심 디자인은 단순히 예쁜 인터페이스를 만드는 것이 아니라, 실제 문제를 해결하는 솔루션을 제공하는 것입니다."*`,

    '2': `# 모바일 뱅킹 앱 디자인

사용자의 금융 라이프스타일을 혁신하는 직관적인 모바일 뱅킹 애플리케이션을 디자인했습니다.

## 프로젝트 목표

- 복잡한 금융 서비스를 간단하고 직관적으로 만들기
- 높은 보안 수준을 유지하면서도 편리한 사용성 제공
- 다양한 연령대의 사용자를 고려한 접근성 확보

## 디자인 원칙

### 1. 단순함 (Simplicity)
복잡한 금융 정보를 이해하기 쉽게 시각화했습니다.

### 2. 신뢰성 (Trust)
사용자가 안심하고 사용할 수 있는 신뢰감 있는 인터페이스를 구현했습니다.

### 3. 접근성 (Accessibility)
모든 사용자가 쉽게 접근할 수 있도록 WCAG 가이드라인을 준수했습니다.

## 주요 기능

**간편 송금**: 연락처에서 바로 송금할 수 있는 직관적인 UX

**가계부 자동 분류**: AI 기반 자동 카테고리 분류

**맞춤형 대시보드**: 개인 금융 패턴 분석 및 인사이트 제공

## 보안 고려사항

금융 앱의 특성상 보안이 최우선이었습니다:

- 생체 인증 통합
- 화면 캡처 방지  
- 세션 타임아웃 최적화
- 엔드투엔드 암호화

## 사용자 테스트 결과

총 50명의 다양한 연령대 사용자를 대상으로 한 사용성 테스트에서:

- 작업 완료율 95%
- 평균 만족도 4.7/5.0
- 학습 곡선 대폭 개선

---

*"보안과 사용성은 상충되는 것이 아니라, 함께 발전시킬 수 있는 영역입니다."*`,

    '3': `# 브랜드 아이덴티티 시스템

스타트업의 핵심 가치와 비전을 시각적으로 표현하는 포괄적인 브랜드 아이덴티티 시스템을 구축했습니다.

## 브랜드 분석

### 핵심 가치
- 혁신성
- 신뢰성  
- 접근성

### 타겟 오디언스
- 25-40세 도시 거주자
- 기술에 친숙한 얼리어답터
- 지속가능성을 중시하는 소비자

## 디자인 개발 과정

### 1. 리서치 및 분석
경쟁사 분석과 시장 조사를 통해 브랜드 포지셔닝을 명확히 했습니다.

### 2. 컨셉 개발
브랜드의 핵심 메시지를 시각적으로 표현할 수 있는 컨셉을 개발했습니다.

### 3. 로고 디자인
심볼과 워드마크의 조화로운 결합을 통해 기억하기 쉬운 로고를 제작했습니다.

## 브랜드 가이드라인

**로고 사용법**: 최소 크기, 여백, 금지 사항 정의

**컬러 팔레트**: 주색상과 보조색상의 체계적 정리

**타이포그래피**: 브랜드 성격에 맞는 서체 선정

**그래픽 요소**: 일관성 있는 시각적 언어 구축

## 적용 결과

브랜드 아이덴티티 시스템 적용 후:
- 브랜드 인지도 60% 향상
- 일관성 있는 커뮤니케이션 구현
- 마케팅 효율성 증대`,

    '4': `# 디자인 시스템 라이브러리

확장 가능하고 일관성 있는 사용자 경험을 위한 포괄적인 디자인 시스템을 구축했습니다.

## 프로젝트 배경

기존 제품들의 디자인 일관성 부족과 개발 효율성 저하 문제를 해결하기 위해 시작된 프로젝트입니다.

## 구성 요소

### 1. Design Tokens
- Color palette
- Typography scale  
- Spacing system
- Border radius values

### 2. Component Library
- Basic components (Button, Input, etc.)
- Complex components (Modal, Datepicker, etc.)
- Layout components (Grid, Container, etc.)

### 3. Documentation
- Storybook을 활용한 인터랙티브 문서
- 사용 가이드라인
- 코드 예제

## 기술적 구현

**React 기반**: TypeScript와 함께 타입 안전성 확보

**Storybook**: 컴포넌트 문서화 및 테스트 환경

**Design Tokens**: JSON 기반 토큰 시스템으로 일관성 유지

**자동화된 테스트**: Visual regression test 포함

## 도입 효과

디자인 시스템 도입 후 조직에 가져온 변화:

- 개발 속도 40% 향상
- 디자인 QA 시간 60% 단축
- 브랜드 일관성 크게 개선
- 새로운 팀원의 온보딩 시간 단축

## 지속적인 발전

디자인 시스템은 살아있는 문서입니다:
- 정기적인 컴포넌트 업데이트
- 사용자 피드백 반영
- 새로운 패턴 발굴 및 추가`,

    '5': `# 헬스케어 대시보드

의료진을 위한 직관적이고 효율적인 환자 관리 대시보드를 설계했습니다.

## 프로젝트 목표

- 복잡한 의료 데이터를 직관적으로 시각화
- 의료진의 워크플로우 최적화
- 환자 안전성 향상을 위한 알림 시스템 구축

## 사용자 리서치

### 인터뷰 대상
- 간호사 15명
- 의사 8명
- 병원 관리자 3명

### 주요 발견사항
- 기존 시스템의 복잡한 네비게이션
- 중요 정보 접근의 어려움
- 모바일 환경에서의 제한적 기능

## 디자인 솔루션

### 1. 정보 계층 구조화
중요도에 따른 정보 우선순위 설정

### 2. 대시보드 커스터마이징
개인별 업무 패턴에 맞는 레이아웃 제공

### 3. 실시간 알림 시스템
환자 상태 변화에 대한 즉각적 알림

## 주요 기능

**환자 목록 관리**: 상태별 필터링 및 검색

**실시간 모니터링**: 생체 신호 실시간 추적

**약물 관리**: 투약 스케줄 및 알레르기 정보

**리포트 생성**: 자동화된 의료 리포트 작성

## 성과 측정

시스템 도입 후 3개월간의 결과:
- 환자 대응 시간 25% 단축
- 의료 오류 40% 감소
- 의료진 만족도 85% 향상`,

    '6': `# 교육 플랫폼

학습자 중심의 맞춤형 교육 경험을 제공하는 온라인 플랫폼을 설계했습니다.

## 프로젝트 비전

모든 학습자가 자신만의 속도로 효과적으로 학습할 수 있는 교육 환경을 만드는 것이 목표였습니다.

## 주요 타겟

### 초등학생 (8-12세)
- 게임화된 학습 요소
- 직관적인 인터페이스
- 부모 모니터링 기능

### 중고등학생 (13-18세)
- 개인별 맞춤 학습
- 진도 추적 시스템
- 소셜 학습 기능

## 핵심 기능

### 1. 적응형 학습 경로
AI 기반 개인별 학습 경로 추천

### 2. 게임화 요소
- 포인트 시스템
- 배지 및 업적
- 리더보드

### 3. 협력 학습
- 그룹 프로젝트
- 토론 게시판
- peer-to-peer 학습

## 기술적 특징

**반응형 디자인**: 모든 디바이스에서 최적화된 경험

**오프라인 지원**: 인터넷 연결 없이도 학습 가능

**접근성 고려**: 시각/청각 장애 학습자를 위한 특별 기능

## 교육적 성과

6개월간의 베타 테스트 결과:
- 학습 완료율 70% 향상
- 평균 학습 시간 2배 증가
- 학습자 만족도 4.6/5.0

## 지속적인 개선

- 교육 전문가와의 지속적 협업
- 학습 데이터 분석을 통한 개선
- 새로운 교육 기법 적용`
  }

  return contentMap[id] || '프로젝트 내용을 찾을 수 없습니다.'
}