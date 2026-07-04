import { Search, Clapperboard, PenLine, Megaphone, ChevronRight, ArrowRight, type LucideIcon } from "lucide-react";
import { Card } from "./Card";

type Category = "Research" | "Creative" | "Content" | "Ads";

const categoryConfig: Record<Category, { icon: LucideIcon; badge: string; iconWrap: string }> = {
  Research: { icon: Search, badge: "bg-cat-blue/10 text-cat-blue", iconWrap: "bg-cat-blue/10 text-cat-blue" },
  Creative: { icon: Clapperboard, badge: "bg-cat-purple/10 text-cat-purple", iconWrap: "bg-cat-purple/10 text-cat-purple" },
  Content: { icon: PenLine, badge: "bg-cat-amber/15 text-amber-600", iconWrap: "bg-cat-amber/15 text-amber-600" },
  Ads: { icon: Megaphone, badge: "bg-cat-green/10 text-green-600", iconWrap: "bg-cat-green/10 text-green-600" },
};

type PipelineCardProps = {
  category: Category;
  title: string;
  description: string;
  steps: string[];
  href: string;
};

export function PipelineCard({ category, title, description, steps, href }: PipelineCardProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <Card className="group flex h-full flex-col p-6">
      <div className="flex items-center gap-3">
        <span className={`flex size-9 items-center justify-center rounded-xl ${config.iconWrap}`}>
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <span className={`rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide ${config.badge}`}>
          {category}
        </span>
      </div>

      <h3 className="mt-4 text-[17px] font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {steps.map((step, index) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="rounded-lg border border-line-subtle bg-subtle px-2.5 py-1.5 text-[11.5px] font-medium text-ink-soft">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <ChevronRight size={13} className="text-ink-faint" strokeWidth={2.5} />
            ) : null}
          </span>
        ))}
      </div>

      <a
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink transition-colors hover:text-link"
      >
        Use this template
        <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
      </a>
    </Card>
  );
}
