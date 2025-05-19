import Cards from "./Cards";
import imageImage from '../assets/image.jpg'
export default function CardsGrid() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2
                className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal"
                style={{ color: '#E2A03F', borderColor: '#555555' }}
            >
                الخطب
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                <Cards
                    title="خطبة"
                    content={{ type: 'text', value: 'الأشهر الحرم، وكان من تعظيمهم لذلك أنهم لا يروعون فيها نفساً، ولا يطلبون فيها ثأراً، حتى أن الرجل كان في الأشهر الحرم أو في البيت الحرام قاتل أبيه أو ابنه أو أخيه، فلا يثأر منه ولا يزعجه ولا يمد..' }}
                />
                <Cards
                    title="صورة دعوية"
                    content={{ type: 'image', value: 'https://via.placeholder.com/400x300.png?text=دعوية' }}
                />
                <Cards
                    title="تسجيل صوتي"
                    content={{ type: 'audio', value: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }}
                />
                <div className="w-5 h-20"></div>


            </div>
            <h2
                className="text-2xl font-bold mb-4 text-right border-b-2 pb-1"
                style={{ color: '#E2A03F', borderColor: '#555555' }}
            >
                الخطب
            </h2>
            <div className="w-5 h-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                <Cards
                    title="نص دعوي"
                    content={{ type: 'text', value: 'هذا نص قصير داخل البطاقة الدعوية.' }}
                />
                <Cards
                    title="صورة دعوية"
                    content={{ type: 'image', value: 'https://via.placeholder.com/400x300.png?text=دعوية' }}
                />
                <Cards
                    title="تسجيل صوتي"
                    content={{ type: 'audio', value: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }}
                />
                <div className="w-5 h-20"></div>
            </div>



            <h2
                className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal"
                style={{ color: '#E2A03F', borderColor: '555555' }}
            >
                الخطب
            </h2>
            <div className="w-5 h-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Cards
                    title="نص دعوي"
                    content={{ type: 'text', value: 'هذا نص قصير داخل البطاقة الدعوية.' }}
                />
                <Cards
                    title="صورة دعوية"
                    content={{ type: 'image', value: 'https://via.placeholder.com/400x300.png?text=دعوية' }}
                />
                <Cards
                    title="تسجيل صوتي"
                    content={{ type: 'audio', value: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }}
                />

            </div>
        </div>
    );
}