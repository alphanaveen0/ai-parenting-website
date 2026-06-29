"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useI18n } from "@/lib/i18n";
import { navLinks } from "@/lib/content";

const socials = [
  { name: "Instagram", icon: "📸", href: "#" },
  { name: "Facebook", icon: "📘", href: "#" },
  { name: "YouTube", icon: "▶️", href: "#" },
  { name: "Telegram", icon: "✈️", href: "#" },
  { name: "WhatsApp", icon: "💬", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
];

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-8">
        <div className="glass rounded-[28px] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-soft max-w-xs leading-relaxed">
                {t("footer_about")}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="grid place-items-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 hover:scale-110 hover:brand-gradient transition text-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title={t("footer_quick")}>
              {navLinks.slice(0, 5).map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {t(l.key)}
                </Link>
              ))}
            </FooterCol>

            <FooterCol title={t("footer_resources")}>
              {navLinks.slice(5).map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {t(l.key)}
                </Link>
              ))}
            </FooterCol>

            <FooterCol title={t("footer_legal")}>
              <Link href="/about" className="footer-link">{t("footer_privacy")}</Link>
              <Link href="/about" className="footer-link">{t("footer_terms")}</Link>
              <Link href="/about" className="footer-link">{t("footer_faq")}</Link>
              <Link href="/contact" className="footer-link">{t("nav_contact")}</Link>
            </FooterCol>
          </div>

          <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-soft">
            <p>© {year} मेरा बच्चा, मेरी शान. {t("footer_rights")}</p>
            <p>{t("footer_made")}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.footer-link) {
          display: block;
          font-size: 0.875rem;
          color: var(--text-soft);
          padding: 0.25rem 0;
          transition: color 0.2s, transform 0.2s;
        }
        :global(.footer-link:hover) {
          color: var(--brand-primary);
          transform: translateX(3px);
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-bold mb-3 font-[family-name:var(--font-display)]">{title}</h4>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}
