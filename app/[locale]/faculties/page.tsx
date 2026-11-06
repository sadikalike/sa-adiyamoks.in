'use client'

import { useState } from 'react'
import Image from 'next/image'
import faculties from '@/data/faculties.json'

export default function FacultiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const locale = typeof window !== 'undefined' && window.location.pathname.includes('/en') ? 'en' : 'kn'

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ಶಿಕ್ಷಕರು' : 'Our Faculties'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {locale === 'kn' ? 'MOKS ನ ಜ್ಞಾನದ ದೀಪಗಳು' : 'The guiding lights of MOKS'}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {faculties.map((f: any) => {
            const isExpanded = expandedId === f.id

            return (
              <div 
                key={f.id} 
                className={`group bg-white rounded-[2rem] overflow-hidden border border-slate-100 transition-all duration-500 flex flex-col sm:flex-row ${
                  isExpanded ? 'shadow-[0_20px_50px_rgba(16,185,129,0.15)] border-emerald-200' : 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:-translate-y-1'
                }`}
              >
                
                {/* Image Container (Avatar placeholder if no image) */}
                <div className="relative w-full sm:w-[40%] h-64 sm:h-auto overflow-hidden bg-slate-100 shrink-0">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt={locale === 'kn' ? f.nameKn : f.nameEn}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    // ಚಿತ್ರವಿಲ್ಲದಿದ್ದಾಗ ಅವರ ಹೆಸರಿನ ಮೊದಲ ಅಕ್ಷರವನ್ನು ತೋರಿಸುವ ಸುಂದರ ವೃತ್ತ
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-emerald-100 z-10">
                        <span className="text-4xl font-black text-emerald-600">
                          {(locale === 'kn' ? f.nameKn : f.nameEn).charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex-grow flex flex-col relative bg-white">
                  
                  {/* Tag (ಹುದ್ದೆ) */}
                  <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 w-fit">
                    {locale === 'kn' ? f.titleKn : f.titleEn}
                  </span>
                  
                  {/* Name */}
                  <h3 className="font-black text-xl md:text-2xl text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {locale === 'kn' ? f.nameKn : f.nameEn}
                  </h3>

                  {/* Description (Expand / Collapse) */}
                  <p 
                    className={`text-slate-600 text-sm leading-relaxed text-justify mb-6 flex-grow transition-all duration-500 ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                    }`}
                  >
                    {locale === 'kn' ? f.descKn : f.descEn}
                  </p>

                  {/* Read More / Read Less Button */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleReadMore(f.id)}
                      className="inline-flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group/btn focus:outline-none"
                    >
                      {isExpanded 
                        ? (locale === 'kn' ? 'ಕಡಿಮೆ ಓದಿ' : 'Read Less') 
                        : (locale === 'kn' ? 'ಇನ್ನಷ್ಟು ಓದಿ' : 'Read More')}
                      
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}