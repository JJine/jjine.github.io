import Layout from './components/Layout';

// export default function Home() {
//   return (
//     <Layout>
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               안녕하세요, 개발자 홍길동입니다
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               웹 개발과 기술에 대한 열정을 가지고 있습니다. 새로운 것을 배우고 공유하는 것을 좋아합니다.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <a
//                 href="/blog"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//               >
//                 블로그 보기
//               </a>
//               <a
//                 href="/about"
//                 className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
//               >
//                 소개 보기
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

import React, { useState } from 'react';
import { Menu, X, Home, User, Mail, FileText } from 'lucide-react';

const BlogLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <div>
      <header>
          <div class="header-container">
              <a href="/" class="logo">JayPyo</a>
              <nav>
                  <ul class="nav-menu">
                      <li><a href="/">Home</a></li>
                      <li><a href="/blog" class="active">Blog</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/contact">Contact</a></li>
                  </ul>
              </nav>
              <button class="menu-toggle">☰</button>
          </div>
      </header>

    <main>
        <div class="content-container">
            <!-- 브레드크럼 네비게이션 -->
            <nav class="breadcrumb">
                <a href="/">Home</a> / <a href="/blog">Blog</a> / 알고리즘 기반 디자인이 가져올 디자이너의 역할 변화
            </nav>

            <!-- 아티클 헤더 -->
            <div class="article-header">
                <h1 class="article-title">알고리즘 기반 디자인이 가져올 디자이너의 역할 변화</h1>
                <div class="article-meta">
                    2024년 3월 15일 · 5분 읽기
                </div>
            </div>

            <!-- 아티클 본문 -->
            <article class="article-content">
                <p>최근 우리 사회의 화두는 단연 인공지능(AI)이다. 우리 주위에서도 인공지능을 흔하게 볼 수 있게 되었는데 상대적으로 저 숙련을 요구하는 운전이나 창고에서 물류를 옮기는 일 이 밖에도 많은 영역에서 인공지능이 사람들을 대체하기 시작했다.</p>

                <h2>인공지능이 디자이너도 대체할 수 있을까?</h2>
                
                <img src="https://framerusercontent.com/images/MNBWLI2YHTrbxty1NBYjs7V4Dc.png" alt="AI와 디자인" />
                
                <p>얼핏 보면 디자이너들은 무에서 유를 창조해내는 전지전능한 창조자 같이 보이지만, 그렇지 않다. 디자이너들은 특정한 스크린 사이즈와 해상도, 표준화된 종이 포맷 위에서 적절하게 계산된 그리드를 설정해서 작업한다.</p>

                <h2>기술의 발전에 따른 디자인 역할 변화</h2>
                
                <p>구텐베르크의 활자, 사진 식자기, 맥, 어도비, 디지털카메라, 인터넷, 아이폰 등의 기술적인 발전이 일어날 때 마다 디자이너의 역할에도 엄청난 변화가 일어났다.</p>

                <h3>Adobe Sensei</h3>
                
                <p>우리가 잘 알고 있는 Adobe 에서도 머신러닝과 이미지 인식을 이용해서 디자이너들의 업무에 도움을 주는 "Sensei"라는 기능을 개발하고 있다.</p>

                <blockquote>
                    "디자이너는 음악가보다는 지휘자가 될 것이다."
                </blockquote>

                <h2>결론</h2>
                
                <p>기술이 발전하면서 우리가 처리할 수 있는 컴퓨팅 파워의 양이 늘어나고 디바이스의 성능이 훨씬 좋아지면, 디자이너의 작업 분야가 더 이상 시각적인 부분에 국한되지 않고 음성, 감각, 멀티 센서 부분까지 다양한 영역으로 확대될 것이다.</p>

                <!-- 참고자료 -->
                <div class="references">
                    <h3>참고자료</h3>
                    <ul>
                        <li><a href="#">AI and the future of design: Will machines take your job?</a></li>
                        <li><a href="#">Adobe Is Building An AI To Automate Web Design. Should You Worry?</a></li>
                        <li><a href="#">Automation Threatens to Make Graphic Designers Obsolete</a></li>
                        <li><a href="#">Algorithm-Driven Design: How Artificial Intelligence Is Changing Design</a></li>
                    </ul>
                </div>
            </article>
        </div>
    </main>
    </div>
    // <div className="min-h-screen bg-white">
    //   {/* Header */}
    //   <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center h-16">
    //         {/* Logo */}
    //         <div className="flex-shrink-0">
    //           <a href="/" className="text-2xl font-bold text-gray-900">
    //             JayPyo
    //           </a>
    //         </div>
            
    //         {/* Desktop Navigation */}
    //         <nav className="hidden md:flex space-x-8">
    //           {navigation.map((item) => (
    //             <a
    //               key={item.name}
    //               href={item.href}
    //               className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
    //             >
    //               {item.name}
    //             </a>
    //           ))}
    //         </nav>

    //         {/* Mobile menu button */}
    //         <div className="md:hidden">
    //           <button
    //             onClick={() => setIsMenuOpen(!isMenuOpen)}
    //             className="text-gray-700 hover:text-gray-900 p-2"
    //           >
    //             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isMenuOpen && (
    //       <div className="md:hidden bg-white border-t border-gray-200">
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //           {navigation.map((item) => {
    //             const Icon = item.icon;
    //             return (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors"
    //               >
    //                 <Icon size={20} className="mr-3" />
    //                 {item.name}
    //               </a>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     )}
    //   </header>

    //   {/* Main Content */}
    //   <main className="pt-16">
    //     {/* Hero Section */}
    //     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="text-center">
    //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
    //             알고리즘 기반 디자인이 가져올 디자이너의 역할 변화
    //           </h1>
    //           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
    //             인공지능과 머신러닝이 디자인 업계에 가져올 변화와 디자이너의 새로운 역할에 대해 알아봅니다.
    //           </p>
    //           <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
    //             <span>2024년 1월 15일</span>
    //             <span>•</span>
    //             <span>5분 읽기</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Article Content */}
    //     <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //       <div className="prose prose-lg max-w-none">
    //         <p className="text-lg text-gray-700 leading-relaxed mb-6">
    //           최근 우리 사회의 화두는 단연 인공지능(AI)이다. 우리 주위에서도 인공지능을 흔하게 볼 수 있게 되었는데 상대적으로 저 숙련을 요구하는 운전이나 창고에서 물류를 옮기는 일 이 밖에도 많은 영역에서 인공지능이 사람들을 대체하기 시작했다.
    //         </p>
            
    //         <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
    //           인공지능이 디자이너도 대체할 수 있을까?
    //         </h2>
            
    //         <div className="bg-gray-50 rounded-lg p-6 mb-8">
    //           <img 
    //             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop" 
    //             alt="AI Design Concept" 
    //             className="w-full h-64 object-cover rounded-lg mb-4"
    //           />
    //           <p className="text-sm text-gray-600">
    //             AI가 창조적인 작업에 미치는 영향을 보여주는 개념적 이미지
    //           </p>
    //         </div>
            
    //         <p className="text-gray-700 leading-relaxed mb-6">
    //           얼핏 보면 디자이너들은 무에서 유를 창조해내는 전지전능한 창조자 같이 보이지만, 그렇지 않다. 디자이너들은 특정한 스크린 사이즈와 해상도, 표준화된 종이 포맷 위에서 적절하게 계산된 그리드를 설정해서 작업한다.
    //         </p>
            
    //         <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
    //           기술의 발전에 따른 디자인 역할 변화
    //         </h2>
            
    //         <p className="text-gray-700 leading-relaxed mb-6">
    //           구텐베르크의 활자, 사진 식자기, 맥, 어도비, 디지털카메라, 인터넷, 아이폰 등의 기술적인 발전이 일어날 때 마다 디자이너의 역할에도 엄청난 변화가 일어났다.
    //         </p>
            
    //         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
    //           <h3 className="text-lg font-semibold text-blue-900 mb-2">
    //             Adobe Sensei의 주요 기능
    //           </h3>
    //           <ul className="text-blue-800 space-y-2">
    //             <li>• 이미지 보정 (머신러닝과 이미지 인식 기술 활용)</li>
    //             <li>• 디자인 시안 추천 (AI 기반 레이아웃 제안)</li>
    //             <li>• 프로토타이핑 (자동화된 콘텐츠 생성)</li>
    //           </ul>
    //         </div>
            
    //         <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
    //           디자이너는 음악가보다는 지휘자가 될 것이다
    //         </h2>
            
    //         <p className="text-gray-700 leading-relaxed mb-6">
    //           결국 디자이너의 역할은 무언가를 만들기보다는 방향을 제시하고 리소스를 선택하고 조절하는데 치중할 것이다. 디자이너들이 무드보드를 만들면 알고리즘은 빠르게 데이터를 스캔해서 디자이너에게 다양한 디자인 시안을 제안할 것이다.
    //         </p>
            
    //         <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
    //           <h3 className="text-xl font-bold text-gray-900 mb-4">결론</h3>
    //           <p className="text-gray-700 leading-relaxed">
    //             기술이 발전하면서 우리가 처리할 수 있는 컴퓨팅 파워의 양이 늘어나고 디바이스의 성능이 훨씬 좋아지면, 디자이너의 작업 분야가 더 이상 시각적인 부분에 국한되지 않고 음성, 감각, 멀티 센서 부분까지 다양한 영역으로 확대될 것이다.
    //           </p>
    //         </div>
    //       </div>
    //     </article>

    //     {/* Related Articles */}
    //     <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
    //       <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 글</h2>
    //       <div className="grid md:grid-cols-2 gap-6">
    //         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    //           <h3 className="text-lg font-semibold text-gray-900 mb-2">
    //             UX 디자인의 미래 트렌드
    //           </h3>
    //           <p className="text-gray-600 mb-4">
    //             사용자 경험 디자인이 나아가야 할 방향에 대한 고찰
    //           </p>
    //           <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
    //             읽어보기 →
    //           </a>
    //         </div>
    //         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    //           <h3 className="text-lg font-semibold text-gray-900 mb-2">
    //             디자인 시스템 구축하기
    //           </h3>
    //           <p className="text-gray-600 mb-4">
    //             효율적인 디자인 시스템을 만드는 방법
    //           </p>
    //           <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
    //             읽어보기 →
    //           </a>
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   {/* Footer */}
    //   <footer className="bg-gray-900 text-white py-12">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid md:grid-cols-4 gap-8">
    //         <div>
    //           <h3 className="text-lg font-semibold mb-4">JayPyo</h3>
    //           <p className="text-gray-400">
    //             디자인과 기술의 경계에서 새로운 가능성을 탐구합니다.
    //           </p>
    //         </div>
    //         <div>
    //           <h4 className="text-sm font-semibold text-gray-300 mb-4">링크</h4>
    //           <ul className="space-y-2 text-gray-400">
    //             <li><a href="#" className="hover:text-white">홈</a></li>
    //             <li><a href="#" className="hover:text-white">소개</a></li>
    //             <li><a href="#" className="hover:text-white">블로그</a></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-sm font-semibold text-gray-300 mb-4">소셜</h4>
    //           <ul className="space-y-2 text-gray-400">
    //             <li><a href="#" className="hover:text-white">Twitter</a></li>
    //             <li><a href="#" className="hover:text-white">LinkedIn</a></li>
    //             <li><a href="#" className="hover:text-white">GitHub</a></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-sm font-semibold text-gray-300 mb-4">연락처</h4>
    //           <p className="text-gray-400">
    //             hello@jaypyo.com
    //           </p>
    //         </div>
    //       </div>
    //       <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
    //         <p>&copy; 2024 JayPyo. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};


export default BlogLayout;