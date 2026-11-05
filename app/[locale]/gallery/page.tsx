import Image from 'next/image'

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'

  // ನಿಮ್ಮ ಚಿತ್ರಗಳ ವಿವರಣೆ (ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್)
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
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
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

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={item.image}
                  alt={locale === 'kn' ? item.titleKn : item.titleEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Image Overlay for Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg md:text-xl leading-tight drop-shadow-md">
                  {locale === 'kn' ? item.titleKn : item.titleEn}
                </h3>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {locale === 'kn' ? item.descKn : item.descEn}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}