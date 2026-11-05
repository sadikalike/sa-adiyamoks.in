import Image from 'next/image'

export default function Footer({ locale, dict }: { locale: string; dict: any }) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-full w-14 h-14 relative">
            <Image src="/logo.png" alt="MOKS" fill className="object-contain p-1" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">MOKS</h4>
            <p className="text-sm text-slate-400">{dict.hero.subtitle}</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} MOKS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}