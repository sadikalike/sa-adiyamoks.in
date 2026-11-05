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
    }
  ]

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      
      {/* ಮೇಲ್ಭಾಗದ ಶೀರ್ಷಿಕೆ (Gallery & All Photos) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {dict.sections.gallery.title}
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full"></div>
          </div>
          
          {dict.sections.gallery.more && (
            <Link 
              href={`/${locale}/gallery`} 
              className="inline-flex items-center text-emerald-600 font-bold bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-full transition-all duration-300 group shadow-sm w-fit"
            >
              {dict.sections.gallery.more} 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
        </div>
      </div>

      {/* Sliding Container */}
      <div className="relative w-full overflow-hidden">
        
        <div className="flex w-max animate-marquee gap-6 px-6 hover:[animation-play-state:paused]">
          
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div 
              key={index} 
              // 
              // ಹಿಂದಿನಂತೆಯೇ ಸಣ್ಣ ಗಾತ್ರದ ಕಾರ್ಡ್, ಆದರೆ ಇಲ್ಲಿ ವಿವರಣೆಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತವೆ.
              //
              className="relative w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white border border-slate-100"
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={locale === 'kn' ? item.titleKn : item.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content Box below Image (ಹಿಂದಿನಂತೆ) */}
              <div className="p-5 md:p-6 bg-white">
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

      {/* ಕೆಳಭಾಗದ ಬಟನ್ */}
      <div className="flex justify-center w-full mt-12">
        <Link
          href={`/${locale}/gallery`}
          className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
        >
          {locale === 'kn' ? 'ಎಲ್ಲಾ ಚಿತ್ರಗಳನ್ನು ನೋಡಿ' : 'View All Photos'}
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </section>
  )
}