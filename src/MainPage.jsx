import { useState } from "react";
import Header from './Components/Header';
import Menu from "./Components/Menu";
import CardsGrid from "./Components/CardsGrid1";
import Cards from "./Components/Cards";
import headerImage from "./assets/header.png";

const recommendedCards = [
  {
    title: " توصية",
    content: { type: "image", value: "1" },
  },
  {
    title: "توصية",
    content: { type: "text", value: ".........................." },
  },
  {
    title: "توصية",
    content: { type: "audio", value: "3" },
  },
  {
    title: "توصية",
    content: { type: "image", value: "4" },
  },
  {
    title: "توصية",
    content: { type: "text", value: "..................." },
  }
];

export default function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3;
  const totalCards = recommendedCards.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + cardsToShow) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - cardsToShow + totalCards) % totalCards);
  };

  const getVisibleCards = () => {
    if (currentIndex + cardsToShow <= totalCards) {
      return recommendedCards.slice(currentIndex, currentIndex + cardsToShow);
    } else {
      return [
        ...recommendedCards.slice(currentIndex, totalCards),
        ...recommendedCards.slice(0, (currentIndex + cardsToShow) % totalCards),
      ];
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="flex flex-col min-h-screen font-tajawal bg-white">
      <Header />

      <div className="relative w-full h-[500px]">
        <img
          src={headerImage}
          alt="header decoration"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-20 z-10 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
            <button
              onClick={handlePrev}
              className="bg-[#4E5BA1] text-white px-4 py-2 rounded-full shadow hover:bg-[#3c4891]"
            >
              ◀
            </button>

            <div className="flex gap-6 w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-xl shadow-xl px-6 py-4">
              {visibleCards.map((card, idx) => (
                <div key={idx} className="w-[340px] max-h-[360px]">
                  <Cards title={card.title} content={card.content} />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-[#4E5BA1] text-white px-4 py-2 rounded-full shadow hover:bg-[#3c4891]"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-12 px-8 pt-6 pb-28 max-w-8xl mx-auto bg-white">
        <aside className="w-60 flex-shrink-0 -mt-2 ml-40">
          <Menu />
        </aside>

        <main className="flex-1 mt-6">
          <CardsGrid />
        </main>
      </div>
    </div>
  );
}
