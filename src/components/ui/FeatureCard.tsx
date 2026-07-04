import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";
import { IconTile } from "./IconTile";

type Accent = "ink" | "blue" | "purple" | "amber" | "green" | "pink";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
  className?: string;
};

export function FeatureCard({ icon, title, description, accent = "ink", className = "" }: FeatureCardProps) {
  return (
    <Card className={`group p-6 ${className}`}>
      <IconTile icon={icon} accent={accent} size="lg" className="mb-4" />
      <div className="text-[15px] font-bold text-ink">{title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{description}</p>
    </Card>
  );
}
