import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-base shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.10)] ${
        hover ? "hover-lift hover:border-ink-faint/50 hover:shadow-[0_1px_2px_rgba(17,24,39,0.05),0_18px_40px_-16px_rgba(17,24,39,0.20)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
