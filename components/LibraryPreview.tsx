import Image from 'next/image'
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
    <section className="relative py-20 bg-[#f8fafc] overflow-hidden">
      
      {/* Modern subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container (Modern Glass/Shadow) */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Side: Poster Image with Modern Frame */}
            <div className="w-full lg:w-[45%] relative group">
              {/* Image Container */}
              <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 shadow-md">
                <Image
                  src="/libr.png"
                  alt={content.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Floating Modern Badge on Image */}
              <div className="absolute -bottom-5 -right-2 md:-right-5 bg-white border border-slate-100 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">MOKS</p>
                  <p className="text-sm font-black text-slate-800">Library</p>
                </div>
              </div>
            </div>

            {/* Right Side: Text Section */}
            <div className="w-full lg:w-[55%] relative z-30">
              <div className="text-center lg:text-left">
                
                {/* Subtitle Badge */}
                <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-bold tracking-wider uppercase mb-5 border border-emerald-100">
                  {content.subtitle}
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                  {content.title}
                </h2>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify lg:text-left mb-10 font-medium">
                  {content.desc}
                </p>

                <Link href={`/${locale}/library`}
                  className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30">
                  {content.btn}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}