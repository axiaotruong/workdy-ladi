"use client";

import { useState } from "react";
import { Video, Clock, Minus } from "lucide-react";

const MIN = 10;
const MAX = 500;
const MINUTES_SAVED_PER_PRODUCT = 12;

export function ScaleCalculator() {
  const [products, setProducts] = useState(120);
  const hoursSaved = Math.round((products * MINUTES_SAVED_PER_PRODUCT) / 60);
  const fillPct = ((products - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-line bg-base p-7 shadow-[0_1px_2px_rgba(17,24,39,0.05),0_30px_60px_-30px_rgba(17,24,39,0.25)] sm:p-9">
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      />

      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[11px] tracking-wide text-ink-faint uppercase">
          Products / month
        </span>
        <span className="text-lg font-bold tabular text-ink">
          {products} <span className="text-sm font-medium text-ink-soft">products</span>
        </span>
      </div>

      <div className="relative mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-ink transition-[width] duration-150 ease-out"
            style={{ width: `${fillPct}%` }}
          />
        </div>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={products}
          onChange={(e) => setProducts(Number(e.target.value))}
          aria-label="Products per month"
          className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ink [&::-moz-range-thumb]:bg-base [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ink [&::-webkit-slider-thumb]:bg-base [&::-webkit-slider-thumb]:shadow-md"
        />
      </div>
      <div className="mt-2.5 flex justify-between font-mono text-[11px] text-ink-faint">
        <span>10</span>
        <span>250</span>
        <span>500</span>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
        <Metric icon={Video} accent="text-cat-purple bg-cat-purple/10" value={products} label="Videos your AI team creates" />
        <Metric
          icon={Clock}
          accent="text-green-600 bg-cat-green/10"
          value={hoursSaved}
          label="Hours you save this month"
          note="*Rough estimate, ~12 min saved per product."
        />
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl bg-muted px-3.5 py-2.5">
        <Minus size={15} className="text-ink-faint" strokeWidth={2.5} />
        <span className="text-[13px] text-ink-soft">
          Your effort: <span className="font-semibold text-ink">unchanged</span>
        </span>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  accent,
  value,
  label,
  note,
}: {
  icon: typeof Video;
  accent: string;
  value: number;
  label: string;
  note?: string;
}) {
  return (
    <div>
      <span className={`mb-2.5 flex size-8 items-center justify-center rounded-lg ${accent}`}>
        <Icon size={16} strokeWidth={2} />
      </span>
      <div className="text-[2.25rem] leading-none font-bold tabular text-ink">{value}</div>
      <div className="mt-2 text-[13px] leading-snug text-ink-soft">{label}</div>
      {note ? <div className="mt-1 text-[11px] text-ink-faint italic">{note}</div> : null}
    </div>
  );
}
