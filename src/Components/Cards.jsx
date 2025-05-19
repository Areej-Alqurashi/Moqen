export default function Cards({ title, content }) {
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
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2 font-tajawal text-right">
        {title}
      </h3>
      {renderContent()}
    </div>
  );
}
