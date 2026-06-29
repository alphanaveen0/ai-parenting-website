"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function DailyMission() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="glass rounded-2xl p-4 w-[230px] shadow-xl"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-xs font-bold px-2 py-0.5 rounded-full accent-gradient text-white">
          {t("daily_title")}
        </span>
      </div>
      <p className="text-[13px] leading-snug text-[var(--text)] font-medium mb-3">
        {t("daily_task")}
      </p>
      <button
        onClick={() => setDone(true)}
        disabled={done}
        className={`w-full text-sm font-bold py-2 rounded-xl transition ${
          done
            ? "bg-emerald-500/15 text-emerald-600"
            : "border border-[var(--brand-secondary)]/40 text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/10"
        }`}
      >
        {done ? t("daily_completed") : `${t("daily_done")} ✓`}
      </button>
    </motion.div>
  );
}
