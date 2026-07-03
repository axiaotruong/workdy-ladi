import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2.5 text-[clamp(1.625rem,4vw,2.375rem)] leading-tight font-bold tracking-tight text-balance text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
