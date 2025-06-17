import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ onMenuToggle }) {
  return (
    <header className="bg-[#4E5BA1] text-white shadow-md w-full fixed top-0 left-0 z-50 h-20 px-4 border-b-4 border-yellow-500 flex items-center justify-between">
      {/* الجهة اليمنى: الزر + اللوقو (في RTL الزر على اليسار فعليًا) */}
      <div className="flex items-center gap-4 rtl:flex-row-reverse">
        {/* زر القائمة – يظهر دائمًا */}
        <IconButton
          onClick={(e) => {
            onMenuToggle();
            e.currentTarget.blur();
          }}
          aria-label="فتح القائمة"
          size="large"
          disableRipple
          disableFocusRipple
          sx={{
            color: 'white',
            padding: '0px',
            mt: 2.5,
            mr: 0,
            ml: 4,
            transition: 'transform 0.1s, background-color 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
            '&:active': {
              transform: 'scale(0.85)',
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* شعار الموقع */}

      </div>

      {/* البحث */}
      
        <img src="/logo.png" alt="logo" className="w-24 h-auto  mt-5 ml-4" />

  
    </header>
  );
}
