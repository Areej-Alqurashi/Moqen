// AudioTable.jsx
export default function AudioTable() {
  return (
    <div className="space-y-6 mt-8 mr-0 px-4 sm:px-6 ml-20" dir="rtl">
      {/* عنصر 1 */}
      <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full sm:w-fit mt-20">
        <h3 className="text-right font-tajawal text-lg mb-2 text-gray-800">سورة الفاتحه</h3>
        <audio controls className="w-full sm:w-64 h-8">
          <source src="/path/to/audio.mp3" type="audio/mpeg" />
          المتصفح لا يدعم الصوت.
        </audio>
      </div>

      {/* عنصر 2 */}
      <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full sm:w-fit">
        <h3 className="text-right font-tajawal text-lg mb-2 text-gray-800">اواخر سورة البقرة</h3>
        <audio controls className="w-full sm:w-64 h-8">
          <source src="/path/to/audio.mp3" type="audio/mpeg" />
          المتصفح لا يدعم الصوت.
        </audio>
      </div>
    </div>
  );
}
