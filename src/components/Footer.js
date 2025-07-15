const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">YourName</h3>
            <p className="text-gray-400">
              개발자의 성장 여정과 기술에 대한 이야기
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">홈</a></li>
              <li><a href="/about" className="hover:text-white">소개</a></li>
              <li><a href="/blog" className="hover:text-white">블로그</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">소셜</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">연락처</h4>
            <p className="text-gray-400">
              your.email@example.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;