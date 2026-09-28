'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLang()
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0f1f45] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#e8891a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#e8891a]/5 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#e8891a]/20 text-[#e8891a] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-[#e8891a]/30">
            <span>🇮🇳</span>
            <span>{t.hero.location[lang]}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            {t.hero.name[lang]}
          </h1>
          <p className="text-[#e8891a] text-base sm:text-xl font-semibold mb-4">
            {t.hero.title[lang]}
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            {t.hero.tagline[lang]}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#about"
              className="px-6 py-3 bg-[#e8891a] text-white font-semibold rounded-lg hover:bg-[#d07a10] transition-colors shadow-lg"
            >
              {t.hero.cta_about[lang]}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {t.hero.cta_contact[lang]}
            </Link>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="flex justify-center mt-6 md:mt-0">
          <div className="relative px-8 pb-8 pt-6">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#e8891a]/30 to-[#0f1f45] border-4 border-[#e8891a]/40 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white/60">
                <div className="text-6xl mb-2">👤</div>
                <p className="text-sm">Photo</p>
              </div>
            </div>
            {/* Stats badges */}
            <div className="absolute bottom-0 left-0 bg-white rounded-xl px-4 py-2 shadow-lg">
              <p className="text-[#0f1f45] font-bold text-lg leading-none">10K+</p>
              <p className="text-gray-500 text-xs">{lang === 'en' ? 'Citizens Served' : 'सेवा केलेले नागरिक'}</p>
            </div>
            <div className="absolute top-0 right-0 bg-[#e8891a] rounded-xl px-4 py-2 shadow-lg">
              <p className="text-white font-bold text-lg leading-none">15+</p>
              <p className="text-white/80 text-xs">{lang === 'en' ? 'Years Service' : 'वर्षे सेवा'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-[#e8891a] rounded-full" />
        </div>
      </div>
    </section>
  )
}
