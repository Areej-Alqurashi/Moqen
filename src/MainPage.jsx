// MainPage.jsx
import { useState } from "react";
import Header from './Components/Header';
import StaticCardsGrid from './Components/StaticCardsGrid';
import Menu from './Components/Menu';
import Footer from "./Footer";

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة تبديل حالة القائمة
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="flex flex-col min-h-screen font-tajawal bg-white relative">
      {/* الهيدر + زر القائمة داخل الهيدر فقط */}
      <Header onMenuToggle={toggleMenu} />

      {/* صورة الهيدر */}
      <div className="relative w-full h-[200px] sm:h-[400px]">
        <img
          src="/header.png"
          alt="header decoration"
          className="w-400 h-full object-cover"
        />
      </div>

      {/* الكروت */}
      <div className="p-4 space-y-8 overflow-auto mt-15 z-0 ">
        <StaticCardsGrid />
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full px-4 py-2 rounded-l z-50 shadow-lg">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="ml-auto text-black font-bold text-xl"
              aria-label="إغلاق القائمة"
            >
              <svg
                className="w-6 h-6 stroke-black"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Menu />
        </div>
      )}


      <Footer />
    </div>
  );
}
