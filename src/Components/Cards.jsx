// Cards.jsx
import { useNavigate } from 'react-router-dom';

export default function Cards({ content, imgClassName = "w-full h-64 object-cover" }) {
  const navigate = useNavigate();

  const renderContent = () => {
    switch (content.type) {
      case 'image':
        return (
          <img
            src={content.value}
            alt=""
            className={`${imgClassName} rounded-md mb-4`}
          />
        );
      case 'text':
        return (
          <p className="text-gray-700 text-sm font-tajawal leading-relaxed">
            {content.value}
          </p>
        );
      case 'audio':
        return (
          <audio controls className="w-full mb-4">
            <source src={content.value} type="audio/mpeg" />
            المتصفح لا يدعم الصوت.
          </audio>
        );
      default:
        return <p className="font-tajawal">نوع غير مدعوم</p>;
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      {renderContent()}
      <button
        onClick={() => navigate('/khutab')}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-black py-2 px-4 rounded font-tajawal w-full"
      >
        المزيد 
      </button>
    </div>
  );
}
