import { useState, useEffect } from "react";
import SquerCard from "../SquerCard";

export default function ImageToggle() {
  const images = [
    "/card1.jpg",
    "/card2.jpg",
    "/card3.jpg",
    "/card4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-100 mx-auto my-8 cursor-pointer">
      <div className="mt-30 mr-30 ml-0">
        <SquerCard />
      </div>

      <img
        src={images[currentIndex]}
        alt="toggle image"
        className="w-[300px] h-[300px] object-cover transition duration-500 rounded-lg shadow-md mt-4"
        onClick={handleClick}
      />

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-3xl font-bold z-50"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={images[currentIndex]}
              alt="Enlarged toggle image"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
