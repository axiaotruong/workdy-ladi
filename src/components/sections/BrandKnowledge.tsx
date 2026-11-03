"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  MessageSquareQuote,
  Brain,
  FileText,
  Globe,
  Check,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BookOpen,
    title: "Knowledge base",
    description: "Upload PDFs, docs, or index a URL — your AI writes from your own material.",
  },
  {
    icon: MessageSquareQuote,
    title: "Brand voice",
    description: "Output that sounds like your store, not a generic bot.",
  },
  {
    icon: Brain,
    title: "Long-term memory",
    description: "Remembers preferences and context across every conversation.",
  },
];

const SOURCES: { icon: LucideIcon; name: string }[] = [
  { icon: FileText, name: "brand-guide.pdf" },
  { icon: Globe, name: "yourstore.com/about" },
  { icon: MessageSquareQuote, name: "Tone: warm, playful, no hard sell" },
];

const CAPTION =
  "Cozy season is here 🍂 Our embroidered hoodie is made for slow mornings and long walks — soft inside, built to last.";

const INDEX_MS = 650; // per source
const TYPE_MS = 22; // per character
const HOLD_MS = 2600;

export function BrandKnowledge() {
  return (
    <Section bg="subtle">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            title="AI employees that know your brand"
            description="Grounded in your own material, tuned to your voice, with memory that sticks."
          />
          <Stagger className="mt-8 flex flex-col gap-5">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="flex items-start gap-3.5">
                  <IconTile icon={cap.icon} size="md" />
                  <div>
                    <h3 className="text-[15px] font-bold text-ink">{cap.title}</h3>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-soft">{cap.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <BrandDemo />
        </Reveal>
      </div>
    </Section>
  );
}

/** Sources index one by one, then a caption types out in the store's voice — loops while in view. */
function BrandDemo() {
  const reduce = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  // 0..SOURCES.length = how many sources are indexed; then the caption types.
  const [indexed, setIndexed] = useState(0);
  const [typed, setTyped] = useState(0);

  const doneIndexing = indexed >= SOURCES.length;
  const shownIndexed = reduce ? SOURCES.length : indexed;
  const shownTyped = reduce ? CAPTION.length : typed;

  useEffect(() => {
    if (reduce || !inView) return;
    let t: ReturnType<typeof setTimeout>;
    if (!doneIndexing) {
      t = setTimeout(() => setIndexed((i) => i + 1), INDEX_MS);
    } else if (typed < CAPTION.length) {
      t = setTimeout(() => setTyped((n) => Math.min(CAPTION.length, n + 2)), TYPE_MS * 2);
    } else {
      t = setTimeout(() => {
        setIndexed(0);
        setTyped(0);
      }, HOLD_MS);
    }
    return () => clearTimeout(t);
  }, [reduce, inView, indexed, doneIndexing, typed]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-line bg-base p-5 shadow-[0_1px_2px_rgba(17,24,39,0.05),0_30px_60px_-30px_rgba(17,24,39,0.28)] sm:p-6"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-0 opacity-50" aria-hidden="true" />

      <div className="relative">
        <div className="font-mono text-[10.5px] tracking-wide text-ink-faint">BRAND KNOWLEDGE</div>
        <ul className="mt-3 flex flex-col gap-2">
          {SOURCES.map((source, idx) => {
            const Icon = source.icon;
            const isDone = idx < shownIndexed;
            const isWorking = !reduce && idx === shownIndexed && !doneIndexing;
            return (
              <li
                key={source.name}
                className={`flex items-center gap-3 rounded-xl border bg-base px-3.5 py-2.5 transition-all duration-300 ${
                  isDone || isWorking ? "border-line opacity-100" : "border-line-subtle opacity-45"
                }`}
              >
                <Icon size={16} strokeWidth={2} className="flex-none text-ink-soft" />
                <span className="truncate text-[13px] font-medium text-ink">{source.name}</span>
                <span className="ml-auto flex-none text-[11px] font-medium">
                  {isDone ? (
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <Check size={13} strokeWidth={2.6} /> Learned
                    </span>
                  ) : isWorking ? (
                    <span className="inline-flex items-center gap-1 text-ink-faint">
                      <Loader2 size={13} className="animate-spin" /> Reading
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ul>

        <div
          className={`mt-4 rounded-2xl border p-4 transition-colors duration-300 ${
            shownTyped > 0 ? "border-cat-purple/30 bg-cat-purple/[0.04]" : "border-line-subtle bg-subtle"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-ink">TikTok caption</span>
            <span className="text-[11px] text-ink-faint">· in your brand voice</span>
          </div>
          <p className="mt-2 min-h-[4.5em] text-[14px] leading-relaxed text-ink">
            {CAPTION.slice(0, shownTyped)}
            {!reduce && doneIndexing && typed < CAPTION.length ? (
              <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-cat-purple" />
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
