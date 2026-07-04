"use client";

import { UserPlus, Workflow, Play } from "lucide-react";

const VB_W = 560;
const VB_H = 200;
const NODE_W = 150;
const NODE_H = 64;

const nodes = [
  { kind: "Agent", name: "Niche Researcher", icon: UserPlus, cx: 95, cy: 100, delay: 0 },
  { kind: "Workflow", name: "Find a winning niche", icon: Workflow, cx: 285, cy: 100, delay: 1.8 },
  { kind: "Run", name: "Publish report", icon: Play, cx: 475, cy: 100, delay: 3.6 },
];

const edges = ["M170,100 L210,100", "M360,100 L400,100"];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function CanvasDemo() {
  return (
    <div className="bg-dot-grid relative aspect-[560/200] w-full overflow-hidden rounded-2xl border border-line bg-base shadow-[0_1px_2px_rgba(17,24,39,0.05),0_20px_40px_-24px_rgba(17,24,39,0.25)]">
      <div className="absolute left-3.5 top-3 z-10 flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-ink-faint uppercase">
        <span className="size-1.5 rounded-full bg-dot-ready" />
        live canvas
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${VB_W} ${VB_H}`} fill="none" aria-hidden="true">
        {edges.map((d) => (
          <g key={d}>
            <path d={d} stroke="var(--color-line)" strokeWidth={2} />
            <path d={d} className="edge-flow" stroke="var(--color-dot-ready)" strokeWidth={2} strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.name}
            className="run-node absolute flex flex-col justify-center rounded-xl border border-line bg-base px-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)]"
            style={{
              left: pct(node.cx - NODE_W / 2, VB_W),
              top: pct(node.cy - NODE_H / 2, VB_H),
              width: pct(NODE_W, VB_W),
              height: pct(NODE_H, VB_H),
              animationDelay: `${node.delay}s`,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="flex size-6 flex-none items-center justify-center rounded-md bg-muted text-ink-soft">
                <Icon size={13} strokeWidth={2} />
              </span>
              <span className="font-mono text-[8.5px] tracking-wide text-ink-faint uppercase">{node.kind}</span>
            </div>
            <div className="mt-1 truncate text-[11.5px] font-semibold text-ink">{node.name}</div>
          </div>
        );
      })}
    </div>
  );
}
