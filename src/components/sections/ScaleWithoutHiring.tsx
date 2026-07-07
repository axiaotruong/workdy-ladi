import { PenTool, Repeat, Moon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ScaleCalculator } from "@/components/sections/ScaleCalculator";

const points = [
  {
    icon: PenTool,
    accent: "ink" as const,
    title: "Design it once",
    description: "Build the workflow once; your AI employees repeat it endlessly.",
  },
  {
    icon: Repeat,
    accent: "ink" as const,
    title: "Change the input, not the effort",
    description: "100 more products isn't 100 more hours of work.",
  },
  {
    icon: Moon,
    accent: "ink" as const,
    title: "Runs while you sleep",
    description: "Trigger it on a schedule, via webhook, or through the API.",
  },
];

export function ScaleWithoutHiring() {
  return (
    <Section bg="subtle">
      <SectionHeading
        eyebrow="Why Workdy"
        title="Scale without hiring"
        description="People cost salary and time, and each hire only does so much. Set a workflow up once and your output stops being capped by headcount."
      />

      <Reveal className="mt-12" delay={0.05}>
        <ScaleCalculator />
      </Reveal>

      <Stagger className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
        {points.map((point) => (
          <StaggerItem key={point.title}>
            <div className="hover-lift group h-full rounded-2xl border border-line bg-base p-5 transition-colors hover:border-ink-faint/50">
              <IconTile icon={point.icon} accent={point.accent} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="mt-3.5 text-[14px] font-semibold text-ink">{point.title}</div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
                {point.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
