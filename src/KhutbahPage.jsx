import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Footer';

export default function KhutbahPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = ["/card1.jpg", "/card2.jpg", "/card3.jpg", "/card4.jpg"];

  const fullText = `قوله : آمن الرسول بما أنزل إليه من ربه والمؤمنون كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله وقالوا سمعنا وأطعنا غفرانك ربنا وإليك المصير
فيه مسائل : الأولى : قوله تعالى : آمن الرسول بما أنزل إليه من ربه روي عن الحسن ومجاهد والضحاك : أن هذه الآية كانت في قصة المعراج ، وهكذا روي في بعض الروايات عن ابن عباس ، وقال بعضهم : جميع القرآن نزل به جبريل عليه السلام على محمد صلى الله عليه وسلم إلا هذه الآية فإن النبي صلى الله عليه وسلم هو الذي سمع ليلة المعراج . وقال بعضهم : لم يكن ذلك في قصة المعراج ؛ لأن ليلة المعراج كانت بمكة وهذه السورة كلها مدنية ، فأما من قال إنها كانت ليلة المعراج قال : لما صعد النبي صلى الله عليه وسلم وبلغ في السماوات في مكان مرتفع ومعه جبريل حتى جاوز سدرة المنتهى فقال له جبريل : إني لم أجاوز هذا الموضع ولم يؤمر بالمجاوزة أحد هذا الموضع غيرك فجاوز النبي صلى الله عليه وسلم حتى بلغ الموضع الذي شاء الله ، فأشار إليه جبريل بأن سلم على ربك ، فقال النبي صلى الله عليه وسلم : التحيات لله والصلوات والطيبات . قال الله تعالى : السلام عليك أيها النبي ورحمة الله وبركاته ، فأراد النبي صلى الله عليه وسلم أن يكون لأمته حظ في السلام فقال : السلام علينا وعلى عباد الله الصالحين ، فقال جبريل وأهل السماوات كلهم : أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله . قال الله تعالى : آمن الرسول على معنى الشكر أي صدق الرسول بما أنزل إليه من ربه فأراد النبي صلى الله عليه وسلم أن يشارك أمته في الكرامة والفضيلة فقال : والمؤمنون كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله يعني يقولون آمنا بجميع الرسل ولا نكفر بأحد منهم ولا نفرق بينهم كما فرقت اليهود والنصارى ، فقال له ربه كيف قبولهم بآي الذي أنزلتها ؟ وهو قوله : إن تبدوا ما في أنفسكم فقال رسول الله صلى الله عليه وسلم ( قالوا سمعنا وأطعنا غفرانك ربنا وإليك المصير يعني المرجع . فقال الله تعالى عند ذلك : لا يكلف الله نفسا إلا وسعها يعني طاقتها ويقال : إلا دون طاقتها . لها ما كسبت من الخير وعليها ما اكتسبت من الشر ، فقال جبريل عند ذلك : سل تعطه ، فقال النبي صلى الله عليه وسلم : ربنا لا تؤاخذنا إن نسينا يعني إن جهلنا أو أخطأنا يعني إن تعمدنا ، ويقال : إن عملنا بالنسيان ، والخطأ . فقال له جبريل : قد أعطيت ذلك قد رفع عن أمتك الخطأ والنسيان . فسل شيئا آخر فقال : ربنا ولا تحمل علينا إصرا يعني ثقلا كما حملته على الذين من قبلنا وهو أنه حرم عليهم الطيبات بظلمهم ، وكانوا إذا أذنبوا بالليل وجدوا ذلك مكتوبا على بابهم ، وكانت الصلوات عليهم خمسين ، فخفف الله عن هذه الأمة وحط عنهم بعدما فرض خمسين صلاة . ثم قال : ربنا ولا تحملنا ما لا طاقة لنا به يقول : لا تثقلنا من العمل ما لا نطيق فتعذبنا . ويقال : ما تشق علينا ؛ لأنهم لو أمروا بخمسين صلاة لكانوا يطيقون ذلك ولكنه يشق عليهم ولا يطيقون الإدامة عليه واعف عنا من ذلك كله واغفر لنا وتجاوز عنا ، ويقال : واعف عنا من المسخ واغفر لنا من الخسف وارحمنا من القذف ؛ لأن الأمم الماضية بعضهم أصابهم المسخ وبعضهم أصابهم الخسف وبعضهم القذف ثم قال : أنت مولانا يعني : ولينا وحافظنا فانصرنا على القوم الكافرين فاستجيبت دعوته . وروي عن النبي صلى الله عليه وسلم أنه قال : نصرت بالرعب مسيرة شهر ويقال إن الغزاة : إذا خرجوا من ديارهم بالنية الخالصة وضربوا بالطبل وقع الرعب والهيبة في قلوب الكفار مسيرة شهر في شهر ، علموا بخروجهم أو لم يعلموا ، ثم إن النبي صلى الله عليه وسلم لما رجع أوحى الله هذه الآيات ، ليعلم أمته بذلك . ولهذه الآية تفسير آخر ، قال الزجاج : لما ذكر الله تعالى في هذه السورة فرض الصلاة والزكاة وبين أحكام الحج وحكم الحيض والطلاق والإيلاء وأقاصيص الأنبياء وبين حكم الربا ، ذكر تعظيمه سبحانه بقوله سبحانه وتعالى : لله ما في السماوات وما في الأرض ثم ذكر تصديق نبيه صلى الله عليه وسلم ثم ذكر تصديق المؤمنين بجميع ذلك فقال : آمن الرسول بما أنزل إليه من ربه أي صدق الرسول بجميع هذه الأشياء التي جرى ذكرها وكذلك المؤمنون كلهم صدقوا بالله وملائكته وكتبه ورسله .﴿آمَنَ الرَّسُولُ...`; // النص الكامل كما هو
  const wordLimit = 100;
  const [showFull, setShowFull] = useState(false);
  const words = fullText.trim().split(/\s+/);
  const shortText = words.slice(0, wordLimit).join(' ') + '...';
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-tajawal bg-white min-h-screen overflow-x-hidden">
      <Header onMenuToggle={() => setIsMenuOpen(true)} />

      {/* زر التصنيفات يظهر فقط في الجوال */}
      <div className="sm:hidden p-4 flex justify-end mt-3">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white bg-[#E2A03F] px-4 py-2 rounded"
        >
          التصنيفات
        </button>
      </div>

      {/* صورة الهيدر */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-6 mb-6">
        <img
          src="/header.png"
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى مع القائمة الجانبية للشاشات الكبيرة */}
      <div className="flex flex-col lg:flex-row-reverse gap-8 px-4 sm:px-8 pb-28 mb-1">
        {/* القائمة الجانبية تظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:block w-64 mt-0">
          <Menu />
        </div>

        {/* المحتوى الرئيسي */}
        <main className="flex-1">
          {/* العنوان */}
          <h1 className="text-lg sm:text-xl pb-1 text-[#E2A03F] mb-10 text-right mr-20 mt-20">
            خطبة الجمعة
          </h1>

          {/* الفيديو */}
          <motion.div
            className="w-full max-w-4xl aspect-video mx-auto mb-16"


          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/XKzM-4jPQpo"
              title="خطبة"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* النص والصوت */}
          <motion.div
            className="w-full max-w-4xl mx-auto bg-[url('/pattern.png')] bg-cover bg-opacity-10 rounded-lg p-6 shadow mb-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 p-6 rounded-lg text-gray-700 leading-loose whitespace-pre-line text-center text-sm">
              {showFull ? fullText : shortText}
              {words.length > wordLimit && (
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setShowFull(!showFull)}
                    className="text-blue-600 text-sm font-normal"
                    style={{ all: 'unset', cursor: 'pointer' }}
                  >
                    {showFull ? 'إظهار أقل' : 'إظهار المزيد'}
                  </button>
                </div>
              )}
            </div>
            <audio controls className="w-full max-w-md mx-auto mt-6 mb-6 block">
              <source src="" type="audio/mpeg" />
            </audio>
          </motion.div>

          {/* الصور */}
          <motion.div
            className="relative w-full max-w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg cursor-pointer overflow-hidden mx-auto mb-16"
            onClick={handleImageClick}


          >
            <img
              src={images[currentIndex]}
              alt={`صورة ${currentIndex + 1}`}
              className="object-cover w-full h-full rounded-lg select-none"
              draggable={false}
            />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-[#E2A03F]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      {/* القائمة الجانبية في الجوال عند الضغط على الزر */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 p-4 sm:hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg text-gray-700"></span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black-500 font-bold text-xl flex items-center justify-center"
              aria-label="إغلاق القائمة"
            >
              <svg
                className="w-6 h-6 stroke-black"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Menu />
        </div>
      )}

      <Footer />
    </div>
  );
}
