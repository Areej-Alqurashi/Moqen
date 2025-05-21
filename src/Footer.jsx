export default function Footer() {
  return (
    <footer className="w-full bg-[#4E5BA1] py-4 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm text-white text-right font-tajawal">
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
