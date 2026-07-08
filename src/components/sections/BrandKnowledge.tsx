import { BookOpen, MessageSquareQuote, Brain, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BookOpen,
    title: "Knowledge base",
    description: "Upload PDFs, docs, or index a URL — your AI writes from your own material.",
  },
  {
    icon: MessageSquareQuote,
    title: "Brand voice",
    description: "Output that sounds like your store, not a generic bot.",
  },
  {
    icon: Brain,
    title: "Long-term memory",
    description: "Remembers preferences and context across every conversation.",
  },
];

export function BrandKnowledge() {
  return (
    <Section bg="subtle">
      <SectionHeading
        eyebrow="Output quality"
        title="AI employees that know your brand"
        description="Grounded in your own material, tuned to your voice, with memory that sticks."
      />

      <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        {capabilities.map((cap) => (
          <StaggerItem key={cap.title}>
            <div className="flex h-full items-start gap-3.5 rounded-2xl border border-line bg-base p-5">
              <IconTile icon={cap.icon} size="md" />
              <div>
                <h3 className="text-[15px] font-bold text-ink">{cap.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{cap.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
