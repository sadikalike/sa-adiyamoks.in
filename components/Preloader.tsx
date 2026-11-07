'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // 2.5 ಸೆಕೆಂಡುಗಳ ನಂತರ ಫೇಡ್ ಔಟ್ ಪ್ರಾರಂಭಿಸು
    const timer1 = setTimeout(() => {
      setFadeOut(true)
    }, 2500)

    // 3 ಸೆಕೆಂಡುಗಳ ನಂತರ ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕು
    const timer2 = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!loading) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B14] transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        
        {/* 
          Modern Logo Animation 
          ಇಲ್ಲಿ ಲೋಗೋ ಚೌಕಾಕಾರದ (Rounded Square) ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಬರುತ್ತದೆ.
          ಜೊತೆಗೆ ಸುತ್ತಲೂ ಬೆಳಕಿನ ಅಲೆ (Glow Ring) ಹೊರಹೊಮ್ಮುತ್ತದೆ.
        */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          
          {/* ಹೊರಗಿನ ಬೆಳಕಿನ ಅಲೆ (Pulsing Glow Ring) */}
          <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-3xl animate-ping-slow"></div>
          <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-xl animate-pulse"></div>

          {/* ಲೋಗೋ ಬಾಕ್ಸ್ (Rounded Square) */}
          <div className="relative w-24 h-24 bg-white rounded-3xl p-2 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-scale-up flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="MOKS Logo" 
              width={80} 
              height={80} 
              className="object-contain" 
              priority
            />
          </div>
        </div>

      </div>
    </div>
  )
}