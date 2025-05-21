import logo from '../assets/logo.png';
import headerImage from '../assets/header.png';

export default function Header({ onMenuToggle }) {
  return (
    <>
      <div>
        {/* الهيدر */}
        <header className="bg-[#4E5BA1] text-white shadow-md w-full fixed top-0 left-0 z-50 h-20 flex items-center px-2 border-b-4 border-yellow-500 ">
          <div className="flex justify-between items-center w-full">
            {/* قسم اللوجو + زر التصنيفات */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse p-4">
              <img src={logo} alt="logo" className="w-24 h-auto" />

              {/* زر التصنيفات يظهر فقط في الشاشه الصغيرة */}
              <button
                onClick={onMenuToggle}
                className="sm:hidden text-[#130753] font-bold px-3 py-2 rounded mr-4 flex items-center justify-center"
                type="button"
                aria-label="فتح القائمة"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#130753"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>


              </button>


            </div>

            {/*  البحث */}
            <div className="relative">
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="text"
                placeholder="ابحث هنا"
                className="focus:outline-none w-40 h-8 text-white text-sm text-right placeholder:text-right bg-transparent pr-10"
              />
              <div className="h-0.5 w-40 bg-white mt-1 rounded-full" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
