import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  bg?: "base" | "subtle";
  className?: string;
  container?: boolean;
};

export function Section({ id, children, bg = "base", className = "", container = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line-subtle ${
        bg === "subtle" ? "bg-subtle" : "bg-base"
      } ${className}`}
    >
      <div className={container ? "mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24" : ""}>
        {children}
      </div>
    </section>
  );
}
