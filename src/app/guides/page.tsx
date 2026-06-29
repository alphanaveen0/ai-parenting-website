"use client";

import Link from "next/link";
import { useI18n, useL } from "@/lib/i18n";
import { ageGroups, topics, dashboardMetrics } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function GuidesPage() {
  const { t } = useI18n();
  const L = useL();

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-10">
      <PageHero emoji="📖" title={t("guides_hero_title")} sub={t("guides_hero_sub")} />

      {/* Age groups */}
      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mb-6">
        {t("age_title")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ageGroups.map((a, i) => (
          <Reveal key={a.id} delay={(i % 3) * 0.08}>
            <div className="glass rounded-[26px] overflow-hidden group h-full">
              <div className="relative h-44 overflow-hidden">
                <img src={a.img} alt={a.range} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <span className={`absolute top-3 left-3 text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${a.color} text-white shadow-lg`}>
                  {a.range} {t("nav_home") === "होम" ? "वर्ष" : "yrs"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{L(a.title)} {L(a.desc)}</h3>
                <p className="text-sm text-soft mt-1">
                  {t("nav_home") === "होम"
                    ? "इस उम्र के लिए विशेषज्ञों द्वारा तैयार पढ़ाई, व्यवहार, पोषण और भावनात्मक मार्गदर्शन।"
                    : "Expert-crafted study, behaviour, nutrition and emotional guidance for this age."}
                </p>
                <Link href="/ai" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-primary)] hover:gap-2 transition-all">
                  {t("learn_more")} →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Topics */}
      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-16 mb-6">
        {t("topics_title")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((tp, i) => (
          <Reveal key={i} delay={(i % 4) * 0.05}>
            <Link href="/ai" className="glass rounded-2xl p-5 flex items-center gap-3 hover:-translate-y-1 transition h-full">
              <span className={`grid place-items-center w-12 h-12 rounded-xl text-2xl ${tp.color}`}>{tp.icon}</span>
              <span className="font-bold">{L(tp.name)}</span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Child Dashboard */}
      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-16 mb-2">
        {t("nav_home") === "होम" ? "चाइल्ड डैशबोर्ड" : "Child Dashboard"}
      </h2>
      <p className="text-soft mb-6">
        {t("nav_home") === "होम"
          ? "अपने बच्चे की नींद, खाना, मूड, पढ़ाई और विकास को एक जगह ट्रैक करें — AI विश्लेषण के साथ।"
          : "Track your child's sleep, food, mood, study and growth in one place — with AI analysis."}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {dashboardMetrics.map((m, i) => (
          <Reveal key={i} delay={(i % 4) * 0.05}>
            <div className="glass rounded-2xl p-5 text-center">
              <span className="text-3xl">{m.icon}</span>
              <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl mt-2 brand-gradient-text">{m.value}</p>
              <p className="text-xs text-soft">{L(m.label)} {L(m.unit)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="glass rounded-2xl p-5 mt-4 flex items-start gap-3">
        <span className="text-2xl">🧠</span>
        <p className="text-sm text-soft">
          <span className="font-bold text-[var(--text)]">{t("nav_home") === "होम" ? "AI विश्लेषण: " : "AI Analysis: "}</span>
          {t("nav_home") === "होम"
            ? "इस सप्ताह आपके बच्चे की नींद और पढ़ाई संतुलित रही। स्क्रीन टाइम को 30 मिनट और कम करने पर मूड और बेहतर हो सकता है।"
            : "This week your child's sleep and study were balanced. Reducing screen time by 30 more minutes could improve mood further."}
        </p>
      </div>
    </div>
  );
}
