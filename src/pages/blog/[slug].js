import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
   return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {slug === 'nextjs-blog' ? 'Next.js로 블로그 만들기' : 'React Hook 완전 정복'}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              실제 프로젝트 경험을 바탕으로 한 실용적인 가이드
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>2024년 1월 15일</span>
              <span>•</span>
              <span>5분 읽기</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            여기에 실제 블로그 내용이 들어갑니다...
          </p>
        </div>
      </article>
    </Layout>
  );
}