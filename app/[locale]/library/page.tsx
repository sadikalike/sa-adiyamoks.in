export default async function LibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  // ನಿಮ್ಮ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನಲ್ಲಿರುವ ಪಠ್ಯ
  const content = locale === 'kn' ? {
    title: "ನಮ್ಮ ಗ್ರಂಥಾಲಯ",
    subtitle: "ಜ್ಞಾನ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಸಂಗಮ",
    
    sec1Title: "ಪ್ರಕಾಶನ ಕೇಂದ್ರ (Publication Hub)",
    sec1Sub: "MOKS ಪ್ರಕಾಶನ ಕೇಂದ್ರ - ಪದಗಳ ಮತ್ತು ಆಲೋಚನೆಗಳ ಶಕ್ತಿಯನ್ನು ಅನಾವರಣಗೊಳಿಸುವುದು",
    sec1Desc: "ಇಲ್ಲಿ ಪದಗಳಿಗೆ ರೆಕ್ಕೆಗಳು ಸಿಗುತ್ತವೆ. ಸೃಜನಶೀಲತೆ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿಯ ಜಗತ್ತಿಗೆ ಕಾಲಿಡಿ. ಬರಹಗಾರರು, ಕವಿಗಳು ಮತ್ತು ಕಥೆಗಾರರಿಗೆ ತಮ್ಮ ಧ್ವನಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮತ್ತು ಅವರ ಆಲೋಚನೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ನಮ್ಮ ಕೇಂದ್ರವು ಆಶ್ರಯ ತಾಣವಾಗಿದೆ. ಆಕರ್ಷಕ ಲೇಖನಗಳು, ಆಲೋಚನಾ ಪ್ರಚೋದಕ ಪ್ರಬಂಧಗಳು ಮತ್ತು ಸ್ಫೂರ್ತಿದಾಯಕ ಸಾಹಿತ್ಯ ಕೃತಿಗಳ ಜಗತ್ತಿನಲ್ಲಿ ಮುಳುಗಿ.",
    
    sec2Title: "MOKS ಭಾಷಾ ಕೇಂದ್ರ (Linguistic Nexus)",
    sec2Sub: "MOKS ಭಾಷಾ ಕೇಂದ್ರ - ವೈವಿಧ್ಯತೆಯ ಆಚರಣೆ, ಸಂಸ್ಕೃತಿಗಳ ಸಂಪರ್ಕ",
    sec2Desc: "ಇಲ್ಲಿ ಭಾಷೆಗಳು ಒಂದಾಗುತ್ತವೆ. ವಿವಿಧ ಭಾಷೆಗಳು, ಸಂಸ್ಕೃತಿಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯಗಳ ವರ್ಣಮಯ ತಾಣದಲ್ಲಿ ಮುಳುಗಿ. ಪರಸ್ಪರ ಕಲಿಕೆಯ ಭಾಷಾ ಕಾರ್ಯಕ್ರಮಗಳಿಂದ ಹಿಡಿದು ಸಾಂಸ್ಕೃತಿಕ ವಿನಿಮಯಗಳವರೆಗೆ, ಭಾಷಾ ವೈವಿಧ್ಯತೆಯನ್ನು ಆಚರಿಸಲು, ಸಾಂಸ್ಕೃತಿಕ ಸಂಪರ್ಕಗಳನ್ನು ಬೆಳೆಸಲು ಮತ್ತು ಜಾಗತಿಕ ತಿಳುವಳಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ನಮ್ಮ ಕೇಂದ್ರವು ಸ್ವಾಗತಾರ್ಹ ಸ್ಥಳವಾಗಿದೆ. ಭಾಷಾ ಅನ್ವೇಷಣೆಯ ಪ್ರಯಾಣದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ.",
  } : {
    title: "Our Library",
    subtitle: "A Confluence of Knowledge and Culture",
    
    sec1Title: "Publication Hub",
    sec1Sub: "MOKS Publication Hub - Unleashing the Power of Words and Ideas",
    sec1Desc: "Where Words Find Wings. Step into a realm of creativity, innovation, and expression. Our hub is a sanctuary for writers, poets, and storytellers to share their voices and amplify their ideas. Immerse yourself in a world of captivating articles, thought-provoking essays, and inspiring literary works.",
    
    sec2Title: "MOKS Linguistic Nexus",
    sec2Sub: "MOKS Language Hub - Celebrating Diversity, Connecting Cultures",
    sec2Desc: "Where Languages Unite. Immerse yourself in a vibrant tapestry of diverse languages, cultures, and traditions. From interactive language learning programs to cultural exchanges, our hub serves as a welcoming space to celebrate linguistic diversity, foster cross-cultural connections, and promote global understanding. Join us on a journey of linguistic exploration and expand your horizons at the MOKS Language Hub.",
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section (ಮುಖ್ಯ ಶೀರ್ಷಿಕೆ) */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight animate-fade-in-up">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-emerald-400 font-bold tracking-widest uppercase animate-fade-in-up animation-delay-100">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Section (ಕೇವಲ ಪಠ್ಯ) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Publication Hub */}
          <div className="relative group animate-fade-in-up">
            {/* ಅಲಂಕಾರಿಕ ಸಂಖ್ಯೆ */}
            <div className="absolute -top-10 -left-6 text-8xl font-black text-slate-200/50 select-none z-0 group-hover:text-emerald-100 transition-colors duration-500">
              01
            </div>
            
            <div className="relative z-10 pl-4 border-l-4 border-emerald-500">
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">
                {content.sec1Title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {content.sec1Sub}
              </h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify">
                {content.sec1Desc}
              </p>
            </div>
          </div>

          {/* Linguistic Nexus */}
          <div className="relative group animate-fade-in-up">
            {/* ಅಲಂಕಾರಿಕ ಸಂಖ್ಯೆ */}
            <div className="absolute -top-10 -left-6 text-8xl font-black text-slate-200/50 select-none z-0 group-hover:text-blue-100 transition-colors duration-500">
              02
            </div>
            
            <div className="relative z-10 pl-4 border-l-4 border-blue-500">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">
                {content.sec2Title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {content.sec2Sub}
              </h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify">
                {content.sec2Desc}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}