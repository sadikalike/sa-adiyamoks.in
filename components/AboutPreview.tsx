import Section from './Section'
import Image from 'next/image'

export default function AboutPreview({ locale, dict }: { locale: string; dict: any }) {
  return (
    // ಇಲ್ಲಿ moreHref ಮತ್ತು moreLabel ತೆಗೆದುಹಾಕಲಾಗಿದೆ
    <Section title={dict.sections.about.title} bg="gradient">
      
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group">
          
          {/* ಅಲಂಕಾರಿಕ ಗ್ಲೋ ಎಫೆಕ್ಟ್‌ಗಳು */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            
            {/* ಎಡಭಾಗದಲ್ಲಿ ಲೋಗೋ */}
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-white to-slate-50 border border-white shadow-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 mx-auto md:mx-0">
               <div className="absolute inset-1 border-2 border-dashed border-emerald-300 rounded-full animate-[spin_15s_linear_infinite] opacity-60"></div>
               <div className="relative w-20 h-20 md:w-32 md:h-32">
                 <Image src="/logo.png" alt="MOKS Logo" fill className="object-contain" />
               </div>
            </div>

            {/* ಬಲಭಾಗದಲ್ಲಿ ವಿವರಣೆ */}
            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                {locale === 'kn' 
                  ? 'ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಹೃದಯಭಾಗದಲ್ಲಿ ಕನ್ನಡದ ವೈಭವವನ್ನು ಬೆಳೆಸುವ ವೇದಿಕೆ' 
                  : 'Nurturing Kannada Brilliance at the Heart of Jamia Sa\'adiya Arabia'}
              </h3>

              {/* ಸಂಪೂರ್ಣ ವಿವರಣೆ (ಎಲ್ಲಾ ಪ್ಯಾರಾಗ್ರಾಫ್‌ಗಳು) */}
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

                <p>
                  {locale === 'kn'
                    ? 'ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ, ನಾಯಕತ್ವದ ಗುಣಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಆದ್ಯತೆ ನೀಡುವ MOKS, ವಿವಿಧ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳು ಹಾಗೂ ಹಲವು ಅಭಿವೃದ್ಧಿಪರ ಯೋಜನೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಏಕತೆ ಮತ್ತು ವೈವಿಧ್ಯತೆಯೇ ನಮ್ಮ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಶಕ್ತಿಯಾಗಿದೆ. ವಿವಿಧ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಿ, ಸ್ನೇಹ, ಸಹಕಾರ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.'
                    : 'With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect.'}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}