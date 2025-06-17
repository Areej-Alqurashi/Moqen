import { useState } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import CardsGrid from './Components/CardsGrid';
import ImageToggle from './Components/ImageToggle';
import AudioTable from './AudioTable';
import VideoCard from './Components/VideoCard';
import Footer from './Footer';
import ImageTable from './Components/ImageTable';
import Divider from '@mui/material/Divider';
import SuggestedCards from './Components/SuggestedCards';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* الهيدر مع زر القائمة */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#4E5BA1] fixed w-full top-0 left-0 z-50">
        <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded font-bold"
        >
          ☰ القائمة
        </button>
      </div>

      {/* تعويض ارتفاع الهيدر */}
      <div className="pt-20">
        {/* صورة الهيدر */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/7] lg:aspect-[21/6] mb-9">
          <img
            src="/header.png"
            alt="header decoration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* المحتوى للجوال فقط (Responsive) */}
        <div className="block sm:hidden p-2 space-y-8 mt-10 w-full ml-10 mb-0">
          <CardsGrid />

          <div className="flex justify-center ml-15 mt-0">
            <ImageToggle />
          </div>

          <ImageTable />

          <VideoCard videoSrc="/path/to/video.mp4" />
        </div>


        {/* المحتوى للشاشات الأكبر بدون قائمة جانبية */}
        <div className="hidden sm:flex flex-row p-8 gap-6 flex-1 items-start mt-0 py-0">
          <div className="w-64 ml-8 m">
            <ImageToggle />

            <Divider sx={{ my: 3, borderColor: '#4E5BA1', borderStyle: 'dashed' }} />
            <ImageTable />

          </div>

          <div className="flex-1 px-4 max-w-full mt-6 ml-10">
            <CardsGrid />
            <VideoCard title="عنوان الفيديو" videoSrc="/path/to/video.mp4" />
          </div>
        </div>
      </div>

      {/* القائمة الجانبية المنبثقة عند الضغط على زر القائمة */}
      {isMenuOpen && (
        <>
          {/* الخلفية الشفافة (احذف هذا الجزء لو ما تبيها) */}
          {/* <div
      className="fixed inset-0 bg-black bg-opacity-20 z-40"
      onClick={() => setIsMenuOpen(false)}
    ></div> */}

          {/* القائمة المنبثقة */}
          <aside
            className="fixed top-0 right-0 w-64 h-full px-4 py-2 rounded font-tajawal z-50 shadow-lg p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between mb-4">
              <button
                type="button"
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
          </aside>
        </>
      )}


      <Footer />
    </div>
  );
}