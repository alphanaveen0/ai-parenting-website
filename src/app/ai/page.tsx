"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/PageHero";
import AIChat from "@/components/AIChat";
import { useI18n } from "@/lib/i18n";
import { aiTools } from "@/lib/content";
import { useL } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

function AIInner() {
  const { t } = useI18n();
  const L = useL();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";

  return (
    <div className="mx-auto max-w-[1100px] px-3 md:px-5 pb-10">
      <PageHero emoji="🤖" title={t("ai_page_title")} sub={t("ai_page_sub")} />
      <AIChat initialQuestion={initial} />

      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-14 mb-6 text-center">
        {t("tools_title")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiTools.map((tool, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <div className="glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 transition h-full">
              <span className="grid place-items-center w-12 h-12 rounded-xl brand-gradient text-2xl shrink-0">{tool.icon}</span>
              <div>
                <p className="font-bold">{L(tool.name)}</p>
                <p className="text-sm text-soft mt-0.5">{L(tool.desc)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function AIPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-soft">…</div>}>
      <AIInner />
    </Suspense>
  );
}
