'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar({ locale, dict }: { locale: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const other = locale === 'kn' ? 'en' : 'kn'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '', label: dict.nav.home },
    { href: '/visionaries', label: dict.nav.visionaries },
    { href: '/about', label: dict.nav.about },
    { href: '/faculties', label: dict.nav.faculties },
    { href: '/gallery', label: dict.nav.gallery },
    { href: '/library', label: dict.nav.library },
    { href: '/contact', label: dict.nav.contact },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a192f]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 border-b border-white/10' 
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo & Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          
          {/* 
            Logo Image Box: 
            ಇಲ್ಲಿ ಬಾಕ್ಸ್ ಸೈಜ್ ಅನ್ನು w-10 h-10 ಗೆ ಸ್ವಲ್ಪ ದೊಡ್ಡದಾಗಿಸಲಾಗಿದೆ.
            ಒಳಗಿನ ಇಮೇಜ್‌ಗೆ scale-100 ಕೊಟ್ಟಿರುವುದರಿಂದ ಇಮೇಜ್ ಜೂಮ್ ಆಗುವುದಿಲ್ಲ (ಸೈಜ್ ಹಾಗೆಯೇ ಇರುತ್ತದೆ).
          */}
          <div className="relative w-10 h-10 bg-white/95 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500 shrink-0 border border-white/20 overflow-hidden flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="MOKS Logo" 
              width={40}
              height={40}
              className="object-contain scale-100" 
              priority 
            />
          </div>
          
          {/* Text Container */}
          <div className="flex flex-col justify-center">
            
            {/* MOKS ಫಾಂಟ್ */}
            <span 
              style={{ 
                fontFamily: '"Arial Black", Impact, sans-serif',
                fontWeight: 900,
              }}
              className={`text-white leading-none drop-shadow-md group-hover:text-emerald-400 transition-colors duration-300 ${
                locale === 'kn' ? 'text-[32px]' : 'text-[28px]'
              }`}
            >
              MOKS
            </span>
            
            {/* Subline */}
            <span 
              lang={locale} 
              className={`text-emerald-400 font-bold tracking-[0.15em] leading-none opacity-95 uppercase whitespace-nowrap
                ${locale === 'kn' ? 'text-[11px] -mt-1' : 'text-[10px] mt-[1px]'}`}
            >
              {locale === 'kn' ? 'ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ' : 'KARNATAKA STUDENTS'}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 shadow-inner">
          {links.map((l) => {
            const isActive = pathname === `/${locale}${l.href}` || (l.href !== '' && pathname.startsWith(`/${locale}${l.href}`));
            return (
              <Link 
                key={l.href} 
                href={`/${locale}${l.href}`} 
                lang={locale}
                className={`relative px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-white/15 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link 
            href={`/${other}`} 
            className="group relative flex items-center gap-2 text-xs font-bold bg-white/5 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full transition-all duration-300 border border-white/10 hover:border-emerald-500 shadow-lg backdrop-blur-md overflow-hidden"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-emerald-200"></span>
            </span>
            <span className="relative z-10 tracking-wide font-bold">
              {other === 'en' ? 'English' : 'ಕನ್ನಡ'}
            </span>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-emerald-400 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="m-4 p-4 bg-[#0a192f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl space-y-1">
          {links.map((l) => {
             const isActive = pathname === `/${locale}${l.href}`;
             return (
              <Link
                key={l.href}
                href={`/${locale}${l.href}`}
                onClick={() => setIsOpen(false)}
                lang={locale}
                className={`flex items-center justify-between px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 text-emerald-400 border border-emerald-500/20' 
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}