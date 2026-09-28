'use client'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Gallery() {
  const { lang } = useLang()
  const g = t.gallery

  return (
    <section id="media" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#e8891a] font-semibold text-sm uppercase tracking-widest mb-2">{g.subhead[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f45]">{g.heading[lang]}</h2>
          <div className="mt-4 w-16 h-1 bg-[#e8891a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {g.items.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br cursor-pointer group
                ${i === 0 ? 'from-blue-100 to-blue-200' :
                  i === 1 ? 'from-orange-100 to-orange-200' :
                  i === 2 ? 'from-green-100 to-green-200' :
                  i === 3 ? 'from-purple-100 to-purple-200' :
                  i === 4 ? 'from-red-100 to-red-200' :
                             'from-yellow-100 to-yellow-200'}
                ${i === 0 ? 'col-span-2 h-40 sm:h-48 md:col-span-2 md:h-56' : 'h-36 sm:h-44'}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">{item.emoji}</span>
                <p className="text-gray-600 text-xs font-medium">{item.label[lang]}</p>
              </div>
              <div className="absolute inset-0 bg-[#0f1f45]/0 group-hover:bg-[#0f1f45]/30 transition-all flex items-center justify-center">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  {lang === 'en' ? 'View' : 'पहा'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
