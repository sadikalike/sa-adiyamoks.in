'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import faculties from '@/data/faculties.json'

export default function FacultiesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  
  // URL ನಿಂದ ನೇರವಾಗಿ locale ಪಡೆಯುವುದು
  const pathname = usePathname()
  const locale = pathname.includes('/en') ? 'en' : 'kn'

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div lang={locale} className="bg-[#f8fafc] min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {locale === 'kn' ? 'ನಮ್ಮ ಶಿಕ್ಷಕರು' : 'Our Faculties'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {locale === 'kn' ? 'MOKS ನ ಜ್ಞಾನದ ದೀಪಗಳು' : 'The guiding lights of MOKS'}
          </p>
        </div>
      </section>

      {/* Modern Animated Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {faculties.map((f: any) => {
            const isExpanded = expandedId === f.id
            const name = locale === 'kn' ? (f.nameKn || '') : (f.nameEn || '')
            const desc = locale === 'kn' ? (f.descKn || '') : (f.descEn || '')

            return (
              <div 
                key={f.id} 
                // ಇಲ್ಲಿ transition-all, shadow, ಮತ್ತು hover:-translate-y-2 (ಮೇಲೆದ್ದು ಬರುವ ಎಫೆಕ್ಟ್) ಸೇರಿಸಲಾಗಿದೆ
                className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col h-full ${
                  isExpanded 
                    ? 'shadow-[0_20px_50px_rgba(16,185,129,0.15)] border-emerald-300 transform -translate-y-2' 
                    : 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-slate-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:-translate-y-2 hover:border-emerald-200'
                }`}
              >
                
                {/* Image Container with Smooth Zoom */}
                <div className="relative w-full h-80 md:h-96 bg-slate-100 shrink-0 overflow-hidden">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt={name}
                      fill
                      // smooth zoom ಇಮೇಜ್ ಮೇಲೆ ಹೋವರ್ ಮಾಡಿದಾಗ
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                      <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl font-black text-slate-400 group-hover:text-emerald-500 transition-colors">
                          {name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Image Overlay - ಕಪ್ಪು ಶೇಡ್ (hover ಮಾಡಿದಾಗ ಮಾಯವಾಗುತ್ತದೆ) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex-grow flex flex-col relative bg-white">
                  
                  {/* Modern Badge */}
                  <span className="inline-block py-1 px-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-4 w-fit group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    {locale === 'kn' ? 'ಉಸ್ತಾದ್' : 'USTHAD'}
                  </span>

                  {/* Title with color transition */}
                  <h3 className="font-black text-xl md:text-2xl text-slate-900 mb-3 leading-tight min-h-[3.5rem] group-hover:text-emerald-600 transition-colors duration-300">
                    {name}
                  </h3>

                  {/* Description with smooth height transition */}
                  <p 
                    className={`text-slate-600 text-sm leading-relaxed text-justify mb-6 flex-grow transition-all duration-500 ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                    }`}
                  >
                    {desc}
                  </p>

                  {/* Read More Button */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => toggleReadMore(f.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                        isExpanded 
                          ? 'bg-emerald-500 text-white rotate-180' 
                          : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
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
      </div>
    </div>
  )
}