import Section from '@/components/Section'

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
    p5: "MOKS‌ನ ಮಾರ್ಗದರ್ಶಕ ಶಕ್ತಿಯಾಗಿ MSSA ಸಂಸ್ಥೆಯ ಸದಸ್ಯರಲ್ಲಿ ಗುರುತು, ಉದ್ದೇಶ ಮತ್ತು ಒಗ್ಗಟ್ಟಿನ ಭಾವನೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಸಂರಕ್ಷಣೆ, ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ಏಕತೆಯ ಮೌಲ್ಯಗಳನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವಲ್ಲಿ MOKS ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದೆ.",

    saadiyaTitle: "ಬೇಕಲ್ ಉಸ್ತಾದ್",
    saadiyaSub: "ಸಅದಿಯ್ಯಾ ಪರಂಪರೆಯ ಹೆಮ್ಮೆಯ ಮಾರ್ಗದರ್ಶಕರು",
    saadiyaDesc: "ಬಂಟ್ವಾಳ ತಾಲ್ಲೂಕಿನ ನರಿಂಗಾನ ಗ್ರಾಮದ ಕಲ್ಮಿoಜದಲ್ಲಿ 1949 ಫೆಬ್ರವರಿ 27 ರಂದು ಜನಿಸಿದ ಬೇಕಲ್ ಉಸ್ತಾದ್ ಇಸ್ಲಾಮಿನ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣವನ್ನು ಮರಿಕ್ಕಳ ಮದ್ರಸದಲ್ಲಿ ಆರಂಭಿಸಿದರು. ಖಾರಿ ಆಗಿದ್ದ ಎಮ್.ಎಮ್ ಮಹಮೂದ್ ಮುಸ್ಲಿಯಾರ್ ಮೊದಲ ಗುರುವಾಗಿದ್ದರು. ಪರಂಪರಾಗತವಾಗಿ ಕೈಕ್ಷರಗಿದ್ದ ಕುಟುಂಬದಲ್ಲಿ ಅಲೀಮ ಆಗಬೇಕೆಂಬ ಮನದಾಳದ ಆಸೆಯನ್ನು, ಅದುಮಿಟ್ಟ ತನ್ನ ತಂದೆ ತಾಯಿಯರೊಂದಿಗೆ ತಿಳಿಸಿ ತನ್ನ ಜುಮುವಲ್ ಮಸೀದಿಯಲ್ಲಿ ಪಿ.ಟಿ ಅಬ್ದುಲ್ ಖಾದಿರ್ ಉಸ್ತಾದರ ಬಳಿ ಅಧಿಕೃತ ದರ್ಸ್ ಕಲಿಕೆ ಆರಂಭಿಸಿದರು. ನಂತರ ಅಲೀಕುನ್ನಿ ಉಸ್ತಾದ್, ಅಲಂಪಾಡಿ ಉಸ್ತಾದ್, ಮೂಸಾ ಮುಸ್ಲಿಯಾರವರ ಬಳಿ ತಾಜುಲ್ ಉಲಮಾರ ಉಲ್ಲಾಳ ದರ್ಸ್‌ನಲ್ಲಾಗಿದ್ದು ಅವರ ಮುಂದಿನ ಕಲಿಕೆ. ತಶ್ಫೀರ್, ಹದೀಸ್, ಫಿಖ್, ಇಲ್ಮುಲ್ ಕಲಾಮ್, ಮನ್ನಿಸ್ ಮುಂತಾದ ಹಲವು ವಿಷಯಗಳನ್ನು ತಾಜುಲ್ ಉಲಮಾರಿಂದ ಕಲಿತ ನಂತರ 1971ರಲ್ಲಿ ಉನ್ನತ ವ್ಯಾಸಂಗಕ್ಕಾಗಿ ದಯ್ಯೂಬಂದಿಗೆ ತೆರಳಿದರು. ನಂತರ ಅಧ್ಯಾಪನ ರಂಗದಲ್ಲಿ ಹಲವು ಸ್ಥಳಗಳಲ್ಲಿ ಸೇವೆಯ ನಂತರ ನೂರಲ್ ಉಲಮಾ ಉಸ್ತಾದರ ವೆಯ್ಯತ್ ಪ್ರಕಾರ ಅವರ ವಫಾತಿನ ನಂತರ ಸಯ್ಯದ್ ಶರೀಫ್ ಕಾಝಿಯ ಪ್ರಾಂಶುಪಾಲರಾಗಿದ್ದರು. 24-09-2020ರಲ್ಲಿ ಎಂದೆಂದಿಗೂ ಮರಳಿ ಬಾರದ ಲೋಕಕ್ಕೆ ಯಾತ್ರೆಯಾದರು.",

    moksTitle: "ನಮ್ಮ ಕಥೆ",
    videoTitle: "ನಮ್ಮ ಪರಂಪರೆ",
    videoDesc: "MOKS ನ ಹೆಮ್ಮೆಯ ಪರಂಪರೆಯನ್ನು ಈ ವೀಡಿಯೊದಲ್ಲಿ ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ."
  } : {
    title: "About MOKS",
    subtitle: "Nurturing Kannada Brilliance at the Heart of Jamia Sa'adiya Arabia",
    p1: "MOKS – Misbahussuada Organization of Sa'adiya Kannada Students is a vibrant organization functioning within the prestigious campus of Jamia Sa'adiya Arabia. As one of the prominent Islamic educational institutions in South India, Jamia Sa'adiya Arabia has been a centre of knowledge and enlightenment for generations.",
    p2: "Founded through the vision and inspiration of Thajul Ulama and Noorul Ulama, MOKS reflects their commitment to preserving and promoting the Kannada language, culture and traditions. It provides a supportive platform for Kannada students, encouraging their overall development while celebrating their cultural identity.",
    p3: "With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. Through these efforts, we encourage students to embrace their heritage, strengthen their knowledge and contribute meaningfully to society.",
    p4: "At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect. Our collective efforts help build lasting relationships and strengthen cultural understanding.",
    p5: "As a guiding force behind MOKS, MSSA inspires its members with a strong sense of identity, purpose and belonging. It provides a valuable foundation for promoting cultural heritage, academic excellence and unity among students.",

    saadiyaTitle: "Bekal Ustad",
    saadiyaSub: "A proud guide of the Sa'adiya tradition",
    saadiyaDesc: "Born on 27 February 1949 in Kalmanja, Naringana village of Bantwal Taluk, Bekal Ustad began his primary Islamic education at the Marikke Madrasa, with M. M. Mahmood Musliyar — a Khari — as his first teacher. Though his family had traditionally remained distant from religious scholarship, he held a deep desire to become an Alim. Sharing this with his parents, he began formal Dars studies under P. T. Abdul Qadir Ustad at his own Jumma Masjid. His further learning continued under Alikunni Ustad, Alampadi Ustad and Musa Musliyar at the Ullal Dars of Thajul Ulama. After studying Tafsir, Hadith, Fiqh, Ilmul Kalam, Mantiq and many other subjects under Thajul Ulama, he went to Dayyub in 1971 for higher studies. Following years of teaching service in various places, and in accordance with the bequest (wasiyyat) of Noorul Ulama Ustad, he served as the Principal of Sayyid Sharif Qazi after the latter's demise. He departed to the eternal world on 24-09-2020.",

    moksTitle: "Our Story",
    videoTitle: "Our Heritage",
    videoDesc: "Watch the proud heritage of MOKS come alive in this video."
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

      {/* 2. Sa'adiya — Bekal Ustad Section (with video inside the card) */}
      <Section bg="gradient" title={content.saadiyaTitle}>
        <div className="max-w-4xl mx-auto">
          {/* Modern gradient-bordered card */}
          <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-emerald-400 via-teal-300 to-blue-400 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)]">
            <div className="relative rounded-[calc(2rem-1.5px)] bg-white/95 backdrop-blur-md p-8 md:p-12 overflow-hidden">
              {/* soft glow blobs */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="relative z-10 text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] md:text-xs font-bold tracking-widest uppercase border border-emerald-200">
                  {content.saadiyaSub}
                </span>
              </div>

              <p className="relative z-10 text-slate-700 leading-relaxed text-base md:text-lg text-justify">
                {content.saadiyaDesc}
              </p>

              {/* Cinematic video INSIDE the card (no heading) */}
              <div className="relative z-10 mt-8 md:mt-10">
                <div className="group relative mx-auto max-w-2xl">
                  {/* Ambient cinema glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-blue-500/20 rounded-[1.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Film-strip body */}
                  <div className="relative rounded-xl bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#0b0b0b] p-2 md:p-3 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
                    {/* Sprocket holes — top */}
                    <div className="flex justify-between px-1 mb-1.5 md:mb-2" aria-hidden>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="w-2 h-2.5 md:w-2.5 md:h-3 rounded-[2px] bg-slate-700/80 shadow-inner" />
                      ))}
                    </div>

                    {/* Screen */}
                    <div className="relative rounded-md overflow-hidden bg-black">
                      <div className="relative w-full aspect-video">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/gWX8qtBB5ZM"
                          title={content.videoTitle}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      {/* Vignette */}
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.55)] rounded-md" />
                    </div>

                    {/* Sprocket holes — bottom */}
                    <div className="flex justify-between px-1 mt-1.5 md:mt-2" aria-hidden>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="w-2 h-2.5 md:w-2.5 md:h-3 rounded-[2px] bg-slate-700/80 shadow-inner" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MOKS Story Section */}
      <Section bg="gradient" title={content.moksTitle}>
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

    </div>
  )
}