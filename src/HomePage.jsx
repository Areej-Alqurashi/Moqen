import { useState } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import ImageToggle from './Components/ImageToggle';
import CardsGrid from './Components/CardsGrid';
import AudioTable from './AudioTable';
import VideoCard from './Components/VideoCard';
import Footer from './Footer';
import ImageTable from './Components/ImageTable';
import Divider from '@mui/material/Divider';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />

      {/* زر التصنيفات يظهر (الجوال) */}
      <div className="sm:hidden p-4 flex justify-end mt-10"></div>

      {/* صورة الهيدر */}
      <div className="elative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-0 mb-9">
        <img
          src="/header.png"
          alt="header decoration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى للجوال: كل شيء ورا بعض */}
      <div className="sm:hidden p-4 space-y-8 overflow-auto max-h-[calc(100vh-100px)] mt-4">
        <CardsGrid />

        <div className="flex justify-center ml-30 mt-0">
          <ImageToggle />
        </div>

        <ImageTable />
        <VideoCard videoSrc="/path/to/video.mp4" />
      </div>

      <div className="hidden sm:flex flex-row p-8 gap-6 flex-1 items-start mt-0 py-0">
        <div className="w-64 ml-8">
          <ImageToggle />
          <Divider sx={{ my: 1, borderColor: '#4E5BA1', borderStyle: 'dashed' }} />
          <AudioTable />
          <Divider sx={{ my: 3, borderColor: '#4E5BA1', borderStyle: 'dashed' }} />
          <ImageTable />
          <Divider sx={{ my: 1, borderColor: '#4E5BA1', borderStyle: 'dashed' }} />
        </div>

        <div className="flex-1 px-4 max-w-full mt-15 ml-10">
          <CardsGrid />
          <VideoCard title="عنوان الفيديو" videoSrc="/path/to/video.mp4" />
        </div>

        <div className="hidden sm:block top-[100px] right-0 w-64 z-40 mb-1">
          <Menu />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full px-4 py-2 rounded font-tajawal z-50 shadow-lg p-4 sm:hidden">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-red-500 font-bold text-xl flex items-center justify-center"
              aria-label="إغلاق القائمة"
            >
              <svg
                className="w-6 h-6 stroke-white"
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
