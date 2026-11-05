import Section from './Section'

export default function LibraryPreview({ locale, dict }: { locale: string; dict: any }) {
  return (
    <Section title={dict.sections.library.title} moreHref={`/${locale}/library`} moreLabel={dict.sections.library.more}>
      <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
        <div className="md:w-1/2 relative z-10">
          <p className="text-lg text-slate-300 leading-relaxed">
            {locale === 'kn'
              ? 'ನಮ್ಮ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಅರಬ್ಬಿ, ಇಸ್ಲಾಮಿಕ್, ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಮಾನ್ಯ ಜ್ಞಾನದ ಪುಸ್ತಕಗಳ ಸಂಗ್ರಹವಿದೆ. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಲ್ಲೇಖ ಸೇವೆ ಲಭ್ಯ.'
              : 'Our library holds a collection of Arabic, Islamic, literary, and general knowledge books with reference services for students.'}
          </p>
        </div>
        <div className="md:w-1/2 w-full h-48 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-500 relative z-10">
          Library Image Placeholder
        </div>
      </div>
    </Section>
  )
}