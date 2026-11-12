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
    <section className="relative w-full py-24 bg-white overflow-hidden">
      
      {/* Background Curved Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-10 -left-10 w-[800px] h-[800px] text-slate-100 opacity-70" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M -50 100 C 100 50, 200 250, 450 150" stroke="currentColor" strokeWidth="2" />
          <path d="M -50 150 C 100 100, 200 300, 450 200" stroke="currentColor" strokeWidth="1.5" />
          <path d="M -50 200 C 100 150, 200 350, 450 250" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-20 -right-10 w-[900px] h-[900px] text-emerald-50 opacity-80" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 550 400 C 400 450, 300 250, 50 350" stroke="currentColor" strokeWidth="3" />
          <path d="M 550 450 C 400 500, 300 300, 50 400" stroke="currentColor" strokeWidth="2" />
          <path d="M 550 500 C 400 550, 300 350, 50 450" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ಮಾರ್ಗದರ್ಶಕರು' : 'Our Visionaries'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 mt-6 rounded-full"></div>
        </div>

        {/* Modern Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16 items-stretch">
          {visionaries.slice(0, 2).map((v: any) => {
            const isExpanded = expandedId === v.id

            return (
              <div 
                key={v.id} 
                // 💡 Mobile & Desktop Attractive Shadow 
                // ಇಲ್ಲಿ shadow-2xl ಬಳಸಲಾಗಿದೆ, ಇದು ಮೊಬೈಲ್‌ನಲ್ಲಿ ಸಹ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತದೆ.
                className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl p-3 gap-6 bg-white border border-slate-200 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] active:scale-[0.98] md:hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.3)] md:hover:-translate-y-1.5 transition-all duration-500 h-full"
              >
                
                {/* Image Container */}
                <div className="relative w-full sm:w-[48%] h-96 sm:h-auto overflow-hidden shrink-0 bg-slate-100 rounded-xl">
                  <Image
                    src={v.image}
                    alt={locale === 'kn' ? v.nameKn : v.nameEn}
                    fill
                    quality={100}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Content Container */}
                <div className="py-2 pr-2 flex flex-col flex-grow justify-center relative z-10">
                  
                  {/* Badge */}
                  <span className="inline-block py-1 px-3 rounded-md bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 w-fit border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors duration-300">
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

                  {/* Arrow Button */}
                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => toggleReadMore(v.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none shadow-sm ${
                        isExpanded 
                          ? 'bg-emerald-500 text-white rotate-180 shadow-md shadow-emerald-500/40' 
                          : 'bg-white text-slate-500 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200'
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
        <div className="flex justify-center w-full mt-8">
          <Link
            href={`/${locale}/visionaries`}
            className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-bold text-sm md:text-base px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40"
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