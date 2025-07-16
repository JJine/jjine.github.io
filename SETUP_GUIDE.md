# 개인 블로그 설정 가이드

이 가이드를 따라 개인 블로그를 설정하고 GitHub Pages에 배포하세요.

## 🚀 시작하기

### 1. GitHub 저장소 생성

1. GitHub에서 새 저장소를 생성합니다
2. 저장소 이름을 `username.github.io`로 설정합니다 (username은 본인의 GitHub 사용자명)
3. Public으로 설정합니다

### 2. 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/username/username.github.io.git
cd username.github.io

# 프로젝트 파일들을 저장소에 복사
# (제공된 모든 파일들을 복사)

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 3. 개인 정보 수정

#### A. 기본 정보 변경

**`app/layout.tsx`** - 메타데이터 수정:
```typescript
export const metadata: Metadata = {
  title: '당신의 이름 - Personal Blog',
  description: '당신의 소개',
  // ... 기타 정보 수정
}
```

**`components/Header.tsx`** - 로고 변경:
```typescript
<Link href="/" className="text-xl font-bold tracking-tight">
  당신의이름
</Link>
```

**`components/Footer.tsx`** - 연락처 정보 수정:
```typescript
// 소셜 링크와 이메일 주소 변경
```

#### B. 홈페이지 내용 수정

**`app/page.tsx`** - 메인 소개 텍스트 변경:
```typescript
<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
  안녕하세요,
  <br />
  <span className="text-muted-foreground">당신의직무</span> 당신의이름입니다.
</h1>
<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
  당신의 소개 문구를 작성하세요.
</p>
```

#### C. About 페이지 수정

**`app/about/page.tsx`** - 모든 개인 정보 수정:
- 경력 사항 (`experience` 배열)
- 기술 스택 (`skills` 배열)
- 학력 (`education` 배열)
- 수상 경력 (`awards` 배열)

#### D. 연락처 정보 수정

**`app/info/page.tsx`** - 연락처 정보 수정:
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com', // 이메일 변경
    href: 'mailto:your-email@example.com'
  },
  // ... 기타 정보 수정
]
```

### 4. 프로젝트 및 아티클 추가

#### A. 프로젝트 추가

**`app/page.tsx`**와 **`app/project/page.tsx`**에서 프로젝트 배열 수정:

```typescript
const projects = [
  {
    id: 'your-project-1',
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    category: 'UX/UI Design',
    year: '2024',
    image: '/images/project-1.jpg',
    tags: ['Figma', 'React', 'TypeScript'],
    featured: true,
  },
  // 추가 프로젝트들...
]
```

프로젝트 상세 페이지는 **`app/project/[id]/page.tsx`**에서 `projectsData` 객체에 추가:

```typescript
const projectsData: Record<string, any> = {
  'your-project-1': {
    // 프로젝트 상세 정보
    content: `프로젝트 상세 내용을 마크다운 형식으로 작성`
  }
}
```

#### B. 아티클 추가

**`app/article/page.tsx`**에서 아티클 배열 수정:

```typescript
const articles = [
  {
    id: 'your-article-1',
    title: '아티클 제목',
    excerpt: '아티클 요약',
    category: 'Design',
    date: '2024-07-16',
    readTime: '5분',
    tags: ['Design', 'UX'],
    featured: true,
  },
  // 추가 아티클들...
]
```

아티클 상세 페이지는 **`app/article/[id]/page.tsx`**에서 `articlesData` 객체에 추가:

```typescript
const articlesData: Record<string, any> = {
  'your-article-1': {
    // 아티클 상세 정보
    content: `아티클 내용을 마크다운 형식으로 작성`
  }
}
```

### 5. 이미지 추가

**`public/images/`** 폴더를 생성하고 이미지들을 추가:

```
public/
├── images/
│   ├── profile.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── article-covers/
└── favicon.ico
```

### 6. 환경 변수 설정

`.env.local` 파일 생성:

```env
NEXT_PUBLIC_SITE_URL=https://username.github.io
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/username
```

### 7. GitHub Pages 배포 설정

#### A. GitHub 저장소 설정

1. GitHub 저장소 → Settings → Pages
2. Source를 "GitHub Actions"로 설정
3. 저장

#### B. 첫 배포

```bash
# 모든 변경사항 커밋
git add .
git commit -m "Initial blog setup"
git push origin main
```

배포가 완료되면 `https://username.github.io`에서 블로그를 확인할 수 있습니다.

## 🎨 커스터마이징

### 색상 테마 변경

**`app/globals.css`**에서 CSS 변수 수정:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --muted: 0 0% 96.1%;
  /* 원하는 색상으로 변경 */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* 다크모드 색상 변경 */
}
```

### 폰트 변경

**`tailwind.config.ts`**에서 폰트 설정 수정:

```typescript
fontFamily: {
  'pretendard': ['Your Font Name', 'fallback'],
}
```

### 레이아웃 수정

각 페이지의 레이아웃을 원하는 대로 수정할 수 있습니다.

## 📝 콘텐츠 작성 팁

### 마크다운 스타일 가이드

아티클과 프로젝트 상세 페이지에서 사용할 수 있는 마크다운 스타일:

```markdown
# 제목 1 (H1)
## 제목 2 (H2)
### 제목 3 (H3)

일반 문단입니다.

**굵은 텍스트**: 강조할 내용

> 인용문을 작성할 때 사용합니다.

- 목록 항목 1
- 목록 항목 2

```코드 블록```

---

구분선
```

### SEO 최적화

- 각 페이지의 메타데이터를 적절히 설정
- 이미지에 alt 텍스트 추가
- 구조화된 콘텐츠 작성

## 🔧 유지보수

### 정기적인 업데이트

- 의존성 업데이트: `npm update`
- Next.js 버전 확인
- 보안 업데이트 적용

### 백업

정기적으로 저장소를 백업하고 중요한 콘텐츠는 별도 저장

## ❓ 자주 묻는 질문

**Q: 커스텀 도메인을 사용하려면?**
A: GitHub Pages 설정에서 Custom domain을 설정하고 DNS 레코드를 추가하세요.

**Q: 이미지가 표시되지 않는다면?**
A: `public/images/` 폴더에 이미지가 있는지 확인하고 경로가 올바른지 확인하세요.

**Q: 배포가 실패한다면?**
A: GitHub Actions 탭에서 에러 로그를 확인하고 빌드 오류를 수정하세요.

## 📞 도움말

추가 도움이 필요하다면:
- [Next.js 공식 문서](https://nextjs.org/docs)
- [GitHub Pages 가이드](https://docs.github.com/en/pages)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)