import logo from '../assets/logo.png'

export default function Menu() {



  return (
    <div
      className="p-6 rounded-xl shadow-lg h-[900px] flex flex-col items-center"
      style={{ backgroundColor: '#EFF5FD' }}
    >
      <div className="w-full flex justify-end mb-7">
        <img
          src={logo}
          alt="Logo"
          className="w-35 h-30 object-contain"
        />
      </div>

      <h2
        className="text-2xl font-bold mb-6 border-b-4 pb-3 text-center font-tajawal w-full"
        style={{ color: '#130753', borderColor: '#130753' }}
      >
        التصنيفات
      </h2>
      <ul className="space-y-4 text-right font-tajawal flex-grow w-full">
        {[
          "الخطب",
          "الدروس",
          "المحاضرات",
          "الكتب",
          "المقالات",
          "الصوتيات",
          "الفيديوهات",
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
