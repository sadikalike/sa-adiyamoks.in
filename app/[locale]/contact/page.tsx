'use client'

import { useState, use } from 'react'

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  // ಇಲ್ಲಿ React.use() ಬಳಸಿ params ಅನ್ನು ಅನ್‌ರ್ಯಾಪ್ ಮಾಡಲಾಗಿದೆ
  const resolvedParams = use(params)
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  const [result, setResult] = useState("")

  // ಡಮ್ಮಿ ಸಬ್ಮಿಟ್ ಫಂಕ್ಷನ್
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(locale === 'kn' ? "ನಿಮ್ಮ ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ!" : "Your message has been sent successfully!");
    
    // ಫಾರ್ಮ್ ಅನ್ನು ರೀಸೆಟ್ ಮಾಡಲು
    event.currentTarget.reset();

    // 5 ಸೆಕೆಂಡುಗಳ ನಂತರ ಮೆಸೇಜ್ ತೆಗೆದುಹಾಕಲು
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  const content = locale === 'kn' ? {
    title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    subtitle: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು, ಸಲಹೆಗಳು ಅಥವಾ ಸಹಕಾರಕ್ಕಾಗಿ ನಮಗೆ ಬರೆಯಿರಿ.",
    formTitle: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    name: "ನಿಮ್ಮ ಹೆಸರು",
    email: "ನಿಮ್ಮ ಇಮೇಲ್",
    subject: "ವಿಷಯ",
    message: "ನಿಮ್ಮ ಸಂದೇಶ",
    btn: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    location: "ನಮ್ಮ ವಿಳಾಸ",
    phone: "ದೂರವಾಣಿ",
    emailText: "ಇಮೇಲ್",
    addressText: "ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾ, ಕಾಸರಗೋಡು, ಕೇರಳ, ಭಾರತ"
  } : {
    title: "Contact Us",
    subtitle: "Write to us for your questions, suggestions, or collaborations.",
    formTitle: "Send a Message",
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
    btn: "Send Message",
    location: "Our Location",
    phone: "Phone",
    emailText: "Email",
    addressText: "Jamia Sa'adiya Arabia, Kasaragod, Kerala, India"
  }

  return (
    // ಇಡೀ ಪುಟಕ್ಕೆ lang={locale} ಸೇರಿಸಲಾಗಿದೆ, ಇದರಿಂದ ಕನ್ನಡ ಫಾಂಟ್ ಸರಿಯಾಗಿ ಅಪ್ಲೈ ಆಗುತ್ತದೆ.
    <div lang={locale} className="bg-slate-50 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Side: Contact Info (Takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">MOKS</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{content.location}</h4>
                    <p className="text-slate-600 text-sm mt-1">{content.addressText}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{content.phone}</h4>
                    <p className="text-slate-600 text-sm mt-1">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{content.emailText}</h4>
                    <p className="text-slate-600 text-sm mt-1">mokskarnataka@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Takes 3 columns) */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">{content.formTitle}</h2>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{content.name}</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{content.email}</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{content.subject}</label>
                <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all" placeholder="Subject" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{content.message}</label>
                <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] transform hover:-translate-y-1">
                {content.btn}
              </button>

              {/* ಫಲಿತಾಂಶ (Success / Error Message) */}
              {result && (
                <div className={`text-center font-bold mt-4 p-3 rounded-lg ${result.includes("success") || result.includes("ಯಶಸ್ವಿ") ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}