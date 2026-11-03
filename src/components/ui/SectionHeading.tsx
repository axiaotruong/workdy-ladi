import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <h2
        className={`text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold tracking-tight text-balance text-ink`}
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
