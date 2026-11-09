'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero({ locale, dict }: { locale: string; dict: any }) {
  const [desktopBg, setDesktopBg] = useState(1)
  const [mobileBg, setMobileBg] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopBg((prev) => (prev === 4 ? 1 : prev + 1))
      setMobileBg((prev) => {
        if (prev === 1) return 2
        if (prev === 2) return 5
        return 1
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-[#050B14]">
      
      <div className="absolute inset-0 z-0">
        {/* Desktop Images */}
        <div className="hidden md:block absolute inset-0">
          {[1, 2, 3, 4].map((num) => {
            const imgSrc = num === 3 ? '/bg3a.png' : `/bg${num}.png`;
            return (
              <div key={`desktop-${num}`} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${desktopBg === num ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full">
                  {/* ಇಮೇಜ್ ಜೂಮಿಂಗ್ ತೆಗೆದುಹಾಕಲಾಗಿದೆ (scale-110 ಇಲ್ಲ) */}
                  <Image src={imgSrc} alt="MOKS Campus" fill priority={num === 1}
                    className="object-cover object-center brightness-110" quality={85}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Mobile Images */}
        <div className="block md:hidden absolute inset-0">
          {[1, 2, 5].map((num) => {
            const imgSrc = `/bg${num}.png`;
            return (
              <div key={`mobile-${num}`} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${mobileBg === num ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full">
                  <Image src={imgSrc} alt="MOKS Campus" fill priority={num === 1}
                    className="object-cover object-center brightness-110" quality={85}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#050B14]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/30 to-[#050B14]/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/60 via-transparent to-[#050B14]/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        <div className="mb-6 md:mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            {dict.hero.tagline}
          </span>
        </div>

        <div className="relative mb-8 md:mb-10 animate-fade-in-up animation-delay-100">
          <h1 
            style={{ fontFamily: '"Arial Black", Impact, sans-serif', fontWeight: 900 }}
            className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[130px] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            MOKS
          </h1>
          <div className="relative mt-2 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span lang={locale} className="text-white font-bold tracking-[0.3em] text-xs sm:text-sm md:text-base lg:text-lg uppercase drop-shadow-lg">
              {locale === 'kn' ? 'ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ' : 'KARNATAKA STUDENTS'}
            </span>
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 shadow-2xl">
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed drop-shadow-md">
            {dict.hero.subtitle}
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-300">
          <Link href={`/${locale}/about`}
            className="group relative inline-flex items-center justify-center bg-emerald-500 text-[#050B14] font-black text-sm md:text-lg px-8 py-4 md:px-12 md:py-5 rounded-full transition-all duration-300 hover:bg-emerald-400 hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              {dict.hero.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050B14] to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}