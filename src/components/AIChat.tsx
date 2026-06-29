"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { AIAnswer } from "@/lib/ai-engine";

type Msg =
  | { role: "user"; text: string }
  | { role: "ai"; answer?: AIAnswer; freeform?: string };

const qKeys = ["ai_q1", "ai_q2", "ai_q3", "ai_q4"];

export default function AIChat({ initialQuestion = "" }: { initialQuestion?: string }) {
  const { t, lang } = useI18n();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const ask = async (question: string) => {
    const q = question.trim();
    if (!q || loading) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, lang }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "ai", answer: data.answer, freeform: data.freeform }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "ai", freeform: lang === "hi" ? "क्षमा करें, कुछ गड़बड़ हुई।" : "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuestion && !startedRef.current) {
      startedRef.current = true;
      ask(initialQuestion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="glass rounded-[28px] overflow-hidden flex flex-col h-[72vh] min-h-[520px]">
      {/* header */}
      <div className="brand-gradient p-5 text-white flex items-center gap-3">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/20 text-2xl">🤖</span>
        <div>
          <h3 className="font-bold text-lg font-[family-name:var(--font-display)]">{t("ai_title")} ❤️</h3>
          <p className="text-white/85 text-xs">{t("ai_subtitle")}</p>
        </div>
      </div>

      {/* messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-6">
            <div className="text-5xl mb-3 animate-floaty">💬</div>
            <p className="text-soft font-medium mb-5">{t("ai_greeting")}</p>
            <div className="grid sm:grid-cols-2 gap-2 max-w-xl mx-auto">
              {qKeys.map((k) => (
                <button
                  key={k}
                  onClick={() => ask(t(k))}
                  className="text-sm text-left px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--brand-primary)]/10 transition font-medium"
                >
                  {t(k)}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              {m.role === "user" ? (
                <div className="max-w-[85%] brand-gradient text-white px-4 py-2.5 rounded-2xl rounded-br-md font-medium">
                  {m.text}
                </div>
              ) : (
                <div className="max-w-[92%] w-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl rounded-bl-md p-4 shadow-sm">
                  <AIReply m={m} />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex items-center gap-2 text-soft text-sm">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-secondary)] animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)] animate-bounce" style={{ animationDelay: "300ms" }} />
            </span>
            {t("ai_thinking")}
          </div>
        )}
      </div>

      {/* input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="p-3 md:p-4 border-t border-black/5 dark:border-white/10 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("ai_placeholder")}
          className="flex-1 px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 outline-none focus:ring-2 ring-[var(--brand-primary)]/40 text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="brand-gradient text-white font-bold px-5 rounded-xl disabled:opacity-50 hover:opacity-95 transition"
        >
          {t("ai_send")}
        </button>
      </form>
    </div>
  );
}

function AIReply({ m }: { m: Extract<Msg, { role: "ai" }> }) {
  if (m.freeform && !m.answer) {
    return <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.freeform}</p>;
  }
  if (!m.answer) return null;
  return (
    <div className="space-y-3 text-sm">
      <p className="leading-relaxed">{m.answer.intro}</p>
      {m.answer.sections.map((s, i) => (
        <div key={i}>
          <p className="font-bold mb-1">{s.title}</p>
          <ul className="space-y-1">
            {s.points.map((p, j) => (
              <li key={j} className="flex gap-2 text-soft">
                <span className="text-[var(--brand-secondary)]">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-2 rounded-xl bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] px-3 py-2 font-semibold">
        {m.answer.motivation}
      </div>
      {m.freeform && (
        <p className="whitespace-pre-wrap leading-relaxed pt-2 border-t border-black/5 dark:border-white/10">
          {m.freeform}
        </p>
      )}
    </div>
  );
}
