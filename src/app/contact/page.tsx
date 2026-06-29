"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Newsletter from "@/components/Newsletter";

const channels = [
  { icon: "✉️", label: { hi: "ईमेल", en: "Email" }, value: "support@merabachhamerishaan.in", color: "from-indigo-500 to-violet-500" },
  { icon: "💬", label: { hi: "WhatsApp समुदाय", en: "WhatsApp Community" }, value: "+91 90000 00000", color: "from-emerald-500 to-teal-500" },
  { icon: "📸", label: { hi: "Instagram", en: "Instagram" }, value: "@merabachhamerishaan", color: "from-pink-500 to-rose-500" },
  { icon: "▶️", label: { hi: "YouTube", en: "YouTube" }, value: "Parenting Tips in Hindi", color: "from-red-500 to-rose-500" },
  { icon: "✈️", label: { hi: "Telegram", en: "Telegram" }, value: "@mbms_parenting", color: "from-sky-500 to-blue-500" },
  { icon: "💼", label: { hi: "LinkedIn", en: "LinkedIn" }, value: "Mera Bachcha Meri Shaan", color: "from-blue-600 to-indigo-600" },
];

export default function ContactPage() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-[1100px] px-3 md:px-5 pb-10">
      <PageHero
        emoji="📬"
        title={lang === "hi" ? "संपर्क करें" : "Connect With Us"}
        sub={lang === "hi" ? "हम आपकी हर परवरिश यात्रा में साथ हैं। किसी भी सवाल या सुझाव के लिए हमसे जुड़ें।" : "We're with you on every parenting journey. Reach out for any question or suggestion."}
      />

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Form */}
        <Reveal>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass rounded-[26px] p-7"
          >
            <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)]">
              {lang === "hi" ? "हमें संदेश भेजें" : "Send us a message"}
            </h3>
            {sent ? (
              <p className="text-emerald-600 font-semibold py-6 text-center">
                {lang === "hi" ? "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे ✅" : "Thank you! We'll get back to you soon ✅"}
              </p>
            ) : (
              <div className="space-y-3">
                <input required placeholder={lang === "hi" ? "आपका नाम" : "Your name"} className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm" />
                <input required type="email" placeholder={lang === "hi" ? "आपका ईमेल" : "Your email"} className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm" />
                <textarea required rows={4} placeholder={lang === "hi" ? "आपका संदेश..." : "Your message..."} className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm resize-none" />
                <button type="submit" className="w-full brand-gradient text-white font-bold py-3 rounded-xl hover:opacity-95 transition">
                  {lang === "hi" ? "भेजें" : "Send"}
                </button>
              </div>
            )}
          </form>
        </Reveal>

        {/* Channels */}
        <Reveal delay={0.1}>
          <div className="glass rounded-[26px] p-7 h-full">
            <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)]">{t("connect_title")}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map((c, i) => (
                <a key={i} href="#" className="flex items-center gap-3 p-3 rounded-2xl bg-black/5 dark:bg-white/5 hover:-translate-y-0.5 transition">
                  <span className={`grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} text-xl`}>{c.icon}</span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold">{c.label[lang]}</p>
                    <p className="text-xs text-soft">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
