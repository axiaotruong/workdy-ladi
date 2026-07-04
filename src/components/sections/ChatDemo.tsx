"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SiTelegram } from "react-icons/si";
import { Send, Sparkles } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Msg = { from: "user" | "bot"; text: string };

const script: Msg[] = [
  { from: "user", text: "How's my store doing today?" },
  { from: "bot", text: "24 new orders today 🎉 Revenue is up 18% vs yesterday." },
  { from: "user", text: "Draft listings for the 3 new products." },
  { from: "bot", text: "Done ✅ 3 listings written — titles, tags, and descriptions. Publish them?" },
];

// timeline: how many messages are visible, whether the bot is "typing", and hold time
const steps = [
  { count: 0, typing: false, hold: 500 },
  { count: 1, typing: false, hold: 1100 },
  { count: 1, typing: true, hold: 1300 },
  { count: 2, typing: false, hold: 1600 },
  { count: 3, typing: false, hold: 1100 },
  { count: 3, typing: true, hold: 1300 },
  { count: 4, typing: false, hold: 3200 },
];

export function ChatDemo() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % steps.length), steps[step].hold);
    return () => clearTimeout(t);
  }, [step, reduce]);

  const current = reduce ? { count: script.length, typing: false } : steps[step];
  const visible = script.slice(0, current.count);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* ambient halo */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_55%_at_50%_40%,rgba(38,165,228,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="overflow-hidden rounded-[1.75rem] border border-line bg-base shadow-[0_2px_8px_rgba(17,24,39,0.06),0_40px_80px_-32px_rgba(17,24,39,0.35)]">
        {/* header */}
        <div className="flex items-center gap-3 border-b border-line-subtle bg-subtle/70 px-4 py-3">
          <span className="relative flex size-9 flex-none items-center justify-center rounded-full bg-base ring-1 ring-line">
            <Image src="/logo-icon.png" alt="" width={18} height={18} />
            <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-base bg-dot-ready" />
          </span>
          <div className="min-w-0">
            <div className="truncate text-[13.5px] font-bold text-ink">Support Agent</div>
            <div className="text-[11px] text-ink-faint">AI employee · online</div>
          </div>
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-[#26A5E4]/10 px-2.5 py-1 text-[11px] font-semibold text-[#1b8ec9]">
            <SiTelegram size={12} />
            Telegram
          </span>
        </div>

        {/* conversation */}
        <div className="bg-dot-grid flex h-[340px] flex-col justify-end gap-2.5 overflow-hidden p-4">
          <AnimatePresence mode="popLayout">
            {visible.map((msg, i) => (
              <motion.div
                key={`${i}-${msg.text}`}
                layout
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={msg.from === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <span
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                    msg.from === "user"
                      ? "rounded-br-md bg-[#26A5E4] text-white"
                      : "rounded-bl-md border border-line bg-base text-ink"
                  }`}
                >
                  {msg.text}
                </span>
              </motion.div>
            ))}

            {current.typing ? (
              <motion.div
                key="typing"
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-line bg-base px-3.5 py-3">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="size-1.5 rounded-full bg-ink-faint"
                      animate={reduce ? {} : { opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15, ease: "easeInOut" }}
                    />
                  ))}
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* input bar (decorative) */}
        <div className="flex items-center gap-2 border-t border-line-subtle bg-base px-3 py-3">
          <div className="flex flex-1 items-center rounded-full bg-muted px-4 py-2 text-[12.5px] text-ink-faint">
            Message your AI employee…
          </div>
          <span className="flex size-9 flex-none items-center justify-center rounded-full bg-[#26A5E4] text-white">
            <Send size={15} strokeWidth={2.2} />
          </span>
        </div>
      </div>

      {/* coming soon chip — Lark (per handoff: not yet live) */}
      <div className="animate-float-slow absolute -bottom-4 -left-3 flex items-center gap-1.5 rounded-full border border-line bg-base/95 px-3 py-1.5 text-[11px] font-medium text-ink-soft shadow-[0_12px_30px_-14px_rgba(17,24,39,0.4)] backdrop-blur sm:-left-6">
        <Sparkles size={12} className="text-cat-amber" />
        Lark &amp; web widget — coming soon
      </div>
    </div>
  );
}
