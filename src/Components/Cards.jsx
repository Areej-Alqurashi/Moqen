import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cards({ title, content }) {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false); // لحالة النص

  const renderContent = () => {
    switch (content.type) {
      case "image":
        return (
          <>
            <img
              src={content.value}
              alt={title}
              className="w-60 h-auto rounded-lg mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setShowModal(true)}
            />

            {showModal && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={content.value}
                    alt={title}
                    className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
                  />
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-xl shadow-md hover:bg-gray-200"
                    aria-label="إغلاق"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </>
        );

      case "text":
        const fullText = content.value;
        const maxLength = 200;
        const shortText = fullText.length > maxLength ? fullText.slice(0, maxLength) + "..." : fullText;

        return (
          <div className="text-right font-tajawal text-gray-800 text-base leading-relaxed">
            <span className="mr-2">📖</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={expanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {expanded ? fullText : shortText}
              </motion.p>
            </AnimatePresence>

            {fullText.length > maxLength && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 mt-2 inline-block underline text-sm"
              >
                {expanded ? "عرض أقل" : "عرض المزيد"}
              </button>
            )}
          </div>
        );

      case "audio":
        return (
          <audio controls className="w-full mb-4">
            <source src={content.value} type="audio/mpeg" />
            المتصفح لا يدعم الصوت.
          </audio>
        );

      case "video":
        return (
          <div className="aspect-video mb-4 rounded-md overflow-hidden">
            <iframe
              src={content.value}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        );

      default:
        return <p className="font-tajawal">نوع غير مدعوم</p>;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2 font-tajawal text-right">
        {title}
      </h3>
      {renderContent()}
    </div>
  );
}
