import Layout from '../../components/Layout';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Next.js로 블로그 만들기",
      excerpt: "Next.js를 사용해서 개인 블로그를 만드는 방법을 알아봅시다.",
      date: "2024-01-15",
      slug: "nextjs-blog"
    },
    {
      id: 2,
      title: "React Hook 완전 정복",
      excerpt: "React Hook의 모든 것을 알아보고 실제 프로젝트에 적용해봅시다.",
      date: "2024-01-10",
      slug: "react-hooks"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">블로그</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    읽어보기 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// pages/blog/[slug].js (개별 블로그 포스트)
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // 여기에 제가 만든 블로그 레이아웃의 article 부분을 넣으면 됩니다
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