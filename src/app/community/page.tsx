"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import { challenges } from "@/lib/content";
import { useL } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

type Post = {
  id: number;
  authorName: string;
  isAnonymous: boolean;
  isExpert: boolean;
  isVerified: boolean;
  category: string;
  content: string;
  likes: number;
  replyCount: number;
  createdAt: string;
};

const leaderboard = [
  { name: "अंजलि मेहता", pts: 4820, badge: "🥇" },
  { name: "Rohit S.", pts: 4310, badge: "🥈" },
  { name: "सुनीता राव", pts: 3990, badge: "🥉" },
  { name: "Karan P.", pts: 3540, badge: "⭐" },
  { name: "मीना जोशी", pts: 3120, badge: "⭐" },
];

export default function CommunityPage() {
  const { t, lang } = useI18n();
  const L = useL();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [anon, setAnon] = useState(false);
  const [posting, setPosting] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/community");
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || posting) return;
    setPosting(true);
    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, authorName: name, isAnonymous: anon }),
      });
      const data = await res.json();
      if (data.post) {
        setPosts((p) => [data.post, ...p]);
        setContent("");
        setName("");
        setAnon(false);
      }
    } finally {
      setPosting(false);
    }
  };

  const like = async (id: number) => {
    setPosts((p) => p.map((x) => (x.id === id ? { ...x, likes: x.likes + 1 } : x)));
    try {
      await fetch(`/api/community/${id}/like`, { method: "POST" });
    } catch {
      /* ignore */
    }
  };

  const timeAgo = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return lang === "hi" ? "अभी" : "now";
    if (m < 60) return `${m}${lang === "hi" ? " मिनट पहले" : "m ago"}`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}${lang === "hi" ? " घंटे पहले" : "h ago"}`;
    return `${Math.floor(h / 24)}${lang === "hi" ? " दिन पहले" : "d ago"}`;
  };

  return (
    <div className="mx-auto max-w-[1320px] px-3 md:px-5 pb-10">
      <PageHero emoji="👨‍👩‍👧‍👦" title={t("comm_hero_title")} sub={t("comm_hero_sub")} />

      <div className="grid lg:grid-cols-[1fr_330px] gap-5">
        {/* Feed */}
        <div className="space-y-5">
          {/* Ask form */}
          <form onSubmit={submit} className="glass rounded-[26px] p-6">
            <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)]">{t("comm_ask")}</h3>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t("comm_whats_q")}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-3 mt-3 items-center">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={anon}
                placeholder={t("comm_your_name")}
                className="flex-1 w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 outline-none text-sm disabled:opacity-50"
              />
              <label className="flex items-center gap-2 text-sm text-soft cursor-pointer whitespace-nowrap">
                <input type="checkbox" checked={anon} onChange={(e) => setAnon(e.target.checked)} className="accent-[var(--brand-primary)] w-4 h-4" />
                {t("comm_anon")}
              </label>
              <button
                type="submit"
                disabled={posting}
                className="brand-gradient text-white font-bold px-6 py-2.5 rounded-xl disabled:opacity-50 hover:opacity-95 transition w-full sm:w-auto"
              >
                {t("comm_post")}
              </button>
            </div>
          </form>

          <h3 className="font-bold text-lg font-[family-name:var(--font-display)] flex items-center gap-2">
            🔥 {t("comm_trending")}
          </h3>

          {loading ? (
            <div className="glass rounded-2xl p-8 text-center text-soft">{t("comm_loading")}</div>
          ) : posts.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-soft">{t("comm_empty")}</div>
          ) : (
            posts.map((p) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-[22px] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid place-items-center w-10 h-10 rounded-full brand-gradient text-white font-bold">
                    {p.isAnonymous ? "🕶️" : p.authorName.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-bold flex items-center gap-1.5">
                      {p.isAnonymous ? t("comm_anonymous") : p.authorName}
                      {p.isExpert && <span className="text-[10px] bg-indigo-500/15 text-indigo-600 px-1.5 py-0.5 rounded-full">✔ {t("comm_expert")}</span>}
                      {!p.isExpert && p.isVerified && <span className="text-[10px] bg-teal-500/15 text-teal-600 px-1.5 py-0.5 rounded-full">✔</span>}
                    </p>
                    <p className="text-xs text-soft">{timeAgo(p.createdAt)} · {p.category}</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed">{p.content}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-soft">
                  <button onClick={() => like(p.id)} className="flex items-center gap-1.5 hover:text-rose-500 transition font-medium">
                    ❤️ {p.likes}
                  </button>
                  <span className="flex items-center gap-1.5">💬 {p.replyCount} {t("comm_reply")}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          <div className="glass rounded-[26px] p-6">
            <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">🏆 {t("leaderboard")}</h3>
            <div className="space-y-3">
              {leaderboard.map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xl w-6">{u.badge}</span>
                  <span className="flex-1 text-sm font-semibold">{u.name}</span>
                  <span className="text-sm font-bold text-[var(--brand-primary)]">{u.pts.toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[26px] p-6">
            <h3 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)]">{t("challenges_title")}</h3>
            <div className="space-y-3">
              {challenges.slice(0, 4).map((c, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`rounded-2xl p-4 text-white bg-gradient-to-br ${c.color} flex items-center gap-3`}>
                    <span className="text-2xl">{c.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-sm leading-tight">{L(c.title)}</p>
                      <p className="text-white/80 text-xs">{c.days} {lang === "hi" ? "दिन" : "days"}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
