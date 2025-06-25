import { useNavigate } from 'react-router-dom';

export default function SquerCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/khutab')}
      className="
        w-75
        px-6 py-4
        rounded-lg
        shadow-lg
        mt-10 mx-auto
        cursor-pointer
        flex justify-center items-center
        bg-[#E2A03F]
        transition
        duration-300
        ease-in-out
        hover:bg-[#c38f33]
        active:scale-95
        select-none
      "
    >
      <p className="text-white font-tajawal text-lg text-center flex items-center gap-2">
        ‹ بطائق فقهية
      </p>
    </div>
  );
}
