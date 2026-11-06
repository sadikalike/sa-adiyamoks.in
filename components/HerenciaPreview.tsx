'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function HerenciaPreview({ locale }: { locale: string }) {
  const [currentPoster, setCurrentPoster] = useState(1)

  // ಪ್ರತಿ 5 ಸೆಕೆಂಡುಗಳಿಗೆ (5000ms) ಒಮ್ಮೆ ಪೋಸ್ಟರ್ ಬದಲಾಗುತ್ತದೆ
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
    btn: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    marqueeText: "MOKS • 30 YEARS OF EXCELLENCE • "
  } : {
    tag: "HERENCIA",
    title: "Celebrating Three Decades of Success",
    desc: "In the 30-year long journey since MOKS was founded, we have continuously nurtured a beautiful legacy of knowledge, culture and unity. As we celebrate the momentous occasion of shaping the bright futures of hundreds of students, let us cherish all our proud moments together.",
    btn: "Discover More",
    marqueeText: "MOKS • 30 YEARS OF EXCELLENCE • "
  }

  return (
    <section className="relative py-20 bg-[#0a192f] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full filter blur-[120px] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 1. ಹೆರೆನ್ಸಿಯಾ ಶೀರ್ಷಿಕೆ */}
        <div className="flex flex-col items-center justify-center mb-6 animate-fade-in-up">
          <span className="inline-block py-2 px-6 rounded-full bg-amber-500/10 text-amber-400 text-sm md:text-base font-bold tracking-widest uppercase border border-amber-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            {content.tag}
          </span>
        </div>

        {/* 2. ಪೋಸ್ಟರ್, ದಾರ ಮತ್ತು ಪಿನ್ */}
        <div className="flex flex-col items-center w-full -mt-2">
          
          {/* ಪಿನ್ (Pin Point) */}
          <div className="relative z-20 flex flex-col items-center mt-0">
            <div className="w-2.5 h-2.5 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-white"></div>
            <div className="w-1.5 h-1.5 bg-black/50 rounded-full blur-[1px] mt-0.5"></div>
          </div>

          {/* ದಾರ (String) */}
          <div className="w-[1.5px] h-16 bg-gradient-to-b from-slate-300 to-slate-500 shadow-[0_0_5px_rgba(255,255,255,0.2)]"></div>

          {/* ಪೋಸ್ಟರ್ ಕಂಟೇನರ್ (Swinging) */}
          <div className="relative w-full max-w-sm animate-swing z-10 mt-[-2px] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            
            <div className="relative w-full aspect-[4/5] bg-slate-900">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentPoster}
                  initial={{ x: '-100%' }} 
                  animate={{ x: 0 }}       
                  exit={{ x: '100%' }}     
                  transition={{ duration: 1.2, ease: 'easeInOut' }} 
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={currentPoster === 1 ? "/erenpost.png" : "/ereiqqu.png"} 
                    alt={`Herencia Poster ${currentPoster}`} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4. ಲೋಗೋ, ಹೆಡಿಂಗ್ ಮತ್ತು ಟೆಕ್ಸ್ಟ್ */}
        <div className="flex flex-col items-center text-center mt-12">
          <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6 animate-fade-in-up">
            <Image src="/erenlogo.png" alt="Herencia Logo" fill className="object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up animation-delay-200">
            {content.title}
          </h2>
          <p className="text-amber-100/70 text-lg md:text-xl leading-relaxed text-center mb-10 font-light animate-fade-in-up animation-delay-300 max-w-3xl">
            {content.desc}
          </p>
          <Link href={`/${locale}/about`} className="group relative inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transform hover:-translate-y-1 animate-fade-in-up animation-delay-400">
            {content.btn}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>

      {/* 3. RUNNING TEXT (Marquee) */}
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
  )
}