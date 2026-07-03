import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: "✓",
    title: "Human review",
    description: "Approve before anything goes live, with custom review forms.",
  },
  {
    icon: "◆",
    title: "AI Copilot",
    description: "Flags workflow errors and points you straight to the node that needs fixing.",
  },
  {
    icon: "🔑",
    title: "Bring your own API key",
    description:
      "Connect your own OpenAI, Anthropic, or Gemini key. You control which model runs — never locked into one provider.",
  },
];

export function BuiltForTrust() {
  return (
    <section className="border-t border-line-subtle bg-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading title="Stay in control" />

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <FeatureCard key={pillar.title} {...pillar} />
        ))}
      </div>
    </section>
  );
}
