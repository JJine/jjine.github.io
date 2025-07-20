# Personal Blog - Jjine

현대적인 개인 블로그 및 포트폴리오 웹사이트입니다. Next.js 14, TypeScript, Tailwind CSS로 구축되었습니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.0
- **Font**: Inter
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Theme**: 커스텀 다크모드 지원
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
jjine-portfolio/
├── 📁 src/
│   └── 📁 app/
│       ├── 📄 globals.css              # 전역 스타일 (다크모드 완전 지원)
│       ├── 📄 layout.tsx               # 루트 레이아웃
│       ├── 📄 page.tsx                 # 홈페이지 (2x2 그리드 레이아웃)
│       │
│       ├── 📁 components/
│       │   ├── 📄 Header.tsx           # 헤더 (다크모드 토글)
│       │   ├── 📄 Footer.tsx           # 푸터
│       │   ├── 📄 CursorAnimation.tsx  # 커서 애니메이션
│       │   ├── 📄 ProjectNavigation.tsx # 플로팅 네비게이션
│       │   └── 📄 CommentSection.tsx   # 댓글 시스템
│       │
│       ├── 📁 project/
│       │   ├── 📄 page.tsx             # 프로젝트 목록 (재디자인)
│       │   ├── 📁 [id]/
│       │   │   ├── 📄 page.tsx         # 프로젝트 상세
│       │   │   └── 📄 ProjectDetailClient.tsx
│       │   └── 📁 data/
│       │       ├── 📄 projects-content.ts  # 프로젝트 데이터
│       │       └── 📁 content/
│       │           ├── 📄 project-1.md
│       │           ├── 📄 project-2.md
│       │           └── 📄 project-3.md
│       │
│       ├── 📁 about/
│       │   └── 📄 page.tsx             # 소개 페이지
│       │
│       ├── 📁 article/
│       │   ├── 📄 page.tsx             # 아티클 목록
│       │   └── 📁 [id]/
│       │       └── 📄 page.tsx         # 아티클 상세
│       │
│       └── 📁 info/
│           └── 📄 page.tsx             # 연락처 페이지
│
├── 📁 public/
│   ├── 📄 favicon.ico
│   ├── 📁 images/
│   │   ├── 📄 profile.jpg
│   │   ├── 📄 project-1.jpg
│   │   ├── 📄 project-2.jpg
│   │   ├── 📄 project-3.jpg
│   │   └── 📁 article-covers/
│   │       └── 📄 cover-1.jpg
│   └── 📁 icons/
│       └── 📄 icon-192x192.png
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml              # GitHub Actions 자동 배포
│
├── 📄 package.json                    # 의존성 관리
├── 📄 tailwind.config.js             # Tailwind CSS 설정
├── 📄 next.config.ts                 # Next.js 설정 (Static Export)
├── 📄 tsconfig.json                  # TypeScript 설정
├── 📄 .env.local                     # 환경 변수 (git 제외)
├── 📄 README.md                      # 프로젝트 설명서
├── 📄 SETUP_GUIDE.md                 # 상세 설정 가이드
└── 📄 CHECKLIST.md                   # 설정 체크리스트
```

## 🎨 주요 컴포넌트

### 📱 페이지 컴포넌트
- **HomePage**: 2x2 그리드 레이아웃으로 Featured 프로젝트 표시
- **ProjectsPage**: artisd.studio 스타일의 프로젝트 목록
- **ProjectDetailPage**: 상세 정보와 댓글 시스템이 통합된 프로젝트 페이지
- **AboutPage**: 개인 소개 및 경력 사항
- **ArticlePage**: 블로그 아티클 목록 및 상세
- **InfoPage**: 연락처 및 소셜 링크

### 🔧 재사용 컴포넌트
- **Header**: 네비게이션 및 다크모드 토글
- **Footer**: 소셜 링크 및 저작권 정보
- **CursorAnimation**: 부드러운 커서 효과 (모바일에서 자동 비활성화)
- **ProjectNavigation**: 플로팅 네비게이션 (공유, 이전/다음 프로젝트)
- **CommentSection**: Toss Tech 스타일 댓글 시스템

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/jjine/jjine.github.io.git
cd jjine.github.io
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000에서 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
npm run build
npm run start
```

## 🌐 GitHub Pages 배포 설정

### 1. 저장소 설정

1. GitHub에서 새 저장소 생성: `username.github.io`
2. 저장소 Settings → Pages 설정
3. Source를 "GitHub Actions"로 설정

### 2. 환경 변수 설정 (필요시)

`.env.local` 파일 생성:

```env
NEXT_PUBLIC_SITE_URL=https://username.github.io
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/username
```

### 3. 자동 배포

- `main` 브랜치에 push하면 자동으로 배포됩니다
- GitHub Actions를 통해 빌드 및 배포가 진행됩니다

## 📝 콘텐츠 관리

### 프로젝트 추가

**`src/app/project/data/projects-content.ts`**에서 프로젝트를 관리합니다:

```typescript
export const projects: Project[] = [
  {
    id: 'new-project',
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    category: '카테고리',
    year: '2024',
    tags: ['태그1', '태그2'],
    featured: true, // 메인페이지 노출 여부
    // ... 기타 정보
  },
  // ...
]
```

프로젝트 상세 내용은 **`src/app/project/data/content/project-{id}.md`** 파일로 관리:

```markdown
# 프로젝트 개요
프로젝트에 대한 상세한 설명을 마크다운으로 작성합니다.

## 주요 기능
- 기능 1
- 기능 2

## 기술적 도전
...
```

### 아티클 추가

**`src/app/article/page.tsx`**의 `articles` 배열에서 아티클을 관리합니다:

```typescript
const articles = [
  {
    id: 'new-article',
    title: '아티클 제목',
    excerpt: '아티클 요약',
    category: '카테고리',
    date: '2024-07-16',
    readTime: '5분',
    tags: ['태그1', '태그2'],
    featured: true,
  },
  // ...
]
```

## 🎨 커스터마이징

### 색상 및 테마

**`src/app/globals.css`**에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... 기타 색상 변수 */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... 다크모드 색상 */
}
```

### 폰트 변경

**`tailwind.config.js`**에서 폰트를 변경할 수 있습니다:

```typescript
fontFamily: {
  'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
  'custom': ['Your Font', 'fallback'],
}
```

## 🌟 주요 기능

### 다크모드
- CSS 변수를 활용한 완벽한 다크모드 지원
- 부드러운 테마 전환 애니메이션
- 모든 컴포넌트에서 일관된 테마 적용

### 반응형 디자인
- 모바일 우선 설계
- Tailwind CSS 반응형 클래스 활용
- 모든 디바이스에서 최적화된 경험

### 성능 최적화
- Next.js 14 App Router 사용
- 정적 사이트 생성 (SSG)
- 이미지 최적화
- 코드 분할 및 지연 로딩

### 접근성
- aria-label 및 semantic HTML 사용
- 키보드 네비게이션 지원
- 적절한 색상 대비

## 🔧 개발 도구

### 린팅 및 포맷팅

```bash
npm run lint        # ESLint 실행
```

### 타입 체크

```bash
npx tsc --noEmit   # TypeScript 타입 체크
```

## 📖 참고 레퍼런스

이 프로젝트는 다음 사이트들을 참고하여 디자인되었습니다:

- **artisd.studio** - 프로젝트 페이지 레이아웃
- **jaypyo.com** - 전체적인 구조
- **toss.tech** - 댓글 시스템 UI
- **fficial.naver.com** - 네비게이션 디자인

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**개발자**: Jjine  
**버전**: 1.0.0  
**최종 업데이트**: 2024년 7월