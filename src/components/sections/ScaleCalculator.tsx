"use client";

import { useState } from "react";

const MIN = 10;
const MAX = 500;
const MINUTES_SAVED_PER_PRODUCT = 12;

export function ScaleCalculator() {
  const [products, setProducts] = useState(120);
  const hoursSaved = Math.round((products * MINUTES_SAVED_PER_PRODUCT) / 60);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-subtle px-6 py-7 sm:px-8">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs tracking-wide text-ink-faint uppercase">
          Products / month
        </span>
        <span className="text-[15px] font-bold tabular-nums text-ink">{products} products</span>
      </div>

      <input
        type="range"
        min={MIN}
        max={MAX}
        step={10}
        value={products}
        onChange={(e) => setProducts(Number(e.target.value))}
        aria-label="Products per month"
        className="mt-3.5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-ink"
      />
      <div className="mt-2.5 flex justify-between font-mono text-[11.5px] text-ink-faint">
        <span>{MIN}</span>
        <span>250</span>
        <span>{MAX}</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
        <div>
          <div className="text-[2.125rem] leading-none font-bold tabular-nums text-ink">
            {products}
          </div>
          <div className="mt-1.5 text-[13px] text-ink-soft">Videos your AI team creates</div>
        </div>
        <div>
          <div className="text-[2.125rem] leading-none font-bold tabular-nums text-ink">
            {hoursSaved}
          </div>
          <div className="mt-1.5 text-[13px] text-ink-soft">Hours you save this month</div>
          <div className="mt-0.5 text-[11px] text-ink-faint italic">
            *Rough estimate, ~12 min saved per product.
          </div>
        </div>
      </div>

      <span className="mt-4 inline-block rounded-md bg-muted px-2.5 py-1.5 text-xs text-ink-soft">
        your effort: unchanged
      </span>
    </div>
  );
}
