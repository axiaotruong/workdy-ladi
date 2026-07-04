import { Wrench, Zap, Webhook, History } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const publishFeatures = [
  {
    icon: Wrench,
    accent: "blue" as const,
    title: "As a shared tool",
    description:
      "Turn a workflow into a skill other AI employees can call — build once, reuse everywhere.",
  },
  {
    icon: Zap,
    accent: "amber" as const,
    title: "As an API",
    description:
      "Get an API key, rate limits, and auto-generated docs in curl, Python, and JavaScript.",
  },
  {
    icon: Webhook,
    accent: "purple" as const,
    title: "As a webhook",
    description:
      "Trigger by webhook or on a schedule, and run async with streaming, stop, and status support.",
  },
  {
    icon: History,
    accent: "green" as const,
    title: "With versioning",
    description:
      "Publishing freezes a version and keeps history — edit safely without breaking what's live.",
  },
];

export function PublishAndDeploy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ship it"
        eyebrowAccent="amber"
        title="Publish once, use everywhere"
        description="Build a workflow, then ship it however you need — as a shared tool, an API, or a webhook, with versions kept safe."
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
        {publishFeatures.map((feature) => (
          <StaggerItem key={feature.title}>
            <FeatureCard {...feature} className="h-full" />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
