'use client'
import { useState, useRef } from 'react'

export default function PullStringCard({ locale = 'kn' }: { locale?: string }) {
  const [isOn, setIsOn] = useState(false)
  const [pulling, setPulling] = useState(false)
  const [pullDist, setPullDist] = useState(0)
  const startY = useRef(0)

  const MAX_PULL = 70

  const onPointerDown = (e: React.PointerEvent) => {
    setPulling(true)
    startY.current = e.clientY
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pulling) return
    const dy = Math.max(0, Math.min(MAX_PULL, e.clientY - startY.current))
    setPullDist(dy)
  }

  const onPointerUp = () => {
    if (!pulling) return
    setPulling(false)
    if (pullDist > MAX_PULL * 0.6) {
      setIsOn(prev => !prev)
    }
    setPullDist(0)
  }

  const bgLuminance = isOn ? 250 : 12
  const stringLen = 45 + pullDist

  const text = locale === 'kn'
    ? "ನಿಮ್ಮ ಕನಸುಗಳಿಗೆ ದಾರಿ ತೋರಿಸುವ ಶಕ್ತಿ ಜ್ಞಾನಕ್ಕಿದೆ, ಜ್ಞಾನಕ್ಕೆ ದಿಕ್ಕು ತೋರುವ ಬಲ ಓದಿಗಿದೆ! ಹೊಸತನ್ನು ತಿಳಿಯಿರಿ, ಆಲೋಚನೆಗಳನ್ನು ವಿಸ್ತರಿಸಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಜ್ಞಾನದ ಪಯಣಕ್ಕೆ ಜೊತೆಯಿದೆ ನಮ್ಮ MOKS Library!"
    : "Knowledge has the power to show the way to your dreams, and reading has the strength to give knowledge its direction! Discover the new, expand your thoughts. Our MOKS Library is with you on your journey of knowledge!"

  const footerLabel = locale === 'kn' ? 'MOKS ಗ್ರಂಥಾಲಯ' : 'MOKS Library'
  const onLabel = locale === 'kn' ? 'ಆನ್' : 'ON'
  const offLabel = locale === 'kn' ? 'ಆಫ್' : 'OFF'
  const hintLabel = locale === 'kn' ? 'ಬೆಳಕು ಹಚ್ಚಲು ಎಳೆಯಿರಿ' : 'Pull to switch on'

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-[360px] max-w-full">
        {/* Inner dark/bright surface — compact when OFF, grows to fit text when ON */}
        <div
          className="relative rounded-3xl overflow-hidden flex items-center justify-center"
          style={{
            height: isOn ? 'auto' : '220px',
            minHeight: isOn ? '220px' : undefined,
            backgroundColor: `rgb(${bgLuminance}, ${bgLuminance}, ${bgLuminance})`,
            transition:
              'background-color 500ms ease, box-shadow 500ms ease, height 500ms ease, min-height 500ms ease',
            boxShadow: isOn
              ? '0 25px 60px -10px rgba(251,191,36,0.35), 0 0 0 1px rgba(255,255,255,0.15)'
              : '0 25px 50px -12px rgba(0,0,0,0.7)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 20%, rgba(255,255,255,${
                isOn ? 0.55 : 0
              }), transparent 70%)`,
              transition: 'background 500ms ease',
            }}
          />

          {/* Content — only rendered when ON, so it defines the height */}
          {isOn && (
            <div className="relative z-10 w-full p-8 pr-16">
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-slate-900 text-center">
                {text}
              </p>

              <div className="w-16 h-1 bg-emerald-400/70 rounded-full mx-auto my-6" />

              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                <span className="text-xs font-medium text-slate-600">{footerLabel}</span>
              </div>
            </div>
          )}
        </div>

        {/* === PULL STRING — inside card, offset to the right === */}
        <div
          className="absolute z-20 flex flex-col items-center select-none"
          style={{ top: '10px', right: '26px' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-slate-400 border border-slate-500" />

          <div
            className="w-[3px] bg-gradient-to-b from-slate-500 to-slate-700 rounded-full"
            style={{
              height: `${stringLen}px`,
              transition: pulling ? 'none' : 'height 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />

          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className={`w-8 h-8 rounded-full border-2 shadow-lg cursor-grab active:cursor-grabbing touch-none -mt-1 transition-all ${
              isOn
                ? 'bg-gradient-to-br from-yellow-300 to-amber-500 border-amber-600 shadow-[0_0_16px_rgba(251,191,36,0.7)]'
                : 'bg-gradient-to-br from-slate-400 to-slate-600 border-slate-700'
            } ${pulling ? 'scale-110' : 'scale-100'}`}
            title={hintLabel}
          />

          <span
            className={`text-[9px] uppercase tracking-widest mt-1.5 font-semibold ${
              isOn ? 'text-amber-600' : 'text-slate-400'
            }`}
          >
            {isOn ? onLabel : offLabel}
          </span>
        </div>
      </div>
    </div>
  )
}