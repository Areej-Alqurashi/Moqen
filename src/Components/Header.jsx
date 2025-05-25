import logo from '../assets/logo.png';
import headerImage from '../assets/header.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({ onMenuToggle }) {
  return (
    <header className="bg-[#4E5BA1] text-white shadow-md w-full fixed top-0 left-0 z-50 h-20 px-4 border-b-4 border-yellow-500 flex items-center justify-between">
      {/* الجهة اليمنى للجوال: زر القائمة + البحث */}
      <div className="flex items-center gap-4 sm:order-2 rtl:flex-row-reverse">
        {/* زر القائمة للجوال فقط */}
        <IconButton
          onClick={onMenuToggle}
          aria-label="فتح القائمة"
          size="large"
          sx={{
            color: 'white',
            padding: '12px',     // حجم الضغط
            display: { xs: 'inline-flex', sm: 'none' },
            mt: 2.5,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>




        {/* البحث */}
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

      {/* شعار الموقع */}
      <div className="flex items-center sm:order-1 rtl:flex-row-reverse">
        <img src={logo} alt="logo" className="w-24 h-auto" />
      </div>
    </header>
  );
}