"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Search,
  Clapperboard,
  PenLine,
  Megaphone,
  TrendingUp,
  Users,
  Building2,
  Image as ImageIcon,
  Lightbulb,
  Video,
  Eye,
  Send,
  BarChart3,
  FileText,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useInView } from "@/lib/useInView";

type Category = "Research" | "Creative" | "Content" | "Ads";

// Single accent woven into an otherwise neutral page; categories are
// distinguished by icon + label, not by hue.
const ACCENT = "var(--color-cat-purple)";

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  Research: Search,
  Creative: Clapperboard,
  Content: PenLine,
  Ads: Megaphone,
};

type Step = { label: string; icon: LucideIcon };
type Pipeline = {
  category: Category;
  title: string;
  description: string;
  steps: Step[];
};

const PIPELINES: Pipeline[] = [
  {
    category: "Research",
    title: "Find a winning niche",
    description: "Spot demand, size up competitors, get a decision-ready report in minutes.",
    steps: [
      { label: "Scan Market Demand", icon: TrendingUp },
      { label: "Detect Competitors", icon: Users },
      { label: "Company Deep Dive", icon: Building2 },
    ],
  },
  {
    category: "Creative",
    title: "Produce an ad video",
    description: "From product photos to a finished ad video — no manual editing.",
    steps: [
      { label: "Analyze Product Images", icon: ImageIcon },
      { label: "Find Creative Angle", icon: Lightbulb },
      { label: "Generate Video", icon: Video },
    ],
  },
  {
    category: "Content",
    title: "Write listings at scale",
    description: "Titles, descriptions, and tags for hundreds of products — reviewed before going live.",
    steps: [
      { label: "Keyword Research", icon: Search },
      { label: "Write Article", icon: PenLine },
      { label: "Human review", icon: Eye },
      { label: "Publish", icon: Send },
    ],
  },
  {
    category: "Ads",
    title: "Run and optimize ads",
    description: "Sync campaign performance and get an automatic daily report.",
    steps: [
      { label: "TikTok Campaigns", icon: Megaphone },
      { label: "Ads Performance Sync", icon: BarChart3 },
      { label: "Report", icon: FileText },
    ],
  },
];

const ROTATE_MS = 4600;

const chipStyle = (color: string) => ({
  color,
  backgroundColor: `color-mix(in srgb, ${color} 14%, white)`,
});
const softStyle = (color: string) => ({
  color,
  backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
});

export function PipelineShowcase({ href }: { href: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const autoplay = inView && !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % PIPELINES.length);
    }, ROTATE_MS);
    return () => clearTimeout(timer);
  }, [active, autoplay]);

  const current = PIPELINES[active];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActive((i) => (i + 1) % PIPELINES.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((i) => (i - 1 + PIPELINES.length) % PIPELINES.length);
    }
  };

  return (
    <div
      ref={ref}
      className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left: selectable pipeline list */}
      <div role="tablist" aria-label="POD pipelines" className="flex flex-col gap-2" onKeyDown={handleKeyDown}>
        {PIPELINES.map((p, i) => {
          const selected = i === active;
          const Icon = CATEGORY_ICON[p.category];
          return (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border p-3.5 text-left transition-all duration-300 ${
                selected
                  ? "border-line bg-base shadow-[0_1px_2px_rgba(17,24,39,0.04),0_12px_28px_-16px_rgba(17,24,39,0.18)]"
                  : "border-transparent hover:bg-base/70"
              }`}
            >
              <span
                className={`flex size-9 flex-none items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105 ${
                  selected ? "" : "bg-muted text-ink-soft"
                }`}
                style={selected ? chipStyle(ACCENT) : undefined}
              >
                <Icon size={17} strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                    selected ? "" : "text-ink-faint"
                  }`}
                  style={selected ? softStyle(ACCENT) : undefined}
                >
                  {p.category}
                </span>
                <span className={`mt-0.5 block truncate text-[14.5px] font-bold tracking-tight ${selected ? "text-ink" : "text-ink-soft"}`}>
                  {p.title}
                </span>
              </span>

              {selected && autoplay && (
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-line-subtle" aria-hidden="true">
                  <span
                    key={active}
                    className="progress-x block h-full rounded-full"
                    style={{ animationDuration: `${ROTATE_MS}ms`, backgroundColor: ACCENT }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Right: live flow preview */}
      <div
        role="tabpanel"
        className="relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-line bg-base p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_18px_44px_-24px_rgba(17,24,39,0.22)] lg:p-7"
      >
        {/* faded grid + soft accent glow */}
        <div className="bg-dot-grid mask-radial-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(90% 80% at 85% 0%, color-mix(in srgb, ${ACCENT} 9%, transparent), transparent 60%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-1 flex-col">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 flex-none items-center justify-center rounded-xl" style={chipStyle(ACCENT)}>
              {(() => {
                const Icon = CATEGORY_ICON[current.category];
                return <Icon size={18} strokeWidth={2} />;
              })()}
            </span>
            <span className="rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide" style={softStyle(ACCENT)}>
              {current.category}
            </span>
          </div>

          <h3 className="mt-3 text-[20px] font-bold tracking-tight text-ink">{current.title}</h3>
          <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-ink-soft">{current.description}</p>

          {/* flow diagram — re-staggers per pipeline, vertically centred to fill the panel */}
          <div
            key={active}
            className="mt-6 flex flex-1 flex-wrap content-center items-center gap-x-2.5 gap-y-3"
          >
            {current.steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Fragment key={step.label}>
                  <div
                    className="animate-fade-in flex items-center gap-2.5 rounded-xl border border-line bg-base px-3.5 py-3 shadow-[0_2px_8px_-3px_rgba(17,24,39,0.12),0_1px_2px_rgba(17,24,39,0.05)]"
                    style={{ animationDelay: `${idx * 0.09}s` }}
                  >
                    <span className="flex size-8 flex-none items-center justify-center rounded-lg" style={chipStyle(ACCENT)}>
                      <StepIcon size={16} strokeWidth={2} />
                    </span>
                    <span className="text-[13px] font-semibold whitespace-nowrap text-ink">{step.label}</span>
                  </div>
                  {idx < current.steps.length - 1 && (
                    <ChevronRight
                      size={18}
                      strokeWidth={2.5}
                      className="animate-fade-in flex-none text-ink-faint"
                      style={{ animationDelay: `${idx * 0.09 + 0.045}s` }}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>

          <a
            href={href}
            className="group mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-link"
          >
            Use this template
            <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
