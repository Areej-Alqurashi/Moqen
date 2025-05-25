import { Link } from "react-router-dom";

// AudioTable.jsx
export default function AudioTable() {
  return (
    <div className=" w-60 space-y-9 mt-8  px-4 sm:px-6 ml-20" dir="rtl">

      <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full sm:w-fit mt-20">
        <Link
          to="/main"
          className="font-tajawal text-2xl font-semibold mb-4 !text-[#E2A03F] hover:text-[#c38f33]  block">
          <h3 className="text-right font-tajawal text-lg mb-2" style={{ color: '#E2A03F' }}>سورة الفاتحه ‹ </h3></Link>
        <audio controls className="w-full sm:w-64 h-8">
          <source src="/path/to/audio.mp3" type="audio/mpeg" />
          المتصفح لا يدعم الصوت.
        </audio>
      </div>


      <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full sm:w-fit">
        <Link
          to="/Main"
          className="font-tajawal text-2xl font-semibold mb-4 !text-[#E2A03F] hover:text-[#c38f33]  block">
          <h3 className="text-right font-tajawal text-lg mb-2 " style={{ color: '#E2A03F' }}> اواخر سورة البقرة ‹</h3>
        </Link>
        <audio controls className="w-full sm:w-64 h-8">
          <source src="/path/to/audio.mp3" type="audio/mpeg" />
          المتصفح لا يدعم الصوت.
        </audio>
      </div>
    </div>
  );
}
