import Image from 'next/image'

export default function QuoteScrollSection({ locale }: { locale: string }) {
  const descText = locale === 'kn'
    ? "ಓದು-ಬರಹ ಉಸ್ತಾದರ ಹೋಬಿ. 1951ರಲ್ಲಿ ಪ್ರಕಟಗೊಂಡ ಮೊದಲ ಲೇಖನದಿಂದ ಈ ತನಕ ಅದೆಷ್ಟೋ ಸಾವಿರ ಲೇಖನಗಳನ್ನು ವಿವಿಧ ನಿಯತ ಕಾಲಿಕಗಳಲ್ಲಿ ಬರೆದಿದ್ದಾರೆ. 1951ರಲ್ಲಿ ಹೊರತಂದ 'ಅಲ್ ಕಿತಾಬುಲ್ ಅವ್ವಲು ಫೀ ತಾರೀಖಿ ರ್ರಸೂಲ್' ನಿಂದ ಹಿಡಿದು ಅರಬಿ, ಅರಬಿ ಮಲಯಾಳಂ, ಮಲಯಾಳಂ ಭಾಷೆಗಳಲ್ಲಿ ಅಮೂಲ್ಯವಾದ ಹಲವಾರು ಗ್ರಂಥಗಳನ್ನು ರಚಿಸಿದರು. 'ಇಸ್ಲಾಮೀ ಚಿಂತನೆ: ಸತ್ಯ ಮತ್ತು ಮಿಥ್ಯ', 'ಮೌದೂದಿ ಖಂಡನೆ', 'ತ ಬ್ಲೀಗ್ ಜಮಾಅತ್' ಮೊದಲಾದವು ನೂತನವಾದಿಗಳ ನಿಜಬಣ್ಣವನ್ನು ಸಮಾಜಕ್ಕೆ ತೋರಿಸಿಕೊಟ್ಟರೆ, 'ಮುಸ್ಲಿಮರು ಮತ್ತು ಶರೀಆತ್ ನಿಮಯಗಳು', 'ಸೋಶಲಿಸಂ, ಕಮ್ಯೂನಿಸಂ, ಇಸ್ಲಾಂ' ಮೊದಲಾದವು ಜಾಗತಿಕ ಇಸ್ಲಾಮೀ ಬೆಳವಣಿಗೆಗಳ ಬಗ್ಗೆಗಿನ ಅವರ ಅಗಾಧ ಪಾಂಡಿತ್ಯಕ್ಕೆ ಸಾಕ್ಷಿ ನಿಲ್ಲುತ್ತದೆ. ಚರಿತ್ರೆ, ಆಧ್ಯಾತ್ಮಿಕ, ವೈಚಾರಿಕ ಕೃತಿಗಳು ಧಾರಾಳ ಇವೆ. ಈ ಪೈಕಿ 'ತಬ್ಲೀಗಿನ ಅಂತರ್ಯ', 'ಜಮಾಅತೇ ಇಸ್ಲಾಮೀ', 'ಸಮಸ್ತ: ನೆನಪಿನ ಪುಟಗಳಲ್ಲಿ', 'ಅಲ್ಲಾಹನ ಔಲಿಯಾಗಳು' ಪ್ರಕಟಗೊಂಡಿದ್ದು, ಅವರ ಬೃಹತ್ ಪ್ರವಾದಿ ಚರಿತೆ ಕೃತಿ 'ಲೋಕಾನುಗ್ರಹಿ'ಯು ಕನ್ನಡೀಕರಣಗೊಂಡು ಅಲ್ ಅನ್ಸಾರ್‌ನಲ್ಲಿ ಪ್ರಕಟವಾಗಿದೆ. ಉಸ್ತಾದರ ಕೃತಿಗಳು ಆಳಅಧ್ಯಯನದಿಂದ ರೂಪುಗೊಂಡಿರುವುದರಿಂದ ರೆಫರೆನ್ಸ್ ಗ್ರಂಥವಾಗಿಯೂ ಬಳಕೆಗೆ ಬರುತ್ತವೆ. ಚಿಂತನಾರ್ಹ ವಿಷಯಗಳಿಂದ ಜ್ಞಾನ ಸಮೃದ್ಧವಾಗಿ ಹೊರಬರುವುದು ಉಸ್ತಾದರ ಕೃತಿಗಳ ಹಿರಿಮೆ."
    : "Writing was the passion of M.A. Ustad. From his first article published in 1951 until now, he has written thousands of articles in various periodicals. Starting from 'Al-Kitabul Awwal Fi Tarikhi Rasool' published in 1951, he authored many valuable books in Arabic, Arabic-Malayalam, and Malayalam. While books like 'Islamic Thought: Truth and Falsehood', 'Refutation of Maududi', and 'Tableegh Jamaat' exposed the true colors of modernists to society, books like 'Muslims and Sharia Laws' and 'Socialism, Communism, Islam' stand as witnesses to his immense scholarship on global Islamic developments. There are plenty of historical, spiritual, and intellectual works. Among these, 'The Inner Meaning of Tableegh', 'Jamaat-e-Islami', 'Samastha: In Memory Pages', and 'Friends of Allah' have been published, and his massive biography of the Prophet, 'Lokanugrahi', was translated into Kannada and published in Al Ansar. Since Ustad's works are formed from deep study, they are also used as reference books. The hallmark of Ustad's works is that they emerge rich in knowledge with thought-provoking subjects."
    // (English translation is provided for reference, you can replace it with a shorter version if needed)

  return (
    <section className="relative py-24 bg-[#0a192f] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center justify-center mb-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md">
            {locale === 'kn' ? 'ಗ್ರಂಥಾಲಯ' : 'Library'}
          </span>
        </div>

        <div className="relative text-center mb-16 animate-fade-in-up max-w-4xl mx-auto">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[180px] text-white/5 font-serif leading-none select-none pointer-events-none">
            "
          </span>
          
          <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-emerald-300 leading-snug md:leading-tight drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] tracking-tight">
            {locale === 'kn' 
              ? 'ಹುತಾತ್ಮನ ರಕ್ತಕ್ಕಿಂತ ವಿದ್ವಾಂಸನ ಲೇಖನಿಯ ಮಸಿ ಮಹತ್ವದಾಯಕ' 
              : 'The ink of a scholar\'s pen is more sacred than the blood of a martyr'}
          </h2>

          <p className="mt-4 text-slate-400 text-sm md:text-base font-medium tracking-wider">
            {locale === 'kn' ? '(ಹದೀಸ್)' : '(Hadith)'}
          </p>
          
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative w-full max-w-[400px] md:max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-white/10 bg-slate-800">
              <Image src="/ma.png" alt="Jamia Sa'adiya Founder" fill loading="lazy" className="object-cover object-top transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40"></div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h4 className="text-3xl md:text-5xl font-black text-white mb-6">
              M.A. Ustad
            </h4>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify mb-8">
              {descText}
            </p>

            {/* <div className="border-l-4 border-emerald-500 pl-6 py-2">
              <p className="text-white/90 text-lg md:text-2xl font-light italic">
                {locale === 'kn' 
                  ? '"ಮಕ್ಕಳೇ ಓದಿರೀ, ಎಲ್ಲಾ ಪುಸ್ತಕ ಓದಿ, ಜ್ಞಾನ ಬೆಳೆಸಿ."' 
                  : '"Children, read! Read all the books, cultivate knowledge."'}
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}