import Section from '@/components/Section'
import HerenciaPreview from '@/components/HerenciaPreview'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  const content = locale === 'kn' ? {
    title: "MOKS ಬಗ್ಗೆ",
    subtitle: "ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಹೃದಯಭಾಗದಲ್ಲಿ ಕನ್ನಡದ ವೈಭವವನ್ನು ಬೆಳೆಸುವ ವೇದಿಕೆ",
    p1: "MOKS – ಮಿಸ್ಬಾಹುಸ್ಸುಆದಾ ಆರ್ಗನೈಸೇಶನ್ ಆಫ್ ಸಅದಿಯ್ಯಾ ಕನ್ನಡ ಸ್ಟೂಡೆಂಟ್ಸ್ (Misbahussuada Organization of Sa'adiya Kannada Students) ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಪ್ರತಿಷ್ಠಿತ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಘಟನೆಯಾಗಿದೆ. ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾದ ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾ ಹಲವು ತಲೆಮಾರುಗಳಿಗೆ ಜ್ಞಾನ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ಮಹತ್ವದ ವಿದ್ಯಾಕೇಂದ್ರವಾಗಿದೆ.",
    p2: "ತಾಜುಲ್ ಉಲಮಾ ಮತ್ತು ನೂರುಲ್ ಉಲಮಾ ಅವರ ದೂರದೃಷ್ಟಿ ಹಾಗೂ ಕನ್ನಡ ಭಾಷೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವ ಮಹತ್ತರ ಆಶಯದೊಂದಿಗೆ MOKS ಸ್ಥಾಪನೆಯಾಯಿತು. ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಜ್ಞಾನ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನಕ್ಕೆ ಪೂರಕವಾದ ವೇದಿಕೆಯಾಗಿ ಸಂಸ್ಥೆಯು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ.",
    p3: "ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ, ನಾಯಕತ್ವದ ಗುಣಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಆದ್ಯತೆ ನೀಡುವ MOKS, ವಿವಿಧ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳು ಹಾಗೂ ಹಲವು ಅಭಿವೃದ್ಧಿಪರ ಯೋಜನೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಮೇಲಿನ ಅಭಿಮಾನವನ್ನು ಬೆಳೆಸುವುದರ ಜೊತೆಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು ಸಮಾಜಕ್ಕೆ ಅರ್ಥಪೂರ್ಣ ಕೊಡುಗೆ ನೀಡುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.",
    p4: "ಏಕತೆ ಮತ್ತು ವೈವಿಧ್ಯತೆಯೇ ನಮ್ಮ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಶಕ್ತಿಯಾಗಿದೆ. ವಿವಿಧ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಿ, ಸ್ನೇಹ, ಸಹಕಾರ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.",
    p5: "MOKS‌ನ ಮಾರ್ಗದರ್ಶಕ ಶಕ್ತಿಯಾಗಿ MSSA ಸಂಸ್ಥೆಯ ಸದಸ್ಯರಲ್ಲಿ ಗುರುತು, ಉದ್ದೇಶ ಮತ್ತು ಒಗ್ಗಟ್ಟಿನ ಭಾವನೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಸಂರಕ್ಷಣೆ, ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ಏಕತೆಯ ಮೌಲ್ಯಗಳನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವಲ್ಲಿ MOKS ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದೆ."
  } : {
    title: "About MOKS",
    subtitle: "Nurturing Kannada Brilliance at the Heart of Jamia Sa'adiya Arabia",
    p1: "MOKS – Misbahussuada Organization of Sa'adiya Kannada Students is a vibrant organization functioning within the prestigious campus of Jamia Sa'adiya Arabia. As one of the prominent Islamic educational institutions in South India, Jamia Sa'adiya Arabia has been a centre of knowledge and enlightenment for generations.",
    p2: "Founded through the vision and inspiration of Thajul Ulama and Noorul Ulama, MOKS reflects their commitment to preserving and promoting the Kannada language, culture and traditions. It provides a supportive platform for Kannada students, encouraging their overall development while celebrating their cultural identity.",
    p3: "With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. Through these efforts, we encourage students to embrace their heritage, strengthen their knowledge and contribute meaningfully to society.",
    p4: "At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect. Our collective efforts help build lasting relationships and strengthen cultural understanding.",
    p5: "As a guiding force behind MOKS, MSSA inspires its members with a strong sense of identity, purpose and belonging. It provides a valuable foundation for promoting cultural heritage, academic excellence and unity among students."
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

      {/* 3. HERENCIA COMPONENT */}
      <HerenciaPreview locale={locale} />

    </div>
  )
}