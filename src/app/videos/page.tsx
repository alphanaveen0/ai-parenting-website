"use client";

import { useI18n, useL } from "@/lib/i18n";
import { videos } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const filters = [
  { hi: "सभी", en: "All" },
  { hi: "पेरेंटिंग", en: "Parenting" },
  { hi: "एक्सपर्ट", en: "Expert" },
  { hi: "एनिमेशन", en: "Animation" },
  { hi: "शॉर्ट्स", en: "Shorts" },
];

export default function VideosPage() {
  const { t, lang } = useI18n();
  const L = useL();

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-10">
      <PageHero
        emoji="🎬"
        title={lang === "hi" ? "पेरेंटिंग वीडियो" : "Parenting Videos"}
        sub={lang === "hi" ? "विशेषज्ञ वीडियो, एनिमेशन और शॉर्ट वीडियो — परवरिश को आसान बनाएं।" : "Expert videos, animation and short videos to make parenting easier."}
      />

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {filters.map((f, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              i === 0 ? "brand-gradient text-white" : "glass hover:bg-black/5"
            }`}
          >
            {L(f)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <Reveal key={i} delay={(i % 3) * 0.07}>
            <div className="glass rounded-[24px] overflow-hidden group cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={v.img} alt={L(v.title)} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition grid place-items-center">
                  <span className="grid place-items-center w-16 h-16 rounded-full bg-white/90 text-[var(--brand-primary)] text-2xl pulse-ring group-hover:scale-110 transition">▶</span>
                </div>
                <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">{v.duration}</span>
                <span className="absolute top-2 left-2 text-xs bg-white/90 text-[var(--brand-primary)] font-bold px-2 py-0.5 rounded-full">{L(v.cat)}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold leading-snug group-hover:text-[var(--brand-primary)] transition">{L(v.title)}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
