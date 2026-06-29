"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="relative grid place-items-center w-11 h-11 rounded-2xl brand-gradient shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" aria-hidden>
          <path d="M12 21s-6.7-4.35-9.33-8.07C.9 10.3 1.6 6.9 4.2 5.7c1.9-.88 3.96-.2 5.07 1.27L12 9.6l2.73-2.63C15.84 5.5 17.9 4.82 19.8 5.7c2.6 1.2 3.3 4.6 1.53 7.23C18.7 16.65 12 21 12 21z" />
        </svg>
        <span className="absolute -top-1 -right-1 text-xs">❤️</span>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-[family-name:var(--font-display)] font-extrabold text-[17px] md:text-[19px]">
            <span className="text-[var(--text)]">मेरा </span>
            <span className="brand-gradient-text">बच्चा</span>
            <span className="text-[var(--text)]">, मेरी शान</span>
          </span>
          <span className="block text-[10px] md:text-[11px] text-soft font-medium">
            {t("tagline")}
          </span>
        </span>
      )}
    </Link>
  );
}
