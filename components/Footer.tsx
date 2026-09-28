'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLang()

  const quickLinks = [
    { href: '/#home',         label: t.nav.home[lang] },
    { href: '/#about',        label: t.nav.about[lang] },
    { href: '/#achievements', label: lang === 'en' ? 'Achievements' : 'उपलब्धी' },
    { href: '/#media',        label: t.nav.media[lang] },
    { href: '/#news',         label: t.nav.news[lang] },
    { href: '/contact',       label: t.nav.contact[lang] },
  ]

  return (
    <footer className="bg-[#0a1530] text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#e8891a] flex items-center justify-center font-bold text-sm">JW</div>
              <span className="font-bold text-lg">{t.hero.name[lang]}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.hero.tagline[lang]}
            </p>
            <p className="text-gray-500 text-xs">{t.contact.email_addr[lang]}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#e8891a] mb-4 text-sm uppercase tracking-wider">
              {t.footer.quick_links[lang]}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#e8891a] text-sm transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-[#e8891a] mb-4 text-sm uppercase tracking-wider">
              {t.footer.connect[lang]}
            </h4>
            <div className="flex gap-3 mb-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#e8891a] rounded-lg flex items-center justify-center text-xs font-bold transition-colors"
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">{t.contact.office_addr[lang]}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {t.hero.name[lang]}. {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  )
}
