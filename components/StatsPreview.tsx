'use client'

import { useEffect, useState, useRef } from 'react'

export default function StatsPreview({ locale }: { locale: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const stats = [
    { 
      value: 30, 
      suffix: '+', 
      labelKn: 'ವರ್ಷಗಳ ಸೇವೆ', 
      labelEn: 'Years of Service',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/5'
    },
    { 
      value: 2000, 
      suffix: '+', 
      labelKn: 'ವಿದ್ಯಾರ್ಥಿಗಳು', 
      labelEn: 'Students Mentored',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-500/10 to-indigo-500/5'
    },
    { 
      value: 100, 
      suffix: '+', 
      labelKn: 'ಯೋಜನೆಗಳು', 
      labelEn: 'Projects Completed',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/5'
    },
  ]

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-[#0a192f] overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 
          Mobile: grid-cols-1 (ಲಂಬವಾಗಿ)
          Laptop: md:grid-cols-3 (ಅಡ್ಡವಾಗಿ)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              // ಕಾರ್ಡ್ ವಿನ್ಯಾಸ: ಮೊಬೈಲ್‌ನಲ್ಲಿ ಸುಂದರವಾದ ಗಾಜಿನ ಕಾರ್ಡ್
              className="relative group flex flex-col items-center justify-center p-8 md:p-10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2.5rem] shadow-2xl hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* ಆಂತರಿಕ ಬಣ್ಣದ ಗ್ಲೋ */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* ಐಕಾನ್ (Icon) */}
              <div className={`${stat.color} mb-4 md:mb-6 p-4 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 z-10`}>
                {stat.icon}
              </div>

              {/* ಸಂಖ್ಯೆ ಮತ್ತು ಲೇಬಲ್ */}
              <div className="flex flex-col items-center z-10 text-center">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-lg tracking-tighter">
                    {isVisible ? <Counter target={stat.value} duration={2500} /> : '0'}
                  </span>
                  <span className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-slate-300 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                  {locale === 'kn' ? stat.labelKn : stat.labelEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// Counter Animation Component
function Counter({ target, duration }: { target: number; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration])

  return <>{count}</>
}