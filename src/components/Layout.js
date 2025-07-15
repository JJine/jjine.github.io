import React from 'react';
import Header from './Header';
import Footer from './Footer';

// export default를 사용
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}