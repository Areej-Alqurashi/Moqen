import { useState } from "react";
import { Link } from "react-router-dom";

const videos = [
  {
    title: "حكم السفر بدون محرم ",
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

export default function VideoCard() {
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
        to="/Main"
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#4E5BA1] hover:text-[#E2A03F] transition-colors duration-200"
          aria-label="السابق"
        >
          ‹
        </button>

        {/* زر السهم التالي */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-[#4E5BA1] hover:text-[#E2A03F] transition-colors duration-200"
          aria-label="التالي"
        >
          ›
        </button>

      </div>
    </div>
  );
}
