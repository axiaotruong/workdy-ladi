import { Card } from "./Card";

type Category = "Research" | "Creative" | "Content" | "Ads";

const categoryStyles: Record<Category, string> = {
  Research: "bg-cat-blue/10 text-cat-blue",
  Creative: "bg-cat-purple/10 text-cat-purple",
  Content: "bg-cat-amber/15 text-amber-700",
  Ads: "bg-cat-green/10 text-green-700",
};

type PipelineCardProps = {
  category: Category;
  title: string;
  description: string;
  steps: string[];
  href: string;
};

export function PipelineCard({ category, title, description, steps, href }: PipelineCardProps) {
  return (
    <Card className="p-5 sm:p-6">
      <span
        className={`mb-3 inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide ${categoryStyles[category]}`}
      >
        {category}
      </span>
      <h3 className="mb-1.5 text-base font-bold tracking-tight text-ink">{title}</h3>
      <p className="mb-3.5 text-[13px] leading-relaxed text-ink-soft">{description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {steps.map((step) => (
          <span
            key={step}
            className="rounded-md border border-line-subtle bg-muted px-2.5 py-1 text-[11px] text-ink-soft"
          >
            {step}
          </span>
        ))}
      </div>
      <a href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-link">
        Use this template <span aria-hidden="true">→</span>
      </a>
    </Card>
  );
}
