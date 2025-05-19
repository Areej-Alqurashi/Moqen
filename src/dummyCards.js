export default function Cards({ title, content }) {
    const renderContent = () => {
      switch (content.type) {
        case 'image':
          return <img src={content.value} alt={title} className="w-full rounded-md mb-6" />;
        case 'text':
          return <p className="text-gray-700 text-sm">{content.value}</p>;
        case 'audio':
          return (
            <audio controls className="w-full mb-2">
              <source src={content.value} type="audio/mpeg" />
              المتصفح لا يدعم الصوت.
            </audio>
          );
        case 'video':
          return (
            <div className="aspect-video mb-2">
              <iframe
                src={content.value}
                className="w-full h-full rounded-md"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              ></iframe>
            </div>
          );
        default:
          return <p>نوع غير مدعوم</p>;
      }
    };
  
    return (
      <div className="p-0 m-0 w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-black pb-1 text-right">
          {title}
        </h3>
        {renderContent()}
      </div>
    );
  }
  