import Section from './Section'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview({ locale, dict }: { locale: string; dict: any }) {
  return (
    <Section title={dict.sections.about.title} bg="gradient">
      
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md border border-white/60 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          {/* Static glow effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-2xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-2xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            
            {/* Logo — round, spinning ring */}
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-white to-slate-50 border border-white shadow-xl flex items-center justify-center relative overflow-hidden mx-auto md:mx-0">
              <div className="absolute inset-1 border-2 border-dashed border-emerald-300 rounded-full animate-[spin_15s_linear_infinite] opacity-60 pointer-events-none"></div>
              <div className="relative w-20 h-20 md:w-32 md:h-32">
                <Image src="/logo.png" alt="MOKS Logo" fill className="object-contain" />
              </div>
            </div>

            {/* Text — MOKS preview */}
            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                {locale === 'kn' 
                  ? 'MOKS – ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಾಹಿತ್ಯಿಕ ವೇದಿಕೆ' 
                  : 'MOKS – An Academic and Literary Platform for Kannada Students'}
              </h3>

              <div className="text-slate-700 text-sm md:text-base leading-relaxed text-justify space-y-4">
                <p>
                  {locale === 'kn'
                    ? 'ಶಿಕ್ಷಣ ರಂಗದಲ್ಲಿ ತನ್ನದೇ ಆದ ಕ್ರಾಂತಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತಿರುವ ಜಾಮಿಯಾ ಸಅದಿಯ್ಯ ಶರೀಅತ್ ಕಾಲೇಜಿನ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಒಕ್ಕೂಟವಾದ "ಮಿಸಭಾಹುಸ್ಸುಅದಾ ಕನ್ನಡ ವಿಧ್ಯಾರ್ಥಿ ಸಂಘಟನೆ" (MOKS), ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಜತೆಗೆ ಸುನ್ನತ್ ಜಮಾಅತ್ತಿನ ಆದರ್ಶಗಳನ್ನು ಪಸರಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತಿರುವ ಪ್ರತಿಷ್ಠಿತ ಸಂಸ್ಥೆಯಾಗಿದೆ.'
                    : 'The "Misbahussuada Kannada Students Organisation" (MOKS), a federation of Kannada students of Jamia Sa\'adiya Sharia College, which is creating its own revolution in the field of education, is a prestigious institution playing a major role in spreading the ideals of Sunnat Jama\'at along with Kannada language and literature.'}
                </p>

                <p>
                  {locale === 'kn'
                    ? 'ಮಲಯಾಳಂ, ಉರ್ದು ಮತ್ತು ಅರೇಬಿಕ್ ಭಾಷೆಗಳ ಪ್ರಾಬಲ್ಯವಿರುವ ಈ ವಿದ್ಯಾಸಂಸ್ಥೆಯಲ್ಲಿ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಶೈಕ್ಷಣಿಕ ಹಾಗೂ ಸಾಹಿತ್ಯಿಕ ಬೆಳವಣಿಗೆಯ ಕೊರತೆಯನ್ನು ನೀಗಿಸಲು, 1996ರಲ್ಲಿ ಈ ಸಂಘಟನೆಯು ಉದಯಿಸಿತು. ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಅಂತರ್ಲೀನವಾಗಿರುವ ಸೃಜನಶೀಲತೆಗೆ ಜೀವ ತುಂಬಿ, ಇಸ್ಲಾಮಿನ ಸುಂದರ ಆಶಯಗಳನ್ನು ಜನತೆಯ ಮನಸ್ಸಿನಲ್ಲಿ ಪಡಿಮೂಡಿಸುವುದು ಇದರ ಮುಖ್ಯ ಧ್ಯೇಯವಾಗಿದೆ.'
                    : 'To fill the lack of academic and literary development of Kannada students in this educational institution dominated by Malayalam, Urdu and Arabic languages, this organization arose in 1996. Its main objective is to breathe life into the creativity inherent in students and to instill the beautiful ideals of Islam in the minds of the people.'}
                </p>

                <p className="hidden md:block">
                  {locale === 'kn'
                    ? 'ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಭಾಷಣ ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯಿಕ ಅಭಿರುಚಿಯನ್ನು ಬೆಳೆಸಲು ವಾರಕ್ಕೊಮ್ಮೆ ಭಾಷಣ ಪರಿಶೀಲನೆ, ತಿಂಗಳಿಗೊಮ್ಮೆ ಸಂಯುಕ್ತ ವೇದಿಕೆ ಮತ್ತು ಬೃಹತ್ ವಾಚನಾಲಯವು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ. ಇದೀಗ MOKS ಸಂಘಟನೆ Herencia ಎಂಬ ನಾಮದಿಂದ 30 ನೇ ವಾರ್ಷಿಕೋತ್ಸವದ ಸಂಭ್ರಮಕ್ಕೆ ಬಂದು ತಲುಪಿದೆ.'
                    : 'To develop oratory skills and literary taste among students, weekly speech reviews, monthly joint forums and a large reading library are functioning. The organization MOKS has now reached the celebration of its 30th anniversary under the name Herencia.'}
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