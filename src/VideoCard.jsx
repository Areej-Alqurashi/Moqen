import { useState } from "react";
import { Link } from "react-router-dom"; // تأكد من وجود هذا الاستيراد

const videos = [
  {
    title: "حكم السفر بدون محرم 1",
    src: "/path/to/video1.mp4",
  },
  {
    title: "حكم وجوب الحج بدون محرم",
    src: "/path/to/video2.mp4",
  },
  {
    title: "سورة البقرة",
    src: "/path/to/video3.mp4",
  },
];

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-8 text-right">

      <Link
        to="/khutab"
        className="font-tajawal text-2xl font-semibold mb-4 !text-[#E2A03F] hover:underline block"
      >
        {videos[currentIndex].title}
      </Link>


      <div className="relative">
        {/* الفيديو */}
        <video
          controls
          className="w-full rounded-lg shadow-md h-auto max-h-[600px]"
          key={videos[currentIndex].src}
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>

        {/* زر السهم السابق */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          aria-label="السابق"
        >
          ‹
        </button>

        {/* زر السهم التالي */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          aria-label="التالي"
        >
          ›
        </button>
      </div>
    </div>
  );
}
