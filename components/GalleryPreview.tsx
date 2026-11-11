import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPreview({ locale, dict }: { locale: string; dict: any }) {
  
  const galleryItems = [
    {
      image: '/kkustha.png',
      titleKn: 'ಅಸ್ಸಅದ ಸುವನೀರ್ ಪೋಸ್ಟರ್ ಬಿಡುಗಡೆ',
      titleEn: 'Assaad Souvenir Poster Release',
      descKn: 'ಜಾಮಿಯ ಸಅದಿಯ 55ನೇ ವಾರ್ಷಿಕ ಸಮ್ಮೇಳನದ ಪ್ರಯುಕ್ತ ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆಯು ಹೊರತರಲಿರುವ ಅಸ್ಸಆದ ಸುವನೀರ್ ಸಮಿತಿ ಪೋಸ್ಟರ್ ಬಿಡುಗಡೆಗೊಳಿಸಲಾಯಿತು.',
      descEn: 'On the occasion of the 55th Annual Conference of Jamia Sa-adiya, the Karnataka Students Organisation released the poster.'
    },
    {
      image: '/shafiustha.png',
      titleKn: 'MUS ರಾಜ್ಯ ನಾಯಕರ ಭೇಟಿ',
      titleEn: 'Visit of MUS State Leader',
      descKn: 'ರಾಜ್ಯ ವಕ್ಸ್ ಮಂಡಳಿಯ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ ಆಯ್ಕೆಯಾದ ಶಾಫಿ ಸಅದಿ ಉಸ್ತಾದರಿಗೆ ಸನ್ಮಾನ. ಅವರು MOKS ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ 30 ವರ್ಷದ ಸಂಭ್ರಮದ ಕುರಿತು ಸಲಹೆ ನೀಡಿದರು.',
      descEn: 'Felicitation of Ustad Shafi Saadi, elected as Vice President of the State Waqf Board. He visited the MOKS office and shared his experiences.'
    },
    {
      image: '/police.png',
      titleKn: 'ಸಂತೋಷ ಹಂಚಿದ ವಿದ್ಯಾರ್ಥಿಗಳು',
      titleEn: 'Sharing Happiness Campaign',
      descKn: 'ಜಾಮಿಯಾ ಸಅದಿಯಾದಲ್ಲಿ ನಡೆಯಲಿರುವ ಸಮ್ಮೇಳನ ಪ್ರಯುಕ್ತ MOKS ವಿದ್ಯಾರ್ಥಿಗಳು "ಶೇರಿಂಗ್ ಹ್ಯಾಪಿನೆಸ್" ಎಂಬ ಶೀರ್ಷಿಕೆಯಡಿ ಸಿಹಿತಿಂಡಿಗಳನ್ನು ವಿತರಿಸಿ ಪ್ರಚಾರಯಾತ್ರೆ ಕೈಗೊಂಡರು.',
      descEn: 'Ahead of the upcoming conference, MOKS students conducted a campaign titled "Sharing Happiness," distributing sweets and receiving great appreciation.'
    },
    {
      image: '/ut.png',
      titleKn: 'ಕರ್ನಾಟಕ ವಿಧಾನಸಭಾ ಅಧ್ಯಕ್ಷರ ಸನ್ಮಾನ',
      titleEn: 'Felicitation of Karnataka Assembly Speaker',
      descKn: 'ಜಾಮಿಅಃ ಸಅದಿಯಾ ಅರಬಿಯಾ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ MOKS ವತಿಯಿಂದ ಕರ್ನಾಟಕ ವಿಧಾನಸಭಾ ಅಧ್ಯಕ್ಷರೂ, ಕರ್ನಾಟಕದ ನೆಚ್ಚಿನ ರಾಜಕಾರಣಿ ಜನಾಬ್ ಯು.ಟಿ ಖಾದರ್ ಇವರನ್ನು ಸನ್ಮಾನಿಸಲಾಯಿತು.',
      descEn: 'The Karnataka Students Organisation (MOKS) of Jamia Sa\'adiya Arabia felicitated Janab U.T. Khader, Speaker of the Karnataka Legislative Assembly and a beloved politician of Karnataka.'
    }
  ]

  return (
    // ಇಲ್ಲಿ bg-white ಮತ್ತು ಸ್ವಚ್ಛವಾದ ಹಿನ್ನೆಲೆ ಇದೆ
    <section className="relative w-full py-16 bg-white overflow-hidden">
      
      <div className="relative z-10">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {dict.sections.gallery.title}
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Sliding Container */}
        <div className="relative w-full overflow-hidden">
          {/* ❌ ಇಲ್ಲಿದ್ದ Gradient Masks (ಬಿಳಿ ಶೇಡ್) ತೆಗೆದುಹಾಕಲಾಗಿದೆ */}

          <div className="flex w-max animate-marquee gap-6 px-6 py-4">
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div 
                key={index} 
                // 💡 ಇಲ್ಲಿ ಕಾರ್ಡ್‌ಗಳನ್ನು ಆಧುನಿಕವಾಗಿ (Modern) ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ
                className="group relative w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                
                {/* Image Area - Modern padding and rounded corners */}
                <div className="relative w-full h-56 md:h-64 overflow-hidden m-2.5 rounded-xl bg-slate-50">
                  <Image
                    src={item.image}
                    alt={locale === 'kn' ? item.titleKn : item.titleEn}
                    fill
                    loading="lazy"
                    // Hover ಮಾಡಿದಾಗ ಇಮೇಜ್ ಸ್ಮೂತ್ ಆಗಿ ಜೂಮ್ ಆಗುತ್ತದೆ
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content Box below Image */}
                <div className="px-5 pb-6 pt-1 flex-grow flex flex-col">
                  <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-2 leading-tight line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {locale === 'kn' ? item.titleKn : item.titleEn}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {locale === 'kn' ? item.descKn : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center w-full mt-12">
          <Link
            href={`/${locale}/gallery`}
            className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30"
          >
            {locale === 'kn' ? 'ಎಲ್ಲಾ ಚಿತ್ರಗಳನ್ನು ನೋಡಿ' : 'View All Photos'}
            <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}