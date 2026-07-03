import { SectionHeading } from "@/components/ui/SectionHeading";
import { CanvasDemo } from "@/components/sections/CanvasDemo";

const steps = [
  {
    title: "Hire an AI employee",
    description: "Pick a role: Research, Design, Listings, or Support.",
  },
  {
    title: "Connect it to a workflow",
    description: "Drag and drop, or start from a template.",
  },
  {
    title: "Let it run",
    description: "On demand, on a schedule, or triggered by your store.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line-subtle bg-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading title="How it works" />

      <div className="mx-auto mt-10 grid max-w-4xl items-center gap-9 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-3.5">
              <span className="flex size-7 flex-none items-center justify-center rounded-full bg-muted text-[12.5px] font-bold tabular-nums text-ink">
                {index + 1}
              </span>
              <div>
                <div className="text-[14.5px] font-semibold text-ink">{step.title}</div>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <CanvasDemo />
      </div>
    </section>
  );
}
