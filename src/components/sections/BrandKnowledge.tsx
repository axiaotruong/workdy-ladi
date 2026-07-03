import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "▥",
    title: "Knowledge base",
    description:
      "Upload PDFs, docs, or index a URL — your AI employees write from your own material.",
  },
  {
    icon: "✎",
    title: "Brand voice",
    description: "Output that sounds like your store, not a generic bot.",
  },
  {
    icon: "∞",
    title: "Long-term memory",
    description: "Remembers preferences, brand details, and context across conversations.",
  },
];

export function BrandKnowledge() {
  return (
    <section className="border-t border-line-subtle bg-subtle px-6 py-16 sm:px-8 sm:py-20">
      <SectionHeading title="AI employees that know your brand" />

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
