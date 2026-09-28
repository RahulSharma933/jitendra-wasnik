'use client'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function News() {
  const { lang } = useLang()
  const n = t.news

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#e8891a] font-semibold text-sm uppercase tracking-widest mb-2">{n.subhead[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f45]">{n.heading[lang]}</h2>
          <div className="mt-4 w-16 h-1 bg-[#e8891a] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {n.items.map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-[#0f1f45]/10 to-[#e8891a]/10 flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>
              <div className="p-5">
                <p className="text-[#e8891a] text-xs font-semibold mb-2">{item.date}</p>
                <h3 className="font-bold text-[#0f1f45] text-base mb-2 leading-snug group-hover:text-[#e8891a] transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.desc[lang]}
                </p>
                <button className="text-[#e8891a] text-sm font-semibold hover:underline">
                  {n.read_more[lang]}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
