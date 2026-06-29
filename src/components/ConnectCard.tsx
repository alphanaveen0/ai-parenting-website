"use client";

import { useI18n } from "@/lib/i18n";

const items = [
  { icon: "✉️", color: "text-indigo-500", title: "connect_email", sub: "support@merabachhamerishaan.in" },
  { icon: "💬", color: "text-emerald-500", title: "connect_wa", sub: "connect_wa_sub" },
  { icon: "📸", color: "text-pink-500", title: "Instagram", sub: "@merabachhamerishaan" },
  { icon: "▶️", color: "text-red-500", title: "YouTube", sub: "Parenting Tips in Hindi" },
];

export default function ConnectCard() {
  const { t } = useI18n();
  return (
    <div className="glass rounded-[26px] p-6">
      <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)]">{t("connect_title")}</h3>
      <div className="space-y-3">
        {items.map((it, i) => (
          <a key={i} href="#" className="flex items-center gap-3 group">
            <span className={`grid place-items-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 text-lg group-hover:scale-110 transition`}>
              {it.icon}
            </span>
            <div className="leading-tight">
              <p className={`text-sm font-semibold ${it.color}`}>
                {t(it.title)}
              </p>
              <p className="text-xs text-soft">{it.sub.startsWith("connect_") ? t(it.sub) : it.sub}</p>
            </div>
          </a>
        ))}
      </div>
      <button className="mt-5 w-full text-sm font-bold py-3 rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/20 transition">
        {t("connect_all")} →
      </button>
    </div>
  );
}
