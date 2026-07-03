import { Card } from "./Card";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-5 sm:p-6">
      <span
        className="mb-3.5 flex size-9 items-center justify-center rounded-[9px] bg-muted text-base"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="text-[14.5px] font-bold text-ink">{title}</div>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{description}</p>
    </Card>
  );
}
