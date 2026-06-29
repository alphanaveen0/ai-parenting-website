"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setDone(true);
      setEmail("");
    } catch {
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={compact ? "" : "glass rounded-[26px] p-6"}>
      {!compact && (
        <>
          <div className="flex items-center justify-between gap-3 mb-1">
            <h3 className="font-bold text-lg font-[family-name:var(--font-display)]">{t("news_title")}</h3>
            <span className="text-2xl animate-floaty">✉️</span>
          </div>
          <p className="text-sm text-soft mb-4">{t("news_sub")}</p>
        </>
      )}
      {done ? (
        <p className="text-sm font-semibold text-emerald-600 py-2">{t("news_thanks")}</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("news_placeholder")}
            className="flex-1 px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="accent-gradient text-white font-bold px-5 py-3 rounded-xl hover:opacity-95 transition disabled:opacity-50 whitespace-nowrap"
          >
            {t("news_btn")}
          </button>
        </form>
      )}
    </div>
  );
}
