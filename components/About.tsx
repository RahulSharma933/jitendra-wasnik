'use client'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function About() {
  const { lang } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#e8891a] font-semibold text-sm uppercase tracking-widest mb-2">{a.subhead[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f45]">{a.heading[lang]}</h2>
          <div className="mt-4 w-16 h-1 bg-[#e8891a] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative pr-6 pb-8">
              <div className="w-56 h-72 sm:w-64 sm:h-80 bg-gradient-to-br from-[#0f1f45]/10 to-[#e8891a]/10 rounded-2xl border-2 border-[#0f1f45]/10 flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-sm">Photo</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#0f1f45] text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-bold text-2xl text-[#e8891a]">15+</p>
                <p className="text-xs text-gray-300">{lang === 'en' ? 'Years of Service' : 'सेवेची वर्षे'}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f1f45] mb-4">
              {t.hero.name[lang]}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {a.bio[lang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0f1f45]/5 rounded-xl p-4 border-l-4 border-[#0f1f45]">
                <h4 className="font-bold text-[#0f1f45] mb-1 text-sm">{a.mission[lang]}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{a.mission_text[lang]}</p>
              </div>
              <div className="bg-[#e8891a]/10 rounded-xl p-4 border-l-4 border-[#e8891a]">
                <h4 className="font-bold text-[#e8891a] mb-1 text-sm">{a.vision[lang]}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{a.vision_text[lang]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
