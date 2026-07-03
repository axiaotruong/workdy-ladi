"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

const stats = [
  { to: 30, suffix: "+", label: "built-in tools" },
  { to: 19, suffix: "", label: "workflow blocks" },
  { to: 3, suffix: "", label: "top AI models" },
  { to: 6, suffix: "", label: "ready-to-run templates" },
];

function CountUp({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 0 : 1100;
    let start: number | null = null;
    let frame: number;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = duration === 0 ? 1 : Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <div className="text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold tracking-tight tabular-nums text-ink">
      {value}
      {suffix}
    </div>
  );
}

export function CapabilityStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-px border-y border-line-subtle bg-line-subtle sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="bg-subtle px-4 py-6 text-center sm:py-7">
          <CountUp to={stat.to} suffix={stat.suffix} inView={inView} />
          <div className="mt-1.5 text-[12.5px] text-ink-soft">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
