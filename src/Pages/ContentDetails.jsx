import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

export default function ContentDetails() {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://198.199.121.72/api/contents/${id}`)
      .then(res => res.json())
      .then(data => {
        setContent(data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setContent(null);
        setIsLoading(false);
      });
  }, [id]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-tajawal min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header onMenuToggle={() => setIsMenuOpen(true)} />

      {/* زر التصنيفات في الجوال فقط */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-black font-bold text-xl ml-auto"
          aria-label="إغلاق القائمة"
        >
          <svg
            className="w-6 h-6 stroke-black"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>



      <div className="relative w-full h-[200px] sm:h-[400px]">
        <img
          src="/header.png"
          alt="header decoration"
          className="w-400 h-full object-cover mb-4"
        />
      </div>
      <div className="px-4 sm:px-8 pb-28 mb-1 mt-10 max-w-4xl mx-auto">
        <main>
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <p className="text-gray-600 text-center">جاري تحميل المحتوى...</p>
            </div>
          ) : !content ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <p className="text-red-600 text-center">المحتوى غير موجود</p>
            </div>
          ) : (
            <>
              <h1 className="!text-[35px] sm:text-sm pb-1 text-[#E2A03F] mb-5 text-right mr-4 mt-10">
                {content.title}
              </h1>

              <motion.div
                className="w-full bg-[url('/pattern.png')] bg-cover bg-opacity-10 rounded-lg p-6 shadow mb-16"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div
                  className="bg-white/80 p-4 rounded-lg text-gray-800 leading-loose text-right text-sm"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </motion.div>
              {content.resources && content.resources.length > 0 && (
                <div className="space-y-6 mt-6">
                  {content.resources.map((res) => {
                    const fullUrl = res.is_url
                      ? res.resource_url
                      : `http://198.199.121.72${res.resource_url}`;

                    switch (res.resource_type_id) {
                      case 3: // صورة
                        return (
                          <div key={res.id} className="text-right">

                            <img
                              src={fullUrl}
                              alt={res.title}
                              className="w-full max-h-[400px] object-contain rounded-md shadow"

                            />

                          </div>
                        );


                      case 2: // فيديو
                        return (
                          <div key={res.id} className="text-right">
                            <p className="mb-2 font-medium text-gray-800">{res.title}</p>
                            <video
                              controls
                              className="w-full max-h-[500px] rounded-md shadow"
                            >
                              <source src={fullUrl} type="video/mp4" />
                              متصفحك لا يدعم عرض الفيديو.
                            </video>
                          </div>
                        );

                      case 1: // صوت
                        return (
                          <div key={res.id} className="text-right">
                            <p className="mb-2 font-medium text-gray-800">{res.title}</p>
                            <audio controls className="w-full">
                              <source src={fullUrl} type="audio/mpeg" />
                              المتصفح لا يدعم تشغيل الصوت.
                            </audio>
                          </div>
                        );

                      default:
                        return null;
                    }

                  })}
                </div>
              )}


            </>
          )}
        </main>
      </div>

      {/* القائمة الجانبية المنبثقة (في الجوال فقط) */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 p-4">

          {/* زر الإغلاق في الزاوية اليمنى العليا */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-black font-bold text-xl"
            aria-label="إغلاق القائمة"
          >
            <svg
              className="w-6 h-6 stroke-black"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* محتوى المنيو */}
          <div className="mt-12">
            <Menu />
          </div>
        </div>
      )}



      <Footer />
    </div>
  );
}
