import Cards from "./Cards";
import imageImage from '../assets/image.jpg';

export default function CardsGrid() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2
        className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal"
        style={{ color: '#E2A03F', borderColor: '#555555' }}
      >
        الخطب
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <p className="text-right font-tajawal mb-2 text-lg">خطبة</p>
          <Cards content={{ type: 'text', value: 'الأشهر الحرم، وكان من تعظيمهم لذلك أنهم لا يروعون فيها نفساً، ولا يطلبون فيها ثأراً، حتى أن الرجل كان في الأشهر الحرم أو في البيت الحرام قاتل أبيه أو ابنه أو أخيه، فلا يثأر منه ولا يزعجه ولا يمد..' }} />
        </div>

        <div>
          <p className="text-right font-tajawal mb-2 text-lg">صورة دعوية</p>
          <Cards content={{ type: 'image', value: imageImage }} imgClassName="w-full h-64 object-cover" />
        </div>

        <div>
          <p className="text-right font-tajawal mb-2 text-lg">تسجيل صوتي</p>
          <Cards content={{ type: 'audio', value: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }} />
        </div>
      </div>

      {/* كرر نفس البنية لباقي الأقسام */}
    </div>
  );
}
