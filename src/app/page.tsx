"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n, useL } from "@/lib/i18n";
import {
  ageGroups,
  features,
  popularArticles,
  videos,
  experts,
  testimonials,
  topics,
  aiTools,
  challenges,
} from "@/lib/content";
import AICard from "@/components/AICard";
import ConnectCard from "@/components/ConnectCard";
import Newsletter from "@/components/Newsletter";
import DailyMission from "@/components/DailyMission";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

function CardTitle({ title, href }: { title: string; href?: string }) {
  const { t } = useI18n();
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-bold text-lg font-[family-name:var(--font-display)]">{title}</h3>
      {href && (
        <Link href={href} className="text-sm font-semibold text-[var(--brand-primary)] hover:gap-2 flex items-center gap-1 transition-all">
          {t("see_all")} →
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const { t } = useI18n();
  const L = useL();

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pt-2">
      {/* ===== Dashboard grid ===== */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-5">
        {/* LEFT */}
        <div className="space-y-5">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[28px] overflow-hidden min-h-[460px] glass"
          >
            <img
              src="/images/hero.jpg"
              alt="Happy Indian family reading together"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/85 to-transparent dark:from-[#0b1020] dark:via-[#0b1020]/80" />
            <div className="relative p-7 md:p-10 max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-5">
                ❤️ {t("tagline")}
              </span>
              <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl leading-[1.1] tracking-tight">
                {t("hero_title_1")} <span className="brand-gradient-text">{t("hero_title_2")}</span> {t("hero_title_3")}
              </h1>
              <p className="mt-4 text-soft text-[15px] leading-relaxed max-w-md">
                {t("hero_sub")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/guides" className="brand-gradient text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-[1.03] transition flex items-center gap-2">
                  {t("cta_learn")} <span>→</span>
                </Link>
                <Link href="/ai" className="glass font-bold px-6 py-3.5 rounded-2xl hover:scale-[1.03] transition flex items-center gap-2">
                  💬 {t("cta_ask")}
                </Link>
              </div>
            </div>
            <div className="hidden md:block absolute bottom-6 right-6">
              <DailyMission />
            </div>
          </motion.section>

          {/* mobile daily mission */}
          <div className="md:hidden">
            <DailyMission />
          </div>

          {/* Features row */}
          <Reveal>
            <section className="glass rounded-[26px] p-5">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {features.map((f, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }}>
                    <Link href={f.href} className="flex flex-col items-center text-center gap-2 p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition">
                      <span className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-2xl shadow-lg`}>
                        {f.icon}
                      </span>
                      <span className="text-[13px] font-bold leading-tight">{L(f.title)}</span>
                      <span className="text-[11px] text-soft leading-tight hidden sm:block">{L(f.desc)}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Age + Popular */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
            <Reveal>
              <section className="glass rounded-[26px] p-5 h-full">
                <CardTitle title={t("age_title")} href="/guides" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {ageGroups.map((a) => (
                    <Link key={a.id} href={`/guides?age=${a.id}`} className="group">
                      <div className="relative rounded-2xl overflow-hidden aspect-square mb-2">
                        <img src={a.img} alt={a.range} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        <span className={`absolute top-1.5 left-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${a.color} text-white`}>
                          {a.range}
                        </span>
                      </div>
                      <p className="text-[12px] font-bold leading-tight">{L(a.title)}</p>
                      <p className="text-[11px] text-soft leading-tight">{L(a.desc)}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section className="glass rounded-[26px] p-5 h-full">
                <CardTitle title={t("popular_title")} href="/blog" />
                <div className="space-y-3">
                  {popularArticles.slice(0, 3).map((p, i) => (
                    <Link key={i} href="/blog" className="flex gap-3 group items-center">
                      <img src={p.img} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0" />
                      <div>
                        <p className="text-sm font-semibold leading-snug group-hover:text-[var(--brand-primary)] transition">{L(p.title)}</p>
                        <p className="text-xs text-soft mt-0.5">{p.mins} {t("read_min")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Videos / Experts / Stories */}
          <div className="grid md:grid-cols-3 gap-5">
            <Reveal>
              <section className="glass rounded-[26px] p-5 h-full">
                <CardTitle title={t("videos_title")} href="/videos" />
                <div className="space-y-3">
                  {videos.slice(0, 3).map((v, i) => (
                    <Link key={i} href="/videos" className="flex gap-3 group items-center">
                      <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src={v.img} alt="" className="w-full h-full object-cover" />
                        <span className="absolute inset-0 grid place-items-center bg-black/25 text-white">▶</span>
                        <span className="absolute bottom-1 right-1 text-[9px] bg-black/60 text-white px-1 rounded">{v.duration}</span>
                      </div>
                      <p className="text-[13px] font-semibold leading-snug group-hover:text-[var(--brand-primary)] transition">{L(v.title)}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section className="glass rounded-[26px] p-5 h-full">
                <CardTitle title={t("experts_title")} href="/experts" />
                <div className="grid grid-cols-2 gap-3">
                  {experts.slice(0, 4).map((e, i) => (
                    <Link key={i} href="/experts" className="flex flex-col items-center text-center gap-1.5 group">
                      <span className={`grid place-items-center w-14 h-14 rounded-full bg-gradient-to-br ${e.color} text-2xl shadow-md group-hover:scale-105 transition`}>
                        {e.emoji}
                      </span>
                      <p className="text-[12px] font-bold leading-tight">{L(e.name)}</p>
                      <p className="text-[10px] text-soft leading-tight">{L(e.role)}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section className="glass rounded-[26px] p-5 h-full">
                <CardTitle title={t("stories_title")} href="/about" />
                <div className="rounded-2xl bg-[var(--brand-primary)]/5 p-4">
                  <div className="text-3xl">❝</div>
                  <p className="text-sm leading-relaxed text-soft -mt-2">{L(testimonials[0].quote)}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="grid place-items-center w-9 h-9 rounded-full accent-gradient text-white text-sm font-bold">
                      {L(testimonials[0].name).charAt(0)}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-bold">- {L(testimonials[0].name)}, {L(testimonials[0].city)}</p>
                      <p className="text-amber-500 text-xs">★★★★★</p>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-5">
          <Reveal>
            <AICard />
          </Reveal>
          <Reveal delay={0.1}>
            <ConnectCard />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-[26px] p-6 relative overflow-hidden">
              <CardTitle title={t("aboutcard_title")} />
              <div className="flex gap-3">
                <p className="text-sm text-soft leading-relaxed">{t("aboutcard_text")}</p>
              </div>
              <img src="/images/about.jpg" alt="" className="w-full h-28 object-cover rounded-2xl mt-4" />
              <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-accent)] border border-[var(--brand-accent)]/30 px-4 py-2 rounded-full hover:bg-[var(--brand-accent)]/10 transition">
                {t("learn_more")} →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Newsletter />
          </Reveal>
        </aside>
      </div>

      {/* ===== Stats ===== */}
      <Reveal>
        <section className="glass rounded-[28px] p-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: 250000, s: "+", k: "stats_parents" },
            { n: 1200000, s: "+", k: "stats_questions" },
            { n: 120, s: "+", k: "stats_experts" },
            { n: 800, s: "+", k: "stats_guides" },
          ].map((st, i) => (
            <div key={i}>
              <p className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl brand-gradient-text">
                <Counter to={st.n} suffix={st.s} />
              </p>
              <p className="text-sm text-soft mt-1 font-medium">{t(st.k)}</p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* ===== Topics ===== */}
      <section className="mt-14">
        <Reveal>
          <SectionHead title={t("topics_title")} sub={t("guides_hero_sub")} />
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {topics.map((tp, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <Link href="/guides" className="glass rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition h-full">
                <span className={`grid place-items-center w-12 h-12 rounded-xl text-2xl ${tp.color}`}>{tp.icon}</span>
                <span className="text-[13px] font-bold leading-tight">{L(tp.name)}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== AI Tools ===== */}
      <section className="mt-14">
        <Reveal>
          <SectionHead title={t("tools_title")} sub={t("tools_sub")} />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {aiTools.map((tool, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <Link href="/ai" className="glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 transition group h-full">
                <span className="grid place-items-center w-12 h-12 rounded-xl brand-gradient text-2xl shrink-0 group-hover:scale-110 transition">{tool.icon}</span>
                <div>
                  <p className="font-bold">{L(tool.name)}</p>
                  <p className="text-sm text-soft mt-0.5">{L(tool.desc)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Challenges ===== */}
      <section className="mt-14">
        <Reveal>
          <SectionHead title={t("challenges_title")} sub={t("challenges_sub")} />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {challenges.map((c, i) => (
            <Reveal key={i} delay={(i % 5) * 0.06}>
              <div className={`rounded-2xl p-5 text-white bg-gradient-to-br ${c.color} h-full flex flex-col shadow-lg`}>
                <span className="text-3xl">{c.icon}</span>
                <p className="font-bold mt-3 leading-tight flex-1">{L(c.title)}</p>
                <p className="text-white/80 text-xs mt-2">{c.days} {t("nav_home") === "होम" ? "दिन" : "days"}</p>
                <button className="mt-3 text-xs font-bold bg-white/20 hover:bg-white/30 transition rounded-full py-2">
                  {t("start_challenge")}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <Reveal>
        <section className="mt-16 relative rounded-[32px] overflow-hidden brand-gradient text-white p-10 md:p-16 text-center">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-floaty" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-5xl leading-tight">
              {t("hero_title_1")} {t("hero_title_2")} {t("hero_title_3")}
            </h2>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto">{t("comm_hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/community" className="bg-white text-[var(--brand-primary)] font-bold px-7 py-3.5 rounded-2xl hover:scale-105 transition">
                {t("cta_join")}
              </Link>
              <Link href="/ai" className="bg-white/15 border border-white/30 font-bold px-7 py-3.5 rounded-2xl hover:bg-white/25 transition">
                💬 {t("cta_ask")}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl">{title}</h2>
      <p className="text-soft mt-2">{sub}</p>
    </div>
  );
}
