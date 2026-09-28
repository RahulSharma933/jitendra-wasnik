'use client'
import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function ContactPage() {
  const { lang } = useLang()
  const c = t.contact
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Page heading */}
        <div className="text-center mb-12">
          <p className="text-[#e8891a] font-semibold text-sm uppercase tracking-widest mb-2">
            {c.subhead[lang]}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f45]">
            {c.heading[lang]}
          </h1>
          <div className="mt-4 w-16 h-1 bg-[#e8891a] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: '📍',
                label: c.office[lang],
                value: c.office_addr[lang],
              },
              {
                icon: '✉️',
                label: lang === 'en' ? 'Email' : 'ईमेल',
                value: c.email_addr[lang],
              },
              {
                icon: '📞',
                label: lang === 'en' ? 'Phone' : 'फोन',
                value: '+91 98765 43210',
              },
              {
                icon: '🕐',
                label: lang === 'en' ? 'Office Hours' : 'कार्यालयीन वेळ',
                value: lang === 'en' ? 'Mon – Sat: 10:00 AM – 6:00 PM' : 'सोम – शनि: सकाळी १०:०० – संध्याकाळी ६:००',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-[#e8891a] uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-[#0f1f45] text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-[#e8891a] uppercase tracking-wide mb-3">
                {t.footer.connect[lang]}
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(s => (
                  <a
                    key={s}
                    href="#"
                    className="w-10 h-10 bg-[#0f1f45]/5 hover:bg-[#e8891a] hover:text-white rounded-xl flex items-center justify-center text-xs font-bold text-[#0f1f45] transition-colors"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#0f1f45] mb-2">
                  {lang === 'en' ? 'Message Sent!' : 'संदेश पाठवला!'}
                </h3>
                <p className="text-gray-500 text-sm">
                  {lang === 'en'
                    ? 'Thank you for reaching out. We will get back to you shortly.'
                    : 'संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क करू.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name',    label: c.name[lang],    type: 'text',  placeholder: lang === 'en' ? 'Enter your name' : 'तुमचे नाव प्रविष्ट करा' },
                  { key: 'email',   label: c.email[lang],   type: 'email', placeholder: lang === 'en' ? 'Enter your email' : 'तुमचा ईमेल प्रविष्ट करा' },
                  { key: 'phone',   label: c.phone[lang],   type: 'tel',   placeholder: lang === 'en' ? 'Enter your phone number' : 'तुमचा फोन नंबर प्रविष्ट करा' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-[#0f1f45] mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e8891a]/40 focus:border-[#e8891a] text-sm text-gray-700 transition"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-[#0f1f45] mb-1">
                    {c.message[lang]}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={lang === 'en' ? 'Write your message here...' : 'तुमचा संदेश येथे लिहा...'}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e8891a]/40 focus:border-[#e8891a] text-sm text-gray-700 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0f1f45] text-white font-semibold rounded-lg hover:bg-[#e8891a] transition-colors shadow-sm"
                >
                  {c.send[lang]}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
