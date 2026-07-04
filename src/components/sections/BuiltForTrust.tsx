import { ShieldCheck, Radar, KeyRound } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    accent: "green" as const,
    title: "Human review",
    description: "Approve before anything goes live, with custom review forms.",
  },
  {
    icon: Radar,
    accent: "blue" as const,
    title: "AI Copilot",
    description: "Flags workflow errors and points you straight to the node that needs fixing.",
  },
  {
    icon: KeyRound,
    accent: "amber" as const,
    title: "Bring your own API key",
    description:
      "Connect your own OpenAI, Anthropic, or Gemini key. You control which model runs — never locked into one provider.",
  },
];

export function BuiltForTrust() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Peace of mind"
        title="Stay in control"
        description="You hand off the busywork — not the decisions. Workdy keeps you in the loop at every step."
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <FeatureCard {...pillar} className="h-full" />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
