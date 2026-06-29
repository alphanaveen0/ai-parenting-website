"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const qKeys = ["ai_q1", "ai_q2", "ai_q3", "ai_q4"];

export default function AICard() {
  const { t } = useI18n();
  return (
    <div className="glass rounded-[26px] overflow-hidden">
      <div className="brand-gradient p-5 text-white relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/15 blur-xl" />
        <div className="flex items-center gap-3 relative">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/20 text-2xl pulse-ring">
            🤖
          </span>
          <div>
            <h3 className="font-bold text-lg leading-tight font-[family-name:var(--font-display)]">
              {t("ai_title")} ❤️
            </h3>
            <p className="text-white/85 text-xs">{t("ai_subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-soft mb-3 font-medium">{t("ai_greeting")}</p>
        <div className="space-y-2">
          {qKeys.map((k, i) => (
            <motion.div key={k} whileHover={{ x: 4 }}>
              <Link
                href={`/ai?q=${encodeURIComponent(t(k))}`}
                className="block text-sm px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--brand-primary)]/10 transition text-[var(--text)] font-medium"
              >
                {t(k)}
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          href="/ai"
          className="mt-4 flex items-center justify-center gap-2 brand-gradient text-white font-bold py-3 rounded-xl hover:opacity-95 transition shadow-lg shadow-indigo-500/25"
        >
          {t("ai_more")} <span>→</span>
        </Link>
      </div>
    </div>
  );
}
