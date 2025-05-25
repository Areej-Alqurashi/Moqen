import Header from './Components/Header';
import Menu from './Components/Menu';

export default function KhutbahPage() {
  return (
    <div className="font-tajawal bg-white min-h-screen overflow-x-hidden">
      <Header />

      <div className="w-full h-[500px] mt-20">
        <img
          src="/header.png"
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row-reverse gap-12 pt-6 pb-28 px-8 bg-white w-full">
        <aside className="w-60 flex-shrink-0 -mt-2 ml-40">
          <Menu />
        </aside>

        <main className="flex-1 mt-6">
          <h1 className="text-3xl font-bold text-[#130753] mb-6 text-right">عنوان الخطبة</h1>

          <div className="w-full aspect-video mb-6">
            <iframe
              className="w-5xl h-5xl rounded-lg"
              src="https://www.youtube.com/embed/XKzM-4jPQpo"
              title="خطبة"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <audio controls className="w-5xl mb-6">
            <source src="" type="audio/mpeg" />
          </audio>

          <p className="text-right leading-relaxed text-gray-700 mb-8">
            الأشهر الحرم، وكان من تعظيمهم لذلك أنهم لا يروعون فيها نفساً، ولا يطلبون فيها ثأراً، حتى أن الرجل كان في الأشهر الحرم أو في البيت الحرام قاتل أبيه أو ابنه أو أخيه، فلا يثأر منه ولا يزعجه ولا يمد.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((img) => (
              <div
                key={img}
                className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500"
              >
                صورة {img}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
