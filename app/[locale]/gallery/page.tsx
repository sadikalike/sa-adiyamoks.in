'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation' // 💡 ಲೊಕೇಲ್ ಸರಿಯಾಗಿ ಪಡೆಯಲು ಇದನ್ನು ಸೇರಿಸಲಾಗಿದೆ
import FilmStripGallery from '@/components/FilmStripGallery' // 💡 ಫಿಲ್ಮ್ ಸ್ಟ್ರಿಪ್ ಇಂಪೋರ್ಟ್

function GalleryCard({ item, locale }: { item: any; locale: string }) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const check = () => {
      setIsOverflowing(el.scrollHeight > el.clientHeight + 1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [item.descKn, item.descEn, locale, expanded])

  return (
    <div
      className={`group bg-white rounded-[2rem] overflow-hidden border transition-all duration-500 flex flex-col h-full ${
        expanded
          ? 'shadow-[0_20px_50px_rgba(16,185,129,0.15)] border-emerald-200'
          : 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 border-slate-100'
      }`}
    >
      <div className="relative w-full h-64 md:h-72 overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={item.image}
          alt={locale === 'kn' ? item.titleKn : item.titleEn}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg md:text-xl leading-tight drop-shadow-md">
          {locale === 'kn' ? item.titleKn : item.titleEn}
        </h3>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p
          ref={textRef}
          className={`text-slate-600 text-sm leading-relaxed text-justify mb-4 transition-all duration-500 ${
            expanded ? 'line-clamp-none' : 'line-clamp-4'
          }`}
        >
          {locale === 'kn' ? item.descKn : item.descEn}
        </p>

        <div className={`mt-auto pt-4 border-t border-slate-100 flex justify-end ${isOverflowing || expanded ? '' : 'invisible'}`}>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Read less' : 'Read more'}
            className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-300 focus:outline-none"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  // 💡 usePathname ಬಳಸಿ ಭಾಷೆ ಬದಲಾಯಿಸಿದಾಗ ಆಟೋಮ್ಯಾಟಿಕ್ ಆಗಿ ರೀ-ರೆಂಡರ್ ಆಗುತ್ತದೆ
  const pathname = usePathname()
  const locale = pathname.includes('/en') ? 'en' : 'kn'

  const galleryData = [
    {
      id: 1,
      image: '/kkustha.png',
      titleKn: 'ಅಸ್ಸಅದ ಸುವನೀರ್ ಪೋಸ್ಟರ್ ಬಿಡುಗಡೆ',
      titleEn: 'Assaad Souvenir Poster Release',
      descKn: 'ಜಾಮಿಯ ಸಅದಿಯ 55ನೇ ವಾರ್ಷಿಕ ಸಮ್ಮೇಳನದ ಪ್ರಯುಕ್ತ ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆಯು ಹೊರತರಲಿರುವ ಅಸ್ಸಆದ ಸುವನೀರ್ ಸಮಿತಿ ಪೋಸ್ಟರ್ ಬಿಡುಗಡೆಗೊಳಿಸಲಾಯಿತು.',
      descEn: 'On the occasion of the 55th Annual Conference of Jamia Sa-adiya, the Karnataka Students Organisation released the poster for the upcoming Assaad Souvenir Committee.'
    },
    {
      id: 2,
      image: '/shafiustha.png',
      titleKn: 'MUS ರಾಜ್ಯ ನಾಯಕರ ಭೇಟಿ ಮತ್ತು ಸನ್ಮಾನ',
      titleEn: 'Visit and Felicitation of MUS State Leader',
      descKn: 'ರಾಜ್ಯ ವಕ್ಸ್ ಕೌನ್ಸಿಲ್ ಉಪಾಧ್ಯಕ್ಷರಾಗಿ ಆಯ್ಕೆಯಾದ ಶಾಫಿ ಸಅದಿ ಉಸ್ತಾದರು ಜಾಮಿಅಃ ಸಅದಿಯಾಗೆ ಭೇಟಿ ನೀಡಿದ ಸಂದರ್ಭದಲ್ಲಿ MOKS ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿದರು. ಸಅದಿಯಾದ ಅನುಭವ ಮತ್ತು MOKS ನ 30 ವರ್ಷದ ಸಂಭ್ರಮದ ಕುರಿತು ಸಲಹೆ ನೀಡಿ ಶುಭ ಹಾರೈಸಿದರು. ಅವರನ್ನು ಸನ್ಮಾನಿಸಲಾಯಿತು.',
      descEn: 'Ustad Shafi Saadi, newly elected Vice President of the State Waqf Council and an alumnus of Jamia Sa-adiya, visited the MOKS office during his visit to the campus. He shared his experiences and offered valuable advice for MOKS\'s 30th-anniversary celebrations. He was felicitated by the organization.'
    },
    {
      id: 3,
      image: '/police.png',
      titleKn: 'ಸಂತೋಷ ಹಂಚಿಕೊಂಡ ವಿದ್ಯಾರ್ಥಿಗಳು (ಶೇರಿಂಗ್ ಹ್ಯಾಪಿನೆಸ್)',
      titleEn: 'Sharing Happiness Campaign',
      descKn: 'ಜಾಮಿಯಾ ಸಅದಿಯಾದಲ್ಲಿ ನಡೆಯಲಿರುವ ಸನದುಧಾನ ಸಮ್ಮೇಳನ ಮತ್ತು ತಾಜುಲ್ ಉಲಮಾ ನೂರುಲ್ ಉಲಮಾರ ಆಂಡ್ ನೇರ್ಚೆ ಪ್ರಯುಕ್ತ MOKS ವಿದ್ಯಾರ್ಥಿಗಳು "ಶೇರಿಂಗ್ ಹ್ಯಾಪಿನೆಸ್" ಎಂಬ ಶೀರ್ಷಿಕೆಯಡಿ ಪ್ರಚಾರಯಾತ್ರೆ ಕೈಗೊಂಡರು. ಸಿಹಿತಿಂಡಿಗಳನ್ನು ವಿತರಿಸಿ ಸ್ಥಳೀಯರಿಂದ ಉತ್ತಮ ಮೆಚ್ಚುಗೆ ಪಡೆದರು.',
      descEn: 'To promote the upcoming convocation and the 30th anniversary of Tajul Ulama and Noorul Ulama, MOKS students conducted a campaign titled "Sharing Happiness." They distributed sweets, which received a wonderful response and appreciation from the local community.'
    },
    {
      id: 4,
      image: '/ut.png',
      titleKn: 'ಕರ್ನಾಟಕ ವಿಧಾನಸಭಾ ಅಧ್ಯಕ್ಷರ ಸನ್ಮಾನ',
      titleEn: 'Felicitation of Karnataka Assembly Speaker',
      descKn: 'ಜಾಮಿಅಃ ಸಅದಿಯಾ ಅರಬಿಯಾ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ MOKS ವತಿಯಿಂದ ಕರ್ನಾಟಕ ವಿಧಾನಸಭಾ ಅಧ್ಯಕ್ಷರೂ, ಕರ್ನಾಟಕದ ನೆಚ್ಚಿನ ರಾಜಕಾರಣಿ ಜನಾಬ್ ಯು.ಟಿ ಖಾದರ್ ಇವರನ್ನು ಸನ್ಮಾನಿಸಲಾಯಿತು.',
      descEn: 'The Karnataka Students Organisation (MOKS) of Jamia Sa\'adiya Arabia felicitated Janab U.T. Khader, Speaker of the Karnataka Legislative Assembly and a beloved politician of Karnataka.'
    },
    {
      id: 5,
      image: '/machar.png',
      titleKn: 'ಇಸ್ಮಾಯಿಲ್ ಸಅದಿ ಮಾಚಾರ್ ಉಸ್ತಾದರ ಭೇಟಿ',
      titleEn: 'Visit of Ismail Sa\'adi Machar Ustad',
      descKn: 'ಪ್ರಖ್ಯಾತ ಲೇಖಕರೂ ಕವಿಯೂ ಆದ ಇಸ್ಮಾಯಿಲ್ ಸಅದಿ ಮಾಚಾರ್ ಉಸ್ತಾದರು ಪ್ರತಿಷ್ಠಿತ ಜಾಮಿಆ ಸಅದಿಯ್ಯಾ ಸಂಸ್ಥೆಗೆ ಭೇಟಿ ನೀಡಿದ ಸಂದರ್ಭದಲ್ಲಿ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆಯು ಪ್ರೀತಿಯಿಂದ ಬರಮಾಡಿಕೊಂಡಿತು. ಕೆಲ ಸಮಯ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ಆತ್ಮೀಯವಾಗಿ ಮಾತುಕತೆ ನಡೆಸಿದರು. ಭಾಷೆ, ಓದು, ಬರಹಗಳ ಕುರಿತು ಉತ್ತಮ ಸಲಹೆ ನೀಡಿದರು.',
      descEn: 'Renowned writer and poet Ismail Sa\'adi Machar Ustad was warmly welcomed by the Kannada Students Organisation during his visit to the prestigious Jamia Sa\'adiya institution. He spent time in friendly conversation with Kannada students and offered valuable advice on language, reading, and writing.'
    },
    {
      id: 6,
      image: '/akmal.png',
      titleKn: 'ಶರಫುದ್ದೀನ್ ಸಅದಿ ಉಸ್ತಾದರ ಭೇಟಿ',
      titleEn: 'Visit of Sharafuddeen Sa\'adi Ustad',
      descKn: 'ಪ್ರಮುಖ ಮುದರ್ರಿಸರಾದ ಶರಫುದ್ದೀನ್ ಸಅದಿ ಉಸ್ತಾದರು ಪ್ರತಿಷ್ಠಿತ ಜಾಮಿಅಃ ಸಅದಿಯ್ಯಾ ಸಂಸ್ಥೆಗೆ ಭೇಟಿ ನೀಡಿದ ಸಂದರ್ಭದಲ್ಲಿ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆಯು ಪ್ರೀತಿಯಿಂದ ಬರಮಾಡಿಕೊಂಡಿತು. ಕೆಲ ಸಮಯ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ಆತ್ಮೀಯವಾಗಿ ಮಾತುಕತೆ ನಡೆಸಿದರು. ಭಾಷೆ, ಓದು, ಬರಹಗಳ ಕುರಿತು ಉತ್ತಮ ಸಲಹೆ ನೀಡಿದರು.',
      descEn: 'Prominent Mudarris Sharafuddeen Sa\'adi Ustad was warmly welcomed by the Kannada Students Organisation during his visit to the prestigious Jamia Sa\'adiya institution. He spent time in friendly conversation with Kannada students and offered valuable advice on language, reading, and writing.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Hero */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ಗ್ಯಾಲರಿ' : 'Our Gallery'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {locale === 'kn' ? 'MOKS ನ ಸ್ಮರಣೀಯ ಕ್ಷಣಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು' : 'Memorable moments and activities of MOKS'}
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} locale={locale} />
          ))}
        </div>
      </div>

      {/* 💡 ಇಲ್ಲಿ ಫಿಲ್ಮ್ ಸ್ಟ್ರಿಪ್ ಗ್ಯಾಲರಿ ಸೇರಿಸಲಾಗಿದೆ */}
      <div className="mt-20">
        <FilmStripGallery locale={locale} />
      </div>

    </div>
  )
}