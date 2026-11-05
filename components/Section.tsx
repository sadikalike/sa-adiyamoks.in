export default function Section({
  title, subtitle, moreHref, moreLabel, children, bg = 'white', id
}: {
  title: string; 
  subtitle?: string; 
  moreHref?: string; 
  moreLabel?: string; 
  children: React.ReactNode; 
  bg?: 'white' | 'slate' | 'gradient'; 
  id?: string
}) {
  
  // ಹಿನ್ನೆಲೆ ಬಣ್ಣದ ಆಯ್ಕೆ
  const bgClass = 
    bg === 'slate' ? 'bg-slate-50' : 
    bg === 'gradient' ? 'bg-gradient-to-br from-[#f8fafc] via-[#ecfdf5] to-[#eff6ff]' : 
    'bg-white';

  return (
    <section id={id} className={`relative ${bgClass} py-24 overflow-hidden`}>
      
      {/* Modern Background Patterns (ಗ್ರಿಡ್ ಮತ್ತು ಗ್ಲೋ ಎಫೆಕ್ಟ್) - bg gradient ಇದ್ದಾಗ ಮಾತ್ರ ಕಾಣಿಸುತ್ತದೆ */}
      {bg === 'gradient' && (
        <>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>
            {subtitle && <p className="text-slate-500 mt-2 text-lg">{subtitle}</p>}
            
            {/* Modern Gradient Underline */}
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mt-4 rounded-full"></div>
          </div>

          {/* Top Right Link (ನೀವು ಕೇಳಿದಂತೆ ಇದನ್ನು ಹಾಗೆಯೇ ಇಟ್ಟಿದ್ದೇನೆ) */}
          {moreHref && (
            <a 
              href={moreHref} 
              className="inline-flex items-center text-emerald-600 font-bold bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-full transition-all duration-300 group shadow-sm"
            >
              {moreLabel} 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}

        </div>
        
        {children}
      </div>
    </section>
  )
}