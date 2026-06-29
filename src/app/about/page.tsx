"use client";

import { useI18n, useL } from "@/lib/i18n";
import { testimonials } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    key: "about_mission",
    icon: "🎯",
    text: {
      hi: "हर माता-पिता तक सही, भरोसेमंद और वैज्ञानिक परवरिश मार्गदर्शन पहुँचाना — ताकि कोई भी माता-पिता इस यात्रा में अकेला महसूस न करे।",
      en: "To bring trusted, science-backed parenting guidance to every parent — so no one ever feels alone on this journey.",
    },
  },
  {
    key: "about_vision",
    icon: "🌅",
    text: {
      hi: "भारत का सबसे बड़ा AI-संचालित पेरेंटिंग समुदाय बनाना, जहाँ हर बच्चा खुश, आत्मविश्वासी और भावनात्मक रूप से मज़बूत बने।",
      en: "To build India's largest AI-powered parenting community where every child grows happy, confident and emotionally strong.",
    },
  },
  {
    key: "about_values",
    icon: "💎",
    text: {
      hi: "सहानुभूति, भरोसा, समावेश और निरंतर सीखना — हमारे हर निर्णय की नींव यही मूल्य हैं।",
      en: "Empathy, trust, inclusion and continuous learning — these values are the foundation of every decision we make.",
    },
  },
  {
    key: "about_promise",
    icon: "🤝",
    text: {
      hi: "हम वादा करते हैं कि आपके साथ हर कदम पर खड़े रहेंगे — बिना जजमेंट, सिर्फ सहारे और प्यार के साथ।",
      en: "We promise to stand by you at every step — without judgement, with only support and love.",
    },
  },
];

export default function AboutPage() {
  const { t, lang } = useI18n();
  const L = useL();

  return (
    <div className="mx-auto max-w-[1100px] px-3 md:px-5 pb-10">
      <PageHero
        emoji="❤️"
        title={t("about_title")}
        sub={lang === "hi"
          ? "हम मानते हैं कि परवरिश परफेक्शन नहीं, एक यात्रा है — और हर परिवार सही मार्गदर्शन का हकदार है।"
          : "We believe parenting is a journey, not perfection — and every family deserves trusted guidance."}
      />

      <Reveal>
        <div className="glass rounded-[28px] overflow-hidden grid md:grid-cols-2">
          <img src="/images/about.jpg" alt="Happy Indian family" className="w-full h-full object-cover min-h-[260px]" />
          <div className="p-7 md:p-9">
            <p className="text-[15px] leading-relaxed text-soft">
              {lang === "hi"
                ? "आज की व्यस्त जीवनशैली में माता-पिता के पास समय कम और सवाल ज़्यादा हैं। 'मेरा बच्चा, मेरी शान' एक ऐसा डिजिटल पालन-पोषण साथी है जो AI, विशेषज्ञों और लाखों माता-पिता के समुदाय को एक जगह लाता है।"
                : "In today's busy lifestyle, parents have less time and more questions. 'Mera Bachcha, Meri Shaan' is a digital parenting companion that brings AI, experts and a community of millions of parents together in one place."}
            </p>
            <p className="text-[15px] leading-relaxed text-soft mt-4">
              {lang === "hi"
                ? "हम सिर्फ एक ब्लॉग नहीं हैं। हम एक भावनात्मक समुदाय हैं — जहाँ हर सवाल का सम्मान है और हर माता-पिता को सुना जाता है।"
                : "We are not just a blog. We are an emotional community — where every question is respected and every parent is heard."}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {pillars.map((p, i) => (
          <Reveal key={p.key} delay={(i % 2) * 0.1}>
            <div className="glass rounded-[24px] p-7 h-full">
              <span className="grid place-items-center w-14 h-14 rounded-2xl brand-gradient text-2xl mb-4">{p.icon}</span>
              <h3 className="font-bold text-xl font-[family-name:var(--font-display)]">{t(p.key)}</h3>
              <p className="text-soft mt-2 leading-relaxed">{L(p.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Testimonials */}
      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-16 mb-6 text-center">
        {lang === "hi" ? "माता-पिता की कहानियाँ" : "Parent Stories"}
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((tm, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <div className="glass rounded-[24px] p-6 h-full flex flex-col">
              <p className="text-amber-500 mb-2">{"★".repeat(tm.rating)}</p>
              <p className="text-sm leading-relaxed text-soft flex-1">“{L(tm.quote)}”</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="grid place-items-center w-10 h-10 rounded-full accent-gradient text-white font-bold">
                  {L(tm.name).charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="font-bold text-sm">{L(tm.name)}</p>
                  <p className="text-xs text-soft">{L(tm.city)}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
