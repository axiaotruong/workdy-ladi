import { UserPlus, Workflow, Play } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Reveal } from "@/components/ui/Reveal";
import { CanvasDemo } from "@/components/sections/CanvasDemo";

const steps = [
  {
    icon: UserPlus,
    accent: "blue" as const,
    title: "Hire an AI employee",
    description: "Pick a role: Research, Design, Listings, or Support.",
  },
  {
    icon: Workflow,
    accent: "purple" as const,
    title: "Connect it to a workflow",
    description: "Drag and drop, or start from a template.",
  },
  {
    icon: Play,
    accent: "amber" as const,
    title: "Let it run",
    description: "On demand, on a schedule, or triggered by your store.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="From idea to running workflow in 3 steps"
        description="No code. Just describe the job, connect the steps, and let your AI team run it."
      />

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
        <ol className="relative flex flex-col gap-8">
          <span className="absolute left-5 top-3 bottom-3 w-px bg-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.08} className="relative flex gap-4">
              <div className="relative z-10 bg-base">
                <IconTile icon={step.icon} accent={step.accent} size="lg" />
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold text-ink-faint">
                    0{index + 1}
                  </span>
                  <span className="text-[15.5px] font-bold text-ink">{step.title}</span>
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <CanvasDemo />
        </Reveal>
      </div>
    </Section>
  );
}
