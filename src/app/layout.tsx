import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jjine - Personal Portfolio",
  description: "UX/UI Designer & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-inter">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}