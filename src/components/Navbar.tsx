"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-3 md:px-5">
        <div
          className={`glass rounded-[22px] px-4 md:px-5 h-[68px] flex items-center justify-between gap-3 transition-all ${
            scrolled ? "shadow-xl" : ""
          }`}
        >
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? "text-[var(--brand-primary)]"
                      : "text-soft hover:text-[var(--text)]"
                  }`}
                >
                  {t(l.key)}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full brand-gradient"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Search (desktop) */}
            <div className="hidden lg:flex items-center gap-2 px-3 h-10 rounded-full bg-black/5 dark:bg-white/5 text-soft w-44">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" />
              </svg>
              <input
                aria-label={t("search")}
                placeholder={t("search")}
                className="bg-transparent text-sm outline-none w-full"
              />
            </div>

            {/* Theme */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid place-items-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 hover:scale-105 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Language */}
            <button
              onClick={() => setLang(lang === "hi" ? "en" : "hi")}
              className="flex items-center gap-1.5 h-10 px-3 rounded-full border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] font-bold text-sm hover:bg-[var(--brand-primary)]/10 transition"
              aria-label="Switch language"
            >
              <span>{lang === "hi" ? "🇮🇳 हिंदी" : "🇺🇸 EN"}</span>
              <span className="text-[10px]">▼</span>
            </button>

            {/* Profile */}
            <button
              aria-label="Profile"
              className="hidden sm:grid place-items-center w-10 h-10 rounded-full brand-gradient text-white shadow-md hover:scale-105 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </button>

            {/* Mobile menu btn */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="xl:hidden grid place-items-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="xl:hidden glass rounded-2xl mt-2 p-3 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold ${
                        active
                          ? "brand-gradient text-white"
                          : "bg-black/5 dark:bg-white/5 text-soft"
                      }`}
                    >
                      {t(l.key)}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
