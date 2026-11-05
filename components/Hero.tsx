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
        if (prev === 2) return 3
        if (prev === 3) return 5
        return 1
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#050B14]">
      
      {/* 1. BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Images */}
        <div className="hidden md:block absolute inset-0">
          {[1, 2, 3, 4].map((num) => {
            const imgSrc = num === 3 ? '/bg3a.png' : `/bg${num}.png`;
            return (
              <div key={`desktop-${num}`} className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${desktopBg === num ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full">
                  <Image src={imgSrc} alt="MOKS Campus" fill priority={num === 1}
                    className={`object-cover object-center transition-transform duration-[10000ms] ease-out ${desktopBg === num ? 'scale-105' : 'scale-100'}`} quality={95}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Mobile Images */}
        <div className="block md:hidden absolute inset-0">
          {[1, 2, 3, 5].map((num) => {
            const imgSrc = num === 3 ? '/bg3a.png' : `/bg${num}.png`;
            return (
              <div key={`mobile-${num}`} className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${mobileBg === num ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full">
                  <Image src={imgSrc} alt="MOKS Campus" fill priority={num === 1}
                    className={`object-cover object-center transition-transform duration-[10000ms] ease-out ${mobileBg === num ? 'scale-105' : 'scale-100'}`} quality={95}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Deep Overlay (ಟೆಕ್ಸ್ಟ್ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಲು) */}
        <div className="absolute inset-0 bg-[#050B14]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/60"></div>
      </div>

      {/* 2. MAIN CONTENT (Perfect Size for Mobile & Laptop) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center mt-8 md:mt-0">
        
        {/* Top Badge */}
        <div className="mb-4 md:mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-1.5 md:py-2 px-4 md:px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-300 text-[10px] md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            {dict.hero.tagline}
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-6 md:mb-8 animate-fade-in-up animation-delay-100">
          <h1 
            style={{ fontFamily: '"Arial Black", Impact, sans-serif', fontWeight: 900 }}
            className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tighter drop-shadow-2xl"
          >
            MOKS
          </h1>

          {/* Sub Heading */}
          <div className="relative mt-3 md:mt-5 flex items-center justify-center gap-3 md:gap-4">
            <div className="h-[1px] md:h-[2px] w-8 md:w-16 bg-emerald-500/50"></div>
            <span 
              lang={locale}
              className="text-emerald-400 font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-lg lg:text-xl uppercase"
            >
              {locale === 'kn' ? 'ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ' : 'KARNATAKA STUDENTS'}
            </span>
            <div className="h-[1px] md:h-[2px] w-8 md:w-16 bg-emerald-500/50"></div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-200">
          {dict.hero.subtitle}
        </p>

        {/* Action Button */}
        <div className="animate-fade-in-up animation-delay-300">
          <Link
            href={`/${locale}/about`}
            className="group relative inline-flex items-center justify-center bg-white text-[#050B14] font-black text-sm md:text-lg px-6 py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {dict.hero.cta}
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#050B14] to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}