import Image from 'next/image'
import Link from 'next/link'
import visionaries from '@/data/visionaries.json'

export default function VisionariesPreview({ locale, dict }: { locale: string; dict: any }) {
  return (
    <section className="relative w-full py-24 bg-slate-50 overflow-hidden">
      
      {/* Background Effects (Grid & Light Glows) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white text-emerald-600 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-100 shadow-sm">
            {locale === 'kn' ? 'ನಮ್ಮ ಮಾರ್ಗದರ್ಶಕರು' : 'Our Visionaries'}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {dict.sections.visionaries.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mt-6 rounded-full"></div>
        </div>

        {/* 
          Cards Grid 
          ಇಲ್ಲಿ .slice(0, 2) ಬಳಸಿ ಕೇವಲ ಮೊದಲ 2 ಜನರನ್ನು ಮಾತ್ರ ತೋರಿಸಲಾಗಿದೆ.
        */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {visionaries.slice(0, 2).map((v: any) => (
            <div 
              key={v.id} 
              className="group relative flex flex-col sm:flex-row overflow-hidden rounded-[2.5rem] p-3 gap-6 bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              
              {/* Image Container */}
              <div className="relative w-full sm:w-[45%] h-80 sm:h-auto overflow-hidden shrink-0 bg-slate-200 rounded-[2rem]">
                <Image
                  src={v.image}
                  alt={locale === 'kn' ? v.nameKn : v.nameEn}
                  fill
                  quality={100}
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Content Container */}
              <div className="py-4 pr-4 flex flex-col flex-grow justify-center relative z-10">
                
                {/* Title Tag */}
                <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 w-fit shadow-sm">
                  {locale === 'kn' ? v.titleKn : v.titleEn}
                </span>
                
                <h3 className="font-black text-2xl sm:text-3xl text-slate-900 leading-tight mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {locale === 'kn' ? v.nameKn : v.nameEn}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed text-justify mb-8 line-clamp-4">
                  {locale === 'kn' ? v.descKn : v.descEn}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/${locale}/visionaries`}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all duration-300 group/btn shadow-md"
                  >
                    {locale === 'kn' ? 'ಇನ್ನಷ್ಟು ಓದಿ' : 'Learn More'}
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODERN "VIEW ALL" BUTTON */}
        <div className="flex justify-center w-full mt-4">
          <Link
            href={`/${locale}/visionaries`}
            className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-emerald-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] overflow-hidden"
          >
            <span className="relative z-10 text-base">
              {locale === 'kn' ? 'ಎಲ್ಲರನ್ನೂ ನೋಡಿ' : 'View All'}
            </span>
            
            <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white/20 group-hover:bg-white/30 rounded-full transition-colors">
              <svg 
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}