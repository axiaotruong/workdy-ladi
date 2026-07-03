"use client";

import { useEffect, useState } from "react";
import { RosterRow } from "@/components/ui/RosterRow";

export function HeroRoster() {
  const [listings, setListings] = useState(142);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setListings((v) => v + 1 + Math.floor(Math.random() * 2));
    }, 3200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-subtle px-5 py-1.5">
      <div className="border-b border-line px-0.5 pb-2 pt-3.5 font-mono text-[10.5px] tracking-wider text-ink-faint uppercase">
        Your team · running now
      </div>
      <RosterRow dotClassName="bg-dot-ready" pulse name="Niche Researcher" role="research" value="live" />
      <RosterRow dotClassName="bg-cat-purple" name="Video Ad Maker" role="design" value="rendering 2/5" />
      <RosterRow
        dotClassName="bg-dot-processing"
        name="Listing Writer"
        role="content"
        value={listings.toString()}
      />
      <RosterRow dotClassName="bg-dot-idle" name="Support Agent" role="cs" value="idle" />
    </div>
  );
}
