import { useNavigate } from 'react-router-dom';


export default function Cards({ title, content }) {
  const navigate = useNavigate();

  const wordLimit = 30;

  const renderContent = () => {
    switch (content.type) {
      case 'image':
        return (
          <img
            src={content.value}
            alt={title}
            className="w-full rounded-md mb-4 object-cover"
          />
        );
      case 'text': {
        const words = content.value.split(' ');
        if (words.length > wordLimit) {

          return (
            <>
              <p className="text-gray-700 text-sm font-tajawal leading-relaxed mb-2">
                {words.slice(0, wordLimit).join(' ')}...
              </p>
              <button
                className="text-[#4E5BA1] font-tajawal underline hover:opacity-80 transition"
                onClick={() => navigate("/khutab")}
              >
                المزيد
              </button>


            </>
          );
        }

        return (
          <p className="text-gray-700 text-sm font-tajawal leading-relaxed">
            {content.value}
          </p>
        );
      }
      case 'audio':
        return (
          <audio controls className="w-full mb-4">
            <source src={content.value} type="audio/mpeg" />
            المتصفح لا يدعم الصوت.
          </audio>
        );
      case 'video':
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
    <div
      className="cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-[#4E5BA1] transition duration-300 w-full"
      onClick={() => navigate('/khutab')}
    >
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-2 font-tajawal text-right">
        {title}
      </h3>
      <div className="line-clamp-4 text-sm sm:text-base text-gray-700 font-tajawal">
        {renderContent()}
      </div>
    </div>
  );
}
