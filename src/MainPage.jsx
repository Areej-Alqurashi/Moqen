import { useState } from "react";
import Header from './Components/Header';
import Menu from "./Components/Menu";
import CardsGrid from "./Components/CardsGrid";
import Cards from "./Components/Cards";
import headerImage from "./assets/header.png";

const recommendedCards = [
  {
    title: "موصى به ١",
    content: { type: "image", value: "https://via.placeholder.com/300x200?text=1" },
  },
  {
    title: "موصى به ٢",
    content: { type: "text", value: "هذا نص موصى به للتجربة وهو نص دعوي بسيط." },
  },
  {
    title: "موصى به ٣",
    content: { type: "audio", value: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  },
  {
    title: "موصى به ٤",
    content: { type: "image", value: "https://via.placeholder.com/300x200?text=4" },
  },
  {
    title: "موصى به ٥",
    content: { type: "text", value: "مثال آخر لتوصية نصية داخل البطاقة." },
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
    <div className="flex flex-col min-h-screen font-tajawal">
     
      <Header />

      <div className="pt-16 w-full relative">
        <img
          src={headerImage}
          alt="header decoration"
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-x-0 bottom-50 z-10 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="bg-[#4E5BA1] text-white px-4 py-2 rounded-full shadow hover:bg-[#3c4891]"
            >
              ◀
            </button>

            <div className="flex gap-4 w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-lg shadow-xl px-4 py-3 overflow-x-auto">
              {visibleCards.map((card, idx) => (
                <div key={idx} className="flex-shrink-0 w-[300px]">
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

      <div className="flex flex-row-reverse gap-6 px-4 py-28 flex-1 max-w-8xl mx-auto">
        <aside className="w-60">
          <Menu />
        </aside>

        <main className="flex-1">
          <CardsGrid />
        </main>
      </div>
    </div>
  );
}
