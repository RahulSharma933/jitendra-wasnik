'use client'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Achievements() {
  const { lang } = useLang()
  const a = t.achievements

  return (
    <section id="achievements" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#e8891a] font-semibold text-sm uppercase tracking-widest mb-2">{a.subhead[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f45]">{a.heading[lang]}</h2>
          <div className="mt-4 w-16 h-1 bg-[#e8891a] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#0f1f45] mb-2 text-base group-hover:text-[#e8891a] transition-colors">
                {item.title[lang]}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
