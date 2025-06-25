import { useState, useEffect } from "react";
import SquerCard from "./SquerCard";

export default function ImageToggle() {
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  fetch("http://198.199.121.72/api/contents/7")
    .then((res) => res.json())
    .then((data) => {
      console.log("🚀 بيانات محتوى 7:", data);

      const content7 = data.data;

      if (content7 && Array.isArray(content7.resources)) {
        const imageResource = content7.resources.find((res) => res.resource_type_id === 3);
        if (imageResource) {
          const isFullUrl = imageResource.resource_url.startsWith("http://") || imageResource.resource_url.startsWith("https://");

          const imageUrl = isFullUrl
            ? imageResource.resource_url
            : `http://198.199.121.72${imageResource.resource_url}`;

          setImage(imageUrl);
        }
      }
    })
    .catch((err) => {
      console.error("❌ فشل تحميل الصورة:", err);
    });
}, []);


  const handleClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!image) {
    return (
      <div className="text-center py-10 text-gray-500">
        لا توجد صورة للمحتوى رقم 7 حالياً.
      </div>
    );
  }

  return (
    <div className="w-100 mx-auto my-8 cursor-pointer text-right">
      <div className="mt-15 mr-30 ml-0">
        <SquerCard />
      </div>

      <img
        src={image}
        alt="صورة المحتوى 7"
        className="w-[300px] h-[300px] object-cover transition duration-500 rounded-lg shadow-md mt-6"
        onClick={handleClick}
      />

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              aria-label="إغلاق"
            >
              &times;
            </button>
            <img
              src={image}
              alt="صورة مكبرة"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
