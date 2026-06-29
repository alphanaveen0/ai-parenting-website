"use client";

import { useState } from "react";
import { useI18n, useL } from "@/lib/i18n";
import { experts } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function ExpertsPage() {
  const { t, lang } = useI18n();
  const L = useL();
  const [booked, setBooked] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-10">
      <PageHero
        emoji="🧑‍⚕️"
        title={lang === "hi" ? "हमारे विशेषज्ञ" : "Our Experts"}
        sub={lang === "hi" ? "बाल मनोवैज्ञानिक, डॉक्टर, न्यूट्रिशनिस्ट और काउंसलर से अपॉइंटमेंट बुक करें या लाइव वेबिनार में जुड़ें।" : "Book appointments with child psychologists, doctors, nutritionists & counselors or join live webinars."}
      />

      {/* Webinar banner */}
      <Reveal>
        <div className="brand-gradient rounded-[26px] p-7 md:p-9 text-white flex flex-col md:flex-row items-center gap-5 mb-10">
          <span className="text-5xl animate-floaty">🎥</span>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-xl font-[family-name:var(--font-display)]">
              {lang === "hi" ? "लाइव वेबिनार: टीनएजर्स को कैसे समझें?" : "Live Webinar: Understanding Teenagers"}
            </h3>
            <p className="text-white/85 text-sm mt-1">
              {lang === "hi" ? "रविवार · शाम 6:00 बजे · डॉ. सीमा शर्मा के साथ" : "Sunday · 6:00 PM · with Dr. Seema Sharma"}
            </p>
          </div>
          <button className="bg-white text-[var(--brand-primary)] font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
            {lang === "hi" ? "रजिस्टर करें" : "Register"}
          </button>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {experts.map((e, i) => (
          <Reveal key={i} delay={(i % 3) * 0.07}>
            <div className="glass rounded-[26px] p-6 text-center h-full flex flex-col items-center">
              <span className={`grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br ${e.color} text-4xl shadow-lg`}>
                {e.emoji}
              </span>
              <h3 className="font-bold text-lg mt-4">{L(e.name)}</h3>
              <p className="text-sm text-soft">{L(e.role)}</p>
              <div className="flex items-center gap-3 mt-3 text-xs text-soft">
                <span className="flex items-center gap-1">⭐ 4.9</span>
                <span>·</span>
                <span>{e.exp} {lang === "hi" ? "वर्ष अनुभव" : "yrs exp"}</span>
              </div>
              <button
                onClick={() => setBooked(i)}
                className={`mt-5 w-full font-bold py-3 rounded-xl transition ${
                  booked === i ? "bg-emerald-500/15 text-emerald-600" : "brand-gradient text-white hover:opacity-95"
                }`}
              >
                {booked === i ? (lang === "hi" ? "बुकिंग कन्फर्म ✅" : "Booked ✅") : t("book_appt")}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
