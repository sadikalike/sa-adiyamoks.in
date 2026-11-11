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
    <section className="relative w-full py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ದೂರದರ್ಶಿಗಳು' : 'Our Visionaries'}
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16 items-stretch">
          {visionaries.slice(0, 2).map((v: any) => {
            const isExpanded = expandedId === v.id

            return (
              <div 
                key={v.id} 
                // Modern Card Design
                className="group relative flex flex-col sm:flex-row overflow-hidden rounded-[2rem] p-3 gap-6 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-200 hover:-translate-y-2 transition-all duration-500 h-full"
              >
                
                {/* 
                  Image Container - Height Increased 
                  ಮೊಬೈಲ್‌ನಲ್ಲಿ h-96 ಮತ್ತು ಲ್ಯಾಪ್‌ಟಾಪ್‌ನಲ್ಲಿ h-full ನೀಡುವುದರಿಂದ ಇಮೇಜ್ ತುಂಬಾ ದೊಡ್ಡದಾಗಿ ಕಾಣುತ್ತದೆ 
                */}
                <div className="relative w-full sm:w-[48%] h-96 sm:h-auto overflow-hidden shrink-0 bg-slate-100 rounded-2xl">
                  <Image
                    src={v.image}
                    alt={locale === 'kn' ? v.nameKn : v.nameEn}
                    fill
                    quality={100}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Content Container */}
                <div className="py-4 pr-4 flex flex-col flex-grow justify-center relative z-10">
                  
                  {/* Modern Badge */}
                  <span className="inline-block py-1 px-3 rounded-md bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 w-fit border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    {locale === 'kn' ? v.titleKn : v.titleEn}
                  </span>
                  
                  <h3 className="font-black text-2xl sm:text-3xl text-slate-900 leading-tight mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {locale === 'kn' ? v.nameKn : v.nameEn}
                  </h3>

                  <p 
                    className={`text-slate-600 text-sm md:text-base leading-relaxed text-justify mb-6 flex-grow transition-all duration-500 ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-4'
                    }`}
                  >
                    {locale === 'kn' ? v.descKn : v.descEn}
                  </p>

                  {/* Modern Arrow Button */}
                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => toggleReadMore(v.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                        isExpanded 
                          ? 'bg-emerald-500 text-white rotate-180' 
                          : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                      aria-label="Toggle Details"
                    >
                      <svg 
                        className="w-5 h-5" 
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

        {/* View All Button */}
        <div className="flex justify-center w-full mt-4">
          <Link
            href={`/${locale}/visionaries`}
            className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30"
          >
            <span className="relative z-10">
              {locale === 'kn' ? 'ಎಲ್ಲರನ್ನೂ ನೋಡಿ' : 'View All'}
            </span>
            
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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