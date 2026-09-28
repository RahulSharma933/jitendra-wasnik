'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/#home',    label: t.nav.home[lang] },
    { href: '/#about',   label: t.nav.about[lang] },
    { href: '/#media',   label: t.nav.media[lang] },
    { href: '/#news',    label: t.nav.news[lang] },
    { href: '/contact',  label: t.nav.contact[lang] },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1f45]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#e8891a] flex items-center justify-center font-bold text-white text-sm">
            JW
          </div>
          <span className="font-bold text-white text-base leading-tight hidden sm:block">
            {lang === 'en' ? 'Jitendra Wasnik' : 'जितेंद्र वासनिक'}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-[#e8891a] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-[#e8891a] text-[#e8891a] hover:bg-[#e8891a] hover:text-white transition-all"
          >
            {lang === 'en' ? 'मराठी' : 'ENG'}
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-[#0f1f45] border-t border-white/10 px-4 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-[#e8891a] border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
