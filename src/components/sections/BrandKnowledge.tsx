"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  MessageSquareQuote,
  Brain,
  FileText,
  Check,
  Sparkles,
  Pin,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Key = "kb" | "voice" | "mem";

type Accent = {
  dot: string; // active icon tile
  chip: string; // active chip
  bar: string; // progress fill
  note: string; // footnote accent text
  hl: string; // inline highlight
  ring: string; // app frame accent border
};

const accents: Record<Key, Accent> = {
  kb: {
    dot: "bg-blue-500/12 text-blue-600",
    chip: "border-blue-500/30 bg-blue-500/10 text-blue-600",
    bar: "bg-blue-500",
    note: "text-blue-600",
    hl: "bg-blue-500/15 text-blue-600",
    ring: "border-blue-500/30",
  },
  voice: {
    dot: "bg-violet-500/12 text-violet-600",
    chip: "border-violet-500/30 bg-violet-500/10 text-violet-600",
    bar: "bg-violet-500",
    note: "text-violet-600",
    hl: "bg-violet-500/15 text-violet-600",
    ring: "border-violet-500/30",
  },
  mem: {
    dot: "bg-green-500/12 text-green-600",
    chip: "border-green-500/30 bg-green-500/10 text-green-600",
    bar: "bg-green-500",
    note: "text-green-600",
    hl: "bg-green-500/15 text-green-600",
    ring: "border-green-500/30",
  },
};

const capabilities: { key: Key; icon: LucideIcon; title: string; description: string }[] = [
  {
    key: "kb",
    icon: BookOpen,
    title: "Knowledge base",
    description: "Upload PDFs, docs, or index a URL — your AI writes from your own material.",
  },
  {
    key: "voice",
    icon: MessageSquareQuote,
    title: "Brand voice",
    description: "Output that sounds like your store, not a generic bot.",
  },
  {
    key: "mem",
    icon: Brain,
    title: "Long-term memory",
    description: "Remembers preferences, brand details, and context across conversations.",
  },
];

const ORDER: Key[] = ["kb", "voice", "mem"];
const DWELL = 6000;

function Chip({ active, accent, children }: { active?: boolean; accent: Accent; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-semibold ${
        active ? accent.chip : "border-line bg-base text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

function views(accent: Accent): Record<Key, ReactNode> {
  const HL = ({ children }: { children: ReactNode }) => (
    <span className={`rounded px-1 font-semibold ${accent.hl}`}>{children}</span>
  );

  return {
    kb: (
      <>
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip active accent={accent}>
            <FileText className="size-3.5" /> Brand Guide.pdf
          </Chip>
          <Chip active accent={accent}>
            <FileText className="size-3.5" /> SS24 Lookbook.pdf
          </Chip>
          <Chip accent={accent}>
            <Check className="size-3.5" /> 2 sources indexed
          </Chip>
        </div>
        <Bubble me>Write a product description for the Oversized Cloud Hoodie.</Bubble>
        <Bubble>
          Cut from <b>brushed organic cotton</b> in a relaxed, drop-shoulder fit — the Cloud Hoodie is
          the weekend staple you&apos;ll live in. Pre-shrunk, garment-dyed, built to soften with every
          wash.
          <Note accent={accent}>
            <FileText className="size-3.5 flex-none" /> Fabric &amp; fit pulled from{" "}
            <HL>Brand Guide.pdf</HL>
          </Note>
        </Bubble>
      </>
    ),
    voice: (
      <>
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip active accent={accent}>
            <Sparkles className="size-3.5" /> Brand voice: Cozy · playful · never salesy
          </Chip>
        </div>
        <Bubble me>Make it punchier for the homepage banner.</Bubble>
        <Bubble>
          Meet your new comfort zone. ☁️ The Cloud Hoodie — impossibly soft, endlessly wearable, zero
          effort required.
          <Note accent={accent}>
            <Sparkles className="size-3.5 flex-none" /> Rewritten in your{" "}
            <HL>playful, never-salesy</HL> tone
          </Note>
        </Bubble>
      </>
    ),
    mem: (
      <>
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip active accent={accent}>
            <Pin className="size-3.5" /> Remembered · keep copy under 60 words
          </Chip>
          <Chip active accent={accent}>
            <Pin className="size-3.5" /> Remembered · use ☁️ for the Cloud line
          </Chip>
        </div>
        <Bubble me>Do the same for the new Cloud Joggers.</Bubble>
        <Bubble>
          On it. ☁️ Cloud Joggers — the hoodie&apos;s perfect other half. Same brushed cotton, same
          effortless fit. <b>Kept it to 42 words, like your Tee launch last month.</b>
          <Note accent={accent}>
            <Brain className="size-3.5 flex-none" /> Applied preferences from{" "}
            <HL>past conversations</HL>
          </Note>
        </Bubble>
      </>
    ),
  };
}

function Bubble({ children, me }: { children: ReactNode; me?: boolean }) {
  return (
    <div className={`mb-3.5 max-w-[82%] ${me ? "ml-auto" : ""}`}>
      <div
        className={`rounded-2xl px-3.5 py-3 text-[14px] leading-relaxed ${
          me
            ? "rounded-br-md bg-ink text-white"
            : "rounded-bl-md border border-line-subtle bg-subtle text-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Note({ accent, children }: { accent: Accent; children: ReactNode }) {
  return (
    <span className={`mt-2.5 flex items-center gap-1.5 text-[11.5px] font-semibold ${accent.note}`}>
      {children}
    </span>
  );
}

export function BrandKnowledge() {
  const [active, setActive] = useState<Key>("kb");
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((cur) => ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]);
    }, DWELL);
    return () => clearTimeout(id);
  }, [active]);

  const accent = accents[active];
  const rendered = views(accent);

  return (
    <Section bg="subtle">
      <SectionHeading
        eyebrow="Output quality"
        title="AI employees that know your brand"
        description="Grounded in your own material, tuned to your voice, with memory that sticks — see it work."
        align="left"
      />

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
        {/* Selectable capabilities — not cards */}
        <div className="flex flex-col">
          {capabilities.map((cap) => {
            const on = cap.key === active;
            const a = accents[cap.key];
            const Icon = cap.icon;
            return (
              <button
                key={cap.key}
                type="button"
                onClick={() => setActive(cap.key)}
                aria-pressed={on}
                className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-colors sm:p-5 ${
                  on
                    ? "border-line bg-base shadow-[0_10px_30px_-18px_rgba(17,24,39,0.25)]"
                    : "border-transparent hover:bg-ink/[0.03]"
                }`}
              >
                <span
                  className={`flex size-10 flex-none items-center justify-center rounded-xl transition-colors ${
                    on ? a.dot : "bg-subtle text-ink-faint"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-bold text-ink">{cap.title}</span>
                  <AnimatePresence initial={false}>
                    {on ? (
                      <motion.span
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="block overflow-hidden"
                      >
                        <span className="mt-1.5 block text-[13.5px] leading-relaxed text-ink-soft">
                          {cap.description}
                        </span>
                        <span className="mt-3 block h-0.5 overflow-hidden rounded bg-line-subtle">
                          {!reduce ? (
                            <motion.span
                              key={active}
                              className={`block h-full ${a.bar}`}
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: DWELL / 1000, ease: "linear" }}
                            />
                          ) : (
                            <span className={`block h-full w-full ${a.bar} opacity-40`} />
                          )}
                        </span>
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </span>
              </button>
            );
          })}
        </div>

        {/* Live product window */}
        <div
          className={`overflow-hidden rounded-2xl border bg-base shadow-[0_1px_3px_rgba(17,24,39,0.05),0_30px_60px_-35px_rgba(17,24,39,0.35)] transition-colors ${accent.ring}`}
        >
          <div className="flex items-center gap-2 border-b border-line-subtle bg-subtle px-4 py-3">
            <span className="flex gap-1.5">
              <i className="size-2.5 rounded-full bg-line" />
              <i className="size-2.5 rounded-full bg-line" />
              <i className="size-2.5 rounded-full bg-line" />
            </span>
            <span className="ml-2 text-[12.5px] font-semibold text-ink-soft">
              <b className="text-ink">Copywriter</b> · Workdy
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-[11.5px] font-semibold text-green-600">
              <i className="size-1.5 rounded-full bg-green-500" /> Live
            </span>
          </div>

          <div className="min-h-[340px] p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {rendered[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
