import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScaleCalculator } from "@/components/sections/ScaleCalculator";

const points = [
  {
    title: "Design it once",
    description: "Build the workflow once; your AI employees repeat it endlessly.",
  },
  {
    title: "Change the input, not the effort",
    description: "100 more products isn't 100 more hours of work.",
  },
  {
    title: "Runs while you sleep",
    description: "Trigger it on a schedule, via webhook, or through the API.",
  },
];

export function ScaleWithoutHiring() {
  return (
    <section className="border-t border-line-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Key feature"
        title="Scale without hiring"
        description="Hiring people costs salary and time. AI employees: run 1 or 100, same effort."
      />

      <div className="mt-10">
        <ScaleCalculator />
      </div>

      <div className="mx-auto mt-6 grid max-w-4xl gap-3.5 sm:grid-cols-3">
        {points.map((point) => (
          <Card key={point.title} hover={false} className="p-5">
            <div className="text-[13.5px] font-semibold text-ink">{point.title}</div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
              {point.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
