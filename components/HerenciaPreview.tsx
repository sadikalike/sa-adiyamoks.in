'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function HerenciaPreview({ locale }: { locale: string }) {
  const [currentPoster, setCurrentPoster] = useState(1)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
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
    <LazyMotion features={domAnimation}>
      <section className="relative py-24 bg-[#0a192f] overflow-hidden" style={{ perspective: '1000px' }}>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full filter blur-[120px] opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Top: Clock + Tag — Reveal */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduce ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center justify-center mb-6"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 border-2 border-amber-500/40 rounded-full animate-spin-slow flex items-center justify-center bg-[#0a192f]/50 backdrop-blur-sm mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="absolute w-0.5 h-1.5 bg-amber-400/60 rounded-full" style={{ transform: `rotate(${i * 90}deg) translateY(-16px)` }}></div>
              ))}
              <div className="absolute w-[1px] h-3 bg-amber-400/80 rounded-full origin-bottom -translate-y-1/2" style={{ transform: 'rotate(45deg)' }}></div>
              <div className="absolute w-[1px] h-4 bg-white/40 rounded-full origin-bottom -translate-y-1/2" style={{ transform: 'rotate(180deg)' }}></div>
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            </div>

            <span className="inline-block py-2 px-6 rounded-full bg-amber-500/10 text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase border border-amber-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              {content.tag}
            </span>
          </m.div>

          {/* Poster — Reveal + AnimatePresence slide */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduce ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center w-full -mt-2"
          >
            <div className="relative z-20 flex flex-col items-center mt-0">
              <div className="w-2.5 h-2.5 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-white"></div>
              <div className="w-1.5 h-1.5 bg-black/50 rounded-full blur-[1px] mt-0.5"></div>
            </div>
            <div className="w-[1.5px] h-16 bg-gradient-to-b from-slate-300 to-slate-500 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>
            <div className="relative w-full max-w-sm animate-swing z-10 mt-[-2px] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-amber-500/30">
              <div className="relative w-full aspect-[4/5] bg-slate-900">
                <AnimatePresence initial={false}>
                  <m.div
                    key={currentPoster}
                    initial={shouldReduce ? false : { x: '-100%' }} 
                    animate={{ x: 0 }}       
                    exit={shouldReduce ? undefined : { x: '100%' }}     
                    transition={{ duration: 1.2, ease: 'easeInOut' }} 
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image 
                      src={currentPoster === 1 ? "/erenpost.png" : "/ereiqqu.png"} 
                      alt={`Herencia Poster ${currentPoster}`} 
                      fill 
                      loading="lazy"
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40"></div>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </m.div>

          {/* Logo + Title + Description — Reveal */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduce ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center text-center mt-12"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
              <Image src="/erenlogo.png" alt="Herencia Logo" fill loading="lazy" className="object-contain" />
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-3d-pop"
              style={{
                background: 'linear-gradient(to right, #fcd34d, #ffffff, #fcd34d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: shouldReduce ? 'none' : 'shimmer 3s linear infinite, popIn 1s ease-out forwards',
                filter: 'drop-shadow(0px 10px 20px rgba(245, 158, 11, 0.3))'
              }}
            >
              {content.title}
            </h2>

            <p className="text-white text-lg md:text-xl leading-relaxed text-center mb-6 font-light max-w-3xl">
              {content.desc}
            </p>
          </m.div>

        </div>

        {/* Marquee — kept (transform-based, smooth) */}
        <div className="my-12 border-y border-white/10 bg-white/5 backdrop-blur-sm py-4 overflow-hidden relative w-full">
          <div className="flex whitespace-nowrap animate-marquee-left">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black text-white mx-4 tracking-normal uppercase opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                {content.marqueeText}
              </span>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}