import { getDictionary } from '@/lib/getDictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  const dict = await getDictionary(locale)

  return (
    <div lang={locale} className="flex flex-col min-h-screen font-sans">
      <Navbar locale={locale} dict={dict} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  )
}