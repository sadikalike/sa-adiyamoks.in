'use client'

import { useState, useEffect } from 'react'
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

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      
      <div className="absolute inset-0 z-0">
        {/* Desktop Images */}
        <div className="hidden md:block absolute inset-0">
          {[1, 2, 3, 4].map((num) => {
            const imgSrc = num === 3 ? '/bg3a.png' : `/bg${num}.png`;
            return (
              <div key={`desktop-${num}`} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${desktopBg === num ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full">
                  {/* Brightness ಹೆಚ್ಚಿಸುವುದರಿಂದ ಚಿತ್ರಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತವೆ */}
                  <Image src={imgSrc} alt="MOKS Campus" fill priority={num === 1}
                    className="object-cover object-center brightness-[0.85] contrast-110" quality={90}
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
                    className="object-cover object-center brightness-[0.85] contrast-110" quality={90}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* 
          Overlays: ಚಿತ್ರಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಲು Overlay ಪ್ರಮಾಣವನ್ನು ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ 
          (ಕಪ್ಪು ಪದರ ಕಡಿಮೆ ಇರುವುದರಿಂದ ಚಿತ್ರದ ಬಣ್ಣಗಳು ಎದ್ದು ಕಾಣುತ್ತವೆ)
        */}
        <div className="absolute inset-0 bg-[#020617]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617]/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center mt-[-20px]">
        
        {/* Tagline */}
        <div className="mb-4 md:mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-emerald-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            {dict.hero.tagline}
          </span>
        </div>

        {/* 
          💡 MOKS Text & Subtitle with Reduced Gap (gap-1 md:gap-2) 
        */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10 animate-fade-in-up animation-delay-100">
          <h1 
            style={{ 
              fontFamily: '"Arial Black", Impact, sans-serif', 
              fontWeight: 900,
            }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] text-white leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            MOKS
          </h1>

          {/* ಗ್ಯಾಪ್ ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ (gap-1 md:gap-2) */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-1 md:mt-2">
            <div className="h-[1px] w-8 md:w-16 bg-white/50"></div>
            <span lang={locale} className="text-white font-bold tracking-[0.3em] text-[10px] sm:text-xs md:text-sm uppercase drop-shadow-md">
              {locale === 'kn' ? 'ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ' : 'KARNATAKA STUDENTS'}
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-white/50"></div>
          </div>
        </div>

        {/* Subtitle Box */}
        <div className="bg-black/40 backdrop-blur-lg border border-white/10 p-5 md:p-7 rounded-2xl mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 shadow-2xl">
          <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-md">
            {dict.hero.subtitle}
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-6 md:bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 group"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold text-white/60 group-hover:text-white transition-colors duration-300">
          Scroll
        </span>
        <span className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur-md group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
          <svg
            className="w-4 h-4 text-white/80 group-hover:text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

    </section>
  )
}