'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import visionaries from '@/data/visionaries.json'

export default function VisionariesPreview({ locale, dict }: { locale: string; dict: any }) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    // 
    // ಇಲ್ಲಿ 'bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50' ಬಳಸಿ 
    // ಸುಂದರವಾದ ತಿಳಿ ಬಣ್ಣಗಳ ಗ್ರೇಡಿಯಂಟ್ ನೀಡಲಾಗಿದೆ.
    // 
    <section className="relative w-full py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 overflow-hidden">
      
      {/* Background Pattern (Subtle Grid) - ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಲುಕ್‌ಗಾಗಿ ಸೂಕ್ಷ್ಮವಾದ ಗ್ರಿಡ್ */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ದೂರದರ್ಶಿಗಳು' : 'Our Visionaries'}
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {visionaries.slice(0, 2).map((v: any) => {
            const isExpanded = expandedId === v.id

            return (
              <div 
                key={v.id} 
                // 
                // ಕಾರ್ಡ್‌ಗಳು ಸಂಪೂರ್ಣ ಬಿಳಿಯಾಗಿವೆ (bg-white), ಇದರಿಂದ ಗ್ರೇಡಿಯಂಟ್ ಹಿನ್ನೆಲೆಯಿಂದ ಎದ್ದು ಕಾಣುತ್ತವೆ.
                // 
                className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl p-4 gap-6 bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                
                {/* Image Container */}
                <div className="relative w-full sm:w-[45%] h-80 sm:h-auto overflow-hidden shrink-0 bg-slate-100 rounded-2xl">
                  <Image
                    src={v.image}
                    alt={locale === 'kn' ? v.nameKn : v.nameEn}
                    fill
                    quality={100}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Content Container */}
                <div className="py-2 pr-2 flex flex-col flex-grow justify-center relative z-10">
                  
                  {/* Title Tag */}
                  <span className="inline-block py-1.5 px-4 rounded-md bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 w-fit border border-emerald-100">
                    {locale === 'kn' ? v.titleKn : v.titleEn}
                  </span>
                  
                  <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 leading-tight mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {locale === 'kn' ? v.nameKn : v.nameEn}
                  </h3>

                  <p 
                    className={`text-slate-600 text-sm leading-relaxed text-justify mb-6 flex-grow transition-all duration-500 ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-4'
                    }`}
                  >
                    {locale === 'kn' ? v.descKn : v.descEn}
                  </p>

                  {/* Arrow Only Button */}
                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => toggleReadMore(v.id)}
                      className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 group/btn focus:outline-none"
                      aria-label="Toggle Details"
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'rotate-0'}`} 
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
          })}
        </div>

        {/* "VIEW ALL" BUTTON */}
        <div className="flex justify-center w-full mt-4">
          <Link
            href={`/${locale}/visionaries`}
            className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-8 py-3 rounded-lg transition-all duration-300 shadow-sm"
          >
            <span className="relative z-10">
              {locale === 'kn' ? 'ಎಲ್ಲರನ್ನೂ ನೋಡಿ' : 'View All'}
            </span>
            
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}