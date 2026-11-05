import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  // ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಪಠ್ಯ
  const content = locale === 'kn' ? {
    title: "MOKS ಬಗ್ಗೆ",
    subtitle: "ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಹೃದಯಭಾಗದಲ್ಲಿ ಕನ್ನಡದ ವೈಭವವನ್ನು ಬೆಳೆಸುವ ವೇದಿಕೆ",
    p1: "MOKS – ಮಿಸ್ಬಾಹುಸ್ಸುಆದಾ ಆರ್ಗನೈಸೇಶನ್ ಆಫ್ ಸಅದಿಯ್ಯಾ ಕನ್ನಡ ಸ್ಟೂಡೆಂಟ್ಸ್ (Misbahussuada Organization of Sa'adiya Kannada Students) ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಪ್ರತಿಷ್ಠಿತ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಘಟನೆಯಾಗಿದೆ. ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾದ ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾ ಹಲವು ತಲೆಮಾರುಗಳಿಗೆ ಜ್ಞಾನ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ಮಹತ್ವದ ವಿದ್ಯಾಕೇಂದ್ರವಾಗಿದೆ.",
    p2: "ತಾಜುಲ್ ಉಲಮಾ ಮತ್ತು ನೂರುಲ್ ಉಲಮಾ ಅವರ ದೂರದೃಷ್ಟಿ ಹಾಗೂ ಕನ್ನಡ ಭಾಷೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವ ಮಹತ್ತರ ಆಶಯದೊಂದಿಗೆ MOKS ಸ್ಥಾಪನೆಯಾಯಿತು. ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಜ್ಞಾನ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನಕ್ಕೆ ಪೂರಕವಾದ ವೇದಿಕೆಯಾಗಿ ಸಂಸ್ಥೆಯು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ.",
    p3: "ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ, ನಾಯಕತ್ವದ ಗುಣಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಆದ್ಯತೆ ನೀಡುವ MOKS, ವಿವಿಧ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳು ಹಾಗೂ ಹಲವು ಅಭಿವೃದ್ಧಿಪರ ಯೋಜನೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಮೇಲಿನ ಅಭಿಮಾನವನ್ನು ಬೆಳೆಸುವುದರ ಜೊತೆಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು ಸಮಾಜಕ್ಕೆ ಅರ್ಥಪೂರ್ಣ ಕೊಡುಗೆ ನೀಡುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.",
    p4: "ಏಕತೆ ಮತ್ತು ವೈವಿಧ್ಯತೆಯೇ ನಮ್ಮ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಶಕ್ತಿಯಾಗಿದೆ. ವಿವಿಧ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಿ, ಸ್ನೇಹ, ಸಹಕಾರ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.",
    p5: "MOKS‌ನ ಮಾರ್ಗದರ್ಶಕ ಶಕ್ತಿಯಾಗಿ MSSA ಸಂಸ್ಥೆಯ ಸದಸ್ಯರಲ್ಲಿ ಗುರುತು, ಉದ್ದೇಶ ಮತ್ತು ಒಗ್ಗಟ್ಟಿನ ಭಾವನೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಸಂರಕ್ಷಣೆ, ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ಏಕತೆಯ ಮೌಲ್ಯಗಳನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವಲ್ಲಿ MOKS ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದೆ.",
    ctaTitle: "MOKS ಜೊತೆ ಕೈಜೋಡಿಸಿ",
    ctaText: "ನಿಮ್ಮ ಪ್ರತಿಭೆಗಳನ್ನು ಅನಾವರಣಗೊಳಿಸಿ, ಹೊಸ ಅವಕಾಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಸಮಾಜದಲ್ಲಿ ಸಕಾರಾತ್ಮಕ ಬದಲಾವಣೆಗೆ ಕಾರಣರಾಗಿ. ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಪವಿತ್ರ ವಿದ್ಯಾಂಗಣದಲ್ಲಿ ಕನ್ನಡದ ಪ್ರತಿಭೆ ಮತ್ತು ವೈಭವವನ್ನು ಬೆಳಗಿಸೋಣ.",
    ctaButton: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    
    // ಹೆರೆನ್ಸಿಯಾ ವಿಭಾಗದ ಪಠ್ಯ
    herenciaTag: "ಹೆರೆನ್ಸಿಯಾ (Herencia)",
    herenciaTitle: "ಮೂರು ದಶಕಗಳ ಸಾಧನೆ",
    herenciaDesc: "MOKS ಸ್ಥಾಪನೆಯಾದ 30 ವರ್ಷಗಳ ಸುದೀರ್ಘ ಪಯಣದಲ್ಲಿ, ನಾವು ಜ್ಞಾನ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಏಕತೆಯ ಸುಂದರ ಪರಂಪರೆಯನ್ನು ನಿರಂತರವಾಗಿ ಬೆಳೆಸಿಕೊಂಡು ಬಂದಿದ್ದೇವೆ. ನೂರಾರು ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರಕಾಶಮಾನ ಭವಿಷ್ಯಕ್ಕೆ ಕಾರಣರಾಗಿರುವ ಈ ಸಂಭ್ರಮದ ಸಂದರ್ಭದಲ್ಲಿ, ನಮ್ಮೆಲ್ಲರ ಹೆಮ್ಮೆಯ ಕ್ಷಣಗಳನ್ನು ಆಚರಿಸೋಣ."
  } : {
    title: "About MOKS",
    subtitle: "Nurturing Kannada Brilliance at the Heart of Jamia Sa'adiya Arabia",
    p1: "MOKS – Misbahussuada Organization of Sa'adiya Kannada Students is a vibrant organization functioning within the prestigious campus of Jamia Sa'adiya Arabia. As one of the prominent Islamic educational institutions in South India, Jamia Sa'adiya Arabia has been a centre of knowledge and enlightenment for generations.",
    p2: "Founded through the vision and inspiration of Thajul Ulama and Noorul Ulama, MOKS reflects their commitment to preserving and promoting the Kannada language, culture and traditions. It provides a supportive platform for Kannada students, encouraging their overall development while celebrating their cultural identity.",
    p3: "With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. Through these efforts, we encourage students to embrace their heritage, strengthen their knowledge and contribute meaningfully to society.",
    p4: "At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect. Our collective efforts help build lasting relationships and strengthen cultural understanding.",
    p5: "As a guiding force behind MOKS, MSSA inspires its members with a strong sense of identity, purpose and belonging. It provides a valuable foundation for promoting cultural heritage, academic excellence and unity among students.",
    ctaTitle: "Join MOKS Today",
    ctaText: "Join MOKS and become part of a journey of learning, leadership and cultural celebration. Discover your potential, explore your passions and make a meaningful contribution to society.",
    ctaButton: "Contact Us",
    
    // ಹೆರೆನ್ಸಿಯಾ ವಿಭಾಗದ ಪಠ್ಯ
    herenciaTag: "HERENCIA",
    herenciaTitle: "Celebrating Three Decades of Success",
    herenciaDesc: "In the 30-year long journey since MOKS was founded, we have continuously nurtured a beautiful legacy of knowledge, culture and unity. As we celebrate the momentous occasion of shaping the bright futures of hundreds of students, let us cherish all our proud moments together."
  }

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <Section bg="gradient" title={locale === 'kn' ? 'ನಮ್ಮ ಕಥೆ' : 'Our Story'}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 space-y-6 text-slate-700 leading-relaxed text-base md:text-lg text-justify">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
            <p>{content.p4}</p>
            <p>{content.p5}</p>
          </div>
        </div>
      </Section>

      {/* ========================================================= */}
      {/* 3. HERENCIA - 30 YEARS SPECIAL SECTION (ಹೊಸ ವಿಭಾಗ) */}
      {/* ========================================================= */}
      <section className="relative py-24 bg-[#0a192f] overflow-hidden">
        {/* ಚಿನ್ನದ ಬಣ್ಣದ ಗ್ಲೋ ಮತ್ತು ಗ್ರಿಡ್ ಎಫೆಕ್ಟ್ */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full filter blur-[120px] opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ಎಡಭಾಗ: ಪೋಸ್ಟರ್ */}
            <div className="relative group perspective-1000">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(245,158,11,0.2)] border border-amber-500/30">
                <Image 
                  src="/erenpost.png" 
                  alt="Herencia 30 Years Poster" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* ಪೋಸ್ಟರ್ ಮೇಲೆ ಸ್ವಲ್ಪ ಡಾರ್ಕ್ ಓವರ್ಲೇ (ಟೆಕ್ಸ್ಟ್ ಸ್ಪಷ್ಟವಾಗಲು) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* ಬಲಭಾಗ: ಟೆಕ್ಸ್ಟ್ ಮತ್ತು ಲೋಗೋ */}
            <div className="flex flex-col items-start text-left">
              
              {/* ಹೆರೆನ್ಸಿಯಾ ಲೋಗೋ */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 animate-fade-in-up">
                <Image 
                  src="/erenlogo.png" 
                  alt="Herencia Logo" 
                  fill 
                  className="object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" 
                />
              </div>

              {/* ಚಿಕ್ಕ ಟ್ಯಾಗ್ */}
              <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 border border-amber-500/20">
                {content.herenciaTag}
              </span>

              {/* ಮುಖ್ಯ ಶೀರ್ಷಿಕೆ */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                {content.herenciaTitle}
              </h2>

              {/* ವಿವರಣೆ */}
              <p className="text-amber-100/70 text-lg md:text-xl leading-relaxed text-justify mb-8 font-light">
                {content.herenciaDesc}
              </p>

              {/* ಅಲಂಕಾರಿಕ ಗೆರೆ */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-200 rounded-full"></div>
            </div>
          </div>

        </div>
      </section>
      {/* ========================================================= */}

      {/* 4. Call to Action Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl border border-slate-100">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100 rounded-full filter blur-[80px] opacity-60"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full filter blur-[80px] opacity-60"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {content.ctaTitle}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                {content.ctaText}
              </p>
              
              <Link 
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center bg-[#0a192f] hover:bg-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1"
              >
                {content.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}