import Section from './Section'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview({ locale, dict }: { locale: string; dict: any }) {
  return (
    <Section title={dict.sections.about.title} bg="gradient">
      
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          {/* Decorative glow effects (static) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            
            {/* Logo */}
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-white to-slate-50 border border-white shadow-xl flex items-center justify-center relative overflow-hidden mx-auto md:mx-0">
               <div className="relative w-20 h-20 md:w-32 md:h-32">
                 <Image src="/logo.png" alt="MOKS Logo" fill className="object-contain" />
               </div>
            </div>

            {/* Description */}
            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                {locale === 'kn' 
                  ? 'ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಹೃದಯಭಾಗದಲ್ಲಿ ಕನ್ನಡದ ವೈಭವವನ್ನು ಬೆಳೆಸುವ ವೇದಿಕೆ' 
                  : 'Nurturing Kannada Brilliance at the Heart of Jamia Sa\'adiya Arabia'}
              </h3>

              <div className="text-slate-700 text-sm md:text-base leading-relaxed text-justify space-y-4">
                <p>
                  {locale === 'kn'
                    ? 'MOKS – ಮಿಸ್ಬಾಹುಸ್ಸುಆದಾ ಆರ್ಗನೈಸೇಶನ್ ಆಫ್ ಸಅದಿಯ್ಯಾ ಕನ್ನಡ ಸ್ಟೂಡೆಂಟ್ಸ್ (Misbahussuada Organization of Sa\'adiya Kannada Students) ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಪ್ರತಿಷ್ಠಿತ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಘಟನೆಯಾಗಿದೆ. ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾದ ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾ ಹಲವು ತಲೆಮಾರುಗಳಿಗೆ ಜ್ಞಾನ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ಮಹತ್ವದ ವಿದ್ಯಾಕೇಂದ್ರವಾಗಿದೆ.'
                    : 'MOKS – Misbahussuada Organization of Sa\'adiya Kannada Students is a vibrant organization functioning within the prestigious campus of Jamia Sa\'adiya Arabia. As one of the prominent Islamic educational institutions in South India, Jamia Sa\'adiya Arabia has been a centre of knowledge and enlightenment for generations.'}
                </p>

                <p>
                  {locale === 'kn'
                    ? 'ತಾಜುಲ್ ಉಲಮಾ ಮತ್ತು ನೂರುಲ್ ಉಲಮಾ ಅವರ ದೂರದೃಷ್ಟಿ ಹಾಗೂ ಕನ್ನಡ ಭಾಷೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವ ಮಹತ್ತರ ಆಶಯದೊಂದಿಗೆ MOKS ಸ್ಥಾಪನೆಯಾಯಿತು. ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಜ್ಞಾನ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನಕ್ಕೆ ಪೂರಕವಾದ ವೇದಿಕೆಯಾಗಿ ಸಂಸ್ಥೆಯು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ.'
                    : 'Founded through the vision and inspiration of Thajul Ulama and Noorul Ulama, MOKS reflects their commitment to preserving and promoting the Kannada language, culture and traditions. It provides a supportive platform for Kannada students, encouraging their overall development while celebrating their cultural identity.'}
                </p>

                <p className="hidden md:block">
                  {locale === 'kn'
                    ? 'ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ, ನಾಯಕತ್ವದ ಗುಣಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಆದ್ಯತೆ ನೀಡುವ MOKS, ವಿವಿಧ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳು ಹಾಗೂ ಹಲವು ಅಭಿವೃದ್ಧಿಪರ ಯೋಜನೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಏಕತೆ ಮತ್ತು ವೈವಿಧ್ಯತೆಯೇ ನಮ್ಮ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಶಕ್ತಿಯಾಗಿದೆ. ವಿವಿಧ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಿ, ಸ್ನೇಹ, ಸಹಕಾರ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.'
                    : 'With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect.'}
                </p>
              </div>

              {/* Read More Button */}
              <div className="mt-8">
                <Link 
                  href={`/${locale}/about`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white font-bold px-6 py-3 rounded-full transition-colors duration-300 shadow-sm"
                >
                  {locale === 'kn' ? 'ಇನ್ನಷ್ಟು ಓದಿ' : 'Read More'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}