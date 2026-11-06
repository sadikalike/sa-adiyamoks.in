import Link from 'next/link'

export default function LibraryPreview({ locale }: { locale: string }) {
  const content = locale === 'kn' ? {
    title: "ನಮ್ಮ ಗ್ರಂಥಾಲಯ",
    subtitle: "ಜ್ಞಾನ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಸಂಗಮ",
    desc: "ಗ್ರಂಥಾಲಯವು ಕೇವಲ ಪುಸ್ತಕಗಳ ಸಂಗ್ರಹವಲ್ಲ; ಅದು ಜ್ಞಾನದ ದೇವಾಲಯ. MOKS ನ ಗ್ರಂಥಾಲಯವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಪಾರವಾದ ಜ್ಞಾನವನ್ನು ಪಡೆಯಲು, ಹೊಸ ಯೋಚನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ಮತ್ತು ತಮ್ಮ ಓದುವಿಕೆಯ ಮೂಲಕ ಸೃಜನಶೀಲತೆಯನ್ನು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಲು ಒಂದು ಶಾಂತವಾದ, ಸ್ಫೂರ್ತಿದಾಯಕ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    btn: "ಗ್ರಂಥಾಲಯ ನೋಡಿ"
  } : {
    title: "Our Library",
    subtitle: "A Confluence of Knowledge and Culture",
    desc: "The library is not just a collection of books; it is a temple of knowledge. The MOKS Library provides a calm, inspiring environment for students to gain vast knowledge, explore new ideas, and enhance their creativity through reading.",
    btn: "Visit Library"
  }

  return (
    <section className="relative py-16 bg-[#f8fafc] overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50"></div>
              
              <div className="relative z-10 w-48 h-64 md:w-56 md:h-72 animate-float-3d">
                <div className="absolute inset-0 bg-emerald-900 rounded-r-xl shadow-2xl transform translate-x-2 translate-y-2"></div>
                <div className="absolute inset-y-1 right-0 w-4 bg-slate-100 rounded-r-md border-y border-slate-200"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-xl shadow-inner flex flex-col items-center justify-center p-6 border-l-8 border-emerald-900/50">
                  <svg className="w-16 h-16 text-white/80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div className="w-16 h-1 bg-white/30 rounded-full mb-2"></div>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-10 right-10 text-emerald-500/50 text-4xl animate-pulse">✨</div>
              <div className="absolute bottom-10 left-10 text-blue-500/50 text-4xl animate-pulse animation-delay-2000">✨</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              {content.title}
            </h2>
            
            <p className="text-lg md:text-xl text-emerald-600 font-bold mb-6">
              {content.subtitle}
            </p>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify lg:text-left mb-10">
              {content.desc}
            </p>
            
            <Link href={`/${locale}/library`}
              className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                {content.btn}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}