// 각 아티클 콘텐츠를 개별 파일에서 import
import { designSystemContent } from './content/design-system'
import { aiUxDesignerContent } from './content/ai-ux-designer'
// import { tailwindCssContent } from './content/tailwind-css'
// import { nextjsAppRouterContent } from './content/nextjs-app-router'
// import { react18FeaturesContent } from './content/react18-features'
// import { feedbackMethodsContent } from './content/feedback-methods'

// 모든 아티클 상세 데이터
export const articlesData: Record<string, any> = {
  '1': designSystemContent,
  '2': aiUxDesignerContent,
//   '3': tailwindCssContent,
//   '4': nextjsAppRouterContent,
//   '5': react18FeaturesContent,
//   '6': feedbackMethodsContent,
}

// 아티클 존재 여부 확인 헬퍼 함수
export const getArticle = (id: string) => {
  return articlesData[id] || null
}

// 관련 아티클 가져오기 헬퍼 함수
export const getRelatedArticles = (currentId: string, category: string, limit: number = 3) => {
  return Object.values(articlesData)
    .filter(article => article.id !== currentId && article.category === category)
    .slice(0, limit)
}