import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-line bg-base shadow-[0_1px_3px_rgba(0,0,0,0.08)] ${
        hover
          ? "transition-all duration-150 hover:border-ink-faint/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
