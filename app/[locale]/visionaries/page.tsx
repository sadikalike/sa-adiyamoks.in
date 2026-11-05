'use client' // useState ಬಳಸಲು ಇದು ಬೇಕು

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import visionaries from '@/data/visionaries.json'

export default function VisionariesPage({ params }: { params: Promise<{ locale: string }> }) {
  // ಯಾವ ಕಾರ್ಡ್ ಓಪನ್ ಆಗಿದೆ ಎಂದು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸ್ಟೇಟ್
  const [expandedId, setExpandedId] = useState<number | null>(null)

  // locale ಅನ್ನು ಇಲ್ಲಿ ನೇರವಾಗಿ ಬಳಸಲು
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
            {locale === 'kn' ? 'ನಮ್ಮ ದೂರದರ್ಶಿಗಳು' : 'Our Visionaries'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {locale === 'kn' ? 'MOKS ನ ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಪ್ರೇರಣೆ' : 'Mentors and inspiration behind MOKS'}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {visionaries.map((v: any) => {
            const isExpanded = expandedId === v.id;

            return (
              <div 
                key={v.id} 
                className={`group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 transition-all duration-500 flex flex-col ${
                  isExpanded ? 'shadow-[0_20px_50px_rgba(16,185,129,0.15)] border-emerald-200' : 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:-translate-y-1'
                }`}
              >
                
                {/* Image Container */}
                <div className="relative w-full h-80 md:h-96 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={v.image}
                    alt={locale === 'kn' ? v.nameKn : v.nameEn}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex-grow flex flex-col relative bg-white">
                  
                  {/* Tag (ಬಿರುದು) */}
                  <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-3 w-fit">
                    {locale === 'kn' ? v.titleKn : v.titleEn}
                  </span>
                  
                  {/* Name */}
                  <h3 className="font-black text-xl md:text-2xl text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {locale === 'kn' ? v.nameKn : v.nameEn}
                  </h3>

                  {/* Description (Expand / Collapse) */}
                  <p 
                    className={`text-slate-600 text-sm leading-relaxed text-justify mb-6 flex-grow transition-all duration-500 ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-4'
                    }`}
                  >
                    {locale === 'kn' ? v.descKn : v.descEn}
                  </p>

                  {/* Read More / Read Less Button */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleReadMore(v.id)}
                      className="inline-flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group/btn focus:outline-none"
                    >
                      {isExpanded 
                        ? (locale === 'kn' ? 'ಕಡಿಮೆ ಓದಿ' : 'Read Less') 
                        : (locale === 'kn' ? 'ಇನ್ನಷ್ಟು ಓದಿ' : 'Read More')}
                      
                      {/* ಬಾಣದ ಗುರುತು (Expand ಆದಾಗ ತಿರುಗುತ್ತದೆ) */}
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