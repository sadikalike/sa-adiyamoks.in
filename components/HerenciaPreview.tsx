'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HerenciaPreview({ locale }: { locale: string }) {
  const [currentPoster, setCurrentPoster] = useState(1)

  useEffect(() => {
    // ಪೋಸ್ಟರ್ ಬದಲಾಗುವ ಸಮಯ (5 ಸೆಕೆಂಡ್)
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev === 1 ? 2 : 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const content = locale === 'kn' ? {
    tag: "ಹೆರೆನ್ಸಿಯಾ (Herencia)",
    title: "ಮೂರು ದಶಕಗಳ ಸಾಧನೆ",
    desc: "MOKS ಸ್ಥಾಪನೆಯಾದ 30 ವರ್ಷಗಳ ಸುದೀರ್ಘ ಪಯಣದಲ್ಲಿ, ನಾವು ಜ್ಞಾನ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಏಕತೆಯ ಸುಂದರ ಪರಂಪರೆಯನ್ನು ನಿರಂತರವಾಗಿ ಬೆಳೆಸಿಕೊಂಡು ಬಂದಿದ್ದೇವೆ. ನೂರಾರು ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರಕಾಶಮಾನ ಭವಿಷ್ಯಕ್ಕೆ ಕಾರಣರಾಗಿರುವ ಈ ಸಂಭ್ರಮದ ಸಂದರ್ಭದಲ್ಲಿ, ನಮ್ಮೆಲ್ಲರ ಹೆಮ್ಮೆಯ ಕ್ಷಣಗಳನ್ನು ಆಚರಿಸೋಣ.",
    marqueeText: "MOKS • 30 YEARS OF EXCELLENCE • "
  } : {
    tag: "HERENCIA",
    title: "Celebrating Three Decades of Success",
    desc: "In the 30-year long journey since MOKS was founded, we have continuously nurtured a beautiful legacy of knowledge, culture and unity. As we celebrate the momentous occasion of shaping the bright futures of hundreds of students, let us cherish all our proud moments together.",
    marqueeText: "MOKS • 30 YEARS OF EXCELLENCE • "
  }

  return (
    <section className="relative py-24 bg-[#0a192f] overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full filter blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Tag — static */}
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="inline-block py-2 px-6 rounded-full bg-amber-500/10 text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            {content.tag}
          </span>
        </div>

        {/* Poster — shake (outer) + fade (inner) */}
        <div className="flex flex-col items-center w-full -mt-2">
          <div className="relative z-20 flex flex-col items-center mt-0">
            <div className="w-2.5 h-2.5 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-white"></div>
            <div className="w-1.5 h-1.5 bg-black/50 rounded-full blur-[1px] mt-0.5"></div>
          </div>
          <div className="w-[1.5px] h-16 bg-gradient-to-b from-slate-300 to-slate-500 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>

          {/* Shake wrapper */}
          <div className="relative w-full max-w-sm z-10 mt-[-2px] animate-swing will-change-transform">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-amber-500/30">
              <div className="relative w-full h-full bg-slate-900">
                
                {/* 
                  💡 Framer Motion ತೆಗೆದುಹಾಕಿ, ಸರಳ CSS Opacity Fade ಬಳಸಲಾಗಿದೆ.
                  ಇದು ಎಲ್ಲಾ ಮೊಬೈಲ್‌ಗಳಲ್ಲಿ ನಿಧಾನವಾಗಿ ಮತ್ತು ಸ್ಮೂತ್ ಆಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.
                */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={currentPoster === 1 ? "/erenpost.png" : "/ereiqqu.png"}
                    alt={`Herencia Poster ${currentPoster}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-opacity duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40"></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Logo + Title + Description — static */}
        <div className="flex flex-col items-center text-center mt-12">
          <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
            <Image src="/erenlogo.png" alt="Herencia Logo" fill loading="lazy" className="object-contain" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(to right, #fcd34d, #ffffff, #fcd34d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0px 10px 20px rgba(245, 158, 11, 0.3))'
            }}
          >
            {content.title}
          </h2>

          <p className="text-white text-lg md:text-xl leading-relaxed text-center mb-6 font-light max-w-3xl">
            {content.desc}
          </p>
        </div>

      </div>

      {/* 
        Marquee - Fixed Speed (ಸಂಪೂರ್ಣ ಸರಿಪಡಿಸಲಾಗಿದೆ)
        duration 35s ಎಂದು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ, ಇದರಿಂದ ಎಲ್ಲಾ ಮೊಬೈಲ್‌ಗಳಲ್ಲಿ ಒಂದೇ ವೇಗದಲ್ಲಿ ಚಲಿಸುತ್ತದೆ.
      */}
      <div className="my-12 border-y border-white/10 bg-white/5 py-4 overflow-hidden relative w-full flex">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 35s linear infinite',
            willChange: 'transform'
          }}
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black text-white mx-4 tracking-normal uppercase opacity-70">
              {content.marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}