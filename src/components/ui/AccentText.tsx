import type { ReactNode } from "react";

export function AccentText({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="absolute inset-x-0 bottom-1 -z-10 h-[0.35em] rounded-sm bg-cat-amber/25" />
      {children}
    </span>
  );
}
