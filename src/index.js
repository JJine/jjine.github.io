import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              안녕하세요, 개발자 홍길동입니다
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              웹 개발과 기술에 대한 열정을 가지고 있습니다. 새로운 것을 배우고 공유하는 것을 좋아합니다.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/blog"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                블로그 보기
              </a>
              <a
                href="/about"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                소개 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}