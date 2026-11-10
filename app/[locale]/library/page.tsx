import QuoteScrollSection from '@/components/QuoteScrollSection'
import PullStringCard from '@/components/PullStringCard'

export default async function LibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  const content = locale === 'kn' ? {
    title: "ನಮ್ಮ ಗ್ರಂಥಾಲಯ",
    subtitle: "ಜ್ಞಾನ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಸಂಗಮ",
    quote: "ಓದುವುದು ಯಶಸ್ಸಿನ ಮೆಟ್ಟಿಲು. ಜ್ಞಾನವೇ ನಿಜವಾದ ಸಂಪತ್ತು.",
    introTitle: "ವಿದ್ಯಾರ್ಥಿಗಳ ಜ್ಞಾನದ ತಾಣ",
    introDesc: "ಗ್ರಂಥಾಲಯವು ಕೇವಲ ಪುಸ್ತಕಗಳ ಸಂಗ್ರಹವಲ್ಲ; ಅದು ಜ್ಞಾನದ ದೇವಾಲಯ. MOKS ನ ಗ್ರಂಥಾಲಯವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಪಾರವಾದ ಜ್ಞಾನವನ್ನು ಪಡೆಯಲು, ಹೊಸ ಯೋಚನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ಮತ್ತು ತಮ್ಮ ಓದುವಿಕೆಯ ಮೂಲಕ ಸೃಜನಶೀಲತೆಯನ್ನು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಲು ಒಂದು ಶಾಂತವಾದ, ಸ್ಫೂರ್ತಿದಾಯಕ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    
    sec1Title: "ಪ್ರಕಾಶನ ಕೇಂದ್ರ (Publication Hub)",
    sec1Sub: "MOKS ಪ್ರಕಾಶನ ಕೇಂದ್ರ - ಪದಗಳ ಮತ್ತು ಆಲೋಚನೆಗಳ ಶಕ್ತಿಯನ್ನು ಅನಾವರಣಗೊಳಿಸುವುದು",
    sec1Desc: "ಇಲ್ಲಿ ಪದಗಳಿಗೆ ರೆಕ್ಕೆಗಳು ಸಿಗುತ್ತವೆ. ಸೃಜನಶೀಲತೆ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿಯ ಜಗತ್ತಿಗೆ ಕಾಲಿಡಿ. ಬರಹಗಾರರು, ಕವಿಗಳು ಮತ್ತು ಕಥೆಗಾರರಿಗೆ ತಮ್ಮ ಧ್ವನಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮತ್ತು ಅವರ ಆಲೋಚನೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ನಮ್ಮ ಕೇಂದ್ರವು ಆಶ್ರಯ ತಾಣವಾಗಿದೆ. ಆಕರ್ಷಕ ಲೇಖನಗಳು, ಆಲೋಚನಾ ಪ್ರಚೋದಕ ಪ್ರಬಂಧಗಳು ಮತ್ತು ಸ್ಫೂರ್ತಿದಾಯಕ ಸಾಹಿತ್ಯ ಕೃತಿಗಳ ಜಗತ್ತಿನಲ್ಲಿ ಮುಳುಗಿ.",
    
    sec2Title: "MOKS ಭಾಷಾ ಕೇಂದ್ರ (Linguistic Nexus)",
    sec2Sub: "MOKS ಭಾಷಾ ಕೇಂದ್ರ - ವೈವಿಧ್ಯತೆಯ ಆಚರಣೆ, ಸಂಸ್ಕೃತಿಗಳ ಸಂಪರ್ಕ",
    sec2Desc: "ಇಲ್ಲಿ ಭಾಷೆಗಳು ಒಂದಾಗುತ್ತವೆ. ವಿವಿಧ ಭಾಷೆಗಳು, ಸಂಸ್ಕೃತಿಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯಗಳ ವರ್ಣಮಯ ತಾಣದಲ್ಲಿ ಮುಳುಗಿ. ಪರಸ್ಪರ ಕಲಿಕೆಯ ಭಾಷಾ ಕಾರ್ಯಕ್ರಮಗಳಿಂದ ಹಿಡಿದು ಸಾಂಸ್ಕೃತಿಕ ವಿನಿಮಯಗಳವರೆಗೆ, ಭಾಷಾ ವೈವಿಧ್ಯತೆಯನ್ನು ಆಚರಿಸಲು, ಸಾಂಸ್ಕೃತಿಕ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಳೆಸಲು ಮತ್ತು ಜಾಗತಿಕ ತಿಳುವಳಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ನಮ್ಮ ಕೇಂದ್ರವು ಸ್ವಾಗತಾರ್ಹ ಸ್ಥಳವಾಗಿದೆ. ಭಾಷಾ ಅನ್ವೇಷಣೆಯ ಪ್ರಯಾಣದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ.",
  } : {
    title: "Our Library",
    subtitle: "A Confluence of Knowledge and Culture",
    quote: "Reading is the ladder to success. Knowledge is the true wealth.",
    introTitle: "A Sanctuary of Knowledge for Students",
    introDesc: "The library is not just a collection of books; it is a temple of knowledge. The MOKS Library provides a calm, inspiring environment for students to gain vast knowledge, explore new ideas, and enhance their creativity through reading.",
    
    sec1Title: "Publication Hub",
    sec1Sub: "MOKS Publication Hub - Unleashing the Power of Words and Ideas",
    sec1Desc: "Where Words Find Wings. Step into a realm of creativity, innovation, and expression. Our hub is a sanctuary for writers, poets, and storytellers to share their voices and amplify their ideas. Immerse yourself in a world of captivating articles, thought-provoking essays, and inspiring literary works.",
    
    sec2Title: "MOKS Linguistic Nexus",
    sec2Sub: "MOKS Language Hub - Celebrating Diversity, Connecting Cultures",
    sec2Desc: "Where Languages Unite. Immerse yourself in a vibrant tapestry of diverse languages, cultures, and traditions. From interactive language learning programs to cultural exchanges, our hub serves as a welcoming space to celebrate linguistic diversity, foster cross-cultural connections, and promote global understanding. Join us on a journey of linguistic exploration and expand your horizons at the MOKS Language Hub.",
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#0a192f] pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

        {/* Floating 3D Books */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[5%] animate-float-book-1 opacity-40">
            <div className="w-16 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-md shadow-2xl border-l-4 border-emerald-300 flex items-center justify-center transform rotate-12">
              <div className="w-10 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-[40%] left-[15%] animate-float-book-2 opacity-30">
            <div className="w-20 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md shadow-2xl border-l-4 border-blue-300 flex items-center justify-center transform -rotate-12">
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-book-3 opacity-40">
            <div className="w-24 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md shadow-2xl border-l-4 border-amber-300 flex items-center justify-center transform rotate-45">
              <div className="w-14 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight animate-fade-in-up drop-shadow-2xl">
            {content.title}
          </h1>
          <p className="text-sm md:text-xl text-emerald-400 font-bold tracking-widest uppercase animate-fade-in-up animation-delay-100 mb-8">
            {content.subtitle}
          </p>
          <div className="animate-fade-in-up animation-delay-200 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg md:text-2xl font-light italic">
              "{content.quote}"
            </p>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section (existing card) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 z-20">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/60 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative overflow-hidden group text-center">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-white group-hover:-translate-y-2 transition-transform duration-500">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
              {content.introTitle}
            </h2>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto text-justify md:text-center">
              {content.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Founder Info Section (QuoteScrollSection) */}
      <QuoteScrollSection locale={locale} />

      {/* 4. PULL-STRING LIGHT CARD (below founder section) */}
      <div className="pt-16">
        <PullStringCard key={locale} locale={locale} />
      </div>

      {/* 5. Main Content Section */}
      <section className="pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="relative group animate-fade-in-up">
            <div className="absolute -top-16 -left-8 text-9xl md:text-[150px] font-black text-slate-200/50 select-none z-0 group-hover:text-emerald-100/80 transition-colors duration-500">01</div>
            <div className="relative z-10 pl-6 md:pl-10 border-l-4 border-emerald-500">
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">{content.sec1Title}</h2>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">{content.sec1Sub}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white">{content.sec1Desc}</p>
            </div>
          </div>

          <div className="relative group animate-fade-in-up">
            <div className="absolute -top-16 -left-8 text-9xl md:text-[150px] font-black text-slate-200/50 select-none z-0 group-hover:text-blue-100/80 transition-colors duration-500">02</div>
            <div className="relative z-10 pl-6 md:pl-10 border-l-4 border-blue-500">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">{content.sec2Title}</h2>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">{content.sec2Sub}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white">{content.sec2Desc}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}