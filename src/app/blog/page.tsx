"use client";

import { useI18n, useL } from "@/lib/i18n";
import { blogPosts } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Newsletter from "@/components/Newsletter";

export default function BlogPage() {
  const { t, lang } = useI18n();
  const L = useL();
  const featured = blogPosts[0];

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-10">
      <PageHero
        emoji="✍️"
        title={lang === "hi" ? "पेरेंटिंग ब्लॉग" : "Parenting Blog"}
        sub={lang === "hi" ? "नवीनतम और ट्रेंडिंग लेख — शिक्षा, पोषण, मानसिक स्वास्थ्य और त्योहार परवरिश पर।" : "Latest & trending articles on education, nutrition, mental health and festival parenting."}
      />

      {/* Featured */}
      <Reveal>
        <div className="glass rounded-[28px] overflow-hidden grid md:grid-cols-2 mb-10">
          <div className="relative h-60 md:h-auto">
            <img src={featured.img} alt={L(featured.title)} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full accent-gradient text-white">
              {lang === "hi" ? "फीचर्ड" : "Featured"}
            </span>
          </div>
          <div className="p-7 md:p-9 flex flex-col justify-center">
            <span className="text-xs font-bold text-[var(--brand-primary)]">{L(featured.cat)}</span>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-2 leading-tight">{L(featured.title)}</h2>
            <p className="text-soft mt-3">{L(featured.excerpt)}</p>
            <p className="text-xs text-soft mt-4">{featured.mins} {t("read_min")}</p>
          </div>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.slice(1).map((p, i) => (
          <Reveal key={i} delay={(i % 3) * 0.07}>
            <article className="glass rounded-[24px] overflow-hidden group h-full cursor-pointer">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={L(p.title)} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-[var(--brand-secondary)]">{L(p.cat)}</span>
                <h3 className="font-bold text-lg mt-1 leading-snug group-hover:text-[var(--brand-primary)] transition">{L(p.title)}</h3>
                <p className="text-sm text-soft mt-2">{L(p.excerpt)}</p>
                <p className="text-xs text-soft mt-3">{p.mins} {t("read_min")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
