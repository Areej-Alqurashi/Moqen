// CardsGrid.jsx
import Cards from "./Cards";

export default function CardsGrid() {
  const Text1 = `
﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ﴾  
صدَّق رسول الله ﷺ بما أوحي إليه من ربه، وكذلك المؤمنون صدقوا بالله وملائكته وكتبه ورسله، لا يفرّقون بين أحد منهم في الإيمان، وقالوا: سمعنا وأطعنا، نرجو غفرانك يا ربنا، وإليك المصير.

﴿لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا﴾  
لا يحمّل الله الإنسان ما لا يستطيع تحمله، فله ما كسب من الخير، وعليه ما اكتسب من الإثم. وقالوا: ربنا لا تؤاخذنا إن نسينا أو أخطأنا، ولا تحمّل علينا إصرًا كما حُمِّل على من قبلنا، ولا تحمّلنا ما لا طاقة لنا به، واعفُ عنا واغفر لنا وارحمنا، أنت مولانا، فانصرنا على القوم الكافرين.
`;

  const Text2 = "(  من صور خدمة علماء المسلمين لدين الله تعالى : القاضي أبو يوسف رحمه الله نموذجاً) ";

  const Text3 = "قول اعوذ برب الناس ملك الناس اله الناس اله الناس من شر الوسواس الخناس الذي يوسوس في صدور الناس";

  return (
    <div className="w-full p-6 px-4 sm:px-6">
      <h2
        className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal"
        style={{ color: '#E2A03F', borderColor: '#555555' }}
      >
        ‹ مقالات
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">


        <Cards
          title="لماذا نصوم"
          content={{ type: 'text', value: Text2 }}
        />
        <Cards
          title="الالحاح في الدعاء"
          content={{ type: 'text', value: Text2 }}
        />
        <Cards
          title="اسم الله الواسع"
          content={{ type: 'text', value: Text2 }}
        />
      </div>

      <h2
        className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal mt-20"
        style={{ color: '#E2A03F', borderColor: '#555555' }}
      >
        ‹ تسجيلات قرآنية
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Cards
          title="سورة الناس"
          content={{ type: 'text', value: Text1 }}
        />
        <Cards
          title="صورة الفلق"
          content={{ type: 'text', value: Text3 }}
        />
        <Cards
          title="اواخر سورة البقرة"
          content={{ type: 'text', value: Text3 }}
        />
      </div>
    </div>
  );
}
