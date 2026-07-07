"use client";

import { useState } from "react";
import { MoveDown } from "lucide-react";

const MIN = 10;
const MAX = 500;
const MINUTES_PER_PRODUCT = 12; // manual minutes handled per product without automation
const WORKDY_FLAT_HOURS = (MIN * MINUTES_PER_PRODUCT) / 60; // pinned to the manual hours at MIN, so both bars start equal
const MAX_HOURS = (MAX * MINUTES_PER_PRODUCT) / 60;
const MIN_BAR_PCT = 7; // visual floor so small bars stay legible — the number above the bar is the real value

function hoursForProducts(products: number) {
  return (products * MINUTES_PER_PRODUCT) / 60;
}

export function ScaleCalculator() {
  const [products, setProducts] = useState(120);

  const manualHours = Math.round(hoursForProducts(products));
  const workdyHours = Math.round(WORKDY_FLAT_HOURS);
  const gapHours = Math.max(0, manualHours - workdyHours);
  const fillPct = ((products - MIN) / (MAX - MIN)) * 100;

  const manualBarPct = Math.max(MIN_BAR_PCT, (manualHours / MAX_HOURS) * 100);
  const workdyBarPct = Math.max(MIN_BAR_PCT, (WORKDY_FLAT_HOURS / MAX_HOURS) * 100);

  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 10%, rgba(239,68,68,0.12), transparent 70%), radial-gradient(50% 60% at 85% 90%, rgba(139,92,246,0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-line bg-base p-7 shadow-[0_1px_2px_rgba(17,24,39,0.05),0_30px_60px_-30px_rgba(17,24,39,0.28)] sm:p-9">
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

        {/* Bar comparison: manual hours needed vs. your effort with Workdy */}
        <div className="mt-9 grid grid-cols-[1fr_auto_1fr] items-end gap-3 border-t border-line pt-8 sm:gap-5">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[1.7rem] font-bold tabular text-ink-soft">{manualHours}h</span>
            <div className="flex h-36 w-full max-w-24 items-end justify-center rounded-t-lg bg-ink/[0.05] sm:h-44">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-[#9ca3af] to-[#d1d5db] transition-[height] duration-200 ease-out"
                style={{ height: `${manualBarPct}%` }}
              />
            </div>
            <span className="mt-3 text-center text-[12.5px] leading-snug text-ink-soft">
              Doing it
              <br />
              manually
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 self-center pb-11">
            <MoveDown size={16} className="text-ink-faint" strokeWidth={2.25} />
            <span className="whitespace-nowrap rounded-full bg-cat-purple/10 px-2.5 py-1 text-[11px] font-semibold text-cat-purple">
              &minus;{gapHours}h
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-2 text-[1.7rem] font-bold tabular text-cat-purple">{workdyHours}h</span>
            <div className="flex h-36 w-full max-w-24 items-end justify-center rounded-t-lg bg-cat-purple/[0.08] sm:h-44">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-cat-purple to-[#a78bfa] transition-[height] duration-200 ease-out"
                style={{ height: `${workdyBarPct}%` }}
              />
            </div>
            <span className="mt-3 text-center text-[12.5px] leading-snug text-ink-soft">
              Automated
              <br />
              with Workdy
            </span>
          </div>
        </div>

        <div className="mt-7 rounded-xl border border-cat-purple/20 bg-cat-purple/[0.06] px-4 py-3 text-center text-[13px] text-ink-soft">
          That&apos;s <span className="font-bold text-cat-purple">{gapHours} hours a month</span> back in your
          pocket — and the gap only widens as you add more products.
        </div>
      </div>
    </div>
  );
}
