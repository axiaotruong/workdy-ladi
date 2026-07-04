import type { LucideIcon } from "lucide-react";

type Accent = "ink" | "blue" | "purple" | "amber" | "green" | "pink";

const accentStyles: Record<Accent, string> = {
  ink: "bg-ink/5 text-ink ring-ink/10",
  blue: "bg-cat-blue/10 text-cat-blue ring-cat-blue/15",
  purple: "bg-cat-purple/10 text-cat-purple ring-cat-purple/15",
  amber: "bg-cat-amber/10 text-amber-600 ring-cat-amber/20",
  green: "bg-cat-green/10 text-green-600 ring-cat-green/15",
  pink: "bg-cat-pink/10 text-cat-pink ring-cat-pink/15",
};

const sizeStyles = {
  md: "size-10 rounded-xl [&>svg]:size-5",
  lg: "size-12 rounded-2xl [&>svg]:size-[22px]",
};

type IconTileProps = {
  icon: LucideIcon;
  accent?: Accent;
  size?: "md" | "lg";
  className?: string;
};

export function IconTile({ icon: Icon, accent = "ink", size = "md", className = "" }: IconTileProps) {
  return (
    <span
      className={`flex flex-none items-center justify-center ring-1 ring-inset ${accentStyles[accent]} ${sizeStyles[size]} ${className}`}
      aria-hidden="true"
    >
      <Icon strokeWidth={1.75} />
    </span>
  );
}
