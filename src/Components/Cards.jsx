import { useNavigate } from 'react-router-dom';

export default function Card({ id, title, content }) {
  const navigate = useNavigate();
  const wordLimit = 30;

  const handleCardClick = () => {
    if (id) {
      navigate(`/content/${id}`);
    }
  };

  const renderContent = () => {
    switch (content.type) {
      case 'image':
        return (
          <img
            src={content.value}
            alt={title}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
        );

      case 'text': {
        const words = content.value.split(' ');
        const textPreview =
          words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : content.value;

        return (
          <p className="text-gray-700 text-sm sm:text-base font-tajawal leading-relaxed text-right">
            {textPreview}
          </p>
        );
      }

      case 'audio':
        return (
          <audio controls className="w-full mb-3">
            <source src={content.value} type="audio/mpeg" />
            المتصفح لا يدعم تشغيل الصوت.
          </audio>
        );

      case 'video':
        return (
          <div className="aspect-video mb-3 rounded-md overflow-hidden">
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
        return (
          <p className="text-sm text-gray-600 font-tajawal text-right">
            نوع المحتوى غير مدعوم.
          </p>
        );
    }
  };

  return (
    <div
      onClick={handleCardClick}
      dir="rtl"
      className="cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-[#4E5BA1] hover:text-white transition duration-300 w-full font-tajawal"
    >
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-right border-b border-gray-300 pb-1">
        {title}
      </h3>

      {renderContent()}
    </div>
  );
}
