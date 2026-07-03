"use client";

import { useInView } from "@/lib/useInView";

const nodes = [
  { kind: "Trigger", name: "New order", left: "1.5%", top: "58%", delay: "0s" },
  { kind: "Tool", name: "Scan Market Demand", left: "29%", top: "12.5%", delay: "0.5s" },
  { kind: "Tool", name: "Write Article", left: "56%", top: "58%", delay: "1s" },
  { kind: "Action", name: "Publish", left: "81%", top: "12.5%", delay: "1.5s" },
];

const paths = [
  { d: "M130,136 C158,136 158,50 185,50", delay: "0.35s" },
  { d: "M305,50 C333,50 333,136 360,136", delay: "0.85s" },
  { d: "M480,136 C500,136 500,50 520,50", delay: "1.35s" },
];

export function CanvasDemo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <div
      ref={ref}
      className="relative aspect-[640/190] w-full min-h-[150px] max-w-xl overflow-hidden rounded-2xl border border-line bg-base"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 190"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <path
            key={path.d}
            d={path.d}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={2}
            strokeDasharray={150}
            style={
              inView
                ? { animation: `demo-line 0.6s ease-out ${path.delay} both` }
                : { strokeDashoffset: 150, opacity: 0 }
            }
          />
        ))}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.name}
          className="absolute flex h-[27%] w-[19%] min-w-[92px] flex-col items-center justify-center rounded-[10px] border border-line bg-base px-2 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          style={{
            left: node.left,
            top: node.top,
            ...(inView
              ? { animation: `demo-node 1s ease-out ${node.delay} both` }
              : { opacity: 0 }),
          }}
        >
          <span className="font-mono text-[8.5px] tracking-wide text-ink-faint uppercase">
            {node.kind}
          </span>
          <span className="text-[11px] leading-tight font-semibold text-ink">{node.name}</span>
        </div>
      ))}

      <span className="absolute bottom-2.5 left-3.5 font-mono text-[10px] tracking-wide text-ink-faint uppercase">
        Live canvas preview
      </span>
    </div>
  );
}
