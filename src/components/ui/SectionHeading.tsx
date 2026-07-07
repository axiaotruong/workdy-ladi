import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Accent = "ink" | "blue" | "purple" | "amber" | "green";

const eyebrowAccent: Record<Accent, string> = {
  ink: "text-ink-soft ring-line",
  blue: "text-cat-blue ring-cat-blue/20",
  purple: "text-cat-purple ring-cat-purple/20",
  amber: "text-amber-600 ring-cat-amber/25",
  green: "text-green-600 ring-cat-green/20",
};

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowAccent?: Accent;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowAccent: accent = "ink",
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex items-center rounded-full bg-base px-3 py-1 text-[11px] font-semibold tracking-wide uppercase ring-1 ring-inset ${eyebrowAccent[accent]}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold tracking-tight text-balance text-ink ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[15.5px] leading-relaxed text-pretty text-ink-soft ${
            align === "center" ? "mx-auto max-w-xl" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
