import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "▤",
    title: "Departments",
    description:
      "Marketing / SEO / Sales / Support / Design, each with its own analytics (conversations, tokens, tool calls, satisfaction).",
  },
  {
    icon: "◎",
    title: "Multi-model",
    description: "Pick GPT-4o, Claude, or Gemini for each employee based on the job.",
  },
];

export function TeamsByRole() {
  return (
    <section className="border-t border-line-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading title="A team for every department" />

      <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
