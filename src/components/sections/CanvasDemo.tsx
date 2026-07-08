"use client";

import { useEffect, useState } from "react";
import { LogIn, Globe, Cog, Sparkles, FileOutput, Loader2, Check, Zap, User } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const PROMPT = "Find winning products on Etsy";

const PLAN_STEPS = [
  { icon: LogIn, label: "Keyword input", type: "input" as const },
  { icon: Globe, label: "Etsy Search", type: "http" as const },
  { icon: Cog, label: "Rank top 5", type: "code" as const },
  { icon: Sparkles, label: "AI redesign", type: "llm" as const },
  { icon: FileOutput, label: "R&D report", type: "output" as const },
];

const TYPE_META = {
  input: { label: "Input", color: "var(--color-cat-blue)" },
  http: { label: "API", color: "var(--color-cat-green)" },
  code: { label: "Process", color: "var(--color-cat-amber)" },
  llm: { label: "AI", color: "var(--color-cat-purple)" },
  output: { label: "Output", color: "var(--color-cat-pink)" },
};

const chipStyle = (color: string) => ({
  color,
  backgroundColor: `color-mix(in srgb, ${color} 14%, white)`,
});
const pillStyle = (color: string) => ({
  color,
  backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)`,
});

const GEN_PHASES = [
  "Analyzing requirements",
  "Designing graph structure",
  "Wiring data variables",
  "Validating & fixing config",
];

const VB_W = 560;
const VB_H = 340;
const NODE_W = 122;
const NODE_H = 70;
const Y_TOP = 135;
const Y_BOT = 222;

const CANVAS_NODES = PLAN_STEPS.map((step, i) => ({
  ...step,
  cx: 66 + i * 107,
  cy: i % 2 === 0 ? Y_TOP : Y_BOT,
}));
const CANVAS_EDGES = CANVAS_NODES.slice(0, -1).map((node, i) => {
  const next = CANVAS_NODES[i + 1];
  const sx = node.cx + NODE_W / 2;
  const ex = next.cx - NODE_W / 2;
  return `M${sx},${node.cy} C${sx + 44},${node.cy} ${ex - 44},${next.cy} ${ex},${next.cy}`;
});

const PHASES = [
  { key: "type", duration: 1700 },
  { key: "plan", duration: 2800 },
  { key: "click", duration: 450 },
  { key: "generating", duration: 2800 },
  { key: "canvas", duration: 2800 },
  { key: "toast", duration: 2400 },
] as const;

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function CanvasDemo() {
  const reducedMotion = usePrefersReducedMotion();
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % PHASES.length);
    }, PHASES[phaseIndex].duration);
    return () => clearTimeout(timer);
  }, [phaseIndex, reducedMotion]);

  const phase = reducedMotion ? "canvas" : PHASES[phaseIndex].key;
  const chatVisible = phase === "type" || phase === "plan" || phase === "click";
  const generatingVisible = phase === "generating";
  const canvasVisible = phase === "canvas" || phase === "toast";

  return (
    <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl border border-line bg-base shadow-[0_1px_2px_rgba(17,24,39,0.05),0_30px_60px_-30px_rgba(17,24,39,0.35)] sm:aspect-[560/340]">
      {/* faded dot grid + soft ambient glow */}
      <div className="bg-dot-grid mask-radial-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_110%_at_50%_-10%,rgba(139,92,246,0.07),transparent_55%)]"
        aria-hidden="true"
      />

      {/* window toolbar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-line-subtle bg-base/70 px-3.5 py-2.5 backdrop-blur-sm">
        <span className="size-1.5 animate-[dot-pulse_1.8s_ease-in-out_infinite] rounded-full bg-dot-ready" />
        <span className="font-mono text-[10px] tracking-wide text-ink-faint uppercase">AI workflow builder</span>
        <span className="ml-auto flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
        </span>
      </div>

      {chatVisible && (
        <div key="chat" className="animate-fade-in absolute inset-0 flex flex-col justify-start gap-2.5 px-5 pt-12 pb-4">
          <div className="flex justify-end">
            <div className="flex min-w-0 max-w-full items-center gap-2 rounded-2xl rounded-br-sm bg-ink px-3.5 py-2 text-white shadow-[0_4px_12px_-4px_rgba(17,24,39,0.4)]">
              <User size={12} className="flex-none opacity-70" />
              <span
                className="typewriter overflow-hidden whitespace-nowrap font-mono text-[11px]"
                style={{ "--chars": PROMPT.length } as React.CSSProperties}
              >
                {PROMPT}
              </span>
            </div>
          </div>

          <div
            className="animate-fade-in rounded-xl border border-line bg-base/80 p-3 shadow-[0_8px_24px_-12px_rgba(17,24,39,0.2)] backdrop-blur-sm"
            style={{ animationDelay: "1.7s" }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11.5px] font-bold text-ink">
                <Sparkles size={12} className="text-cat-purple" />
                Proposed workflow
              </span>
              <span className="font-mono text-[9.5px] text-ink-faint">{PLAN_STEPS.length} steps</span>
            </div>
            <div className="flex flex-col gap-1">
              {PLAN_STEPS.map((step, i) => {
                const Icon = step.icon;
                const meta = TYPE_META[step.type];
                return (
                  <div
                    key={step.label}
                    className="animate-fade-in flex items-center gap-2 rounded-lg border border-line-subtle bg-base px-2 py-1 shadow-[0_1px_2px_rgba(17,24,39,0.04)]"
                    style={{ animationDelay: `${1.9 + i * 0.18}s` }}
                  >
                    <span className="flex size-5 flex-none items-center justify-center rounded-md" style={chipStyle(meta.color)}>
                      <Icon size={11} strokeWidth={2.2} />
                    </span>
                    <span className="flex-1 truncate text-[10.5px] font-medium text-ink">{step.label}</span>
                    <span
                      className="flex-none rounded-full px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase"
                      style={pillStyle(meta.color)}
                    >
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-2.5 flex justify-end">
              <div
                className={`flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-[10.5px] font-semibold text-white shadow-[0_4px_12px_-4px_rgba(17,24,39,0.5)] transition-transform duration-150 ${
                  phase === "click" ? "scale-95" : "scale-100"
                }`}
              >
                <Zap size={11} />
                Generate workflow
              </div>
            </div>
          </div>
        </div>
      )}

      {generatingVisible && (
        <div key="generating" className="animate-fade-in absolute inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-base/80 px-5 py-4 shadow-[0_16px_40px_-20px_rgba(17,24,39,0.3)] backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-cat-purple" />
              <span className="text-[11.5px] font-bold text-ink">Generating workflow</span>
            </div>
            {GEN_PHASES.map((label, i) => (
              <div
                key={label}
                className="animate-fade-in flex w-full min-w-[220px] items-center gap-2.5"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="relative flex size-5 flex-none items-center justify-center">
                  <Loader2
                    size={14}
                    className="spin-to-check-out absolute text-ink-faint"
                    style={{ animationDelay: `0s, ${i * 0.15}s` } as React.CSSProperties}
                  />
                  <Check
                    size={14}
                    className="spin-to-check-in absolute text-dot-ready"
                    style={{ animationDelay: `${i * 0.15}s` } as React.CSSProperties}
                  />
                </span>
                <span className="text-[11px] text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {canvasVisible && (
        <>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {CANVAS_EDGES.map((d, i) => (
              <g key={d} className="animate-fade-in" style={{ animationDelay: `${i * 0.4 + 0.3}s` }}>
                <path d={d} stroke="var(--color-line)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                <path
                  d={d}
                  className="edge-flow"
                  stroke="var(--color-dot-ready)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </svg>

          {CANVAS_NODES.map((node, i) => {
            const Icon = node.icon;
            const meta = TYPE_META[node.type];
            return (
              <div
                key={node.label}
                className="run-node absolute flex flex-col justify-center gap-1.5 rounded-xl border border-line bg-base px-2.5 shadow-[0_2px_8px_-2px_rgba(17,24,39,0.12),0_1px_2px_rgba(17,24,39,0.05)]"
                style={{
                  left: pct(node.cx - NODE_W / 2, VB_W),
                  top: pct(node.cy - NODE_H / 2, VB_H),
                  width: pct(NODE_W, VB_W),
                  height: pct(NODE_H, VB_H),
                  animation: `fade-in 0.5s cubic-bezier(0.16,1,0.3,1) both, run-glow 5.6s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s, ${i * 0.4 + 0.5}s`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-6 flex-none items-center justify-center rounded-md" style={chipStyle(meta.color)}>
                    <Icon size={13} strokeWidth={2.2} />
                  </span>
                  <span
                    className="rounded-full px-1.5 py-0.5 font-mono text-[7.5px] font-semibold uppercase"
                    style={pillStyle(meta.color)}
                  >
                    {meta.label}
                  </span>
                </div>
                <div className="truncate text-[11px] font-semibold text-ink">{node.label}</div>
              </div>
            );
          })}

          {phase === "toast" && (
            <div className="animate-fade-in absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-dot-ready/40 bg-base px-3 py-1.5 shadow-[0_8px_20px_-6px_rgba(34,197,94,0.35)]">
              <span className="flex size-4 items-center justify-center rounded-full" style={chipStyle("var(--color-dot-ready)")}>
                <Check size={10} strokeWidth={3} />
              </span>
              <span className="text-[10.5px] font-medium text-ink">Workflow created successfully!</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
