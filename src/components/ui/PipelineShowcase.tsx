"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Clapperboard,
  Repeat,
  Megaphone,
  TrendingUp,
  Lightbulb,
  Image as ImageIcon,
  Film,
  Video,
  Gauge,
  BarChart3,
  FileText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useInView } from "@/lib/useInView";

type Category = "Research" | "Creative" | "Remake" | "Ads";

// Single accent woven into an otherwise neutral page; categories are
// distinguished by icon + label, not by hue.
const ACCENT = "var(--color-cat-purple)";

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  Research: Search,
  Creative: Clapperboard,
  Remake: Repeat,
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
    title: "Spy the market",
    description: "Scan real demand from Google Trends, search, Facebook Ads, TikTok, and Etsy — then get product ideas with a content angle.",
    steps: [
      { label: "Scan Demand", icon: TrendingUp },
      { label: "Ideas from Data", icon: Lightbulb },
      { label: "Creative Angle", icon: Search },
    ],
  },
  {
    category: "Creative",
    title: "Product photos → TikTok video",
    description: "Drop in product photos, approve a storyboard, and render a 9:16 video with Seedance.",
    steps: [
      { label: "Analyze Product", icon: ImageIcon },
      { label: "Creative Angle", icon: Lightbulb },
      { label: "Storyboard", icon: Film },
      { label: "Seedance Video", icon: Video },
    ],
  },
  {
    category: "Remake",
    title: "Remake an ad that already sells",
    description: "Give it a reference video — Workdy measures its cuts and shot order, then rebuilds it around your product.",
    steps: [
      { label: "Measure Cuts", icon: Gauge },
      { label: "Read Photos", icon: ImageIcon },
      { label: "Remake Shots", icon: Film },
      { label: "Seedance Video", icon: Video },
    ],
  },
  {
    category: "Ads",
    title: "Score a video before you spend",
    description: "Paste a video link — Workdy compares it with ads that already spent real money in your niche and shows where yours falls behind.",
    steps: [
      { label: "Your Video", icon: Video },
      { label: "Match Real Ads", icon: BarChart3 },
      { label: "Scorecard", icon: FileText },
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

// Mini node-canvas geometry (mirrors the real workflow builder): nodes laid out
// in a zig-zag and joined by curved connectors, sized in a virtual viewBox that
// the SVG stretches to fill the panel.
const VB_W = 600;
const VB_H = 230;
const NODE_W = 190;
const NODE_H = 58;
const Y_TOP = 74;
const Y_BOT = 156;
const START_X = 104;

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

function layoutNodes(count: number) {
  const dx = count > 1 ? (VB_W - 2 * START_X) / (count - 1) : 0;
  const nodes = Array.from({ length: count }, (_, i) => ({
    cx: START_X + i * dx,
    cy: i % 2 === 0 ? Y_TOP : Y_BOT,
  }));
  const edges = nodes.slice(0, -1).map((node, i) => {
    const next = nodes[i + 1];
    const sx = node.cx + NODE_W / 2;
    const ex = next.cx - NODE_W / 2;
    return `M${sx},${node.cy} C${sx + 34},${node.cy} ${ex - 34},${next.cy} ${ex},${next.cy}`;
  });
  return { nodes, edges };
}

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
      <div role="tablist" aria-label="Workdy pipelines" className="flex flex-col gap-2" onKeyDown={handleKeyDown}>
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

          {/* mobile: readable vertical step list (canvas is too cramped under sm) */}
          <ul className="mt-6 flex flex-col gap-2 sm:hidden">
            {current.steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <li
                  key={step.label}
                  className="animate-fade-in flex items-center gap-2.5 rounded-xl border border-line bg-base px-3 py-2.5 shadow-[0_1px_2px_rgba(17,24,39,0.05)]"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <span className="flex size-7 flex-none items-center justify-center rounded-lg" style={chipStyle(ACCENT)}>
                    <StepIcon size={15} strokeWidth={2} />
                  </span>
                  <span className="text-[13px] font-semibold text-ink">{step.label}</span>
                </li>
              );
            })}
          </ul>

          {/* sm+: node canvas — real workflow-builder style: zig-zag nodes + curved connectors */}
          <div key={active} className="relative mt-6 hidden min-h-[190px] flex-1 sm:block">
            {(() => {
              const { nodes, edges } = layoutNodes(current.steps.length);
              return (
                <>
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox={`0 0 ${VB_W} ${VB_H}`}
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    {edges.map((d, i) => (
                      <g key={d} className="animate-fade-in" style={{ animationDelay: `${i * 0.12 + 0.25}s` }}>
                        <path d={d} stroke="var(--color-line)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                        <path
                          d={d}
                          className="edge-flow"
                          stroke={ACCENT}
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </g>
                    ))}
                  </svg>

                  {current.steps.map((step, idx) => {
                    const StepIcon = step.icon;
                    const node = nodes[idx];
                    return (
                      <div
                        key={step.label}
                        className="animate-fade-in absolute flex items-center gap-2 rounded-xl border border-line bg-base px-3 shadow-[0_2px_8px_-3px_rgba(17,24,39,0.12),0_1px_2px_rgba(17,24,39,0.05)]"
                        style={{
                          left: pct(node.cx - NODE_W / 2, VB_W),
                          top: pct(node.cy - NODE_H / 2, VB_H),
                          width: pct(NODE_W, VB_W),
                          height: pct(NODE_H, VB_H),
                          animationDelay: `${idx * 0.12}s`,
                        }}
                      >
                        <span className="flex size-7 flex-none items-center justify-center rounded-lg" style={chipStyle(ACCENT)}>
                          <StepIcon size={15} strokeWidth={2} />
                        </span>
                        <span className="truncate text-[12px] font-semibold text-ink">{step.label}</span>
                      </div>
                    );
                  })}
                </>
              );
            })()}
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
