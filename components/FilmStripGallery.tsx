'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function FilmStripGallery({ locale }: { locale: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const scrollPos = useRef(0)

  // ನಿಮ್ಮ 9 ಚಿತ್ರಗಳು
  const memories = [
    '/mem1.png', '/mem2.png', '/mem3.png',
    '/mem4.png', '/mem5.png', '/mem6.png',
    '/mem7.png', '/mem8.png', '/mem9.png'
  ]

  // 3 ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ ನಿರಂತರ ಸ್ಲೈಡಿಂಗ್‌ಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ
  const duplicatedMemories = [...memories, ...memories, ...memories]

  useEffect(() => {
    let lastTime = performance.now()

    const scrollLoop = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      if (!isPaused && scrollRef.current) {
        // 💡 ಸ್ಲೈಡಿಂಗ್ ವೇಗ (50 = ನಿಧಾನ, 100 = ವೇಗ)
        const speed = 50 
        scrollPos.current += (delta / 1000) * speed

        // ಅರ್ಧದಷ್ಟು ಸ್ಕ್ರಾಲ್ ಆದ ಮೇಲೆ ಮತ್ತೆ ಮೊದಲಿಗೆ ರೀಸೆಟ್ ಮಾಡುವುದು (ನಿರಂತರ ಲೂಪ್‌ಗಾಗಿ)
        const maxScroll = scrollRef.current.scrollWidth / 3
        if (scrollPos.current >= maxScroll) {
          scrollPos.current = 0
        }

        scrollRef.current.scrollLeft = scrollPos.current
      }
      animationRef.current = requestAnimationFrame(scrollLoop)
    }

    animationRef.current = requestAnimationFrame(scrollLoop)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPaused])

  // ಎಡ ಮತ್ತು ಬಲ ಆರೋ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollPos.current -= 400
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollPos.current += 400
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full py-10 bg-[#f8fafc] overflow-hidden">
      
      {/* ಹಿನ್ನೆಲೆ ಪ್ಯಾಟರ್ನ್ */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e2e8f0_10px,#e2e8f0_11px)] opacity-50 pointer-events-none"></div>

      {/* Main Film Reel Container - Full Width */}
      <div className="relative w-full bg-[#0a0a0a] py-3 md:py-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Top Sprockets */}
        <div className="absolute top-1 left-0 w-full flex justify-around px-1 opacity-50 pointer-events-none overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="w-2 h-2.5 md:w-3 md:h-3.5 bg-white/20 rounded-[1px]"></div>
          ))}
        </div>

        {/* 
          Images Scroll Container
          💡 onMouseEnter, onTouchStart ಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.
        */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex w-full overflow-x-auto my-2 md:my-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* 
            💡 ಇಲ್ಲಿ gap-0 ಮತ್ತು border-r-[1px] ಇರುವುದರಿಂದ ಚಿತ್ರಗಳ ನಡುವೆ ಯಾವುದೇ ದೊಡ್ಡ ಕಪ್ಪು ಜಾಗ ಇರುವುದಿಲ್ಲ.
          */}
          <div className="flex w-max gap-0">
            {duplicatedMemories.map((img, index) => (
              <div 
                key={index} 
                className="relative h-[180px] sm:h-[220px] md:h-[280px] shrink-0 border-r-[1px] border-[#0a0a0a] bg-black"
                style={{ aspectRatio: '16/9' }}
              >
                <Image
                  src={img}
                  alt={`Memory ${index + 1}`}
                  fill
                  className="object-cover" // ಇಲ್ಲಿ object-cover ಇರುವುದರಿಂದ ಯಾವುದೇ ಕಪ್ಪು ಅಂಚು ಬರುವುದಿಲ್ಲ
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sprockets */}
        <div className="absolute bottom-1 left-0 w-full flex justify-around px-1 opacity-50 pointer-events-none overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="w-2 h-2.5 md:w-3 md:h-3.5 bg-white/20 rounded-[1px]"></div>
          ))}
        </div>

        {/* Left & Right Arrow Buttons */}
        <button 
          onClick={scrollLeft}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-emerald-600 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 shadow-xl"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={scrollRight}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-emerald-600 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 shadow-xl"
          aria-label="Next"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  )
}