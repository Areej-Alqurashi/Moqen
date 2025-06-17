import { useState } from "react";
import { Link } from "react-router-dom";

export default function VideoCard() {
  const [videos] = useState([
    {
      id: 1,
      title: "فيديو تعليمي 1",
      value: "/videos/video1.mp4", // تأكد من وضع الملف في مجلد public/videos
    },
    {
      id: 2,
      title: "محاضرة عن الصبر",
      value: "/videos/video2.mp4",
    },
    {
      id: 3,
      title: "نصيحة قصيرة",
      value: "/videos/video3.mp4",
    },
  ]);

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
    <div className="max-w-4xl mx-auto my-1 text-right">
      <Link
        to="/Main"
        className="font-tajawal text-2xl font-semibold mb-4 !text-[#E2A03F] hover:text-[#c38f33] block"
      >
        {videos[currentIndex].title}
      </Link>

      <div className="relative">
        <video
          controls
          className="w-400 rounded-lg shadow-md h-auto max-h-[400px]"
          key={videos[currentIndex].value}
        >
          <source src={videos[currentIndex].value} type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>

        {/* أزرار التنقل */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#4E5BA1] hover:text-[#E2A03F] transition-colors duration-200"
          aria-label="السابق"
        >
          ‹
        </button>

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
