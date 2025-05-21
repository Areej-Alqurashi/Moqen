import Header from "./Components/Header";
import headerImage from './assets/header.png';
import Menu from "./Components/Menu";
import Cards from "./Components/Cards";
import CardsGrid from "./Components/CardsGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="pt-16 w-full">
        <img
          src={headerImage}
          alt="header decoration"
          className="w-full h-[250px] object-cover"
        />
        
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-row p-4 gap-6 flex-1">
        {/* منطقة الكروت - تاخذ العرض المتبقي */}


        <div className="flex-1">

          <CardsGrid />
        </div>

        {/* المنيو على اليمين بعرض ثابت */}
        <div className="w-64">
          <Menu />
        </div>
      </div>
    </div>
  );
}
