import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VideoCard() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://198.199.121.72/api/contents")
      .then((res) => res.json())
      .then((data) => {
        const allContents = data.data || [];

        const videoItems = allContents
          .filter(
            (item) =>
              item.is_hidden === 0 &&
              Array.isArray(item.resources) &&
              item.resources.some((res) => res.resource_type_id === 3)
          )
          .map((item) => {
            const videoResource = item.resources.find(
              (res) => res.resource_type_id === 3
            );

            let videoUrl = "";

            if (videoResource) {
              if (videoResource.is_url === 1) {
                videoUrl = videoResource.resource_url;
              } else {
                videoUrl = `http://198.199.121.72${videoResource.resource_url}`;
              }
            }

            return {
              id: item.id,
              title: item.title,
              value: videoUrl,
            };
          });

        setVideos(videoItems);
      });
  }, []);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      videos.length ? (prevIndex + 1) % videos.length : 0
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      videos.length
        ? prevIndex === 0
          ? videos.length - 1
          : prevIndex - 1
        : 0
    );
  };

  if (videos.length === 0) {
    return <div className="text-center py-10 text-gray-500">لا توجد فيديوهات حالياً.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-1 text-right">
      <Link
        to="/Main"
        className="font-tajawal text-2xl font-semibold mb-4 !text-[#E2A03F] hover:text-[#c38f33] block"
      >
        {videos[currentIndex].title}
      </Link>

      <div className="relative aspect-video rounded-lg shadow-md overflow-hidden">
        <iframe
          key={videos[currentIndex].value}
          className="w-full h-full"
          src={videos[currentIndex].value}
          title={videos[currentIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#4E5BA1] hover:text-[#E2A03F] transition-colors duration-200 z-10"
          aria-label="السابق"
        >
          ‹
        </button>

        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-[#4E5BA1] hover:text-[#E2A03F] transition-colors duration-200 z-10"
          aria-label="التالي"
        >
          ›
        </button>
      </div>
    </div>
  );
}
