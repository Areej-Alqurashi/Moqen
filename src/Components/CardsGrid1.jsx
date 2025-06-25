


import { useState } from "react";
import Cards from "./Cards";

export default function CardsGrid() {
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  const imageImage = "/image.jpg"; 

  const allCards = [
    {
      
      title: "عنوان الخطبة",
      content: { type: 'text', value: 'الأشهر الحرم، وكان من تعظيمهم لذلك أنهم لا يروعون فيها نفساً...' },
      date: new Date(2024, 11, 1),
    },
    {
      title: "صورة دعوية",
      content: { type: 'image', value: imageImage },
      date: new Date(2024, 9, 20),
    },
    {
      title: "تسجيل صوتي",
      content: { type: 'audio', value: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      date: new Date(2024, 8, 15),
    },
    ...Array(9).fill(0).map((_, i) => ({
      title: `خطبة ${i + 4}`,
      content: { type: 'text', value: '....' },
      date: new Date(2024, 8, i + 1),
    })),
  ];

  const sortedCards = [...allCards]
    .sort((a, b) => sortNewestFirst ? b.date - a.date : a.date - b.date)
    .slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative flex justify-end mb-8 text-right">
        <button
          onClick={() => setSortNewestFirst(!sortNewestFirst)}
          className="relative z-10 !bg-[#4E5BA1] px-3 text-sm font-semibold text-white hover:underline transition"
          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        >
          {sortNewestFirst ? "حسب الأقدم / حسب الأحدث" : "حسب الأحدث / حسب الأقدم"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sortedCards.map((card, index) => (
          <Cards key={index} title={card.title} content={card.content} />
        ))}
      </div>

      {visibleCount < allCards.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-[#4E5BA1] text-white px-6 py-2 rounded hover:bg-[#4E5BA1] transition"
          >
            تحميل المزيد
          </button>
        </div>
      )}
    </div>
  );
}
