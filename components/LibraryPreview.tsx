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
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10 hidden md:block"></div>
      <div className="absolute top-10 right-10 text-emerald-100 text-9xl transform rotate-12 -z-10">📚</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* 
            Left Side: Creative Library Illustration 
            ಇಲ್ಲಿ ಮೇಜು, ಪುಸ್ತಕಗಳು ಮತ್ತು ಓದುತ್ತಿರುವ ವ್ಯಕ್ತಿಯನ್ನು CSS ನಿಂದ ವಿನ್ಯಾಸ ಮಾಡಲಾಗಿದೆ.
          */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            
            {/* Main Illustration Box */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[3rem] shadow-2xl border-4 border-white overflow-hidden group p-8 flex flex-col justify-end items-center">
              
              {/* Glowing Window Light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              
              {/* Bookshelf Background */}
              <div className="absolute top-10 left-10 right-10 h-40 border-b-4 border-slate-300 flex items-end gap-2 opacity-40">
                <div className="w-4 h-24 bg-blue-400 rounded-t-sm"></div>
                <div className="w-3 h-20 bg-emerald-400 rounded-t-sm"></div>
                <div className="w-5 h-28 bg-amber-400 rounded-t-sm"></div>
                <div className="w-4 h-16 bg-rose-400 rounded-t-sm"></div>
                <div className="w-6 h-24 bg-purple-400 rounded-t-sm"></div>
              </div>

              {/* Table */}
              <div className="relative w-full h-8 bg-slate-700 rounded-md shadow-xl z-20 flex justify-center">
                {/* Table Legs */}
                <div className="absolute -bottom-10 left-4 w-3 h-10 bg-slate-800"></div>
                <div className="absolute -bottom-10 right-4 w-3 h-10 bg-slate-800"></div>

                {/* Books on Table */}
                <div className="absolute -top-6 left-10 w-16 h-4 bg-emerald-500 rounded-sm transform -rotate-6 shadow-md border-l-2 border-emerald-300"></div>
                <div className="absolute -top-10 left-12 w-14 h-4 bg-amber-500 rounded-sm transform rotate-3 shadow-md border-l-2 border-amber-300"></div>
                <div className="absolute -top-3 right-10 w-12 h-3 bg-blue-500 rounded-sm transform rotate-12 shadow-md border-l-2 border-blue-300"></div>
              </div>

              {/* Person Reading (Icon/Avatar) */}
              <div className="relative z-30 mb-2 flex flex-col items-center animate-float-3d">
                {/* Head */}
                <div className="w-10 h-10 bg-amber-200 rounded-full mb-1 border-2 border-white shadow-sm"></div>
                {/* Body (Shoulders) */}
                <div className="w-20 h-16 bg-emerald-600 rounded-t-2xl flex items-start justify-center pt-2">
                  {/* Open Book */}
                  <div className="w-12 h-8 flex justify-center items-center">
                    <div className="w-6 h-8 bg-white rounded-l-md border-r border-slate-300 transform origin-right -rotate-12 shadow-sm"></div>
                    <div className="w-6 h-8 bg-white rounded-r-md border-l border-slate-300 transform origin-left rotate-12 shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-10 text-2xl animate-bounce">📖</div>
              <div className="absolute top-32 right-12 text-2xl animate-bounce animation-delay-2000">✒️</div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2">
            <span className="inline-block py-1 px-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">
              {locale === 'kn' ? 'ಗ್ರಂಥಾಲಯ' : 'Library'}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-emerald-600 font-bold mb-4">{content.subtitle}</p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify mb-10">
              {content.desc}
            </p>
            
            <Link
              href={`/${locale}/library`}
              className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:-translate-y-1"
            >
              {content.btn}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}