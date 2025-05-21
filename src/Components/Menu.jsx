import logo from '../assets/logo.png'

export default function Menu() {



  return (
    <div
      className="p-6 rounded-xl shadow-lg h-[650px] flex flex-col items-center"
      style={{ backgroundColor: '#EFF5FD' }}
    >
      <div className="flex items-center space-x-2 rtl:space-x-reverse p-4 ">
        <div className="border-b-4 border-[#130753] w-60 mb-2 ml-20">
          <h2
            className="text-2xl font-extrabold font-tajawal ml-10"
            style={{ color: '#130753' }}
          >
            التصنيفات
          </h2>
        </div>



        {/* اللوجو على اليمين */}
        <img src={logo} alt="logo" className="w-30 h-auto " />
      </div>


      <ul className="space-y-4 text-right font-tajawal flex-grow w-full ">
        {[
          "خطب",
          "دروس علمية",
          "بطائق دعوية",
          "الكتب",
          "نوادر مفيدة",
          "تسجيلات قرانية",
          "مسائل فقهية",
          "اعلام",
        ].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg transition-colors duration-300"
              style={{ color: '#130753' }}
              onClick={(e) => {
                e.preventDefault();
                const siblings = e.currentTarget.parentElement.parentElement.querySelectorAll('a');
                siblings.forEach(link => {
                  link.style.color = '#130753';
                });
                e.currentTarget.style.color = '#E2A03F';
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
