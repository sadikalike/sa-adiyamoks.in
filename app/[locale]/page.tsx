import { getDictionary } from '@/lib/getDictionary'
import Hero from '@/components/Hero'
import VisionariesPreview from '@/components/VisionariesPreview'
import AboutPreview from '@/components/AboutPreview'
import StatsPreview from '@/components/StatsPreview' // <-- ಹೊಸದಾಗಿ ಸೇರಿಸಿ
import HerenciaPreview from '@/components/HerenciaPreview'
import GalleryPreview from '@/components/GalleryPreview'
import LibraryPreview from '@/components/LibraryPreview'
import ContactPreview from '@/components/ContactPreview'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.locale)
  const locale = resolvedParams.locale

  return (
    <>
      {/* 1. Hero Section */}
      <Hero locale={locale} dict={dict} />
      
      {/* 2. Visionaries Preview */}
      <VisionariesPreview locale={locale} dict={dict} />

      {/* 3. About Preview */}
      <AboutPreview locale={locale} dict={dict} />

      {/* 4. Stats Preview (ಹೊಸದಾಗಿ ಸೇರಿಸಲಾಗಿದೆ) */}
      <StatsPreview locale={locale} />

      {/* 5. Herencia Preview */}
      <HerenciaPreview locale={locale} />
      
      {/* 6. Gallery Preview */}
      <GalleryPreview locale={locale} dict={dict} />
      
      {/* 7. Library Preview */}
      <LibraryPreview locale={locale} dict={dict} />
      
      {/* 8. Contact Preview */}
      <ContactPreview locale={locale} dict={dict} />
    </>
  )
}