import { getDictionary } from '@/lib/getDictionary'
import Hero from '@/components/Hero'
import VisionariesPreview from '@/components/VisionariesPreview'
import AboutPreview from '@/components/AboutPreview'
import StatsPreview from '@/components/StatsPreview'
import HerenciaPreview from '@/components/HerenciaPreview'
import GalleryPreview from '@/components/GalleryPreview'
import QuoteScrollSection from '@/components/QuoteScrollSection'
import LibraryPreview from '@/components/LibraryPreview'
import ContactPreview from '@/components/ContactPreview'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.locale)
  const locale = resolvedParams.locale

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <VisionariesPreview locale={locale} dict={dict} />
      <AboutPreview locale={locale} dict={dict} />
      <StatsPreview locale={locale} />
      <HerenciaPreview locale={locale} />
      <GalleryPreview locale={locale} dict={dict} />
      <QuoteScrollSection locale={locale} />
      <LibraryPreview locale={locale} />
      <ContactPreview locale={locale} dict={dict} />
    </>
  )
}